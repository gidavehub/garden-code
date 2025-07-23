// src/components/QuizView.js
import { Lexend_400Regular, Lexend_500Medium, Lexend_700Bold, useFonts } from '@expo-google-fonts/lexend';
import { AntDesign } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import * as SplashScreen from 'expo-splash-screen';
import { MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const Logo = require('@/assets/images/logo.png');

const COLORS = {
  bg: '#0A3D2C', // deep green background
  card: '#145D4D', // darker card
  border: '#1C5D48',
  primary: '#38e07b', // your accent green
  success: '#38e07b',
  error: '#FF6B6B',
  text: '#E0F0E8',
  muted: '#87B59A',
};

export function QuizView({ section, onQuizFinish, nextUp }) {
  const [fontsLoaded, fontError] = useFonts({ Lexend_400Regular, Lexend_500Medium, Lexend_700Bold });
  useEffect(() => { if (fontsLoaded || fontError) SplashScreen.hideAsync(); }, [fontsLoaded, fontError]);

  // hooks always in same order
  const mcq = section.mcq || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  if (!fontsLoaded && !fontError) return null;

  if (mcq.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}><Text style={styles.empty}>No quiz available.</Text></SafeAreaView>
    );
  }

  const q = mcq[current];
  const answered = selected !== null;
  const correct = answered && selected === q.correctAnswer;

  const handleSelect = (opt) => {
    if (answered) return;
    setSelected(opt);
    const isOk = opt === q.correctAnswer;
    if (isOk) { setScore(s => s + 1); Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); }
    else Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  };

  const handleNext = () => {
    if (current < mcq.length - 1) { setCurrent(c => c + 1); setSelected(null); }
    else setFinished(true);
  };

  const getStatus = (opt) => {
    if (!answered) return 'default';
    if (opt === q.correctAnswer) return 'correct';
    if (opt === selected) return 'incorrect';
    return 'default';
  };

  if (finished) {
    const label = nextUp.type === 'chapter' ? 'Next Chapter' : nextUp.type === 'end' ? 'Finish' : 'Next Section';
    return (
      <SafeAreaView style={styles.safeArea}>
        <Animated.View entering={FadeInUp} style={styles.finishContainer}>
          <Image source={Logo} style={styles.logoLarge} />
          <AntDesign name="checkcircle" size={80} color={COLORS.success} />
          <Text style={styles.title}>Quiz Completed</Text>
          <Text style={styles.score}>{score} / {mcq.length}</Text>
          <Pressable onPress={nextUp.action} style={styles.primaryButton}><Text style={styles.btnText}>{label}</Text></Pressable>
          <Pressable onPress={onQuizFinish}><Text style={styles.linkText}>Back to Section</Text></Pressable>
        </Animated.View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View entering={FadeInDown} style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.headerTitle}>Quiz Time</Text>
      </Animated.View>

      <View style={styles.content}>
        <Animated.View entering={FadeInDown.delay(100)} style={styles.progressBarWrapper}>
          <View style={styles.progressBg}><View style={[styles.progressFill, { width: `${((current + 1)/mcq.length)*100}%`}]} /></View>
          <Text style={styles.progressText}>{current+1}/{mcq.length}</Text>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(200)} style={styles.questionWrapper}>
          <Text style={styles.question}>{q.question}</Text>
        </Animated.View>

        <View style={styles.optionsWrapper}>
          {q.options.map((opt,i)=>(
            <MotiView key={i} from={{ opacity:0, translateX:-20 }} animate={{ opacity:1, translateX:0 }} transition={{ delay:i*100 }}>
              <Pressable style={[styles.option, styles[getStatus(opt)]]} onPress={()=>handleSelect(opt)} disabled={answered}>
                <Text style={[styles.optionText, getStatus(opt)!=='default' && styles.boldText]}>{opt}</Text>
                {getStatus(opt)==='correct' && <AntDesign name="checkcircle" size={24} color={COLORS.success}/>} 
                {getStatus(opt)==='incorrect' && <AntDesign name="closecircle" size={24} color={COLORS.error}/>}  
              </Pressable>
            </MotiView>
          ))}
        </View>

        {answered && (
          <Animated.View entering={FadeInUp.delay(200)} style={[styles.feedback, correct ? styles.ok : styles.nope]}>
            <Text style={styles.feedbackExplanation}>{q.explanation}</Text>
            <Pressable style={styles.primaryButton} onPress={handleNext}><Text style={styles.btnText}>{current<mcq.length-1?'Next':'Finish'}</Text></Pressable>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  safeArea: { flex:1, backgroundColor: COLORS.bg },
  header: { flexDirection:'row', alignItems:'center', padding:16, borderBottomWidth:1, borderColor:COLORS.border },
  logo: { width:32, height:32, marginRight:12 },
  logoLarge: { width:80, height:80, marginBottom:16 },
  headerTitle: { fontFamily:'Lexend_700Bold', fontSize:22, color:COLORS.primary },
  content: { flex:1, padding:16 },
  progressBarWrapper: { alignItems:'center', marginBottom:16 },
  progressBg: { width:width-64, height:8, backgroundColor:COLORS.card, borderRadius:4 },
  progressFill: { height:'100%', backgroundColor:COLORS.primary, borderRadius:4 },
  progressText: { marginTop:4, fontFamily:'Lexend_400Regular', color:COLORS.text },
  questionWrapper: { marginBottom:24 },
  question: { fontFamily:'Lexend_500Medium', fontSize:18, color:COLORS.text },
  optionsWrapper: { flex:1 },
  option: { flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderWidth:2, borderRadius:12, padding:16, marginBottom:12, backgroundColor:COLORS.card, borderColor:COLORS.border },
  default: {},
  selected: { borderColor:COLORS.primary, backgroundColor:COLORS.primary+'20' },
  correct: { borderColor:COLORS.success, backgroundColor:COLORS.success+'20' },
  incorrect: { borderColor:COLORS.error, backgroundColor:COLORS.error+'20' },
  optionText: { flex:1, fontFamily:'Lexend_400Regular', color:COLORS.text },
  boldText: { fontFamily:'Lexend_500Medium' },
  feedback: { position:'absolute', bottom:32, left:16, right:16, padding:16, borderRadius:16, alignItems:'center' },
  ok: { borderWidth:2, borderColor:COLORS.success, backgroundColor:COLORS.success+'10' },
  nope: { borderWidth:2, borderColor:COLORS.error, backgroundColor:COLORS.error+'10' },
  feedbackExplanation: { fontFamily:'Lexend_400Regular', fontSize:16, color:COLORS.text, marginBottom:12, textAlign:'center' },
  primaryButton: { backgroundColor:COLORS.primary, paddingVertical:12, paddingHorizontal:32, borderRadius:24, marginTop:12 },
  btnText: { fontFamily:'Lexend_700Bold', color:'#FFF', fontSize:16 },
  linkText: { fontFamily:'Lexend_400Regular', color:COLORS.muted, marginTop:8, textDecorationLine:'underline' },
  finishContainer: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontFamily:'Lexend_700Bold', fontSize:24, color:COLORS.text, marginTop:12 },
  score: { fontFamily:'Lexend_500Medium', fontSize:32, color:COLORS.primary, marginVertical:16 },
  empty: { flex:1, textAlign:'center', marginTop:100, fontFamily:'Lexend_400Regular', color:COLORS.muted }
});
