// @/components/textbook/Button.tsx
import { Colors, Spacing, Typography } from '@/constants/theme';
import * as Haptics from 'expo-haptics';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({ title, onPress, disabled, style }: ButtonProps) {
  const handlePress = () => {
    if (!disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress();
    }
  };

  return (
    <MotiPressable
      onPress={handlePress}
      disabled={disabled}
      style={[
        {
          paddingVertical: Spacing.md,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: disabled ? Colors.textMuted : Colors.primary,
          borderBottomWidth: 4,
          borderColor: disabled ? Colors.text : Colors.primaryDark,
        },
        style,
      ]}
      from={{ scale: 1, opacity: 1 }}
      animate={({ pressed }) => {
        'worklet';
        return {
          scale: pressed && !disabled ? 0.98 : 1,
          opacity: disabled ? 0.7 : 1,
        };
      }}>
      <Text style={[Typography.bodyBold, { color: Colors.white, textTransform: 'uppercase' }]}>{title}</Text>
    </MotiPressable>
  );
}