// @/components/textbook/Card.tsx
import { Colors, GlobalStyles, Spacing, Typography } from '@/constants/theme';
import { AntDesign } from '@expo/vector-icons';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { Image, Text, View } from 'react-native';

type CardProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  onPress: () => void;
};

export function Card({ title, subtitle, imageUrl, onPress }: CardProps) {
  return (
    <MotiPressable
      style={({ pressed }) => [
        GlobalStyles.card,
        { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: Spacing.md },
        pressed && { transform: [{ scale: 0.98 }] },
      ]}
      onPress={onPress}
      transition={{ type: 'timing', duration: 150 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingRight: Spacing.sm }}>
        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 50, height: 50, borderRadius: 10, marginRight: Spacing.md, backgroundColor: Colors.lightGray }}
          />
        )}
        <View style={{ flex: 1 }}>
          <Text style={Typography.bodyBold}>{title}</Text>
          {subtitle && <Text style={Typography.caption}>{subtitle}</Text>}
        </View>
      </View>
      <AntDesign name="right" size={20} color={Colors.primary} />
    </MotiPressable>
  );
}