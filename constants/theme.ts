// @/constants/theme.ts
import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#58CC02',
  primaryDark: '#4AA802',
  secondary: '#1FB6FF',
  text: '#2D3748',
  textMuted: '#718096',
  background: '#F7FAFC',
  card: '#FFFFFF',
  white: '#FFFFFF',
  lightGray: '#E2E8F0',
  success: '#38A169',
  successBg: '#C6F6D5',
  error: '#E53E3E',
  errorBg: '#FED7D7',
  border: '#CBD5E0',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const Typography = StyleSheet.create({
  title1: { fontSize: 32, fontWeight: 'bold', color: Colors.text, lineHeight: 40 },
  title2: { fontSize: 24, fontWeight: '700', color: Colors.text, lineHeight: 32 },
  title3: { fontSize: 20, fontWeight: '600', color: Colors.text, lineHeight: 28 },
  body: { fontSize: 17, color: Colors.textMuted, lineHeight: 25 },
  bodyBold: { fontSize: 17, fontWeight: '600', color: Colors.text },
  caption: { fontSize: 14, color: Colors.textMuted },
});

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
});