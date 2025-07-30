import { SearchOverlay } from '@/components/common/SearchOverlay';
import { SearchProvider } from '@/context/SearchProvider';
import { Stack } from 'expo-router';
import React from 'react';

/**
 * This is the root layout for the entire application.
 * It's the perfect place for global providers like our SearchProvider.
 */
export default function RootLayout() {
  return (
    // The SearchProvider wraps the entire navigation stack, making the
    // search context available on every single screen.
    <SearchProvider>
      <Stack screenOptions={{headerShown: false}}>
        {/* The '(tabs)' entry refers to the group of screens in the (tabs) directory */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        
        
      </Stack>
      
      {/* The SearchOverlay is a sibling to the Stack navigator, ensuring it
          can render on top of any screen in the app. */}
      <SearchOverlay />
    </SearchProvider>
  );
}