import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MotiText, MotiView } from 'moti';
import React, { useEffect, useMemo, useRef } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

// Small helper component for the count-up number animation
const AnimatedScore = ({ targetValue }: { targetValue: number }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    // This creates a "count-up" animation effect for the score number
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetValue) {
          // The non-linear increment makes the animation feel more satisfying
          return Math.min(targetValue, prevCount + Math.ceil((targetValue - prevCount) / 10));
        }
        clearInterval(interval);
        return targetValue;
      });
    }, 30); // Update every 30ms

    return () => clearInterval(interval);
  }, [targetValue]);

  return <Text style={styles.score}>{count}</Text>;
};

export default function GTResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const score = Number(params.score) || 0;
  const maxScore = Number(params.maxScore) || 1500;
  const testName = (params.testName as string) || 'Test';

  const confettiRef = useRef<ConfettiCannon>(null);

  const percentage = maxScore > 0 ? score / maxScore : 0;
  const showConfetti = percentage >= 0.75;

  const { emoji, message } = useMemo(() => {
    if (percentage >= 0.9) return { emoji: '🌟', message: 'Legendary Performance!' };
    if (percentage >= 0.75) return { emoji: '🎉', message: 'Excellent Work!' };
    if (percentage >= 0.5) return { emoji: '👍', message: 'Great Effort!' };
    return { emoji: '🤔', message: 'Practice Makes Perfect' };
  }, [percentage]);

  // Trigger confetti for high scores
  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => confettiRef.current?.start(), 500); // Small delay
    }
  }, [showConfetti]);

  // Button handlers
  const handleReview = () => Alert.alert('Coming Soon', 'Detailed per-subject review will be available here.');
  const handleHome = () => router.replace('/test'); // Go back to the test selection list

  // SVG Circle properties
  const radius = 110;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.background}>
      <ImageBackground
        source={require('@/assets/images/dark-pattern.png')}
        resizeMode="repeat"
        style={StyleSheet.absoluteFillObject}
        imageStyle={styles.backgroundImage}
      />
      <LinearGradient colors={['#1a3325', '#0A1710']} style={StyleSheet.absoluteFillObject} />

      <SafeAreaView style={styles.safeArea}>
        {/* --- [FIXED] Confetti Cannon is here and will trigger on high scores --- */}
        {showConfetti && (
          <ConfettiCannon
            count={200}
            origin={{ x: -10, y: 0 }}
            autoStart={false}
            ref={confettiRef}
            fadeOut={true}
            colors={['#38e07b', '#ffffff', '#a7f3d0']}
          />
        )}

        <MotiView style={styles.container} from={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MotiText style={styles.title} from={{ opacity: 0, translateY: -20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', duration: 500, delay: 300 }}>
            {message}
          </MotiText>
          <MotiText style={styles.testName} from={{ opacity: 0, translateY: -20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', duration: 500, delay: 500 }}>
            on your {testName} GT
          </MotiText>

          {/* --- [FIXED & IMPROVED] Score Circle Animation --- */}
          <MotiView style={styles.scoreContainer} from={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', damping: 15, delay: 700 }}>
            <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
              <Defs>
                <RadialGradient id="grad">
                  <Stop offset="80%" stopColor="#38e07b" />
                  <Stop offset="100%" stopColor="#a7f3d0" />
                </RadialGradient>
              </Defs>
              <Circle cx={radius} cy={radius} r={radius - strokeWidth / 2} stroke="rgba(255,255,255,0.1)" strokeWidth={strokeWidth} />
              <MotiView
                from={{ progress: 0 }}
                animate={{ progress: percentage }}
                transition={{ type: 'timing', duration: 1500, delay: 900 }}
              >
                {({ progress }) => (
                  <Circle
                    cx={radius} cy={radius} r={radius - strokeWidth / 2} stroke="url(#grad)" strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - (progress || 0))} // Use animated progress value
                    strokeLinecap="round" transform={`rotate(-90 ${radius} ${radius})`}
                  />
                )}
              </MotiView>
            </Svg>
            <View style={styles.scoreTextContainer}>
              <AnimatedScore targetValue={score} />
              <Text style={styles.maxScore}>/ {maxScore}</Text>
            </View>
          </MotiView>

          {/* --- [REDESIGNED] Stacked and Bigger Buttons --- */}
          <View style={styles.buttonContainer}>
            <MotiView from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'spring', delay: 1500 }}>
              <TouchableOpacity style={styles.buttonPrimary} onPress={handleHome} activeOpacity={0.8}>
                <Ionicons name="apps-outline" size={24} color="#0A1710" />
                <Text style={styles.buttonTextPrimary}>See All Tests</Text>
              </TouchableOpacity>
            </MotiView>
            <MotiView from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'spring', delay: 1600 }}>
              <TouchableOpacity style={styles.buttonSecondary} onPress={handleReview} activeOpacity={0.8}>
                <Ionicons name="document-text-outline" size={22} color="#E0F0E8" />
                <Text style={styles.buttonTextSecondary}>Review Answers</Text>
              </TouchableOpacity>
            </MotiView>
          </View>
        </MotiView>
      </SafeAreaView>
    </View>
  );
}

// --- [REVISED] Stylesheet ---
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
    tintColor: '#fff',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 24,
    width: '100%',
  },
  title: {
    fontSize: 34,
    color: '#E0F0E8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  testName: {
    fontSize: 18,
    color: '#87B59A',
    marginBottom: 40,
    textAlign: 'center',
  },
  scoreContainer: {
    width: 220, // increased size
    height: 220, // increased size
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  scoreTextContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  score: {
    fontSize: 60, // increased size
    color: '#ffffff',
    fontWeight: 'bold',
  },
  maxScore: {
    fontSize: 26, // increased size
    color: '#87B59A',
    fontWeight: '600',
    paddingBottom: 10,
    marginLeft: 6,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 20,
    gap: 16, // Spacing between buttons
  },
  buttonPrimary: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#38e07b',
    paddingVertical: 18, // increased size
    borderRadius: 30, // increased roundness
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#38e07b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  buttonTextPrimary: {
    color: '#0A1710',
    fontSize: 18, // increased size
    fontWeight: '700',
  },
  buttonSecondary: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 18, // increased size
    borderRadius: 30, // increased roundness
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(42, 60, 50, 0.5)',
    borderColor: 'rgba(135, 181, 154, 0.3)',
    borderWidth: 1.5,
  },
  buttonTextSecondary: {
    color: '#E0F0E8',
    fontSize: 18, // increased size
    fontWeight: '700',
  },
});