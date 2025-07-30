import { Ionicons } from '@expo/vector-icons';
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, Spacing } from '../constants/theme';
import { StudyTask, Subject } from '../types';

interface TaskModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAddTask: (task: StudyTask) => void;
  subjects: Subject[];
  selectedDate: string;
}

export const TaskModal = ({ isVisible, onClose, onAddTask, subjects, selectedDate }: TaskModalProps) => {
  const [title, setTitle] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0]?.id || '');

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Missing Title', 'Please enter a title for your task.');
      return;
    }
    const newTask: StudyTask = {
      id: `task-${Date.now()}`,
      subjectId: selectedSubjectId,
      title: title.trim(),
      isCompleted: false,
      scheduledDate: selectedDate,
      duration: 60, // Default duration
    };
    onAddTask(newTask);
    setTitle(''); // Reset for next time
    onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <View style={styles.modalBackdrop}>
          <MotiView
            from={{ translateY: 300, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 300, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>Add New Task</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Task title (e.g., Review Chapter 3)"
              value={title}
              onChangeText={setTitle}
            />

            <Text style={styles.label}>Subject</Text>
            <View style={styles.subjectPicker}>
              {subjects.map(subject => (
                <TouchableOpacity
                  key={subject.id}
                  style={[
                    styles.subjectChip,
                    selectedSubjectId === subject.id && { backgroundColor: subject.color }
                  ]}
                  onPress={() => setSelectedSubjectId(subject.id)}
                >
                  <Text style={[styles.subjectChipText, selectedSubjectId === subject.id && { color: '#fff' }]}>
                    {subject.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.buttonRow}>
                 <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
                    <Text style={[styles.buttonText, {color: Colors.primaryText}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
                    <Ionicons name="add-circle-outline" size={20} color={Colors.white} />
                    <Text style={styles.buttonText}>Add Task</Text>
                </TouchableOpacity>
            </View>
          </MotiView>
        </View>
      )}
    </AnimatePresence>
  );
};

const styles = StyleSheet.create({
    modalBackdrop: { ...StyleSheet.absoluteFillObject, zIndex: 50, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)'},
    modalContent: { backgroundColor: Colors.card, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: Spacing.lg, paddingTop: Spacing.xl },
    modalTitle: { fontSize: 22, fontWeight: 'bold', color: Colors.primaryText, textAlign: 'center', marginBottom: Spacing.lg },
    input: { backgroundColor: Colors.lightGray, paddingHorizontal: Spacing.md, height: 50, borderRadius: 12, fontSize: 16, borderColor: Colors.border, borderWidth: 1, color: Colors.primaryText, marginBottom: Spacing.md },
    label: { fontSize: 16, fontWeight: '600', color: Colors.secondaryText, marginBottom: Spacing.sm },
    subjectPicker: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, marginBottom: Spacing.xl },
    subjectChip: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: Colors.lightGray, borderWidth: 1, borderColor: Colors.border },
    subjectChipText: { fontWeight: '600', color: Colors.primaryText },
    buttonRow: { flexDirection: 'row', gap: Spacing.md, marginTop: Spacing.md},
    button: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 16, gap: 8 },
    saveButton: { backgroundColor: Colors.primary },
    cancelButton: { backgroundColor: Colors.lightGray},
    buttonText: { color: Colors.white, fontSize: 16, fontWeight: 'bold' },
});