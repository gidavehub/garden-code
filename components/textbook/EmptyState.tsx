// @/components/textbook/EmptyState.tsx
import { Colors, Spacing, Typography } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

type EmptyStateProps = {
  /** The primary message to display to the user. */
  message: string;
  /** The name of the icon from MaterialCommunityIcons to display. */
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

export function EmptyState({ message, iconName = 'alert-circle-outline' }: EmptyStateProps) {
  return (
    // We wrap it in a MotiView for a subtle fade-in animation
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 300 }}
    >
      <MaterialCommunityIcons name={iconName} size={64} color={Colors.textMuted} />
      <Text style={styles.messageText}>
        {message}
      </Text>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
    backgroundColor: Colors.background,
  },
  messageText: {
    ...Typography.title3, // Use typography from our theme
    color: Colors.textMuted,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
});