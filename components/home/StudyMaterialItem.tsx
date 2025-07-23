// src/components/home/StudyMaterialItem.tsx
import { Textbook } from '@/types/textbook';
import { Lexend_500Medium, useFonts } from '@expo-google-fonts/lexend';
import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

// --- Internal Constants for StudyMaterialItem ---
const COMPONENT_COLORS = {
  primaryText: '#FFFFFF',
};

const COMPONENT_FONT_FAMILY_NAMES = {
  medium: 'Lexend_500Medium',
};

type StudyMaterialItemProps = {
  item: Textbook;
};

const StudyMaterialItem: React.FC<StudyMaterialItemProps> = ({ item }) => {
  const [fontsLoaded, fontError] = useFonts({
    Lexend_500Medium,
  });
  const router = useRouter();

  if (!fontsLoaded && !fontError) {
    // Placeholder view to maintain layout while fonts load
    return <View style={styles.studyMaterialItem} />;
  }

  return (
    <View style={styles.studyMaterialItem}>
      <ImageBackground
        source={item.coverImage}
        style={styles.studyMaterialImage}
        imageStyle={{ borderRadius: 12 }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  studyMaterialItem: {
    flexDirection: 'column',
    gap: 8,
    width: '48%', // Set width to be less than half to fit two in a row with a gap
  },
  studyMaterialImage: {
    width: '100%', // Image takes the full width of its container
    aspectRatio: 3 / 4, // Correct 3:4 aspect ratio for a book cover, replacing conflicting properties
    borderRadius: 12,
    backgroundColor: '#333', // Fallback color
    overflow: 'hidden', // Ensures the content respects the border radius
  },
  studyMaterialName: {
    color: COMPONENT_COLORS.primaryText,
    fontSize: 14, // Reduced font size for a smaller component
    lineHeight: 20, // Adjusted line height for readability
    fontFamily: COMPONENT_FONT_FAMILY_NAMES.medium,
  },
});

export default StudyMaterialItem;