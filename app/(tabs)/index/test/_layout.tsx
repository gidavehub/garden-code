// app/(tabs)/index/test/_layout.tsx
import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function TestLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>


      {/* Renders index.tsx or GTLive.tsx depending on the route */}
      <Slot />

      {/* Optional shared footer */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0A1710' },
  header: { padding: 16, alignItems: 'center' },
  headerText: { color: '#E0F0E8', fontSize: 20, fontWeight: '700' },
});
