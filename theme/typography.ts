// /theme/typography.ts
import { TextStyle } from 'react-native';

// Define the font families based on the names used in your useFonts hook.
// This avoids "magic strings" and makes changes easier.
const FONT_FAMILY_REGULAR = 'Lexend_400Regular';
const FONT_FAMILY_MEDIUM = 'Lexend_500Medium';
const FONT_FAMILY_BOLD = 'Lexend_700Bold';

// Create the typography scale. Each style is a complete `TextStyle` object.
// Using this provides consistency for all Text components in your app.
export const typography: Record<string, TextStyle> = {
  h1: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 32,
  },
  h2: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 26,
  },
  h3: {
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: 22,
  },
  body: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 16,
    lineHeight: 24, // Add line height for better readability
  },
  bodyBold: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 16,
  },
  caption: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 14,
  },
  small: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 12,
  },
};