import { Colors, Spacing, Typography } from '@/constants/theme';
import { Chapter, Section } from '@/types/textbook';
import { AntDesign } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SectionCard } from './SectionCard';

// Local sub-component for video thumbnails
const ChapterVideoThumbnail = ({ url, index }: { url: string; index: number }) => {
  const videoId = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:\S+)?/)?.[1];
  if (!videoId) return null;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <MotiPressable
      style={styles.videoContainer}
      onPress={() => Linking.openURL(url)}
      from={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 100 }}
    >
      <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
      <View style={styles.playIconContainer}>
        <AntDesign name="play" size={28} color={Colors.white} />
      </View>
    </MotiPressable>
  );
};

export function SectionList({ chapter, onSelectSection }: { chapter: Chapter; onSelectSection: (index: number) => void; }) {
  const hasVideos = chapter.video && chapter.video.length > 0;

  const ListHeader = () => (
    <>
      {hasVideos && (
        <View style={{ marginBottom: Spacing.lg }}>
          <Text style={[Typography.title3, { marginBottom: Spacing.sm }]}>Key Videos</Text>
          <FlatList
            data={chapter.video}
            renderItem={({ item, index }) => <ChapterVideoThumbnail url={item} index={index} />}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: Spacing.lg }}
          />
        </View>
      )}
      <Text style={[Typography.title3, { marginBottom: Spacing.sm }]}>Sections</Text>
    </>
  );

  return (
    <View style={styles.container}>
      {/* The new, intelligent floating header */}
      
      <FlatList<Section>
        data={chapter.sections}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={ListHeader}
        renderItem={({ item, index }) => {
          const chapterNumber = chapter.name.split(' ')[1]?.replace(':', '') || (index + 1);
          return (
            <SectionCard
              section={item}
              sectionNumber={`${chapterNumber}.${index + 1}`}
              onPress={() => onSelectSection(index)}
              index={index}
            />
          );
        }}
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
  listContentContainer: {
    paddingHorizontal: Spacing.md,
    // This padding pushes the list content down below the floating header
    paddingTop: 90,
    paddingBottom: Spacing.xl,
  },
  videoContainer: {
    width: 200,
    height: 110,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: Spacing.md,
    backgroundColor: Colors.lightGray,
    elevation: 3,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  playIconContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});