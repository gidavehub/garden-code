import { LIGHT_GREEN_THEME } from '@/data/materialConstants';
import { Stack } from 'expo-router';
import React from 'react';

// This is the main layout for the /material section.
// It sets a consistent theme for all screens within it.
export default function MaterialLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: LIGHT_GREEN_THEME.card,
        },
        headerTintColor: LIGHT_GREEN_THEME.primaryText,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: LIGHT_GREEN_THEME.background,
        }
      }}
    >
      <Stack.Screen 
        name="timetable" 
        options={{ title: 'School Timetable' }} 
      />
      <Stack.Screen 
        name="studies" 
        options={{ title: 'My Studies' }} 
      />
    </Stack>
  );
}