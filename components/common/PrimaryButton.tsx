import { useTheme } from '@/theme/theme';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: 'primary' | 'secondary';
}

export const PrimaryButton = ({ title, onPress, loading, disabled, style, variant = 'primary' }: PrimaryButtonProps) => {
  const { colors } = useTheme();
  const styles = getStyles(colors, variant, disabled || loading);

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={styles.buttonText.color} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const getStyles = (colors, variant, isDisabled) => StyleSheet.create({
  button: {
    backgroundColor: variant === 'primary' ? colors.primary : colors.card,
    borderWidth: variant === 'secondary' ? 1 : 0,
    borderColor: variant === 'secondary' ? colors.primary : 'transparent',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isDisabled ? 0.6 : 1,
    minHeight: 50,
    marginTop: 16,
  },
  buttonText: {
    color: variant === 'primary' ? colors.buttonText : colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});