import { HighlightedText } from '@/components/common/HighLightedText'; // Import the new component
import { Colors, Spacing, Typography } from '@/constants/theme';
import React, { useEffect, useRef } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, UIManager, View } from 'react-native';

const INITIAL_CONTENT_HEIGHT = 550;

type Props = {
  title: string;
  content: string;
  isFullScreen: boolean;
  onPress: () => void;
  highlightTerm?: string; // Prop to receive the search term
};

export function ScrollableContent({ title, content, isFullScreen, onPress, highlightTerm }: Props) {
  const scrollRef = useRef<ScrollView>(null);
  const wrapperRef = useRef<View>(null);

  useEffect(() => {
    // Enable LayoutAnimation for Android
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }

    // Auto-scroll logic
    if (highlightTerm && content && wrapperRef.current && scrollRef.current) {
      // Find the position of the first occurrence of the term
      const firstMatchIndex = content.toLowerCase().indexOf(highlightTerm.toLowerCase());
      if (firstMatchIndex !== -1) {
        // Estimate the scroll position as a ratio of the content length
        const ratio = firstMatchIndex / content.length;
        
        // Give a short delay for content to render before measuring
        setTimeout(() => {
          scrollRef.current?.measure((x, y, width, height) => {
             const scrollToY = height * ratio - 50; // Scroll slightly above the target
             scrollRef.current?.scrollTo({ y: scrollToY > 0 ? scrollToY : 0, animated: true });
          });
        }, 300);
      }
    }
  }, [highlightTerm, content]);

  return (
    <Pressable onPress={onPress} disabled={isFullScreen}>
      <View style={[styles.wrapper, { height: isFullScreen ? '100%' : INITIAL_CONTENT_HEIGHT }]}>
        <Text style={[Typography.title2, styles.title]}>{title}</Text>
        <ScrollView ref={scrollRef} nestedScrollEnabled showsVerticalScrollIndicator={!isFullScreen} contentContainerStyle={styles.scrollViewContent}>
          <View ref={wrapperRef}>
            <HighlightedText text={content} term={highlightTerm || ''} />
          </View>
        </ScrollView>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 16,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  title: {
    paddingTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  scrollViewContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl * 2, // Extra padding at the bottom
  },
});