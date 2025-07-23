import { Ionicons } from '@expo/vector-icons';
import { AnimatePresence, MotiView } from 'moti';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing, Typography } from '../constants/theme';
import { StudyPlan, StudyTask } from '../types';

interface ViewerProps {
  plan: StudyPlan;
  onClear: () => void;
  onUpdateTask: (taskId: string, isCompleted: boolean) => void;
}

const getTodayKey = () => new Date().toISOString().split('T')[0];

const TaskItem = ({ task, subjectColor, onUpdateTask }: { task: StudyTask, subjectColor: string, onUpdateTask: (id: string, completed: boolean) => void}) => {
    const isCompleted = task.isCompleted;
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onUpdateTask(task.id, !isCompleted)}>
            <MotiView 
                from={{opacity: 0, scale: 0.9}} 
                animate={{opacity: 1, scale: 1}}
                transition={{type: 'timing', duration: 400}}
                style={styles.taskCard}
            >
                <View style={[styles.colorBar, {backgroundColor: subjectColor}]} />
                <View style={styles.taskInfo}>
                    <Text style={[styles.taskTitle, isCompleted && styles.taskCompletedText]} numberOfLines={1}>{task.title}</Text>
                    <Text style={styles.taskDuration}>{task.duration} min</Text>
                </View>
                 <AnimatePresence>
                    {isCompleted ? (
                        <MotiView
                            from={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <Ionicons name="checkmark-circle" size={28} color={Colors.success} />
                        </MotiView>
                    ) : (
                         <View style={styles.checkBoxOutline} />
                    )}
                </AnimatePresence>
            </MotiView>
        </TouchableOpacity>
    );
};

export function StudyPlannerViewer({ plan, onClear, onUpdateTask }: ViewerProps) {
    const todayKey = getTodayKey();
    const todaysTasks = plan.tasks.filter(t => t.scheduledDate === todayKey);
    const subjectMap = new Map(plan.subjects.map(s => [s.id, s]));

    const completedTasksCount = plan.tasks.filter(t => t.isCompleted).length;
    const totalTasksCount = plan.tasks.length;
    const overallProgress = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;
    
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View>
                    <Text style={Typography.subtitle}>My Study Plan</Text>
                    <Text style={styles.planName}>{plan.name}</Text>
                </View>
                <TouchableOpacity style={styles.clearButton} onPress={onClear}>
                    <Ionicons name="trash-bin-outline" size={22} color={Colors.danger} />
                    <Text style={styles.clearButtonText}>New</Text>
                </TouchableOpacity>
            </View>

            {/* Overall Progress */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Overall Progress</Text>
                 <Text style={styles.cardSubtitle}>{completedTasksCount} / {totalTasksCount} tasks completed</Text>
                 <View style={styles.progressBarContainer}>
                    <MotiView 
                        style={styles.progressBar}
                        from={{width: '0%'}}
                        animate={{width: `${overallProgress}%`}}
                        transition={{type: 'spring'}}
                    />
                 </View>
            </View>
            
            {/* Today's Focus */}
            <View style={styles.card}>
                 <Text style={styles.cardTitle}>Today's Focus</Text>
                 {todaysTasks.length > 0 ? (
                     todaysTasks.map(task => (
                        <TaskItem 
                            key={task.id} 
                            task={task} 
                            subjectColor={subjectMap.get(task.subjectId)?.color || Colors.accent}
                            onUpdateTask={onUpdateTask}
                        />
                    ))
                 ) : (
                     <View style={styles.emptyState}>
                         <Ionicons name="today-outline" size={32} color={Colors.secondaryText} />
                         <Text style={styles.emptyText}>Nothing scheduled for today. Time for a well-deserved break!</Text>
                     </View>
                 )}
            </View>
            
             {/* Goals */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>My Goals</Text>
                 <View style={styles.goalItem}>
                    <Ionicons name="flag-outline" size={22} color={Colors.accent} />
                    <View style={{flex: 1}}>
                        <Text style={styles.goalType}>Weekly Goal</Text>
                        <Text style={styles.goalText}>{plan.goals.weekly}</Text>
                    </View>
                 </View>
                  <View style={styles.goalItem}>
                    <Ionicons name="trophy-outline" size={22} color={Colors.primary} />
                     <View style={{flex: 1}}>
                        <Text style={styles.goalType}>Monthly Goal</Text>
                        <Text style={styles.goalText}>{plan.goals.monthly}</Text>
                    </View>
                 </View>
            </View>

        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, paddingHorizontal: Spacing.md },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  planName: { ...Typography.title, fontSize: 26, lineHeight: 32 },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    padding: Spacing.sm,
    backgroundColor: Colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border
  },
  clearButtonText: { color: Colors.danger, fontWeight: 'bold' },
  card: {
      backgroundColor: Colors.card,
      borderRadius: 16,
      padding: Spacing.md,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: Colors.border,
  },
  cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.primaryText,
      marginBottom: Spacing.sm
  },
  cardSubtitle: { fontSize: 14, color: Colors.secondaryText, marginBottom: Spacing.md },
  progressBarContainer: {
    height: 12,
    backgroundColor: Colors.lightGray,
    borderRadius: 6,
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 6
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    marginBottom: Spacing.sm,
    overflow: 'hidden',
  },
  colorBar: {
    width: 6,
    height: '150%',
    borderRadius: 3,
    position: 'absolute',
    left: 0
  },
  taskInfo: {
    flex: 1,
    marginLeft: Spacing.md + 6,
    gap: 4,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primaryText,
  },
  taskCompletedText: {
    textDecorationLine: 'line-through',
    color: Colors.secondaryText,
  },
  taskDuration: {
    fontSize: 13,
    color: Colors.secondaryText
  },
  checkBoxOutline: {
      width: 28,
      height: 28,
      borderRadius: 14,
      borderWidth: 2,
      borderColor: Colors.border,
  },
  emptyState: { alignItems: 'center', paddingVertical: Spacing.lg, gap: Spacing.sm },
  emptyText: { color: Colors.secondaryText, textAlign: 'center'},
  goalItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: Spacing.md,
      paddingVertical: Spacing.sm,
  },
  goalType: { fontWeight: 'bold', color: Colors.primaryText, marginBottom: 2 },
  goalText: { color: Colors.secondaryText, fontSize: 14, lineHeight: 20 },
});