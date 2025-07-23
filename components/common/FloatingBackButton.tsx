// @/components/common/FloatingBackButton.tsx
import { Colors } from '@/constants/theme';
import { AntDesign } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  onPress: () => void;
};

export function FloatingBackButton({ onPress }: Props) {
  // This hook ensures the button is placed safely below the status bar/notch.
  const insets = useSafeAreaInsets();

  return (
    <MotiView
      // Animate the button fading in
      from={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'timing', duration: 300 }}
      style={[styles.container, { top: insets.top + 16 }]}
    >
      <MotiPressable
        onPress={onPress}
        style={styles.pressable}
        // Animate the press-in effect
        from={{ scale: 1 }}
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.9 : 1 };
        }}
      >
        <AntDesign name="arrowleft" size={24} color={Colors.text} />
      </MotiPressable>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    zIndex: 10, // Ensure it's above other content
  },
  pressable: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Android shadow
    elevation: 5,
  },
});