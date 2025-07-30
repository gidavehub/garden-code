import { Colors } from '@/constants/theme';
import { useSearch } from '@/context/SearchProvider';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  onBackPress: () => void;
};

export function FloatingHeader({ onBackPress }: Props) {
  const insets = useSafeAreaInsets();
  const { openSearch } = useSearch();

  return (
    <View style={[styles.container, { top: insets.top + 16 }]}>
      <MotiPressable onPress={onBackPress} style={styles.pressable}>
        <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
        <AntDesign name="arrowleft" size={24} color={Colors.text} />
      </MotiPressable>
      
      <MotiPressable onPress={openSearch} style={styles.pressable}>
        <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
        <AntDesign name="search1" size={22} color={Colors.text} />
      </MotiPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressable: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Android shadow
    elevation: 4,
  },
});