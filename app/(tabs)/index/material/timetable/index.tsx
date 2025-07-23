// app/material/timetable/index.tsx
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from './constants/theme';
import { useTimetable } from './hooks/useTimetable';
import { TimetableCreator } from './TimetableCreator';
import { TimetableViewer } from './TimetableViewer';

export default function TimetableScreen() {
  const { 
    timetable, 
    isLoading, 
    isProcessing, 
    setIsProcessing, 
    saveTimetable, 
    clearTimetable 
  } = useTimetable();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.accent} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {timetable ? (
        <TimetableViewer timetable={timetable} onClear={clearTimetable} />
      ) : (
        <TimetableCreator 
          onSave={saveTimetable}
          isProcessing={isProcessing} 
          setIsProcessing={setIsProcessing} 
        />
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