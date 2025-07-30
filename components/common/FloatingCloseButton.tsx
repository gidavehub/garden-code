// @/components/common/FloatingCloseButton.tsx
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

export function FloatingCloseButton({ onPress }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <MotiView
      from={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'timing', duration: 300, delay: 200 }}
      style={[styles.container, { top: insets.top + 16 }]}
    >
      <MotiPressable
        onPress={onPress}
        style={styles.pressable}
        from={{ scale: 1 }}
        animate={({ pressed }) => {
          'worklet';
          return { scale: pressed ? 0.9 : 1 };
        }}
      >
        <AntDesign name="close" size={24} color={Colors.text} />
      </MotiPressable>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16, // Positioned on the right
    zIndex: 10,
  },
  pressable: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});