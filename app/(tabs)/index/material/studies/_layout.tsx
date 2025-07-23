import { Stack } from 'expo-router';
import React from 'react';

// This layout file wraps the studies screens, allowing navigation between
// the main screen and the AI suggestions page.
export default function StudiesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="suggestions" 
        options={{ presentation: 'modal' }}
      />
    </Stack>
  );
}