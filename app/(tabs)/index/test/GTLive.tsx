// app/(tabs)/index/test/GTLive.tsx

import { ASYNC_STORAGE_TEST_HISTORY_KEY } from '@/data/gtConstants';
import { app } from '@/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { AnimatePresence, MotiImage, MotiView } from 'moti';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Alert,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- (Other sub-components like BriefingScreen, ReviewScreen, TestingScreen are UNCHANGED) ---
// Type definitions
type Question = {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
};
type SubjectSection = {
    subjectId: string;
    subjectName: string;
    coverImage: any;
    questions: Question[];
    sectionType: 'Easy' | 'Hard';
};
type SubjectBreakdown = {
    easy: Question[];
    hard: Question[];
    name: string;
    id: string;
    coverImage: any;
};

// ===================================================================
// SUB-COMPONENT: BriefingScreen (Unchanged)
// ===================================================================
const BriefingScreen = ({ session, onStart, totalSections, timeLeft }: {
    session: SubjectSection;
    onStart: () => void;
    totalSections: number;
    timeLeft: number;
}) => {
    const timePerSection = Math.round((Number(useLocalSearchParams().timeLimit) * 60) / totalSections);
    const minutesPerSection = Math.floor(timePerSection / 60);

    return (
        <View style={styles.stateContainer}>
            <ImageBackground source={session.coverImage} style={styles.briefingBg} blurRadius={20}>
                <LinearGradient colors={['rgba(10, 23, 16, 0.4)', 'rgba(10, 23, 16, 0.9)', '#0A1710']} style={StyleSheet.absoluteFill} />
            </ImageBackground>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <MotiView style={styles.briefingContent} from={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'timing', duration: 600 }}>
                    <Text style={styles.briefingSectionTitle}>Section: {session.sectionType}</Text>
                    <MotiImage source={session.coverImage} style={styles.briefingImage} from={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ type: 'timing', duration: 1000 }} />
                    <Text style={styles.briefingSubject}>{session.subjectName}</Text>
                    <View style={styles.briefingInfoCard}>
                        <View style={styles.infoRow}><Text style={styles.infoLabel}>Questions</Text><Text style={styles.infoValue}>{session.questions.length}</Text></View>
                        <View style={styles.infoRow}><Text style={styles.infoLabel}>Allocated Time</Text><Text style={styles.infoValue}>≈ {minutesPerSection} mins</Text></View>
                        <View style={styles.infoRow}><Text style={styles.infoLabel}>Total Time Left</Text><Text style={styles.infoValue}>{Math.floor(timeLeft / 60)}m {timeLeft % 60}s</Text></View>
                    </View>
                    <View style={styles.rulesCard}>
                        <Text style={styles.ruleText}>• Do not leave the test screen.</Text>
                        <Text style={styles.ruleText}>• The main timer continues during subject breaks.</Text>
                        <Text style={styles.ruleText}>• Malpractice leads to disqualification.</Text>
                    </View>
                </MotiView>
            </ScrollView>
            <MotiView style={styles.briefingFooter} from={{ translateY: 100 }} animate={{ translateY: 0 }} transition={{ type: 'spring', damping: 20 }}>
                <TouchableOpacity onPress={onStart} style={styles.startButton} activeOpacity={0.8}>
                    <Text style={styles.startButtonText}>Begin Section</Text>
                    <Ionicons name="arrow-forward" size={24} color="#0A1710" />
                </TouchableOpacity>
            </MotiView>
        </View>
    );
};

