const palette = {
  // Primary Greens for "Garden" theme
  greenPrimary: '#2E8B57', // A rich, classic green (SeaGreen)
  greenLight: '#4ade80',   // A brighter, more modern green (from your old tabs)
  greenDark: '#226940',    // A deep, trustworthy green

  // Core Neutrals & Darks
  black: '#121212',         // Your original screen background
  greyDarkest: '#181A20', // For Auth Screens background in dark mode
  greyDark: '#1f1f1f',       // Your original tab bar background
  greyMedium: '#333333',     // Your original border color
  greyLight: '#444444',
  greyText: '#A0A0A0',      // For secondary text in dark mode
  greyInactive: '#888888', // Your original inactive tab color
  white: '#FFFFFF',
  offWhite: '#F7F9F9',
  lightGrey: '#E5E7EB',

  // Accents
  blue: '#246bfd',
  red: '#EF4444',
  orange: '#fb923c',
};

export const lightThemeColors = {
  background: palette.offWhite,
  card: palette.white,
  text: palette.black,
  textSecondary: '#6B7280',
  primary: palette.greenPrimary,
  primaryDark: palette.greenDark,
  accent: palette.blue,
  border: palette.lightGrey,
  error: palette.red,
  buttonText: palette.white,
  tabBar: palette.white,
  tabBarInactive: palette.greyText,
  authBackground: palette.offWhite,
  authInput: palette.white,
};

export const darkThemeColors = {
  background: palette.black,
  card: palette.greyDarkest,
  text: palette.white,
  textSecondary: palette.greyText,
  primary: palette.greenLight,
  primaryDark: palette.greenPrimary,
  accent: palette.blue,
  border: palette.greyMedium,
  error: palette.red,
  buttonText: palette.white,
  tabBar: palette.greyDark,
  tabBarInactive: palette.greyInactive,
  authBackground: palette.greyDarkest,
  authInput: '#23252b',
};

export type AppThemeColors = typeof lightThemeColors;