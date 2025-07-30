import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { StudyPlannerCreator } from './components/StudyPlannerCreator';
import { StudyPlannerViewer } from './components/StudyPlannerViewer';
import { Colors } from './constants/theme';
import { useStudyPlan } from './hooks/useStudyPlan';

export default function StudiesScreen() {
  const { 
    studyPlan, 
    isLoading, 
    saveStudyPlan, 
    clearStudyPlan,
    updateTaskStatus
  } = useStudyPlan();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {studyPlan ? (
        <StudyPlannerViewer 
          plan={studyPlan} 
          onClear={clearStudyPlan}
          onUpdateTask={updateTaskStatus} 
        />
      ) : (
        <StudyPlannerCreator onSave={saveStudyPlan} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
});