// ===================================================================
// SUB-COMPONENT: ReviewScreen (Unchanged)
// ===================================================================
const ReviewScreen = ({ onContinue, subjectBreakdown, answers, baseGlobalIndex, isFinalReview }: {
    onContinue: () => void;
    subjectBreakdown: SubjectBreakdown;
    answers: (string | null)[];
    baseGlobalIndex: number;
    isFinalReview: boolean;
}) => {
    const [breakSeconds, setBreakSeconds] = useState(600);
    const breakTimerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        breakTimerRef.current = setInterval(() => setBreakSeconds(p => (p > 0 ? p - 1 : 0)), 1000);
        return () => clearInterval(breakTimerRef.current!);
    }, []);

    const allQuestions = [...subjectBreakdown.easy, ...subjectBreakdown.hard];
    const correctCount = allQuestions.reduce((s: number, q: Question, i: number) => s + (answers[baseGlobalIndex + i] === q.answer ? 1 : 0), 0);
    const mins = Math.floor(breakSeconds / 60);
    const secs = breakSeconds % 60;

    return (
        <ScrollView contentContainerStyle={styles.reviewContainer}>
            <MotiView from={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={styles.reviewHeaderCard}>
                <Ionicons name="flag-outline" size={50} color={'#38e07b'} />
                <Text style={styles.reviewTitle}>Review: {subjectBreakdown.name}</Text>
                <Text style={styles.reviewSummaryScore}>You scored <Text style={{ fontWeight: 'bold' }}>{correctCount} / {allQuestions.length}</Text></Text>
                <View style={styles.breakTimerContainer}>
                    <Ionicons name="alarm-outline" size={20} color="#38e07b" />
                    <Text style={styles.breakTimerText}>{breakSeconds > 0 ? `Break Time: ${mins}:${secs.toString().padStart(2, '0')}` : "Break Over!"}</Text>
                </View>
            </MotiView>
            {allQuestions.map((q: Question, idx: number) => {
                const userAnswer = answers[baseGlobalIndex + idx];
                const isCorrect = userAnswer === q.answer;
                return (
                    <MotiView key={`review-${q.question.slice(0, 10)}-${idx}`} from={{ opacity: 0, translateX: -20 }} animate={{ opacity: 1, translateX: 0 }} transition={{ type: 'timing', delay: 100 + idx * 50 }} style={[styles.reviewQuestionCard, { borderColor: isCorrect ? '#2a5a3a' : '#8c2b2b' }]}>
                        <Text style={styles.reviewQuestionText}><Text style={{ color: '#87B59A' }}>Q{idx + 1}:</Text> {q.question}</Text>
                        <View style={[styles.answerRow, { backgroundColor: isCorrect ? 'rgba(56, 224, 123, 0.1)' : 'rgba(248, 113, 113, 0.1)' }]}>
                            <Ionicons name={isCorrect ? "checkmark-circle" : "close-circle"} size={20} color={isCorrect ? '#38e07b' : '#f87171'} />
                            <Text style={styles.answerLabel}>Your Answer: <Text style={{ color: '#E0F0E8' }}>{userAnswer || 'Not Answered'}</Text></Text>
                        </View>
                        {!isCorrect &&
                            <View style={[styles.answerRow, { marginTop: 8, backgroundColor: 'rgba(56, 224, 123, 0.1)' }]}>
                                <Ionicons name="checkmark-circle" size={20} color={'#38e07b'} />
                                <Text style={styles.answerLabel}>Correct Answer: <Text style={{ color: '#E0F0E8' }}>{q.answer}</Text></Text>
                            </View>
                        }
                        <Text style={styles.explanationText}>Rationale: {q.explanation}</Text>
                    </MotiView>
                )
            })}
            <TouchableOpacity onPress={onContinue} style={[styles.startButton, { marginBottom: 40, marginTop: 16 }]}>
                <Text style={styles.startButtonText}>{isFinalReview ? 'Finish & See Results' : 'Continue'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

// ===================================================================
// SUB-COMPONENT: TestingScreen (Unchanged)
// ===================================================================
const TestingScreen = ({ question, onAnswer, globalQuestionNumber, totalQuestions, onNext, onPrev, isLast, isFirst, currentAnswer }: {
    question: Question;
    onAnswer: (option: string) => void;
    globalQuestionNumber: number;
    totalQuestions: number;
    onNext: () => void;
    onPrev: () => void;
    isLast: boolean;
    isFirst: boolean;
    currentAnswer: string | null;
}) => {
    return (
        <View style={[styles.stateContainer, { paddingHorizontal: 0 }]}>
            <Progress.Bar progress={globalQuestionNumber / totalQuestions} width={null} style={styles.progressBar} color="#38e07b" unfilledColor='rgba(135, 181, 154, 0.2)' borderWidth={0} />
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <MotiView key={question.question} from={{ opacity: 0, translateX: 50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ type: 'timing', duration: 400 }}>
                    <Text style={styles.questionCounter}>Question {globalQuestionNumber} of {totalQuestions}</Text>
                    <Text style={styles.questionText}>{question.question}</Text>
                </MotiView>
                <MotiView from={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', delay: 200 }}>
                    {question.options.map((opt: string, index: number) => {
                        const isSelected = currentAnswer === opt;
                        return (
                            <TouchableOpacity key={`${question.question.slice(0, 5)}-${index}`} style={styles.optionButton} onPress={() => onAnswer(opt)} activeOpacity={0.8}>
                                <MotiView style={[styles.optionInner, isSelected && styles.optionSelected]} transition={{ type: 'timing', duration: 200 }}>
                                    <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>{opt}</Text>
                                    <MotiView style={styles.optionCheckCircle} animate={{ borderColor: isSelected ? '#38e07b' : '#2A3C32' }}>
                                        {isSelected && <MotiView style={styles.optionCheckInner} from={{ scale: 0 }} animate={{ scale: 1 }} />}
                                    </MotiView>
                                </MotiView>
                            </TouchableOpacity>
                        )
                    })}
                </MotiView>
            </ScrollView>
            <View style={styles.navButtons}>
                <TouchableOpacity onPress={onPrev} disabled={isFirst} style={[styles.navButton, isFirst && { opacity: 0.5 }]}>
                    <Ionicons name="chevron-back" size={24} color="#E0F0E8" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onNext} style={[styles.navButton, { backgroundColor: '#38e07b' }]}>
                    <Text style={[styles.navText, { color: '#0A1710' }]}>{isLast ? 'Finish & Review' : 'Next'}</Text>
                    <Ionicons name="chevron-forward" size={24} color="#0A1710" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// ===================================================================
// MAIN EXAM COMPONENT (Logic in handleSubmit is updated)
// ===================================================================
export default function GTLiveScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const netInfo = useNetInfo();

    const testIndex = Number(params.testIndex);
    const testName = params.testName as string;
    const totalExamTimeInSeconds = useMemo(() => Number(params.timeLimit) * 60, [params.timeLimit]);

    const [examState, setExamState] = useState<'briefing' | 'testing' | 'review'>('briefing');
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(totalExamTimeInSeconds);
    const timerRef = useRef<NodeJS.Timeout>();

    const { sessions, allQuestions, totalQuestions, allSubjectBreakdowns } = useMemo(() => {
        try {
            if (!params.exam || typeof params.exam !== 'string') throw new Error("Exam parameter is missing or not a string.");
            const structuredExam = JSON.parse(params.exam);
            const s: SubjectSection[] = [], q: Question[] = [], breakdowns: { [key: string]: SubjectBreakdown } = {};
            structuredExam.forEach((subject: any) => {
                if (!breakdowns[subject.subjectId]) breakdowns[subject.subjectId] = { easy: [], hard: [], name: subject.subjectName, id: subject.subjectId, coverImage: subject.coverImage };
                if (subject.easy?.length > 0) { s.push({ ...subject, questions: subject.easy, sectionType: 'Easy' }); q.push(...subject.easy); breakdowns[subject.subjectId].easy = subject.easy; }
                if (subject.hard?.length > 0) { s.push({ ...subject, questions: subject.hard, sectionType: 'Hard' }); q.push(...subject.hard); breakdowns[subject.subjectId].hard = subject.hard; }
            });
            return { sessions: s, allQuestions: q, totalQuestions: q.length, allSubjectBreakdowns: breakdowns };
        } catch (e) {
            console.error("Failed to parse exam data:", e);
            Alert.alert("Exam Error", "There was a problem loading the test data. Please go back and try again.", [{ text: "Go Back", onPress: () => router.back() }]);
            return { sessions: [], allQuestions: [], totalQuestions: 0, allSubjectBreakdowns: {} };
        }
    }, [params.exam, router]);

    const [answers, setAnswers] = useState<(string | null)[]>(() => Array(totalQuestions).fill(null));

    const getGlobalIndex = (sessionIdx: number, questionIdx: number): number => {
        let globalIndex = 0;
        for (let i = 0; i < sessionIdx; i++) globalIndex += sessions[i].questions.length;
        return globalIndex + questionIdx;
    };

    const currentSession = sessions[currentSessionIndex];
    const currentQuestion = currentSession?.questions[currentQuestionIndex];
    const globalQuestionIndex = getGlobalIndex(currentSessionIndex, currentQuestionIndex);

    // [MODIFIED] Logic is updated to handle isSynced flag
    const handleSubmit = async () => {
        clearInterval(timerRef.current!);
        const isOnline = netInfo.isConnected === true && netInfo.isInternetReachable === true;

        const perPoint = Number(params.maxScore) / totalQuestions;
        const finalScore = Math.round(allQuestions.reduce((sum, question, idx) => sum + (answers[idx] === question.answer ? perPoint : 0), 0));

        let answerIdxCounter = 0;
        const completedSubjects = Object.values(allSubjectBreakdowns).map(subject => {
            const numQuestionsInSubject = subject.easy.length + subject.hard.length;
            const subjectAnswers = answers.slice(answerIdxCounter, answerIdxCounter + numQuestionsInSubject);
            answerIdxCounter += numQuestionsInSubject;
            return { id: subject.id, name: subject.name, coverImage: subject.coverImage, questions: [...subject.easy, ...subject.hard], userAnswers: subjectAnswers };
        });

        const completedTest = {
            id: `gt_${testIndex}_${new Date().toISOString()}`,
            name: `${testName} GT`,
            dateCompleted: new Date().toISOString(),
            score: finalScore,
            maxScore: Number(params.maxScore),
            subjects: completedSubjects,
            isSynced: isOnline, // Set isSynced based on current network status
        };

        try {
            // STEP 1: Save to device storage FIRST. This is non-negotiable.
            const historyJson = await AsyncStorage.getItem(ASYNC_STORAGE_TEST_HISTORY_KEY);
            const history = historyJson ? JSON.parse(historyJson) : [];
            await AsyncStorage.setItem(ASYNC_STORAGE_TEST_HISTORY_KEY, JSON.stringify([...history, completedTest]));
            console.log('Test saved locally successfully.');

            // STEP 2: IF online, attempt to save to Firestore.
            if (isOnline) {
                const userJson = await AsyncStorage.getItem('user');
                if (userJson) {
                    const userData = JSON.parse(userJson);
                    const userEmail = userData.email;
                    if (userEmail) {
                        const completedTestForFirestore = { ...completedTest, subjects: completedTest.subjects.map(s => ({ ...s, coverImage: null })) };
                        delete completedTestForFirestore.isSynced; // Don't need to store this field in Firestore itself
                        const db = getFirestore(app);
                        const testDocRef = doc(db, 'users', userEmail, 'testHistory', completedTest.id);
                        await setDoc(testDocRef, completedTestForFirestore);
                        console.log('Test result also saved to Firestore successfully!');
                    } else { console.log('Email not found. Cannot save to Firestore.'); }
                } else { console.log('User data not found. Cannot save to Firestore.'); }
            } else { console.log('Offline. Test saved locally, will be synced later.'); }
        } catch (e) {
            console.error("Failed to save test result", e);
            Alert.alert("Save Error", "Could not save your test result to the cloud, but it has been saved on your device.");
        }
        router.replace({ pathname: '/test/GTResult', params: { score: String(finalScore), maxScore: String(params.maxScore), testName: testName } });
    };

    // --- (Rest of component is UNCHANGED) ---
    useEffect(() => {
        timerRef.current = setInterval(() => { setSecondsLeft(prev => { if (prev <= 1) { clearInterval(timerRef.current!); handleSubmit(); return 0; } return prev - 1; }); }, 1000);
        return () => clearInterval(timerRef.current!);
    }, []);
    const handleAnswer = (option: string) => { setAnswers(prev => { const newAnswers = [...prev]; newAnswers[globalQuestionIndex] = option; return newAnswers; }); };
    const handleNext = () => { const isLastQuestionInSession = currentQuestionIndex === currentSession.questions.length - 1; if (!isLastQuestionInSession) { setCurrentQuestionIndex(i => i + 1); } else { const isHardSection = currentSession.sectionType === 'Hard'; const nextSessionStartsNewSubject = currentSessionIndex + 1 >= sessions.length || sessions[currentSessionIndex].subjectId !== sessions[currentSessionIndex + 1]?.subjectId; if (isHardSection || nextSessionStartsNewSubject) { setExamState('review'); } else { setCurrentSessionIndex(i => i + 1); setCurrentQuestionIndex(0); setExamState('briefing'); } } };
    const handlePrev = () => { if (currentQuestionIndex > 0) { setCurrentQuestionIndex(i => i - 1); } else if (currentSessionIndex > 0) { const prevSessionIndex = currentSessionIndex - 1; setCurrentSessionIndex(prevSessionIndex); setCurrentQuestionIndex(sessions[prevSessionIndex].questions.length - 1); setExamState('testing'); } };
    const handleContinueFromReview = () => { const nextSubjectSessionIndex = sessions.findIndex(s => s.subjectId !== currentSession.subjectId && sessions.indexOf(s) > currentSessionIndex); if (nextSubjectSessionIndex !== -1) { setCurrentSessionIndex(nextSubjectSessionIndex); setCurrentQuestionIndex(0); setExamState('briefing'); } else { handleSubmit(); } };
    if (totalQuestions === 0) { return ( <SafeAreaView style={styles.safeArea}><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={styles.reviewTitle}>Error Loading Test</Text></View></SafeAreaView> ); }
    const minutes = Math.floor(secondsLeft / 60); const seconds = secondsLeft % 60; const isLastQuestionOfAll = currentSessionIndex === sessions.length - 1 && currentQuestionIndex === currentSession.questions.length - 1; const isFirstQuestionOfAll = currentSessionIndex === 0 && currentQuestionIndex === 0; const isFinalReview = sessions.findIndex(s => s.subjectId !== currentSession.subjectId && sessions.indexOf(s) > currentSessionIndex) === -1; const firstSessionOfThisSubjectIndex = sessions.findIndex(s => s.subjectId === currentSession.subjectId); const baseGlobalIndexForReview = getGlobalIndex(firstSessionOfThisSubjectIndex, 0);

    return ( <View style={{ flex: 1 }}> <Image source={require('@/assets/images/dark-pattern.png')} style={styles.bgPattern} resizeMode='repeat' /> <LinearGradient colors={['rgba(26, 51, 37, 0.95)', '#0A1710']} style={StyleSheet.absoluteFill} /> <SafeAreaView style={styles.safeArea}> <MotiView style={styles.header} from={{ translateY: -100 }} animate={{ translateY: 0 }} transition={{ type: 'spring', damping: 20 }}> <TouchableOpacity onPress={() => router.back()} style={{ padding: 5 }}> <Ionicons name="close-outline" size={28} color="#87B59A" /> </TouchableOpacity> {currentSession && ( <View style={styles.headerSubject}> <Image source={currentSession.coverImage} style={styles.subjectIcon} /> <Text style={styles.headerSubjectText} numberOfLines={1}> {currentSession.subjectName} </Text> </View> )} <View style={styles.timer}> <Ionicons name="time-outline" size={20} color="#87B59A" /> <Text style={styles.timerText}> {minutes}:{seconds.toString().padStart(2, '0')} </Text> </View> </MotiView> <AnimatePresence exitBeforeEnter> {examState === 'briefing' && currentSession && <BriefingScreen key="briefing" session={currentSession} onStart={() => setExamState('testing')} totalSections={sessions.length} timeLeft={secondsLeft} /> } {examState === 'testing' && currentQuestion && <TestingScreen key={`testing-${globalQuestionIndex}`} question={currentQuestion} onAnswer={handleAnswer} globalQuestionNumber={globalQuestionIndex + 1} totalQuestions={totalQuestions} onNext={handleNext} onPrev={handlePrev} isLast={isLastQuestionOfAll} isFirst={isFirstQuestionOfAll} currentAnswer={answers[globalQuestionIndex]} /> } {examState === 'review' && currentSession && <ReviewScreen key="review" onContinue={handleContinueFromReview} subjectBreakdown={allSubjectBreakdowns[currentSession.subjectId]} answers={answers} baseGlobalIndex={baseGlobalIndexForReview} isFinalReview={isFinalReview} /> } </AnimatePresence> </SafeAreaView> </View> );
}

const styles = StyleSheet.create({
    bgPattern: { ...StyleSheet.absoluteFillObject, opacity: 0.1, tintColor: '#fff' },
    safeArea: { flex: 1 },
    stateContainer: { flex: 1 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, backgroundColor: 'rgba(18, 36, 25, 0.7)', borderBottomWidth: 1, borderColor: 'rgba(135, 181, 154, 0.2)' },
    headerSubject: { flexDirection: 'row', alignItems: 'center', gap: 8, flexShrink: 1, paddingHorizontal: 10 },
    subjectIcon: { width: 32, height: 32, borderRadius: 16 },
    headerSubjectText: { fontSize: 16, color: '#E0F0E8', fontWeight: 'bold' },
    timer: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    timerText: { fontSize: 16, color: '#E0F0E8', fontWeight: 'bold' },
    briefingBg: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
    briefingContent: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, paddingBottom: 20 },
    briefingSectionTitle: { color: '#87B59A', fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase', letterSpacing: 1 },
    briefingImage: { width: 150, height: 150, borderRadius: 75, borderWidth: 4, borderColor: '#fff', marginVertical: 24, shadowColor: "#000", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.5, shadowRadius: 20 },
    briefingSubject: { color: '#fff', fontSize: 32, fontWeight: '900', textAlign: 'center', marginBottom: 24 },
    briefingInfoCard: { backgroundColor: 'rgba(18, 36, 25, 0.7)', borderRadius: 12, padding: 16, width: '100%', marginBottom: 16, borderWidth: 1, borderColor: 'rgba(135, 181, 154, 0.2)' },
    infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(135, 181, 154, 0.1)', paddingBottom: 10 },
    infoLabel: { fontSize: 16, color: '#87B59A' },
    infoValue: { fontSize: 16, color: '#E0F0E8', fontWeight: '600' },
    rulesCard: { backgroundColor: 'rgba(18, 36, 25, 0.7)', borderRadius: 12, padding: 16, width: '100%', borderWidth: 1, borderColor: 'rgba(135, 181, 154, 0.2)' },
    ruleText: { fontSize: 14, color: '#E0F0E8', marginBottom: 8, lineHeight: 20 },
    briefingFooter: { padding: 20, paddingTop: 10, width: '100%', alignItems: 'center', backgroundColor: '#0A1710' },
    startButton: { backgroundColor: '#38e07b', flexDirection: 'row', width: '100%', paddingVertical: 16, paddingHorizontal: 32, borderRadius: 30, alignItems: 'center', justifyContent: 'center', gap: 10 },
    startButtonText: { color: '#0A1710', fontSize: 18, fontWeight: 'bold' },
    progressBar: { width: '100%', borderRadius: 0 },
    questionCounter: { color: '#87B59A', fontSize: 15, fontWeight: '600', textAlign: 'center', marginBottom: 16 },
    questionText: { color: '#E0F0E8', fontSize: 22, fontWeight: '500', textAlign: 'center', lineHeight: 32, marginBottom: 32 },
    optionButton: { marginBottom: 12 },
    optionInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#122419', borderWidth: 1.5, borderColor: '#2A3C32', padding: 16, borderRadius: 16 },
    optionSelected: { borderColor: '#38e07b' },
    optionText: { color: '#E0F0E8', fontSize: 17, flex: 1, lineHeight: 22 },
    optionTextSelected: { color: '#38e07b', fontWeight: 'bold' },
    optionCheckCircle: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, justifyContent: 'center', alignItems: 'center' },
    optionCheckInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#38e07b' },
    navButtons: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderTopWidth: 1, borderColor: 'rgba(135, 181, 154, 0.2)' },
    navButton: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(135, 181, 154, 0.2)', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 20 },
    navText: { color: '#E0F0E8', fontSize: 16, fontWeight: 'bold' },
    reviewContainer: { paddingBottom: 40 },
    reviewHeaderCard: { backgroundColor: '#122419', borderRadius: 24, padding: 24, alignItems: 'center', margin: 16 },
    reviewTitle: { fontSize: 24, color: '#E0F0E8', fontWeight: 'bold', marginTop: 12, textAlign: 'center' },
    reviewSummaryScore: { fontSize: 18, color: '#87B59A', marginTop: 4 },
    breakTimerContainer: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 16, backgroundColor: '#0A1710', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#2A3C32' },
    breakTimerText: { color: '#38e07b', fontSize: 16, fontWeight: 'bold' },
    reviewQuestionCard: { backgroundColor: '#122419', borderRadius: 16, padding: 16, marginHorizontal: 16, marginBottom: 16, borderWidth: 1 },
    reviewQuestionText: { color: '#E0F0E8', fontSize: 17, fontWeight: '500', marginBottom: 12, lineHeight: 24 },
    answerRow: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 10, gap: 8 },
    answerLabel: { fontSize: 14, color: '#87B59A', fontWeight: 'bold', flexShrink: 1, lineHeight: 18 },
    explanationText: { color: '#87B59A', fontSize: 15, marginTop: 12, lineHeight: 22, fontStyle: 'italic' },
});