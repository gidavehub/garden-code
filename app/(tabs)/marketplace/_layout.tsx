// app/(tabs)/marketplace/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function MarketplaceStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Marketplace' }} />
      <Stack.Screen name="listing/[id]" options={{ title: 'Listing Details' }} />
      <Stack.Screen name="my-listings" options={{ title: 'My Store' }} />
      <Stack.Screen name="create-listing" options={{ title: 'Create Listing', presentation: 'modal' }} />
      {/* Edit Listing can also be a modal or a push screen */}
      <Stack.Screen name="edit-listing/[id]" options={{ title: 'Edit Listing', presentation: 'modal' }} />
    </Stack>
  );
}