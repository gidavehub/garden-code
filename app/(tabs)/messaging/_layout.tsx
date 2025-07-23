import { Stack } from 'expo-router';
import React from 'react';

export default function MessagingStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      
    </Stack>
  );
}