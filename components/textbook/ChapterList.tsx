import { Colors, Spacing, Typography } from '@/constants/theme';
import { Chapter, Textbook } from '@/types/textbook';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ChapterCard } from './ChapterCard';

type Props = {
  textbook: Textbook;
  onSelectChapter: (index: number) => void;
};

export function ChapterList({ textbook, onSelectChapter }: Props) {
  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        source={typeof textbook.coverImage === 'number' ? textbook.coverImage : { uri: textbook.coverImage.uri }}
        style={styles.coverImage}
      />
      <Text style={[Typography.title1, { textAlign: 'center' }]}>{textbook.name}</Text>
      <Text style={[Typography.title3, { color: 'gray', textAlign: 'center' }]}>
        {textbook.author}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* The new, intelligent floating header */}

      <FlatList<Chapter>
        data={textbook.data.chapters}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={ListHeader}
        renderItem={({ item, index }) => (
          <ChapterCard
            chapter={item}
            index={index}
            onPress={() => onSelectChapter(index)}
          />
        )}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: Spacing.lg,
    paddingHorizontal: Spacing.md,
  },
  coverImage: {
    width: 150,
    height: 225,
    borderRadius: 12,
    marginBottom: Spacing.md,
    elevation: 5,
    shadowColor: '#000',
  },
  listContentContainer: {
    paddingHorizontal: Spacing.md,
    // This padding pushes the list content down below the floating header
    paddingTop: 90,
    paddingBottom: Spacing.xl,
  },
});