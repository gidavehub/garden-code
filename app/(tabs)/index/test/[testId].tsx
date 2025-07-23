// app/(tabs)/index/test/[testId].tsx
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CompletedTestDetailScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const testData = JSON.parse(params.testData as string);
    
    const renderSubjectItem = ({ item }) => {
        const correctCount = item.questions.reduce((sum, q, idx) => sum + (item.userAnswers[idx] === q.answer ? 1 : 0), 0);
        const totalCount = item.questions.length;

        const navigateToSubjectReview = () => {
             router.push({
                pathname: '/test/subjectReview',
                params: { subjectData: JSON.stringify(item) }
             });
        }

        return (
            <TouchableOpacity style={styles.subjectCard} onPress={navigateToSubjectReview} activeOpacity={0.8}>
                <Image source={item.coverImage} style={styles.subjectImage} />
                <View style={styles.subjectInfo}>
                    <Text style={styles.subjectName}>{item.name}</Text>
                    <Text style={styles.subjectScore}>{correctCount} / {totalCount} correct</Text>
                </View>
                <View style={[styles.scorePill, {backgroundColor: correctCount/totalCount > 0.5 ? '#38e07b' : '#fca5a5'}]}>
                     <Text style={styles.pillText}>{Math.round((correctCount/totalCount)*100)}%</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    return (
        <LinearGradient colors={['#D4E7C5', '#BFD8AF']} style={styles.gradient}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{testData.name}</Text>
                    <Text style={styles.headerSubtitle}>Score: {testData.score} / {testData.maxScore}</Text>
                </View>
                <FlatList
                    data={testData.subjects}
                    keyExtractor={(item) => item.id}
                    renderItem={renderSubjectItem}
                    contentContainerStyle={styles.list}
                />
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: { flex: 1 },
    safeArea: { flex: 1 },
    header: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1a3325', },
    headerSubtitle: { fontSize: 16, color: '#0A1710', opacity: 0.8 },
    list: { padding: 24 },
    subjectCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
    },
    subjectImage: { width: 50, height: 50, borderRadius: 8 },
    subjectInfo: { flex: 1, marginLeft: 12, },
    subjectName: { fontSize: 18, fontWeight: '600', color: '#0A1710' },
    subjectScore: { fontSize: 14, color: '#1a3325', marginTop: 2, },
    scorePill: {
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    pillText: { color: '#0A1710', fontWeight: 'bold' }
});