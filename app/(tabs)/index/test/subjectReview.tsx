// app/(tabs)/index/test/subjectReview.tsx
import { Ionicons } from '@expo/vector-icons'; // <<< [NEW] For the back icon
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router'; // <<< [UPDATED] import useRouter
import { MotiView } from 'moti'; // <<< [NEW] For animation
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // <<< [UPDATED] import TouchableOpacity
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SubjectReviewScreen() {
    const params = useLocalSearchParams();
    const router = useRouter(); // <<< [NEW] router for back navigation
    const subjectData = JSON.parse(params.subjectData as string);
    const correctCount = subjectData.questions.reduce((sum, q, idx) => sum + (subjectData.userAnswers[idx] === q.answer ? 1 : 0), 0);
    
    return (
        <LinearGradient colors={['#D4E7C5', '#BFD8AF']} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>

                {/* <<< [NEW] Animated Floating Back Button */}
                <MotiView
                    from={{ opacity: 0, scale: 0.5, translateX: -20 }}
                    animate={{ opacity: 1, scale: 1, translateX: 0 }}
                    transition={{ type: 'timing', duration: 400 }}
                    style={styles.backButtonWrapper}
                >
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#1a3325" />
                    </TouchableOpacity>
                </MotiView>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{subjectData.name} - Review</Text>
                     <Text style={styles.headerSubtitle}>Score: {correctCount} / {subjectData.questions.length}</Text>
                </View>
                <ScrollView contentContainerStyle={styles.container}>
                     {subjectData.questions.map((q, idx) => {
                        const userAnswer = subjectData.userAnswers[idx];
                        const isCorrect = userAnswer === q.answer;
                        return (
                            <View key={`review-${idx}`} style={[styles.reviewQuestionCard, !isCorrect && {borderColor: '#b91c1c'}]}>
                                <Text style={styles.reviewQuestionText}>Q{idx + 1}. {q.question}</Text>
                                <View style={styles.answerRow}>
                                    <Text style={[styles.answerLabel, {color: isCorrect ? '#059669' : '#b91c1c'}]}>{isCorrect ? '✔ Your Answer:' : '❌ Your Answer:'}</Text>
                                    <Text style={styles.answerValue}>{userAnswer || 'Not Answered'}</Text>
                                </View>
                                {!isCorrect && (
                                <View style={styles.answerRow}>
                                    <Text style={[styles.answerLabel, {color: '#059669'}]}>✔ Correct Answer:</Text>
                                    <Text style={styles.answerValue}>{q.answer}</Text>
                                </View>
                                )}
                                <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    // <<< [NEW] Styles for the floating back button
    backButtonWrapper: {
        position: 'absolute',
        top: 10,
        left: 16,
        zIndex: 10, // Ensure it floats above other content
    },
    backButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(255,255,255,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    },
    // <<< [UPDATED] Added padding to header text to avoid overlap with button
    header: { paddingVertical: 16, paddingHorizontal: 24, paddingLeft: 80, backgroundColor: 'rgba(255,255,255,0.4)' },
    headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1a3325' },
    headerSubtitle: { fontSize: 16, color: '#0A1710' },
    // ... (rest of styles are the same)
    container: { padding: 24 },
    reviewQuestionCard: { backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 12, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#059669', },
    reviewQuestionText: { color: '#0A1710', fontSize: 16, fontWeight: '600', marginBottom: 12, lineHeight: 24},
    answerRow: {flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginBottom: 8},
    answerLabel: { fontSize: 14, color: '#444', marginRight: 8, fontWeight: 'bold',},
    answerValue: { flex: 1, fontSize: 15, color: '#0A1710' },
    explanationText: {fontSize: 14, color: '#1a3325', fontStyle: 'italic', marginTop: 8, lineHeight: 20,},
});