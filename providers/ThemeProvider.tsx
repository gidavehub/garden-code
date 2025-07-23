// /providers/ThemeProvider.tsx
import { darkThemeColors, lightThemeColors } from '@/theme/colors';
import { ThemeContext, ThemeContextType, ThemeMode } from '@/theme/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

const THEME_STORAGE_KEY = 'app-theme-mode';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>('system');

  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const savedMode = await AsyncStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
        if (savedMode) {
          setMode(savedMode);
        }
      } catch (error) {
        console.error('Failed to load theme preference.', error);
      }
    };
    loadThemePreference();
  }, []);

  const setTheme = useCallback(async (newMode: ThemeMode) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newMode);
      setMode(newMode);
    } catch (error) {
      console.error('Failed to save theme preference.', error);
    }
  }, []);

  const isDark = useMemo(() => {
    if (mode === 'system') {
      return systemColorScheme === 'dark';
    }
    return mode === 'dark';
  }, [mode, systemColorScheme]);

  const colors = isDark ? darkThemeColors : lightThemeColors;

  const value: ThemeContextType = {
    mode,
    isDark,
    colors,
    setTheme,
  };
  
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};