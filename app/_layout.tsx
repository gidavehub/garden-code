// app/_layout.tsx

import { ThemeProvider } from "@/providers/ThemeProvider";
import { toastConfig } from "@/utils/showSuccessAlert";
import { useFonts } from 'expo-font'; // <-- Import useFonts
import { SplashScreen, Stack } from "expo-router"; // <-- Import SplashScreen
import { useEffect } from 'react'; // <-- Import useEffect
import Toast from "react-native-toast-message";

// This is the most important line: it prevents the splash screen from
// hiding automatically before the app is ready.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  // Step 1: Load any custom fonts or other assets you need.
  // The hook returns true when the fonts are loaded.
  const [fontsLoaded, fontError] = useFonts({
    // If you have custom fonts, add them here. For example:
    // 'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Step 2: Use useEffect to hide the splash screen when fonts are loaded.
  useEffect(() => {
    // If the fonts are loaded OR there is an error, we can hide the splash screen.
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Step 3: Prevent rendering anything until the fonts are loaded.
  // While this is false, the splash screen remains visible.
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Step 4: Once fonts are loaded, render your actual app layout.
  // This is YOUR original code, which is correct.
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast config={toastConfig} />
    </ThemeProvider>  
  );
}