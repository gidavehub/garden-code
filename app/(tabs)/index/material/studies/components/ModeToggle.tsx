import { Spacing } from '@/constants/theme';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/theme';

type Mode = 'ai' | 'manual';

interface Props {
  mode: Mode;
  onToggle: (newMode: Mode) => void;
};

export function ModeToggle({ mode, onToggle }: Props) {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const sliderPosition = mode === 'manual' ? containerWidth / 2 : 0;

  return (
    <View style={styles.outerContainer} onLayout={handleLayout}>
      {containerWidth > 0 && (
        <MotiView
          style={styles.activeBackground}
          animate={{ translateX: sliderPosition }}
          transition={{ type: 'spring', damping: 20, stiffness: 250 }}
        />
      )}
      <Pressable style={styles.button} onPress={() => onToggle('ai')}>
        <Text style={[styles.text, mode === 'ai' && styles.activeText]}>AI Assistant</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => onToggle('manual')}>
        <Text style={[styles.text, mode === 'manual' && styles.activeText]}>Manual Setup</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.lightGray,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: Spacing.lg,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  button: {
    paddingVertical: Spacing.md,
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    minWidth: 120, 
  },
  activeBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.primary,
    borderRadius: 100,
    width: '50%',
    zIndex: 0,
  },
  text: {
    fontWeight: '600',
    color: Colors.darkGray,
    fontSize: 15,
  },
  activeText: {
    color: Colors.white,
  },
});