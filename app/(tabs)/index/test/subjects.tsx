import { ALL_GTS, getGTById, GTSet } from '@/data/allGTs';
import { ALL_TEXTBOOKS } from '@/data/allTextBooks';
import { EASY_QUESTIONS_PER_TEST, HARD_QUESTIONS_PER_TEST } from '@/data/gtConstants';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MotiImage, MotiView } from 'moti';
import React, { useMemo, useState } from 'react';
// <-- [MODIFIED] Added ActivityIndicator
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Shuffle function and logic section (unchanged)
function shuffle<T>(arr: T[]): T[] { /* ... */ return arr }
// NOTE: For brevity, I've collapsed the logic inside this component as it does not change.
// The key changes are in the JSX and the StyleSheet.

export default function GTSubjectSelectorScreen() {
    const grade = 10;
    const router = useRouter();
    const params = useLocalSearchParams();
    const testIndex = Number(params.testIndex);
    const testName = params.testName as string;
    
    // --- [LOGIC SECTION] ---
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['maths', 'english']);
    const [isLoading, setIsLoading] = useState(false); // <-- [NEW] State for loading indicator

    const canStart = useMemo(() => selectedSubjects.includes('maths') && selectedSubjects.includes('english') && selectedSubjects.length >= 5, [selectedSubjects]);
    // The rest of the `useMemo` hooks are unchanged...
    const examDuration = useMemo(() => 24 * selectedSubjects.length, [selectedSubjects]);
    const examDurationFormatted = useMemo(() => { const h = Math.floor(examDuration / 60), m = examDuration % 60; return h > 0 ? `${h}h ${m}m` : `${m}m`; }, [examDuration]);
    const toggleSubject = (id: string) => { if ((id === 'maths' || id === 'english') && selectedSubjects.includes(id)) return; setSelectedSubjects(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id]); };
    const orderedGts = useMemo(() => [...ALL_GTS.filter(s=>s.id==='maths'||s.id==='english'), ...ALL_GTS.filter(s=>s.id!=='maths'&&s.id!=='english')], []);
    
    // <-- [MODIFIED] Updated the startGT function
    const startGT = () => {
        if (!canStart) {
            Alert.alert('Selection Required', 'Choose 5 or more subjects, including Mathematics and English.');
            return;
        }

        setIsLoading(true);

        // Use a brief timeout to allow the UI to update to the loading state before running the logic.
        setTimeout(() => {
            const structuredExam = selectedSubjects.map(subjectId => {
                const gtSet = getGTById(subjectId);
                const textbook = ALL_TEXTBOOKS.find(tb => tb.id === subjectId);
                if (!gtSet || !textbook) return null;

                const easyStart = testIndex * EASY_QUESTIONS_PER_TEST;
                const hardStart = testIndex * HARD_QUESTIONS_PER_TEST;
                const easyEnd = easyStart + EASY_QUESTIONS_PER_TEST;
                const hardEnd = hardStart + HARD_QUESTIONS_PER_TEST;

                const easyPool = gtSet.easy.filter(q => q.grade === grade);
                const hardPool = gtSet.hard.filter(q => q.grade === grade);

                if (easyPool.length < easyEnd || hardPool.length < hardEnd) {
                    Alert.alert('Content Error', `Not enough questions in "${gtSet.name}" for this test. Please try again or contact support.`);
                    setIsLoading(false); // Reset loading state on error
                    return 'error';
                }

                return {
                    subjectId: gtSet.id,
                    subjectName: gtSet.name,
                    coverImage: textbook.coverImage, 
                    easy: shuffle(easyPool.slice(easyStart, easyEnd)),
                    hard: shuffle(hardPool.slice(hardStart, hardEnd)),
                };
            }).filter(Boolean);
            
            if (structuredExam.some(item => item === 'error')) return;

            const totalQuestions = (EASY_QUESTIONS_PER_TEST + HARD_QUESTIONS_PER_TEST) * selectedSubjects.length;
            const examDurationMinutes = Math.round(totalQuestions * 1.5);
            const maxScore = totalQuestions * 10;
            
            // If navigation succeeds, this component will unmount, so we don't need to reset the loading state.
            router.push({ 
                pathname: '/test/GTLive', 
                params: { 
                    exam: JSON.stringify(structuredExam),
                    timeLimit: String(examDurationMinutes),
                    maxScore: String(maxScore),
                    grade: String(grade),
                    testIndex: String(testIndex),
                    testName: testName,
                } 
            });
        }, 50); // 50ms delay
    };

    const renderSubject = ({ item, index }: { item: GTSet; index: number }) => {
        // ...This function's content remains unchanged...
        const textbook = ALL_TEXTBOOKS.find(tb => tb.id === item.id);
        const isSelected = selectedSubjects.includes(item.id);
        const isMandatory = item.id === 'maths' || item.id === 'english';

        return (
            <MotiView
                style={styles.cardWrapper}
                from={{ opacity: 0, scale: 0.8, translateY: 20 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ type: 'timing', duration: 400, delay: 100 + index * 50 }}
            >
                <TouchableOpacity activeOpacity={0.8} onPress={() => toggleSubject(item.id)}>
                    <MotiView style={styles.card} animate={{ borderWidth: isSelected ? 2 : 0 }}>
                        {textbook && (
                            <MotiImage
                                source={textbook.coverImage}
                                style={styles.cardImage}
                                animate={{ scale: isSelected ? 1.1 : 1 }}
                                transition={{ type: 'spring' }}
                            />
                        )}
                        <BlurView intensity={25} tint="dark" style={styles.cardOverlay}>
                            <Text style={styles.cardText}>{item.name}</Text>
                        </BlurView>

                        {isSelected && (
                            <MotiView style={styles.checkmarkOverlay} from={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring' }}>
                                <Ionicons name="checkmark-circle" size={32} color="#f0fef5" />
                            </MotiView>
                        )}
                        {isMandatory && (
                             <View style={styles.mandatoryBadge}><Text style={styles.mandatoryText}>Required</Text></View>
                        )}
                    </MotiView>
                </TouchableOpacity>
            </MotiView>
        );
    };

    return (
        <LinearGradient colors={['#1a3325', '#0A1710']} style={styles.gradient}>
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <MotiView from={{opacity:0, translateY: -50}} animate={{opacity: 1, translateY: 0}} transition={{ type: 'timing', duration: 500}}>
                    {/* ...Header content is unchanged... */}
                     <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color="#E0F0E8" />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.title}>{testName} GT</Text>
                            <Text style={styles.subtitle}>Select 5 or more subjects to begin</Text>
                        </View>
                        <View style={{width: 44}}/>
                    </View>
                </MotiView>

                <FlatList
                    data={orderedGts}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                    renderItem={renderSubject}
                    showsVerticalScrollIndicator={false}
                />
                
                {/* --- [MODIFIED] Floating Action Bar Footer --- */}
                <MotiView style={styles.footer} from={{translateY: 150}} animate={{translateY: 0}} transition={{type: 'spring', damping: 18}}>
                    <View style={styles.footerInfo}>
                        <Text style={styles.footerLabel}>Selected</Text>
                        <Text style={styles.footerValue}>{selectedSubjects.length} / {ALL_GTS.length}</Text>
                    </View>
                    <TouchableOpacity
                        // <-- [MODIFIED] Disable button when not ready or when loading
                        style={[styles.button, (!canStart || isLoading) && styles.disabled]}
                        onPress={startGT}
                        disabled={!canStart || isLoading}
                        activeOpacity={0.8}
                    >
                        {/* <-- [MODIFIED] Button text changes based on loading state */}
                        <Text style={styles.buttonText}>{isLoading ? "Starting..." : (canStart ? 'Start Test' : 'More Needed')}</Text>

                        {/* <-- [MODIFIED] Show loading indicator or arrow icon */}
                        {isLoading ? (
                            <ActivityIndicator color="#0A1710" size="small" />
                        ) : (
                            <Ionicons name="arrow-forward" size={20} color="#0A1710" />
                        )}
                    </TouchableOpacity>
                </MotiView>
            </SafeAreaView>
        </LinearGradient>
    );
}

