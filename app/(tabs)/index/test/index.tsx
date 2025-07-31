// app/(tabs)/index/test/index.tsx

// --- IMPORTS (Unchanged) ---
import { ASYNC_STORAGE_TEST_HISTORY_KEY, GT_NAMES } from '@/data/gtConstants';
import { app } from '@/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useRouter } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { collection, doc, getDocs, getFirestore, orderBy, query, writeBatch } from 'firebase/firestore';
import { MotiImage, MotiView } from 'moti';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';

// --- SCORE CIRCLE COMPONENT (Unchanged) ---
const SCORE_CIRCLE_SIZE = 44;
const STROKE_WIDTH = 4.5;
const RADIUS = (SCORE_CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const ScoreCircle = ({ score, maxScore }: { score: number; maxScore: number }) => {
    const percentage = maxScore > 0 ? score / maxScore : 0;
    const scoreColor = percentage > 0.7 ? '#2E8540' : percentage > 0.4 ? '#DDA42E' : '#E53E3E';
    return ( <View style={styles.scoreCircleContainer}><Svg width={SCORE_CIRCLE_SIZE} height={SCORE_CIRCLE_SIZE} viewBox={`0 0 ${SCORE_CIRCLE_SIZE} ${SCORE_CIRCLE_SIZE}`}><Circle cx={SCORE_CIRCLE_SIZE/2} cy={SCORE_CIRCLE_SIZE/2} r={RADIUS} stroke="#000000" strokeOpacity={0.1} strokeWidth={STROKE_WIDTH-1} /><Circle cx={SCORE_CIRCLE_SIZE/2} cy={SCORE_CIRCLE_SIZE/2} r={RADIUS} stroke={scoreColor} strokeWidth={STROKE_WIDTH} strokeDasharray={CIRCUMFERENCE} strokeDashoffset={CIRCUMFERENCE - CIRCUMFERENCE * percentage} strokeLinecap="round" transform={`rotate(-90 ${SCORE_CIRCLE_SIZE / 2} ${SCORE_CIRCLE_SIZE / 2})`} /></Svg><Text style={[styles.scoreCircleText, { color: scoreColor }]}>{score}</Text></View> );
};

// [NEW] TYPE DEFINITION including the isSynced flag
type CompletedTest = { id: string; name: string; dateCompleted: string; score: number; maxScore: number; subjects: any[]; isSynced: boolean; };

export default function GTLandingScreen() {
    const router = useRouter();
    const [history, setHistory] = useState<CompletedTest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false); // New state for sync indicator
    const [loadingTestId, setLoadingTestId] = useState<string | null>(null);
    const netInfo = useNetInfo();

    // --- [NEW] HEAVILY MODIFIED LOGIC for two-way data sync ---
    useFocusEffect(useCallback(() => {
        setLoadingTestId(null);
        
        const loadAndSyncHistory = async () => {
            setIsLoading(true);
            let localHistory: CompletedTest[] = [];
            try {
                // 1. ALWAYS load local data first for a fast UI response.
                const localHistoryJson = await AsyncStorage.getItem(ASYNC_STORAGE_TEST_HISTORY_KEY);
                localHistory = localHistoryJson ? JSON.parse(localHistoryJson) : [];
                setHistory(localHistory);
            } catch (e) { console.error("Failed to load local history.", e); } 
            finally { setIsLoading(false); }

            // 2. If online and authenticated, begin the two-way sync process.
            const isOnline = netInfo.isConnected === true && netInfo.isInternetReachable === true;
            const auth = getAuth(app);
            if (!isOnline || !auth.currentUser) return; // Exit if offline or not logged in

            setIsSyncing(true);
            try {
                const userJson = await AsyncStorage.getItem('user');
                if (!userJson) return; // Exit if no user data
                
                const userEmail = JSON.parse(userJson).email;
                if (!userEmail) return; // Exit if no email
                
                // Fetch remote data
                const db = getFirestore(app);
                const historyCollectionRef = collection(db, 'users', userEmail, 'testHistory');
                const q = query(historyCollectionRef, orderBy('dateCompleted', 'desc'));
                const querySnapshot = await getDocs(q);
                const firestoreHistory: CompletedTest[] = querySnapshot.docs.map(doc => ({...doc.data(), isSynced: true} as CompletedTest));

                // 3. Perform two-way sync
                const localIdSet = new Set(localHistory.map(t => t.id));
                const firestoreIdSet = new Set(firestoreHistory.map(t => t.id));

                const testsToUpload = localHistory.filter(t => !t.isSynced);
                const testsToDownload = firestoreHistory.filter(t => !localIdSet.has(t.id));

                let wasChanged = false;

                // UPLOAD local unsynced tests
                if (testsToUpload.length > 0) {
                    const batch = writeBatch(db);
                    testsToUpload.forEach(test => {
                        const testForFirestore = { ...test };
                        // Don't store isSynced field in Firestore, or local-only image functions
                        delete testForFirestore.isSynced; 
                        testForFirestore.subjects = testForFirestore.subjects.map(s => ({...s, coverImage: null}));
                        
                        const docRef = doc(db, 'users', userEmail, 'testHistory', test.id);
                        batch.set(docRef, testForFirestore);
                    });
                    await batch.commit();
                    console.log(`Uploaded ${testsToUpload.length} unsynced tests.`);
                    wasChanged = true;
                }

                // If any changes occurred (uploads or downloads), merge and update state
                if (wasChanged || testsToDownload.length > 0) {
                    const mergedHistory = [...localHistory];
                    
                    // Add downloaded tests to our local list
                    mergedHistory.push(...testsToDownload);
                    
                    // Mark uploaded tests as synced
                    const uploadedIds = new Set(testsToUpload.map(t => t.id));
                    const finalHistory = mergedHistory.map(test => uploadedIds.has(test.id) ? { ...test, isSynced: true } : test);
                    
                    finalHistory.sort((a, b) => new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime());

                    setHistory(finalHistory);
                    await AsyncStorage.setItem(ASYNC_STORAGE_TEST_HISTORY_KEY, JSON.stringify(finalHistory));
                    console.log('Local history fully synced with Firestore.');
                }

            } catch (e) { console.error("Failed to sync test history.", e); }
            finally { setIsSyncing(false); }
        };

        loadAndSyncHistory();
    }, [netInfo.isConnected, netInfo.isInternetReachable])); // Re-run when connection is established

    const nextTestIndex = history.length;
    const currentYear = new Date().getFullYear();
    const isExamSeriesComplete = nextTestIndex >= GT_NAMES.length;
    const navigateToSubjectSelector = () => router.push({ pathname: '/test/subjects', params: { testIndex: String(nextTestIndex), testName: GT_NAMES[nextTestIndex] } });
    const navigateToReview = (test: CompletedTest) => { setLoadingTestId(test.id); setTimeout(() => router.push({ pathname: `/test/${test.id}`, params: { testData: JSON.stringify(test) } }), 500); };
    
    if (isLoading) { return <LinearGradient colors={['#D4E7C5', '#BFD8AF']} style={styles.gradient}><SafeAreaView style={[styles.safeArea, { justifyContent: 'center' }]}><ActivityIndicator size="large" color="#1a3325" /></SafeAreaView></LinearGradient>; }

    return (
        <LinearGradient colors={['#f3f9ef', '#dde9d5']} style={styles.gradient}>
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="close-outline" size={28} color="#1a3325" />
                </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.container}>
                    {/* Header, Title, Action Card... (Unchanged) */}
                    <MotiView style={styles.sunburstEmblem} from={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', damping: 15 }}><MotiView style={styles.sunburstInner} from={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12, delay: 150 }}><MotiImage source={require('@/assets/images/logo.png')} style={styles.headerLogo} from={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', delay: 300 }} /></MotiView></MotiView>
                    <MotiView from={{opacity:0, translateY: 10}} animate={{opacity:1, translateY:0}} transition={{type: 'timing', delay: 400, duration: 500}}><Text style={styles.title}>Garden Tests</Text><Text style={styles.subtitle}>{currentYear} Series</Text></MotiView>
                    <MotiView from={{ opacity: 0, scale: 0.95, translateY: 20 }} animate={{ opacity: 1, scale: 1, translateY: 0 }} transition={{ type: 'timing', duration: 500, delay: 500 }}><View style={[styles.tile]}><View style={styles.tileHeaderRow}><Ionicons name="leaf-outline" size={20} color={'#2a5a3a'}/><Text style={styles.tileSubheader}>UP NEXT</Text></View><Text style={styles.tileHeader}>{isExamSeriesComplete ? 'Series Complete!' : `${GT_NAMES[nextTestIndex]} GT`}</Text><Text style={styles.tileDescription}>{isExamSeriesComplete ? "You've conquered this year's challenges. Well done! 🌳" : `Test #${nextTestIndex + 1} of ${GT_NAMES.length} in the series.`}</Text>{!isExamSeriesComplete && (<TouchableOpacity style={styles.beginButton} activeOpacity={0.8} onPress={navigateToSubjectSelector}><Text style={styles.beginButtonText}>Begin Test</Text><Ionicons name="arrow-forward-outline" size={20} color="#FEFEFE" /></TouchableOpacity>)}</View></MotiView>

                    {history.length > 0 && (
                        <>
                            <View style={styles.historyHeader}>
                                <Text style={styles.historyTitle}>Test History</Text>
                                {/* [NEW] Syncing Indicator */}
                                {isSyncing && <View style={styles.syncingIndicator}><ActivityIndicator size="small" color="#446955" /><Text style={styles.syncingText}>Syncing...</Text></View>}
                            </View>
                            
                            {/* Sorting is already handled by the sync logic, but kept here as a fallback */}
                            {history.slice().sort((a, b) => new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime()).map((test, index) => (
                                <MotiView key={test.id} from={{ opacity: 0, translateX: -20 }} animate={{ opacity: 1, translateX: 0 }} transition={{ type: 'timing', duration: 400, delay: 100 + index * 100 }}>
                                    <TouchableOpacity style={styles.historyItem} onPress={() => navigateToReview(test)} disabled={loadingTestId !== null}>
                                        <View style={{ flex: 1, marginRight: 8 }}>
                                            <Text style={styles.historyName}>{test.name}</Text>
                                            <View style={styles.historyDetailsRow}>
                                                {/* [NEW] Sync Status Icon */}
                                                <Ionicons name={test.isSynced ? "cloud-done-outline" : "cloud-offline-outline"} size={16} color={test.isSynced ? "#2E8540" : "#999"} />
                                                <Text style={styles.historyDate}>Completed {new Date(test.dateCompleted).toLocaleDateString()}</Text>
                                            </View>
                                        </View>
                                        {loadingTestId === test.id ? (<MotiView from={{rotate:"0deg"}} animate={{rotate:"360deg"}} transition={{loop:true,type:'timing',duration:800}} style={{width:44,height:44}}><MotiImage source={require('@/assets/images/logo.png')} style={styles.loaderLogo}/></MotiView>) : (<ScoreCircle score={test.score} maxScore={test.maxScore} />)}
                                    </TouchableOpacity>
                                </MotiView>
                            ))}
                        </>
                    )}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

