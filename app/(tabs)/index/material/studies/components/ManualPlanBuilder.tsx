import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import React, { useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { Colors, Spacing, subjectColors } from '../constants/theme';
import { StudyPlan, StudyTask, Subject } from '../types';
import { TaskModal } from './TaskModal';

interface ManualPlanBuilderProps {
  onSave: (plan: StudyPlan) => void;
}

export const ManualPlanBuilder = ({ onSave }: ManualPlanBuilderProps) => {
    // State management
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [tasks, setTasks] = useState<StudyTask[]>([]);
    const [goals, setGoals] = useState({ weekly: '', monthly: '' });
    const todayStr = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState<string>(todayStr);
    const [isModalVisible, setModalVisible] = useState(false);

    // --- Subject Management ---
    const addSubject = (name: string) => {
        if (!name.trim()) return;
        setSubjects([...subjects, { id: `sub-${Date.now()}`, name: name.trim(), color: subjectColors[subjects.length % subjectColors.length] }]);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    // --- Task Management ---
    const addTask = (task: StudyTask) => {
        setTasks([...tasks, task].sort((a,b) => a.scheduledDate.localeCompare(b.scheduledDate)));
    };
    
    // --- Data for Calendar/UI ---
    const calendarTheme = useMemo(() => ({ /* ... calendar theme ... */ }), []);
    const markedDates = useMemo(() => {
        const marked = tasks.reduce((acc, t) => ({...acc, [t.scheduledDate]: {marked: true, dotColor: Colors.accent}}), {} as any);
        marked[selectedDate] = {...marked[selectedDate], selected: true, selectedColor: Colors.primary};
        return marked;
    }, [tasks, selectedDate]);

    const tasksForSelectedDay = tasks.filter(task => task.scheduledDate === selectedDate);
    const subjectMap = new Map(subjects.map(s => [s.id, s]));

    // --- Save Handler ---
    const handleSavePlan = () => {
        if (subjects.length === 0 || tasks.length === 0) { Alert.alert("Plan is Empty", "Add at least one subject and one task to save."); return; }
        const newPlan: StudyPlan = {
            id: `manual-${Date.now()}`, name: "My Custom Plan",
            description: "A personalized study schedule created by you.", subjects, tasks,
            goals: { weekly: goals.weekly || "Stay consistent with the schedule.", monthly: goals.monthly || "Master all planned topics." }
        };
        onSave(newPlan);
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                {/* --- Step 1: Subjects --- */}
                <Section title="1. Your Subjects">
                    <SubjectInput onAddSubject={addSubject} />
                    {subjects.length > 0 && (
                        <View style={styles.subjectPillContainer}>
                            {subjects.map(s => <View key={s.id} style={[styles.subjectPill, {backgroundColor: s.color}]}><Text style={styles.subjectPillText}>{s.name}</Text></View>)}
                        </View>
                    )}
                </Section>
                
                {/* --- Step 2: Schedule --- */}
                <Section title="2. Schedule Your Tasks">
                    <Calendar onDayPress={(d:DateData) => setSelectedDate(d.dateString)} markedDates={markedDates} theme={calendarTheme} style={styles.calendar}/>
                </Section>

                {/* --- Step 3: Tasks & Goals --- */}
                <Section title={`Tasks for ${new Date(selectedDate+'T12:00:00').toLocaleDateString(undefined, {weekday: 'long', day:'numeric'})}`}>
                    {tasksForSelectedDay.length > 0 ? (
                        tasksForSelectedDay.map(task => (
                            <View key={task.id} style={styles.taskItem}>
                                <View style={[styles.taskDot, {backgroundColor: subjectMap.get(task.subjectId)?.color || Colors.accent}]}/>
                                <Text style={styles.taskText}>{task.title}</Text>
                            </View>
                        ))
                    ) : ( <Text style={styles.noTasksText}>No tasks scheduled. Tap below to add one!</Text> )}
                     <TouchableOpacity style={styles.addTaskButton} onPress={() => subjects.length > 0 ? setModalVisible(true) : Alert.alert("Add Subject First", "Create a subject before adding tasks.")}>
                        <Ionicons name="add-circle-outline" size={24} color={Colors.accent} /><Text style={styles.addTaskButtonText}>Add New Task</Text>
                    </TouchableOpacity>
                </Section>
                 <Section title="4. Define Your Goals">
                    <TextInput style={styles.goalInput} placeholder="Weekly goal..." onChangeText={(text) => setGoals(g => ({...g, weekly: text}))} />
                    <TextInput style={styles.goalInput} placeholder="Monthly goal..." onChangeText={(text) => setGoals(g => ({...g, monthly: text}))} />
                </Section>
            </ScrollView>
            
            <TouchableOpacity style={styles.saveButton} onPress={handleSavePlan}>
                 <Ionicons name="save-outline" size={24} color={Colors.white}/><Text style={styles.saveButtonText}>Save My Custom Plan</Text>
            </TouchableOpacity>

            <TaskModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} onAddTask={addTask} subjects={subjects} selectedDate={selectedDate}/>
        </View>
    );
};

// Helper components to keep the main render clean
const Section = ({title, children}: {title: string, children: React.ReactNode}) => (
    <View style={styles.section}><Text style={styles.sectionTitle}>{title}</Text>{children}</View>
);
const SubjectInput = ({ onAddSubject }: { onAddSubject: (name: string) => void}) => {
    const [name, setName] = useState('');
    const handlePress = () => { onAddSubject(name); setName(''); };
    return (
        <View style={styles.inputRow}>
            <TextInput style={styles.input} placeholder="e.g., Quantum Physics" value={name} onChangeText={setName} />
            <TouchableOpacity style={styles.addButton} onPress={handlePress}><Ionicons name="add" size={24} color={Colors.white}/></TouchableOpacity>
        </View>
    );
};

// Styles...
const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: Spacing.lg },
    section: { marginBottom: Spacing.md },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.primaryText, marginBottom: Spacing.md, },
    inputRow: { flexDirection: 'row', gap: Spacing.sm },
    input: { flex: 1, backgroundColor: Colors.card, paddingHorizontal: Spacing.md, height: 50, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, fontSize: 16 },
    addButton: { backgroundColor: Colors.primary, width: 50, height: 50, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
    subjectPillContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, marginTop: Spacing.md },
    subjectPill: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16 },
    subjectPillText: { color: Colors.white, fontWeight: 'bold' },
    calendar: { borderRadius: 16, borderWidth: 1, borderColor: Colors.border, overflow: 'hidden' },
    taskItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.lightGray, padding: Spacing.md, borderRadius: 10, marginBottom: Spacing.sm },
    taskDot: { width: 10, height: 10, borderRadius: 5, marginRight: Spacing.md },
    taskText: { fontSize: 16, color: Colors.primaryText },
    noTasksText: { color: Colors.secondaryText, fontStyle: 'italic', textAlign: 'center', marginVertical: Spacing.md },
    addTaskButton: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: Spacing.md, borderRadius: 12, borderWidth: 1.5, borderColor: Colors.border, borderStyle: 'dashed', marginTop: Spacing.md },
    addTaskButtonText: { color: Colors.accent, fontWeight: 'bold', marginLeft: Spacing.sm, fontSize: 16 },
    goalInput: { backgroundColor: Colors.card, padding: Spacing.md, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, marginBottom: Spacing.md, fontSize: 16 },
    saveButton: { position: 'absolute', bottom: 10, left: Spacing.lg, right: Spacing.lg, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.primary, paddingVertical: Spacing.lg - 2, borderRadius: 16, gap: Spacing.md },
    saveButtonText: { color: Colors.white, fontSize: 18, fontWeight: 'bold' },
});