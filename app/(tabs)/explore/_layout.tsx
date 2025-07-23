// app/(tabs)/explore/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function ExploreStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Explore' }} />
      {/* Ensure title is appropriate or use headerShown: true and customize */}
      <Stack.Screen name="[profileId]" options={{ title: 'Profile' }} />
      <Stack.Screen name="school/[details]" options={{ title: 'School Details' }} />
    </Stack>
  );
}