// /app/(tabs)/profile/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function ProfileTabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="editProfile" />
      <Stack.Screen name="settings" /> {/* <-- ADD THIS LINE */}
    </Stack>
  );
}