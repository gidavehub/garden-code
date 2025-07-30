import { Colors, Spacing, Typography } from '@/constants/theme';
import { Chapter } from '@/types/textbook';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

type Props = {
  chapter: Chapter;
  index: number;
  onPress: () => void;
};

export function ChapterCard({ chapter, index, onPress }: Props) {
  return (
    <MotiPressable
      onPress={onPress}
      style={styles.container}
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 300, delay: index * 100 }}
    >
      <ImageBackground
        source={{ uri: chapter.image }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.gradient}>
          <View style={styles.content}>
            <Text style={styles.chapterNumber}>CHAPTER {index + 1}</Text>
            <Text style={styles.chapterName} numberOfLines={2}>
              {chapter.name}
            </Text>
          </View>
          <AntDesign name="rightcircle" size={32} color={Colors.white} style={styles.icon} />
        </LinearGradient>
      </ImageBackground>
    </MotiPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: Spacing.md,
    elevation: 5,
    backgroundColor: Colors.lightGray, // Fallback background color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    flex: 1,
    padding: Spacing.md,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: Spacing.xl, // Space for the icon
  },
  chapterNumber: {
    ...Typography.caption,
    color: Colors.lightGray,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  chapterName: {
    ...Typography.title3,
    color: Colors.white,
    lineHeight: 26,
  },
  icon: {
    position: 'absolute',
    bottom: Spacing.md,
    right: Spacing.md,
  },
});