// --- [NEW STYLES ADDED] Stylesheet (Most is Unchanged) ---
const styles = StyleSheet.create({
    gradient: { flex: 1 },
    safeArea: { flex: 1 },
    backButton: { position: 'absolute', top: 60, right: 20, zIndex: 10, width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(0, 0, 0, 0.05)', borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
    container: { paddingTop: 20, paddingHorizontal: 24, paddingBottom: 50 },
    sunburstEmblem: { width: 120, height: 120, borderRadius: 60, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cddfc6' },
    sunburstInner: { width: 110, height: 110, borderRadius: 55, backgroundColor: '#FCFFF5', justifyContent: 'center', alignItems: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 },
    headerLogo: { width: 60, height: 60 },
    title: { fontSize: 36, fontWeight: '900', color: '#1a3325', marginTop: 24, textAlign: 'center' },
    subtitle: { fontSize: 18, color: '#446955', textAlign: 'center', marginTop: 4, marginBottom: 32, fontWeight: '500' },
    tile: { backgroundColor: '#FCFFF5', borderRadius: 28, padding: 24, borderColor: '#ffffff', borderWidth: 2, marginBottom: 32, shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 10 },
    tileHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    tileSubheader: { fontSize: 15, fontWeight: '700', color: '#2a5a3a' },
    tileHeader: { fontSize: 28, fontWeight: 'bold', color: '#1a3325', marginTop: 8 },
    tileDescription: { fontSize: 16, color: '#446955', marginTop: 12, lineHeight: 23 },
    beginButton: { backgroundColor: '#1a3325', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 20, marginTop: 20, gap: 10, shadowColor: '#1a3325', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 6 },
    beginButtonText: { color: '#FEFEFE', fontSize: 17, fontWeight: 'bold' },
    historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, marginLeft: 4 },
    historyTitle: { fontSize: 24, fontWeight: 'bold', color: '#1a3325' },
    syncingIndicator: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#e9f0ec', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 },
    syncingText: { color: '#446955', fontSize: 14, fontWeight: '500' },
    historyItem: { backgroundColor: '#e9f0ec', borderRadius: 20, borderColor: '#ffffff', borderWidth: 1, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
    historyName: { fontSize: 17, fontWeight: '600', color: '#1a3325' },
    historyDetailsRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
    historyDate: { fontSize: 14, color: '#446955', fontWeight: '500' },
    loaderLogo: { width: 28, height: 28, alignSelf: 'center', marginTop: 8 },
    scoreCircleContainer: { width: SCORE_CIRCLE_SIZE, height: SCORE_CIRCLE_SIZE, justifyContent: 'center', alignItems: 'center' },
    scoreCircleText: { position: 'absolute', fontSize: 17, fontWeight: '800' },
});