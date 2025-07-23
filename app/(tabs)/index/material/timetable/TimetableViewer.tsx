// app/material/timetable/TimetableViewer.tsx
import { TimetableData } from '@/utils/ai/timetableScanScript';
import { Ionicons } from '@expo/vector-icons';
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, DAYS, Spacing, Typography } from './constants/theme';

interface TimetableViewerProps {
  timetable: TimetableData;
  onClear: () => void;
}

// Helper to get today's key, e.g., 'monday', 'tuesday', etc.
const getTodayKey = () => DAYS[new Date().getDay() - 1] || DAYS[0];
const toTitleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const DayScheduleCard = ({ dayData }: { dayData: TimetableData[string] }) => (
    <View style={styles.timetableCard}>
        {(dayData && dayData.length > 0) ? dayData.map((period, index) => (
            <View key={index} style={[styles.periodRow, index === dayData.length - 1 && styles.lastPeriodRow]}>
                <View style={styles.timeColumn}>
                    <Text style={styles.timeText}>{period.startTime}</Text>
                    <Text style={styles.timeTextMuted}>{period.endTime}</Text>
                </View>
                <View style={styles.subjectColumn}>
                    <Text style={styles.subjectText}>{period.subject}</Text>
                    {period.location ? <Text style={styles.locationText}>{period.location}</Text> : null}
                </View>
            </View>
        )) : (
            <Text style={styles.freeDayText}>No classes scheduled for today!</Text>
        )}
    </View>
);

export function TimetableViewer({ timetable, onClear }: TimetableViewerProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const todayKey = getTodayKey();

  return (
    <View style={{ flex: 1 }}>
        <MotiView from={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={styles.viewerContainer}>
            <View style={styles.header}>
                <Text style={Typography.title}>My Timetable</Text>
                <TouchableOpacity onPress={onClear}>
                    <Text style={styles.resetText}>New +</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.todayHeader}>Today's Schedule ({toTitleCase(todayKey)})</Text>

            <TouchableOpacity activeOpacity={0.8} onPress={() => setModalVisible(true)}>
                <DayScheduleCard dayData={timetable[todayKey]} />
            </TouchableOpacity>

            <Text style={styles.footerText}>Tap card to view full week.</Text>
        </MotiView>

        {/* --- CUSTOM MODAL IMPLEMENTATION --- */}
        <AnimatePresence>
            {modalVisible && (
                <MotiView
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={styles.modalBackdrop}
                >
                    <MotiView
                        from={{ translateY: Dimensions.get('window').height }}
                        animate={{ translateY: 0 }}
                        exit={{ translateY: Dimensions.get('window').height }}
                        transition={{ type: 'timing', duration: 400 }}
                        style={styles.modalContent}
                    >
                        <SafeAreaView style={{ flex: 1 }}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>Full Week</Text>
                                <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                    <Ionicons name="close-circle" size={32} color={Colors.secondaryText} />
                                </Pressable>
                            </View>

                            <ScrollView style={styles.modalScrollView} showsVerticalScrollIndicator={false}>
                                {DAYS.map(day => (
                                    <View key={day} style={{ marginBottom: Spacing.lg }}>
                                        <Text style={styles.modalDayHeader}>{toTitleCase(day)}</Text>
                                        <DayScheduleCard dayData={timetable[day]} />
                                    </View>
                                ))}
                            </ScrollView>
                        </SafeAreaView>
                    </MotiView>
                </MotiView>
            )}
        </AnimatePresence>
    </View>
  );
}

const styles = StyleSheet.create({
    viewerContainer: { flex: 1, padding: Spacing.lg },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    resetText: { color: Colors.accent, fontWeight: 'bold', fontSize: 16, padding: Spacing.sm },
    todayHeader: { fontSize: 22, fontWeight: 'bold', color: Colors.primaryText, marginVertical: Spacing.md },
    footerText: { textAlign: 'center', color: Colors.secondaryText, marginTop: Spacing.md },
    // Card
    timetableCard: { backgroundColor: Colors.card, borderRadius: 16, borderWidth: 1, borderColor: Colors.border, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 5 },
    periodRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: Colors.border, padding: Spacing.md },
    lastPeriodRow: { borderBottomWidth: 0 },
    timeColumn: { width: 70 },
    timeText: { fontSize: 16, fontWeight: '500', color: Colors.primaryText },
    timeTextMuted: { fontSize: 14, color: Colors.secondaryText },
    subjectColumn: { flex: 1, paddingLeft: Spacing.md },
    subjectText: { fontSize: 16, fontWeight: 'bold', color: Colors.primaryText, marginBottom: 4 },
    locationText: { fontSize: 14, color: Colors.secondaryText },
    freeDayText: { textAlign: 'center', padding: Spacing.lg, color: Colors.secondaryText },
    // Custom Modal Styles
    modalBackdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 10 },
    modalContent: {
        flex: 1,
        backgroundColor: Colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden', // clips the content to the rounded corners
        marginTop: 50, // leaves space at the top
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        position: 'relative'
    },
    modalTitle: {
        ...Typography.title,
        textAlign: 'center'
    },
    closeButton: {
        position: 'absolute',
        right: Spacing.md,
    },
    modalScrollView: {
        paddingHorizontal: Spacing.lg,
    },
    modalDayHeader: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: Colors.primaryText, 
        marginBottom: Spacing.sm, 
        marginTop: Spacing.md 
    },
});