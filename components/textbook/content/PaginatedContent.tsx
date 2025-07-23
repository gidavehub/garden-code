// @/components/textbook/content/PaginatedContent.tsx
import { Spacing, Typography } from '@/constants/theme';
import { Feather } from '@expo/vector-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    LayoutAnimation,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewToken,
} from 'react-native';
import { Colors } from '../../../constants/theme';

const INITIAL_PAGE_HEIGHT = 500; // Increased height
const FOOTER_HEIGHT = 50;
const CHARACTERS_PER_PAGE = 800; // Calibrate this value for best fit on average screens

type Props = {
  title: string;
  content: string;
  containerWidth: number;
  isFullScreen: boolean;
  onPress: () => void;
};

export function PaginatedContent({ title, content, containerWidth, isFullScreen, onPress }: Props) {
  const [pages, setPages] = useState<string[]>([]);
  const [isPaginating, setIsPaginating] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Character-count based pagination for more accurate pages
  const paginateContent = useCallback(() => {
    if (!content) return;
    setIsPaginating(true);
    const newPages: string[] = [];
    let remainingContent = content;

    while (remainingContent.length > 0) {
      if (remainingContent.length <= CHARACTERS_PER_PAGE) {
        newPages.push(remainingContent);
        break;
      }
      
      let breakPoint = remainingContent.lastIndexOf(' ', CHARACTERS_PER_PAGE);
      if (breakPoint === -1) breakPoint = CHARACTERS_PER_PAGE;

      newPages.push(remainingContent.substring(0, breakPoint));
      remainingContent = remainingContent.substring(breakPoint).trim();
    }

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPages(newPages);
    setIsPaginating(false);
  }, [content]);

  useEffect(() => {
    paginateContent();
  }, [paginateContent]);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentPage(viewableItems[0].index ?? 0);
    }
  }).current;

  const handleNav = (direction: 'next' | 'prev') => {
    const nextIndex = direction === 'next' ? currentPage + 1 : currentPage - 1;
    if (nextIndex >= 0 && nextIndex < pages.length) {
      flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
    }
  };
  
  const PageItem = ({ item, index }: { item: string, index: number}) => (
    <View style={[styles.page, { width: containerWidth }]}>
        {index === 0 && <Text style={[Typography.title2, styles.title]}>{title}</Text>}
        <Text style={Typography.body}>{item}</Text>
    </View>
  );

  const finalHeight = isFullScreen ? '100%' : INITIAL_PAGE_HEIGHT + FOOTER_HEIGHT;

  if (isPaginating) {
    return (
      <View style={[styles.loaderContainer, { height: finalHeight }]}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <Pressable onPress={onPress} disabled={isFullScreen}>
      <View style={[styles.container, { height: finalHeight }]}>
        <FlatList
          ref={flatListRef}
          data={pages}
          horizontal
          pagingEnabled
          scrollEnabled={isFullScreen} // Only allow swipe navigation in fullscreen
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => `page-${index}`}
          renderItem={({ item, index }) => <PageItem item={item} index={index}/>}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
          getItemLayout={(_, index) => ({
            length: containerWidth,
            offset: containerWidth * index,
            index,
          })}
        />
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => handleNav('prev')} disabled={currentPage === 0}>
            <Feather name="arrow-left-circle" size={28} color={currentPage === 0 ? "gray" : Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.pageIndicator}>
            {currentPage + 1} / {pages.length}
          </Text>
          <TouchableOpacity onPress={() => handleNav('next')} disabled={currentPage === pages.length - 1}>
            <Feather name="arrow-right-circle" size={28} color={currentPage === pages.length - 1 ? "gray" : Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  loaderContainer: { justifyContent: 'center', alignItems: 'center' },
  container: { 
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.white,
    overflow: 'hidden'
  },
  page: { 
    padding: Spacing.lg,
  },
  title: {
    marginBottom: Spacing.md,
  },
  footer: {
    height: FOOTER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
  },
  pageIndicator: { ...Typography.body, color: "darkGray", fontWeight: '600' },
});