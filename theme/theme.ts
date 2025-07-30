import { createContext, useContext } from 'react';
import { AppThemeColors, lightThemeColors } from './colors';

// Define the possible theme modes
export type ThemeMode = 'light' | 'dark' | 'system';

// Define the shape of the data that our ThemeContext will provide
export type ThemeContextType = {
  mode: ThemeMode;
  isDark: boolean;
  colors: AppThemeColors;
  setTheme: (mode: ThemeMode) => void;
};

// Create the context with a default value.
export const ThemeContext = createContext<ThemeContextType>({
  mode: 'system',
  isDark: false,
  colors: lightThemeColors,
  setTheme: () => console.warn('setTheme was called outside of a ThemeProvider'),
});

// A custom hook that provides easy access to the theme context
export const useTheme = () => useContext(ThemeContext);


const md = 16; // Example value for medium spacing

