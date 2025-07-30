// @/components/textbook/LoadingIndicator.tsx
import { Colors } from '@/constants/theme';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background },
});

// @/components/textbook/EmptyState.tsx
import { Spacing, Typography } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Note: Other imports come from above if this were a separate file
export function EmptyState({ message, iconName = 'alert-circle-outline' }: { message: string, iconName?: any }) {
  return (
    <View style={styles.emptyContainer}>
      <MaterialCommunityIcons name={iconName} size={64} color={Colors.textMuted} />
      <Text style={[Typography.title3, { color: Colors.textMuted, marginTop: Spacing.md, textAlign: 'center' }]}>
        {message}
      </Text>
    </View>
  );
}
const emptyStyles = StyleSheet.create({
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: Spacing.xl },
});