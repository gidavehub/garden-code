import { Stack } from 'expo-router';
import React from 'react';

// This layout file wraps the timetable screens.
// It allows for future expansion, like adding a dedicated "manual entry" screen.
export default function TimetableLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false  }} />
     
    </Stack>
  );
}