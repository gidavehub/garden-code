// (auth)/welcome.tsx

import { Ionicons } from '@expo/vector-icons'; // Import for the leaf icons
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

// --- Import your theme system ---
import { spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';


// --- LEAF COMPONENT ---
// A reusable component for a single animated leaf
const AnimatedLeaf = ({ delay, duration, size, initialX, sway, style }) => {
  const yAnim = useRef(new Animated.Value(0)).current;
  const xAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Upward floating animation
    Animated.loop(
        Animated.timing(yAnim, {
            toValue: -800, // Move up the full height of the screen
            duration,
            delay,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    // Side-to-side sway animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(xAnim, { toValue: sway, duration: duration / 2, useNativeDriver: true, easing: Easing.inOut(Easing.ease) }),
        Animated.timing(xAnim, { toValue: -sway, duration: duration, useNativeDriver: true, easing: Easing.inOut(Easing.ease) }),
        Animated.timing(xAnim, { toValue: 0, duration: duration / 2, useNativeDriver: true, easing: Easing.inOut(Easing.ease) }),
      ])
    ).start();
    
    // Rotation animation
     Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, { toValue: 1, duration: duration * 1.5, useNativeDriver: true, easing: Easing.linear }),
      ])
    ).start();

  }, []);

  const rotate = rotateAnim.interpolate({inputRange: [0, 1], outputRange: ['-15deg', '15deg']});

  return (
    <Animated.View style={[style, { left: initialX, transform: [{ translateY: yAnim }, {translateX: xAnim}, {rotate}] }]}>
      <Ionicons name="leaf-outline" size={size} color="rgba(74, 222, 128, 0.6)" />
    </Animated.View>
  );
};


// --- WELCOME SCREEN ---
export default function WelcomeScreen({ welcomeReady }: { welcomeReady: boolean }) {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  
  const router = useRouter();
  
  // --- YOUR ANIMATION LOGIC IS 100% PRESERVED ---
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (welcomeReady && !hasNavigated) {
      setHasNavigated(true); 

      Animated.timing(scaleAnim, {
        toValue: 2,
        duration: 6000,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        router.replace('/(tabs)');
      }, 6100); 

      setTimeout(() => {
        Animated.parallel([
          Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
          Animated.timing(opacityAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
        ]).start();
      }, 2000);
    }
  }, [welcomeReady, hasNavigated]);


  // --- NEW: An opacity animation tied to the scaling effect ---
  const welcomeOpacity = scaleAnim.interpolate({
      inputRange: [1, 1.5, 2],
      outputRange: [1, 0.7, 0]
  });

  return (
    <View style={styles.container}>
      {/* --- NEW: Animated Garden Background --- */}
      <View style={StyleSheet.absoluteFill}>
        <AnimatedLeaf delay={0} duration={8000} size={30} initialX="10%" sway={15} style={{top: '100%'}}/>
        <AnimatedLeaf delay={2000} duration={7000} size={20} initialX="25%" sway={-10} style={{top: '100%'}}/>
        <AnimatedLeaf delay={1000} duration={10000} size={40} initialX="80%" sway={20} style={{top: '100%'}}/>
        <AnimatedLeaf delay={4000} duration={6000} size={25} initialX="90%" sway={-15} style={{top: '100%'}}/>
        <AnimatedLeaf delay={5000} duration={9000} size={22} initialX="40%" sway={10} style={{top: '100%'}}/>
      </View>

      <View style={styles.content}>
        <Animated.View style={[styles.textWrapper, { opacity: welcomeOpacity, transform: [{ scale: scaleAnim }] }]}>  
            <MaskedView maskElement={<Text style={styles.welcomeText}>Welcome</Text>}>
                <LinearGradient
                    colors={[colors.primary, colors.accent || colors.primary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientFill}
                />
            </MaskedView>
        </Animated.View>

        <Animated.View style={{ opacity: opacityAnim, transform: [{ translateY: slideAnim }] }}>
            <Text style={styles.subText}>
            Begin your journey with <Text style={styles.gardenText}>Garden</Text>
            </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const getThemedStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Use theme background
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Hide leaves that go off-screen
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    marginBottom: spacing.xl,
  },
  gradientFill: {
    height: 80, // Made text bigger
    width: 400,
  },
  welcomeText: {
    ...typography.h1,
    fontSize: 64, // Bigger font size for a grander effect
    textAlign: 'center',
    color: 'black', // Color must be black for MaskedView
    backgroundColor: 'transparent',
  },
  subText: {
    ...typography.h4,
    color: colors.text,
    textAlign: 'center',
  },
  gardenText: {
    ...typography.h4,
    color: colors.primary, // Use theme primary color for "Garden"
  },
});