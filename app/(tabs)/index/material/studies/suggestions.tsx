import { generateStudyPlansAI } from '@/utils/ai/studyPlanGenerator';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlanSuggestionCard } from './components/PlanSuggestionCard';
import { Colors, Spacing, Typography } from './constants/theme';
import { useStudyPlan } from './hooks/useStudyPlan';
import { StudyPlan, Subject } from './types';

const LoadingState = () => (
    <View style={styles.centered}>
      <MotiView 
        from={{ scale: 0.5, opacity: 0}} 
        animate={{ scale: 1, opacity: 1}} 
        transition={{type: 'spring'}}
      >
        <Ionicons name="bulb-outline" size={80} color={Colors.primary} />
      </MotiView>
      <Text style={styles.loadingText}>Crafting Your Plans...</Text>
      <Text style={styles.loadingSubtext}>Our AI is analyzing your subjects to create the perfect schedule for you.</Text>
      <ActivityIndicator size="small" color={Colors.primary} style={{marginTop: Spacing.lg}}/>
    </View>
)

export default function SuggestionsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { saveStudyPlan } = useStudyPlan();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [suggestions, setSuggestions] = useState<StudyPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
        const parsedSubjects = JSON.parse(params.subjects as string);
        if(parsedSubjects && Array.isArray(parsedSubjects)) {
            setSubjects(parsedSubjects);
        }
    } catch (e) {
        console.error("Failed to parse subjects", e);
        Alert.alert("Error", "Could not load subjects. Please go back and try again.", [{ text: "OK", onPress: () => router.back() }]);
    }
  }, [params.subjects]);

  useEffect(() => {
    if (subjects.length > 0) {
      setIsLoading(true);
      generateStudyPlansAI(subjects)
        .then(setSuggestions)
        .catch(err => {
          console.error(err);
          Alert.alert("AI Error", "Failed to generate study plans. Please try again later.");
        })
        .finally(() => setIsLoading(false));
    }
  }, [subjects]);

  const handleSelectPlan = async (plan: StudyPlan) => {
    await saveStudyPlan(plan);
    router.replace('/material/studies');
  };
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={Typography.title}>AI Suggestions</Text>
        </View>

        {isLoading ? <LoadingState /> : (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.subtitle}>Here are a few plans tailored to you. Choose one to get started!</Text>
                {suggestions.map((plan, index) => (
                    <MotiView 
                        key={plan.id}
                        from={{ opacity: 0, translateY: 50}}
                        animate={{ opacity: 1, translateY: 0}}
                        transition={{ type: 'timing', duration: 500, delay: index * 150}}
                    >
                        <PlanSuggestionCard plan={plan} onSelect={() => handleSelectPlan(plan)} />
                    </MotiView>
                ))}
            </ScrollView>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.sm, paddingTop: Spacing.md },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: Spacing.lg },
  loadingText: { ...Typography.title, fontSize: 24, marginTop: Spacing.md, textAlign: 'center'},
  loadingSubtext: { ...Typography.subtitle, textAlign: 'center', marginTop: Spacing.sm },
  scrollContainer: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.xl },
  subtitle: { ...Typography.subtitle, marginBottom: Spacing.lg, textAlign: 'center' }
});