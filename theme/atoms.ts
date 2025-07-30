// /theme/atoms.ts
import { TextStyle } from 'react-native';

// --- SPACING ---
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// --- BORDER RADIUS (The missing part) ---
export const radius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
  full: 9999, // For creating circles from squares
};

// --- TYPOGRAPHY ---
const FONT_FAMILY_REGULAR = 'Lexend_400Regular';
const FONT_FAMILY_MEDIUM = 'Lexend_500Medium';
const FONT_FAMILY_BOLD = 'Lexend_700Bold';

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
    lineHeight: 24,
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