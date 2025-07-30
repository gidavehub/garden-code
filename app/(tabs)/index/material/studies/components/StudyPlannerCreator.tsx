import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, Spacing, subjectColors } from '../constants/theme';
import { StudyPlan, Subject } from '../types';
import { ManualPlanBuilder } from './ManualPlanBuilder'; // <-- Importing the real component
import { ModeToggle } from './ModeToggle';

// ===================================================================
// AI ONBOARDING VIEW
// This component handles the UI for the AI-assisted plan generation.
// ===================================================================
const AIOnboardingView = ({ onGenerate }: { onGenerate: (subjects: Subject[]) => void }) => {
    const [subjectName, setSubjectName] = useState('');
    const [subjects, setSubjects] = useState<Subject[]>([]);

    const addSubject = () => {
        if (!subjectName.trim()) {
            Alert.alert('Empty Subject', 'Please enter a name for your subject.');
            return;
        }
        if (subjects.length >= subjectColors.length) {
            Alert.alert('Subject Limit', `You can add up to ${subjectColors.length} subjects for AI generation.`);
            return;
        }
        
        const newSubject: Subject = {
            id: `sub-${Date.now()}`,
            name: subjectName.trim(),
            color: subjectColors[subjects.length % subjectColors.length],
        };
        setSubjects([...subjects, newSubject]);
        setSubjectName('');
        Keyboard.dismiss();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    const removeSubject = (id: string) => {
        setSubjects(subjects.filter(s => s.id !== id));
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    };

    return (
        <View style={styles.aiContainer}>
            <Ionicons name="sparkles-outline" size={60} color={Colors.accent} style={{marginBottom: Spacing.md}}/>
            <Text style={styles.sectionTitle}>AI-Powered Planner</Text>
            <Text style={styles.sectionSubtitle}>Add your subjects, and our AI will create a personalized study schedule for you.</Text>
            
            <View style={styles.inputRow}>
                <TextInput style={styles.input} placeholder="e.g., Quantum Physics" value={subjectName} onChangeText={setSubjectName} placeholderTextColor={Colors.secondaryText} />
                <TouchableOpacity style={styles.addButton} onPress={addSubject}><Ionicons name="add" size={28} color={Colors.white} /></TouchableOpacity>
            </View>

            <FlatList
                data={subjects}
                contentContainerStyle={{ alignSelf: 'flex-start', paddingVertical: Spacing.md, paddingHorizontal: Spacing.lg }}
                renderItem={({ item }) => (
                     <MotiView from={{scale:0.5, opacity: 0}} animate={{scale:1, opacity: 1}} style={[styles.subjectTag, { backgroundColor: item.color }]}>
                        <Text style={styles.subjectTagText}>{item.name}</Text>
                        <TouchableOpacity onPress={() => removeSubject(item.id)}>
                            <Ionicons name="close-circle" size={20} color={Colors.white} style={{opacity: 0.8}}/>
                        </TouchableOpacity>
                    </MotiView>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <View style={{flex: 1}}/>
            <TouchableOpacity 
                style={[styles.buttonPrimary, {width: '92%'}, subjects.length === 0 && styles.buttonDisabled]} 
                disabled={subjects.length === 0}
                onPress={() => onGenerate(subjects)}
            >
                <Text style={styles.buttonTextPrimary}>Generate My Plan</Text>
                <Ionicons name="arrow-forward" size={20} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};


// ===================================================================
// STUDY PLANNER CREATOR (Main Component)
// This orchestrates the mode switching between AI and Manual.
// ===================================================================
export function StudyPlannerCreator({ onSave }: { onSave: (plan: StudyPlan) => void }) {
  const router = useRouter();
  const [mode, setMode] = useState<'ai' | 'manual'>('ai');

  return (
    <View style={{flex:1, backgroundColor: Colors.background}}>
        <SafeAreaView style={styles.rootContainer} edges={['top', 'bottom']}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Ionicons name="chevron-back" size={28} color={Colors.primaryText} />
            </TouchableOpacity>
        </View>

        <ModeToggle mode={mode} onToggle={setMode} />
        
        <AnimatePresence exitBeforeEnter>
          <MotiView
            key={mode}
            from={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -15 }}
            transition={{ type: 'timing', duration: 250 }}
            style={{flex: 1, width: '100%'}}
          >
            {mode === 'ai' ? (
              // ---- AI Flow ----
              <AIOnboardingView onGenerate={(subjects) => {
                  router.push({
                      pathname: '/material/studies/suggestions',
                      params: { subjects: JSON.stringify(subjects) },
                  });
              }}/>
            ) : (
              // ---- Manual Flow ----
              // We render our real ManualPlanBuilder component here.
              <ManualPlanBuilder onSave={onSave} />
            )}
          </MotiView>
        </AnimatePresence>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: Colors.background, alignItems: 'center' },
  header: { flexDirection: 'row', paddingHorizontal: Spacing.lg, paddingTop: Spacing.sm, width: '100%' },
  backButton: { backgroundColor: Colors.card, width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  
  // AI View specific styles
  aiContainer: { flex: 1, alignItems: 'center', paddingTop: Spacing.sm, width: '100%' },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.primaryText, textAlign: 'center', marginBottom: Spacing.sm },
  sectionSubtitle: { fontSize: 16, color: Colors.secondaryText, textAlign: 'center', marginBottom: Spacing.lg, paddingHorizontal: Spacing.xl },
  inputRow: { flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: Spacing.md, paddingHorizontal: Spacing.lg, gap: Spacing.sm },
  input: {
    flex: 1, backgroundColor: Colors.card, paddingHorizontal: Spacing.md, height: 50,
    borderRadius: 12, fontSize: 16, borderColor: Colors.border, borderWidth: 1,
    color: Colors.primaryText, fontWeight: '500',
  },
  addButton: {
      backgroundColor: Colors.primary, width: 50, height: 50,
      borderRadius: 12, justifyContent: 'center', alignItems: 'center'
  },
  subjectTag: {
    flexDirection: 'row', alignItems: 'center', borderRadius: 20,
    paddingVertical: 8, paddingHorizontal: 12, marginRight: 8, gap: 8,
  },
  subjectTagText: { color: Colors.white, fontWeight: 'bold' },

  // General button styles
  buttonPrimary: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.primary,
    paddingVertical: Spacing.lg - 2, borderRadius: 16, gap: Spacing.md, marginBottom: Spacing.sm,
    shadowColor: Colors.primary, shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 5, elevation: 6,
  },
  buttonTextPrimary: { color: Colors.white, fontSize: 18, fontWeight: 'bold' },
  buttonDisabled: { backgroundColor: Colors.lightGray, elevation: 0, shadowOpacity: 0, borderWidth: 1, borderColor: Colors.border },
});