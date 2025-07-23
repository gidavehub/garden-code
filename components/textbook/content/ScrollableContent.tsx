// @/components/textbook/content/ScrollableContent.tsx
import { Spacing, Typography } from '@/constants/theme';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants/theme';

const INITIAL_CONTENT_HEIGHT = 550; // Increased height

type Props = {
  title: string;
  content: string;
  isFullScreen: boolean;
  onPress: () => void;
};

export function ScrollableContent({ title, content, isFullScreen, onPress }: Props) {
  return (
    <Pressable onPress={onPress} disabled={isFullScreen}>
      <View style={[styles.wrapper, { height: isFullScreen ? '100%' : INITIAL_CONTENT_HEIGHT }]}>
        <Text style={[Typography.title2, styles.title]}>{title}</Text>
        <ScrollView nestedScrollEnabled style={styles.scrollView} showsVerticalScrollIndicator={!isFullScreen}>
            <Text style={[Typography.body, { paddingBottom: Spacing.xl }]}>{content || 'No content available for this section.'}</Text>
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
  scrollView: {
    paddingHorizontal: Spacing.lg,
  },
});