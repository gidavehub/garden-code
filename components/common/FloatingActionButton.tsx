import { Colors } from '@/constants/theme';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  onPress: () => void;
  iconName: React.ComponentProps<typeof AntDesign>['name'];
  position: 'left' | 'right';
};

export function FloatingActionButton({ onPress, iconName, position }: Props) {
  const insets = useSafeAreaInsets();
  const containerStyle = position === 'left' ? styles.leftContainer : styles.rightContainer;

  return (
    // By wrapping the pressable in a MotiView, we can fade it in and out easily
    <MotiPressable
      onPress={onPress}
      style={[styles.pressable, containerStyle, { top: insets.top + 16 }]}
      from={{ scale: 1 }}
      animate={({ pressed }) => {
        'worklet';
        return { scale: pressed ? 0.9 : 1 };
      }}
    >
      {/* KEY: The BlurView is the only background. No solid color. */}
      <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
      <AntDesign name={iconName} size={24} color={Colors.text} />
    </MotiPressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // This is crucial for the BlurView's rounded corners
    zIndex: 10,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Android shadow
    elevation: 4,
  },
  leftContainer: {
    left: 16,
  },
  rightContainer: {
    right: 16,
  },
});
