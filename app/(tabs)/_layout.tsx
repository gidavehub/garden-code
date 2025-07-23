import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs, usePathname } from 'expo-router'; // --- ANIMATION: Import usePathname
import React from 'react';
import { Appearance, Dimensions, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
// --- ANIMATION: Add Animated to the import
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

// Theme imports
import { spacing } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BAR_HEIGHT = 70; // fixed original height
const HIDE_TRANSLATE_Y = 150; // A value larger than the bar height to ensure it's off-screen

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const TabsLayout = () => (
  <Tabs
    tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Tabs.Screen name="index" />
    <Tabs.Screen name="explore" />
    <Tabs.Screen name="marketplace" />
    <Tabs.Screen name="messaging" />
    <Tabs.Screen name="profile" />
  </Tabs>
);

const CustomTabBar = ({ state, navigation }) => {
  const { colors, mode } = useTheme();
  const tabs = state.routes.length;
  const barWidth = SCREEN_WIDTH * 0.9;
  const tabWidth = barWidth / tabs;
  const indicatorX = useSharedValue(state.index * tabWidth);

  // --- ANIMATION: Logic for hiding/showing the tab bar ---
  const pathname = usePathname();
  const translateY = useSharedValue(0);

  React.useEffect(() => {
    // If the path is '/test', hide the tab bar. Otherwise, show it.
    if (pathname !== '/index' &&  pathname !== '/marketplace' &&  pathname !== '/explore' &&  pathname !== '/messaging' && pathname !== '/profile') {
      translateY.value = withTiming(HIDE_TRANSLATE_Y, { duration: 300 });
    } else {
      translateY.value = withTiming(0, { duration: 300 });
    }
  }, [pathname, translateY]);
  
  const animatedContainerStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
  }));
  // --- END ANIMATION Logic ---


  React.useEffect(() => {
    indicatorX.value = withTiming(state.index * tabWidth, { duration: 300 });
  }, [state.index]);

  const animatedPathProps = useAnimatedProps(() => ({
    d: [`M0,20 H${indicatorX.value}`,
        `C${indicatorX.value + 10},20 ${indicatorX.value + 15},50 ${indicatorX.value + tabWidth/2},50`,
        `S${indicatorX.value + tabWidth - 15},20 ${indicatorX.value + tabWidth},20 H${barWidth}`
      ].join(' ')
  }));

  // Determine blur tint: always dark on index tab
  let blurTint: 'light' | 'dark';
  if (state.index === 0) {
    blurTint = 'dark';
  } else if (mode === 'light') {
    blurTint = 'light';
  } else if (mode === 'dark') {
    blurTint = 'dark';
  } else {
    const system = Appearance.getColorScheme();
    blurTint = system === 'dark' ? 'dark' : 'light';
  }
  
  // --- ANIMATION: Changed View to Animated.View and added the new style ---
  return (
    <Animated.View
      style={[
        styles.container,
        { width: barWidth, height: BAR_HEIGHT, borderRadius: BAR_HEIGHT / 2 },
        animatedContainerStyle,
      ]}
    >
      {Platform.OS === 'android' && Platform.Version < 31 && <View style={styles.fallback} />}
      <BlurView intensity={90} tint={blurTint} style={StyleSheet.absoluteFill} />

      <Svg width={barWidth} height={BAR_HEIGHT} style={StyleSheet.absoluteFillObject}>
        <AnimatedPath
          animatedProps={animatedPathProps}
          stroke={colors.border}
          strokeWidth={2}
          fill="transparent"
        />
      </Svg>

      <View style={styles.iconRow}>
        {state.routes.map((route, i) => {
          const focused = state.index === i;
          const onPress = () => {
            const e = navigation.emit({ type: 'tabPress', target: route.key });
            if (!focused && !e.defaultPrevented) navigation.navigate(route.name);
          };
          return (
            <TabButton
              key={route.name}
              route={route.name}
              focused={focused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </Animated.View>
  );
};

const TabButton = ({ route, focused, onPress }) => {
  const { colors } = useTheme();
  const animStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(focused ? -10 : 0, { duration: 250 }) },
      { scale: withTiming(focused ? 1.2 : 1, { duration: 200 }) },
    ],
  }));

  const icons = {
    index: ['flower-outline', 'flower'],
    explore: ['compass-outline', 'compass'],
    marketplace: ['storefront-outline', 'storefront'],
    messaging: ['chatbubbles-outline', 'chatbubbles'],
    profile: ['person-circle-outline', 'person-circle'],
  };
  const [outline, filled] = icons[route] || ['ellipse', 'ellipse'];
  const name = focused ? filled : outline;

  return (
    <Animated.View style={[styles.button, animStyle]}>
      <TouchableOpacity onPress={onPress}>
        <AnimatedIcon name={name as any} size={28} color={colors.primary} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: spacing.lg,
    left: '5%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  fallback: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  iconRow: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabsLayout;