// src/components/home/PerformanceSection.js

// --- Core and Font Imports ---
import {
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_700Bold,
  useFonts,
} from '@expo-google-fonts/lexend';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';


// --- Animation and SVG Imports ---
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Svg,
} from 'react-native-svg';

// --- Centralized Key Import ---
import { ASYNC_STORAGE_TEST_HISTORY_KEY } from '@/data/gtConstants';


const AnimatedPath = Animated.createAnimatedComponent(Path);

const COMPONENT_COLORS = {
  background: '#1A1A1A',
  primaryText: '#FFFFFF',
  secondaryText: '#9E9E9E',
  accentGreen: '#00F5A0',
  accentRed: '#FF4136',
  golden: '#FFD700',
  chartLine: '#00F5A0',
  chartLineGlow: '#00F5A0',
  chartFillGradientStart: '#00F5A0',
  chartFillGradientEnd: '#1A1A1A',
  tooltipBackground: '#2C2C2E',
  selectedPointStroke: '#FFFFFF',
};

const COMPONENT_FONT_FAMILY_NAMES = {
  regular: 'Lexend_400Regular',
  medium: 'Lexend_500Medium',
  bold: 'Lexend_700Bold',
};

// Charting Constants
const CHART_VIEWBOX_WIDTH = 478;
const CHART_VIEWBOX_HEIGHT = 150;
const CHART_Y_AXIS_PADDING = 20;
const ANIMATION_DURATION = 1500;
const MAX_HISTORY_ITEMS = 7;

// Child Components (Tooltip, InternalPerformanceChart) can remain as they are.
// We only need to edit the main component's empty state.
const Tooltip = ({ point }) => {
    if (!point) return null;
    return ( <View style={[styles.tooltipContainer, { left: point.x - 40, top: point.y - 60 }]}><Text style={styles.tooltipScore}>{`${Math.round(point.score)}%`}</Text><Text style={styles.tooltipDate}>{point.date}</Text></View> );
};
const InternalPerformanceChart = ({ data = [] }) => {
    // ... no changes here ...
    const [selectedPoint, setSelectedPoint] = useState(null);
    const progress = useSharedValue(0);
    const pathRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);
    useEffect(() => { progress.value = 0; progress.value = withTiming(1, { duration: ANIMATION_DURATION, easing: Easing.inOut(Easing.cubic), }); }, [data, progress]);
    const { linePathD, fillPathD, points } = useMemo(() => {
        if (!data || data.length === 0) { return { linePathD: '', fillPathD: '', points: [] }; }
        const scores = data.map(d => d.score);
        const minScore = Math.min(...scores);
        const maxScore = Math.max(...scores);
        const scaleMin = Math.max(0, minScore - CHART_Y_AXIS_PADDING);
        const scaleMax = Math.min(100, maxScore + CHART_Y_AXIS_PADDING);
        const scaleHeight = (scaleMax - scaleMin) || 1;
        const getYCoordinate = (score) => { const normalizedScore = Math.max(scaleMin, Math.min(score, scaleMax)); const yRatio = (normalizedScore - scaleMin) / scaleHeight; return CHART_VIEWBOX_HEIGHT * (1 - yRatio); };
        const xStep = data.length > 1 ? CHART_VIEWBOX_WIDTH / (data.length - 1) : 0;
        const generatedPoints = data.map((d, i) => ({ ...d, x: i * xStep, y: getYCoordinate(d.score), }));
        let d_line = `M ${generatedPoints[0].x} ${generatedPoints[0].y}`;
        if (generatedPoints.length > 1) { for (let i = 0; i < generatedPoints.length - 1; i++) { const p1 = generatedPoints[i]; const p2 = generatedPoints[i+1]; const cp1x = (p1.x + p2.x) / 2; d_line += ` C ${cp1x},${p1.y} ${cp1x},${p2.y} ${p2.x},${p2.y}`; } } else { d_line += `L ${CHART_VIEWBOX_WIDTH} ${generatedPoints[0].y}`; }
        let d_fill = `${d_line} V ${CHART_VIEWBOX_HEIGHT} L 0 ${CHART_VIEWBOX_HEIGHT} Z`;
        return { linePathD: d_line, fillPathD: d_fill, points: generatedPoints };
    }, [data]);
    useEffect(() => { if (pathRef.current) { setTimeout(() => { const length = pathRef.current.getTotalLength(); setPathLength(length); }, 10); } }, [linePathD]);
    const animatedProps = useAnimatedProps(() => ({ strokeDashoffset: pathLength * (1 - progress.value) }));
    if (data.length === 0) { return <View style={{ height: CHART_VIEWBOX_HEIGHT + 64, width: '100%' }} />; }
    const handlePressIn = (point) => setSelectedPoint(point);
    const handlePressOut = () => setSelectedPoint(null);
    return (
        <View style={styles.chartWrapper}>
            <Tooltip point={selectedPoint} />
            <Svg height="100%" width="100%" viewBox={`0 0 ${CHART_VIEWBOX_WIDTH} ${CHART_VIEWBOX_HEIGHT}`} preserveAspectRatio="none">
                 <Defs>
                      <LinearGradient id="fillGradient" x1="50%" y1="0%" x2="50%" y2="100%"><Stop offset="0%" stopColor={COMPONENT_COLORS.chartFillGradientStart} stopOpacity="0.2" /><Stop offset="100%" stopColor={COMPONENT_COLORS.chartFillGradientEnd} stopOpacity="0.1" /></LinearGradient>
                      <LinearGradient id="lineGradient" x1="0%" y1="50%" x2="100%" y2="50%"><Stop offset="0%" stopColor={COMPONENT_COLORS.accentGreen} stopOpacity="0.5" /><Stop offset="100%" stopColor={COMPONENT_COLORS.accentGreen} /></LinearGradient>
                  </Defs>
                  <Path d={fillPathD} fill="url(#fillGradient)" />
                  <AnimatedPath ref={pathRef} d={linePathD} fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" strokeDasharray={pathLength} animatedProps={animatedProps}/>
                  <G>
                      {points.map((p, index) => { const isSelected = selectedPoint?.date === p.date && selectedPoint?.score === p.score; const isLatest = index === points.length - 1; return (<Pressable key={index} onPressIn={() => handlePressIn(p)} onPressOut={handlePressOut} hitSlop={20}><G>{isSelected && <Circle cx={p.x} cy={p.y} r="10" fill={COMPONENT_COLORS.chartLineGlow} opacity="0.25" />}<Circle cx={p.x} cy={p.y} r="5" fill={COMPONENT_COLORS.background} stroke={isSelected ? COMPONENT_COLORS.selectedPointStroke : (isLatest ? COMPONENT_COLORS.accentGreen : "none") } strokeWidth="3" /></G></Pressable>)})}
                  </G>
            </Svg>
        </View>
    );
};


// Main Component
const PerformanceSection = () => {
  const [fontsLoaded, fontError] = useFonts({ Lexend_400Regular, Lexend_500Medium, Lexend_700Bold });
  const [isLoading, setIsLoading] = useState(true);
  const [testHistory, setTestHistory] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadTestHistory = async () => {
        setIsLoading(true);
        try {
          const jsonValue = await AsyncStorage.getItem(ASYNC_STORAGE_TEST_HISTORY_KEY);
          const historyData = jsonValue != null ? JSON.parse(jsonValue) : [];
          
          const formattedHistory = historyData.slice(-MAX_HISTORY_ITEMS).map(test => ({
            score: test.maxScore > 0 ? (test.score / test.maxScore) * 100 : 0,
            date: new Date(test.dateCompleted).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          }));

          setTestHistory(formattedHistory);
        } catch (e) {
          console.error("Failed to load test history from storage.", e);
          setTestHistory([]);
        } finally {
          setIsLoading(false);
        }
      };
      loadTestHistory();
      return () => {};
    }, [])
  );
  
  if (!fontsLoaded && !fontError) { return null; }
  if (isLoading) { return <View style={styles.loadingContainer}><ActivityIndicator color={COMPONENT_COLORS.secondaryText} /></View>; }

  // --- CHANGE: Updated empty state to use the new trimmed image with manually added text ---
  if (testHistory.length === 0) {
    return (
        <View style={styles.emptyContainer}>
            <Image
                source={require('@/assets/images/performance.png')}
                style={styles.emptyImage}
                resizeMode="contain"
            />
            <Text style={styles.emptyTitle}>
                No Performance Data
            </Text>
            <Text style={styles.emptySubtitle}>
                Complete a Garden Test to see your progress here!
            </Text>
        </View>
    );
  }
  
  // Logic for displaying data remains the same
  const latestTest = testHistory[testHistory.length - 1];
  const latestScore = latestTest.score;
  let changeText = 'First Test';
  let changeColor = COMPONENT_COLORS.secondaryText;

  if (testHistory.length > 1) {
    const previousScore = testHistory[testHistory.length - 2].score;
    let percentageChange = 0;
    if (previousScore > 0) { percentageChange = ((latestScore - previousScore) / previousScore) * 100; } 
    else if (latestScore > 0) { percentageChange = Infinity; }

    if (isFinite(percentageChange)) {
      if (percentageChange > 0) { changeText = `+${percentageChange.toFixed(0)}%`; changeColor = COMPONENT_COLORS.accentGreen; } 
      else if (percentageChange < 0) { changeText = `${percentageChange.toFixed(0)}%`; changeColor = COMPONENT_COLORS.accentRed; } 
      else { changeText = '±0%'; }
    } else { changeText = '+100%'; changeColor = COMPONENT_COLORS.accentGreen; }
  }

  const isPerfectScore = Math.round(latestScore) === 100;
  const scoreTextStyle = [styles.performanceValue, isPerfectScore && styles.perfectScoreText, isPerfectScore && Platform.OS !== 'web' && styles.glowEffect];
      
  return (
    <View style={styles.performanceSectionContainer}>
        <View style={styles.performanceHeader}>
            <Text style={styles.performanceTitle}>Performance</Text>
            <View style={styles.performanceStatsRow}>
                <Text style={[styles.performanceChange, { color: changeColor }]}>{changeText}</Text>
                <Text style={styles.performanceLastTestsLabel}>vs previous</Text>
            </View>
        </View>
        <Text style={scoreTextStyle}>{`${Math.round(latestScore)}%`}</Text>
        <View style={styles.chartContainer}>
            <InternalPerformanceChart data={testHistory} />
            <View style={styles.chartDaysRow}>
                {testHistory.map((test, index) => (<Text key={index} style={styles.chartDayLabel}>{test.date.split(' ')[0]}</Text>))}
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    loadingContainer: { minHeight: 350, padding: 20, alignItems: 'center', justifyContent: 'center' },
    // --- UPDATED Styles for the new empty state layout ---
    emptyContainer: {
        minHeight: 350,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        gap: 16, // Adds spacing between image and text
    },
    emptyImage: {
        width: '60%', // Adjust size to look good with the text
        height: undefined,
        aspectRatio: 1, // Assumes the new image is also square
    },
    emptyTitle: {
        color: COMPONENT_COLORS.primaryText,
        fontSize: 20,
        fontFamily: COMPONENT_FONT_FAMILY_NAMES.medium,
        textAlign: 'center',
    },
    emptySubtitle: {
        color: COMPONENT_COLORS.secondaryText,
        fontSize: 14,
        fontFamily: COMPONENT_FONT_FAMILY_NAMES.regular,
        textAlign: 'center',
        marginTop: -8, // Nudge it a bit closer to the title
    },
    // --- Rest of styles are unchanged ---
    performanceSectionContainer: { paddingVertical: 24, gap: 16 },
    performanceHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 },
    performanceTitle: { color: COMPONENT_COLORS.primaryText, fontSize: 20, fontFamily: COMPONENT_FONT_FAMILY_NAMES.medium },
    performanceStatsRow: { flexDirection: 'row', gap: 4, alignItems: 'baseline' },
    performanceLastTestsLabel: { color: COMPONENT_COLORS.secondaryText, fontSize: 14, fontFamily: COMPONENT_FONT_FAMILY_NAMES.regular },
    performanceChange: { fontSize: 16, fontFamily: COMPONENT_FONT_FAMILY_NAMES.medium },
    performanceValue: { color: COMPONENT_COLORS.primaryText, fontSize: 48, fontFamily: COMPONENT_FONT_FAMILY_NAMES.bold, paddingHorizontal: 20 },
    perfectScoreText: { color: COMPONENT_COLORS.golden },
    glowEffect: { textShadowColor: COMPONENT_COLORS.golden, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 10 },
    chartWrapper: { height: CHART_VIEWBOX_HEIGHT, width: '100%' },
    chartContainer: { marginTop: 16, gap: 8 },
    chartDaysRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 },
    chartDayLabel: { color: COMPONENT_COLORS.secondaryText, fontSize: 12, fontFamily: COMPONENT_FONT_FAMILY_NAMES.regular, textAlign: 'center', flex: 1 },
    tooltipContainer: { position: 'absolute', backgroundColor: COMPONENT_COLORS.tooltipBackground, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4.65, elevation: 8, zIndex: 100 },
    tooltipScore: { color: COMPONENT_COLORS.primaryText, fontFamily: COMPONENT_FONT_FAMILY_NAMES.bold, fontSize: 16 },
    tooltipDate: { color: COMPONENT_COLORS.secondaryText, fontFamily: COMPONENT_FONT_FAMILY_NAMES.regular, fontSize: 12 }
});

export default PerformanceSection;