// Stylesheet remains unchanged
const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safeArea: { flex: 1, backgroundColor: 'transparent' },
  header: {
    backgroundColor: 'rgba(42, 60, 50, 0.5)',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'rgba(135, 181, 154, 0.2)',
    borderWidth: 1,
  },
  backButton: { padding: 5 },
  title: { fontSize: 24, color: '#E0F0E8', fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 15, color: '#87B59A', textAlign: 'center', marginTop: 4 },
  
  list: { padding: 12, paddingBottom: 150 },
  cardWrapper: {
    flex: 1/2,
    padding: 6,
  },
  card: {
    height: 200, // Fixed height for consistency
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    borderColor: '#38e07b',
    backgroundColor: '#122419', // Fallback color
  },
  cardImage: { ...StyleSheet.absoluteFillObject },
  cardOverlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'flex-end', padding: 12 },
  cardText: {
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  checkmarkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(56, 224, 123, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mandatoryBadge: {
    position: 'absolute',
    top: 10, left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  mandatoryText: {
      color: '#0A1710',
      fontSize: 11,
      fontWeight: 'bold'
  },
  
  footer: {
    position: 'absolute', bottom: 20, left: 20, right: 20,
    backgroundColor: '#122419',
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    paddingBottom: 12, // For safe area
    borderColor: 'rgba(135, 181, 154, 0.3)',
    borderWidth: 1,
    shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.3, shadowRadius: 15
  },
  footerInfo: {
    marginLeft: 12,
  },
  footerLabel: {
    color: '#87B59A',
    fontSize: 13,
  },
  footerValue: {
    color: '#E0F0E8',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#38e07b',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    gap: 8,
    minWidth: 140, // Ensure button has a consistent minimum width
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: 'rgba(56, 224, 123, 0.2)'
  },
  buttonText: {
    color: '#0A1710',
    fontSize: 16,
    fontWeight: 'bold',
  },
});