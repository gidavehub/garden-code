import { useTheme } from '@/theme/theme';
import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export const ThemedTextInput = (props: TextInputProps) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholderTextColor={colors.textSecondary}
      {...props}
    />
  );
};

const getStyles = (colors) => StyleSheet.create({
  input: {
    backgroundColor: colors.card,
    color: colors.text,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    width: 300,
    marginBottom: 15,
  },
});