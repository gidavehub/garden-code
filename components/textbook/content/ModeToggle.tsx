// @/components/textbook/content/ModeToggle.tsx
import { Spacing, Typography } from '@/constants/theme';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants/theme';

type Mode = 'scroll' | 'page';

type Props = {
  mode: Mode;
  onToggle: (newMode: Mode) => void;
};

export function ModeToggle({ mode, onToggle }: Props) {
  // We need to measure the width of the container to position the slider correctly.
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  // Calculate the position for the slider. It moves halfway across the container for the 'page' mode.
  const sliderPosition = mode === 'page' ? containerWidth / 2 : 0;

  return (
    <View style={styles.outerContainer} onLayout={handleLayout}>
      {/* 
        KEY FIX: There is now only ONE MotiView for the background.
        It is always rendered. We animate its 'translateX' property based
        on the current mode, which creates the sliding effect.
      */}
      {containerWidth > 0 && ( // Don't render slider until we know the width
        <MotiView
          style={styles.activeBackground}
          animate={{ translateX: sliderPosition }}
          transition={{ type: 'spring', damping: 20, stiffness: 250 }}
        />
      )}
      <Pressable style={styles.button} onPress={() => onToggle('scroll')}>
        <Text style={[styles.text, mode === 'scroll' && styles.activeText]}>Scroll</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => onToggle('page')}>
        <Text style={[styles.text, mode === 'page' && styles.activeText]}>Page</Text>
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
    marginBottom: Spacing.lg,
    position: 'relative',
    overflow: 'hidden',
  },
  button: {
    paddingVertical: Spacing.sm,
    flex: 1, // Ensure buttons take up equal space
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    minWidth: 80, // Give a minimum width for layout calculation
  },
  activeBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.primary,
    borderRadius: 100,
    width: '50%',
    zIndex: 0,
  },
  text: {
    ...Typography.body,
    fontWeight: '600',
    color: "darkGray",
    transition: 'color 0.3s ease', // Smooth color change
  },
  activeText: {
    color: Colors.white,
  },
});