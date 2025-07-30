import { Colors, GlobalStyles, Spacing, Typography } from '@/constants/theme';
import { Section } from '@/types/textbook';
import { AntDesign } from '@expo/vector-icons';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  section: Section;
  sectionNumber: string; // e.g., "1.1", "1.2"
  onPress: () => void;
  index: number;
};

export function SectionCard({ section, sectionNumber, onPress, index }: Props) {
  const hasVideo = !!section.video && (Array.isArray(section.video) ? section.video.length > 0 : true);
  const hasQuiz = !!section.mcq && section.mcq.length > 0;

  return (
    <MotiPressable
      onPress={onPress}
      style={({ pressed }) => [
        GlobalStyles.card,
        styles.container,
        pressed && { transform: [{ scale: 0.98 }] },
      ]}
      from={{ opacity: 0, translateX: -20 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: 'timing', duration: 300, delay: index * 50 }}
    >
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{sectionNumber}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={Typography.bodyBold} numberOfLines={2}>
          {section.title}
        </Text>
        <View style={styles.iconsContainer}>
          {hasVideo && (
            <AntDesign name="playcircleo" size={18} color={Colors.textMuted} style={styles.icon} />
          )}
          {hasQuiz && (
            <AntDesign name="questioncircleo" size={18} color={Colors.textMuted} style={styles.icon} />
          )}
        </View>
      </View>
      <AntDesign name="right" size={20} color={Colors.primary} />
    </MotiPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    backgroundColor: Colors.primary + '20', // Light green background
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  numberText: {
    ...Typography.bodyBold,
    color: Colors.primaryDark,
  },
  contentContainer: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: Spacing.xs,
  },
  icon: {
    marginRight: Spacing.sm,
  },
});