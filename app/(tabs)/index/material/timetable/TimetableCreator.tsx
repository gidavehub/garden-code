import { TimetableData, scanTimetableWithAI } from '@/utils/ai/timetableScanScript';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { AnimatePresence, MotiView } from 'moti';
import React, { useMemo, useState } from 'react';
import {
  Alert, LayoutChangeEvent, Platform, Pressable, ScrollView,
  StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, DAYS, Spacing, Typography } from './constants/theme';

interface TimetableCreatorProps {
  onSave: (data: TimetableData) => void;
  isProcessing: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
}
type Period = { subject: string; startTime: string; endTime: string; location: string };
const initialPeriodState: Period = { subject: '', startTime: '09:00', endTime: '10:00', location: '' };
const initialTimetableState = DAYS.reduce((acc, day) => ({ ...acc, [day]: [] }), {} as TimetableData);

const LoadingAnimation = () => (
    <View style={styles.loadingContainer}>
      <MotiView from={{ scale: 1, opacity: 0.5 }} animate={{ scale: 1.2, opacity: 0.8 }} transition={{ type: 'timing', duration: 2000, loop: true, repeatReverse: true, }} style={styles.loadingBackgroundCircle} />
      <MotiView style={styles.cloudContainer}>
        {[0, 600, 1200].map(delay => (
          <MotiView key={delay} from={{ opacity: 0, scale: 0.5, translateY: 20 }} animate={{ opacity: [0, 1, 0], scale: 1, translateY: -30 }} transition={{ type: 'timing', duration: 3500, delay, loop: true, repeatReverse: false }} style={{ position: 'absolute' }}>
            <Ionicons name="cloud-outline" size={80 + Math.random() * 40} color={Colors.white} />
          </MotiView>
        ))}
      </MotiView>
      <Text style={styles.loadingText}>Analysing Timetable...</Text>
      <Text style={styles.loadingSubText}>Our Garden AI is working its magic!</Text>
    </View>
);

const ScanView = ({ onSave, setIsProcessing }: Omit<TimetableCreatorProps, 'isProcessing'>) => {
  const processImage = async (result: ImagePicker.ImagePickerResult) => {
    if (result.canceled || !result.assets[0].uri) return;
    setIsProcessing(true);
    try {
        const data = await scanTimetableWithAI(result.assets[0].uri);
        if (data && Object.values(data).some(day => day.length > 0)) {
            onSave(data);
        } else {
            Alert.alert("Scan Failed", "The AI could not extract any schedule information. Please ensure the image is a clear, upright timetable and try again.");
        }
    } catch (error) {
        console.error("AI Scan Error:", error);
        Alert.alert("An Error Occurred", "Something went wrong during the scan. Please try again.");
    } finally {
        setIsProcessing(false);
    }
  };

  const handleUpload = async () => processImage(await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 1, allowsEditing: true }));
  const handleTakePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) { Alert.alert("Permission Required", "Camera access is needed to take a photo of your timetable."); return; }
    processImage(await ImagePicker.launchCameraAsync({ quality: 1, allowsEditing: true }));
  };

  return (
    <View style={styles.contentContainer}>
        <View style={styles.scanIconContainer}>
            <Ionicons name="scan-circle-outline" size={120} color={Colors.accent} />
        </View>
        <Text style={styles.title}>Scan with Garden AI</Text>
        <Text style={styles.subtitle}>Automatically add your timetable from a photo.</Text>
        <View style={{ width: '100%', marginTop: 'auto', gap: Spacing.md }}>
            <TouchableOpacity style={styles.buttonPrimary} onPress={handleUpload}>
                <Ionicons name="image-outline" size={24} color={Colors.white} />
                <Text style={styles.buttonTextPrimary}>Upload Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={handleTakePhoto}>
                <Ionicons name="camera-outline" size={24} color={Colors.accent} />
                <Text style={styles.buttonTextSecondary}>Take Photo</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

interface ManualEntryViewProps {
  timetable: TimetableData;
  activeDay: string;
  setActiveDay: (day: string) => void;
  onDeletePeriod: (day: string, index: number) => void;
  onAddPeriod: () => void;
  onSave: () => void;
}
const ManualEntryView = ({ timetable, activeDay, setActiveDay, onDeletePeriod, onAddPeriod, onSave }: ManualEntryViewProps) => {
  const isSaveDisabled = Object.values(timetable).every(day => day.length === 0);

  const handleDelete = (index: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onDeletePeriod(activeDay, index);
  }

  return (
    <View style={styles.contentContainer}>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dayTabsContainer}>
            {DAYS.map(day => (<TouchableOpacity key={day} onPress={() => setActiveDay(day)} style={[styles.dayTab, activeDay === day && styles.activeDayTab]}><Text style={[styles.dayTabText, activeDay === day && styles.activeDayTabText]}>{day.charAt(0).toUpperCase() + day.slice(1, 3)}</Text></TouchableOpacity>))}
          </ScrollView>
        </View>
        <ScrollView style={{width: '100%'}}>
            <AnimatePresence>
                {timetable[activeDay].length === 0 ? (
                    <MotiView from={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} key="empty">
                        <View style={styles.emptyDayContainer}>
                            <Ionicons name="calendar-clear-outline" size={60} color={Colors.secondaryText} />
                            <Text style={styles.emptyDayText}>Day Off!</Text>
                            <Text style={styles.emptyDaySubtext}>Tap "Add Period" to schedule a class.</Text>
                        </View>
                    </MotiView>
                ) : ( timetable[activeDay].map((period, index) => (
                    <MotiView key={`${activeDay}-${index}-${period.subject}`} from={{ opacity: 0, scale: 0.9, translateY: 10 }} animate={{ opacity: 1, scale: 1, translateY: 0 }} exit={{ opacity: 0, scale: 0.9, translateX: -50 }} transition={{ type: 'timing', duration: 300 }}>
                        <View style={styles.periodCard}>
                            <View style={styles.periodTimeContainer}>
                                <Text style={styles.periodStartTime}>{period.startTime}</Text>
                                <View style={styles.timeSeparator}/>
                                <Text style={styles.periodEndTime}>{period.endTime}</Text>
                            </View>
                            <View style={styles.periodInfo}>
                                <Text style={styles.periodSubject} numberOfLines={1}>{period.subject}</Text>
                                {period.location ? (
                                    <View style={styles.periodDetailsContainer}>
                                        <Ionicons name="location-outline" size={14} color={Colors.secondaryText} />
                                        <Text style={styles.periodDetailsText}>{period.location}</Text>
                                    </View>
                                ) : null}
                            </View>
                            <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
                                <Ionicons name="trash-bin-outline" size={22} color={Colors.danger} />
                            </TouchableOpacity>
                        </View>
                    </MotiView>
                )))}
            </AnimatePresence>
            <TouchableOpacity style={styles.addPeriodButton} onPress={onAddPeriod}>
                <Ionicons name="add-circle-outline" size={24} color={Colors.accent} />
                <Text style={styles.addPeriodText}>Add Period</Text>
            </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={[styles.buttonPrimary, { marginTop: Spacing.md }, isSaveDisabled && styles.buttonDisabled]} onPress={onSave} disabled={isSaveDisabled}>
            <Ionicons name="save-outline" size={24} color={Colors.white} />
            <Text style={styles.buttonTextPrimary}>Save Full Timetable</Text>
        </TouchableOpacity>
    </View>
  );
};

export function TimetableCreator({ onSave, isProcessing, setIsProcessing }: TimetableCreatorProps) {
  const router = useRouter();
  const [mode, setMode] = useState<'scan' | 'manual'>('scan');
  const [containerWidth, setContainerWidth] = useState(0);

  const [timetable, setTimetable] = useState<TimetableData>(initialTimetableState);
  const [activeDay, setActiveDay] = useState(DAYS[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPeriod, setCurrentPeriod] = useState<Period>(initialPeriodState);
  
  const timeOptions = useMemo(() => Array.from({ length: 24 * 4 }, (_, i) => {
    const hours = Math.floor(i / 4).toString().padStart(2, '0');
    const minutes = ((i % 4) * 15).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }), []);

  const handleAddPeriod = () => {
    if (!currentPeriod.subject.trim()) { Alert.alert("Missing Subject", "Please enter a subject name."); return; }
    if (currentPeriod.startTime >= currentPeriod.endTime) { Alert.alert("Invalid Times", "Start time must be before end time."); return; }
    
    const updatedDaySchedule = [...timetable[activeDay], currentPeriod].sort((a,b) => a.startTime.localeCompare(b.startTime));
    setTimetable({ ...timetable, [activeDay]: updatedDaySchedule });
    
    setModalVisible(false);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };
  
  const handleDeletePeriod = (day: string, indexToDelete: number) => {
    const updatedDaySchedule = timetable[day].filter((_, index) => index !== indexToDelete);
    setTimetable({ ...timetable, [day]: updatedDaySchedule });
  };
  
  const openAddPeriodModal = () => {
    setCurrentPeriod(initialPeriodState);
    setModalVisible(true);
  }

  const handleSave = () => {
    onSave(timetable);
  };
  
  if (isProcessing) return <LoadingAnimation />;

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.creatorContainer} edges={['top', 'bottom']}>
          <View style={styles.header}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                  <Ionicons name="chevron-back" size={28} color={Colors.primaryText} />
              </TouchableOpacity>
          </View>

          <View onLayout={(e: LayoutChangeEvent) => setContainerWidth(e.nativeEvent.layout.width)} style={styles.toggleOuterContainer}>
              {containerWidth > 0 && ( <MotiView style={[styles.toggleActiveBackground, { width: containerWidth / 2 }]} animate={{ translateX: mode === 'manual' ? containerWidth / 2 : 0 }} transition={{ type: 'spring', damping: 20, stiffness: 250 }} /> )}
              <Pressable style={styles.toggleButton} onPress={() => setMode('scan')}><Text style={[styles.toggleText, mode === 'scan' && styles.toggleActiveText]}>Scan with Garden AI</Text></Pressable>
              <Pressable style={styles.toggleButton} onPress={() => setMode('manual')}><Text style={[styles.toggleText, mode === 'manual' && styles.toggleActiveText]}>Enter Manually</Text></Pressable>
          </View>

          <MotiView key={mode} from={{ opacity: 0, translateY: 15 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', duration: 400 }} style={{ flex: 1, width: '100%' }}>
              {mode === 'scan' 
                ? <ScanView onSave={onSave} setIsProcessing={setIsProcessing} /> 
                : <ManualEntryView 
                    timetable={timetable}
                    activeDay={activeDay}
                    setActiveDay={setActiveDay}
                    onDeletePeriod={handleDeletePeriod}
                    onAddPeriod={openAddPeriodModal}
                    onSave={handleSave}
                  />}
          </MotiView>
      </SafeAreaView>

      <AnimatePresence>
        {modalVisible && (
            <Pressable style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
              <MotiView
                  from={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  exit={{ translateY: 50, opacity: 0 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                  style={styles.modalContent}
                  onStartShouldSetResponder={() => true} // Prevents closing modal when tapping inside
              >
                  <Text style={styles.modalTitle}>Add New Period</Text>
                  <TextInput style={styles.input} placeholder="Subject (e.g., Advanced Potions)" value={currentPeriod.subject} onChangeText={(text) => setCurrentPeriod({ ...currentPeriod, subject: text })} placeholderTextColor={Colors.secondaryText} />
                  <View style={styles.timePickerRow}>
                    <View style={styles.pickerContainer}>
                      <Text style={styles.pickerLabel}>Start Time</Text>
                      <View style={styles.pickerWrapper}>
                        <Picker selectedValue={currentPeriod.startTime} onValueChange={(val) => setCurrentPeriod({...currentPeriod, startTime: val})} itemStyle={styles.pickerItem}>
                          {timeOptions.map(time => <Picker.Item key={`start-${time}`} label={time} value={time} />)}
                        </Picker>
                      </View>
                    </View>
                    <View style={styles.pickerContainer}>
                      <Text style={styles.pickerLabel}>End Time</Text>
                      <View style={styles.pickerWrapper}>
                        <Picker selectedValue={currentPeriod.endTime} onValueChange={(val) => setCurrentPeriod({...currentPeriod, endTime: val})} itemStyle={styles.pickerItem}>
                          {timeOptions.map(time => <Picker.Item key={`end-${time}`} label={time} value={time} />)}
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <TextInput style={styles.input} placeholder="Location (e.g., Dungeons Classroom)" value={currentPeriod.location} onChangeText={(text) => setCurrentPeriod({ ...currentPeriod, location: text })} placeholderTextColor={Colors.secondaryText}/>
                  <TouchableOpacity style={styles.buttonPrimary} onPress={handleAddPeriod}>
                      <Ionicons name="add-circle-outline" size={24} color={Colors.white} />
                      <Text style={styles.buttonTextPrimary}>Add to {activeDay.slice(0, 3)}</Text>
                  </TouchableOpacity>
              </MotiView>
          </Pressable>
        )}
      </AnimatePresence>
    </View>
  );
}

const baseButton = {
  flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  paddingVertical: Spacing.lg - 2, borderRadius: 16, width: '100%', gap: Spacing.md,
  shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
};
const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: '#F8F9FA' },
  creatorContainer: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: Spacing.md, paddingTop: Spacing.sm, paddingBottom: Spacing.md },
  backButton: { backgroundColor: Colors.card, width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  contentContainer: { flex: 1, width: '100%', alignItems: 'center', padding: Spacing.lg, gap: Spacing.lg },
  title: { ...Typography.title, marginBottom: Spacing.sm, textAlign: 'center' },
  subtitle: { ...Typography.subtitle, marginBottom: Spacing.lg, color: Colors.secondaryText, textAlign: 'center', paddingHorizontal: Spacing.md },
  scanIconContainer: { alignItems: 'center', justifyContent: 'center', padding: Spacing.xl },
  buttonPrimary: { ...baseButton, backgroundColor: Colors.accent },
  buttonSecondary: { ...baseButton, backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border, shadowColor: 'transparent', elevation: 0 },
  buttonDisabled: { backgroundColor: Colors.lightGray, shadowOpacity: 0, elevation: 0 },
  buttonTextPrimary: { color: Colors.white, fontSize: 16, fontWeight: 'bold' },
  buttonTextSecondary: { color: Colors.accent, fontSize: 16, fontWeight: 'bold' },
  loadingContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing.xl, backgroundColor: Colors.primary },
  loadingBackgroundCircle: { position: 'absolute', width: 400, height: 400, borderRadius: 200, backgroundColor: Colors.accent, opacity: 0.8 },
  cloudContainer: { width: 250, height: 150, alignItems: 'center', justifyContent: 'center' },
  loadingText: { ...Typography.title, fontSize: 24, color: Colors.white, fontWeight: '700' },
  loadingSubText: { ...Typography.subtitle, color: Colors.white, opacity: 0.8 },
  toggleOuterContainer: { alignSelf: 'center', flexDirection: 'row', backgroundColor: Colors.lightGray, borderRadius: 100, position: 'relative', overflow: 'hidden', borderWidth: 1, borderColor: Colors.border, width: '90%', marginBottom: Spacing.lg },
  toggleButton: { paddingVertical: Spacing.md, flex: 1, alignItems: 'center', zIndex: 1 },
  toggleActiveBackground: { ...StyleSheet.absoluteFillObject, backgroundColor: Colors.primary, borderRadius: 100, zIndex: 0 },
  toggleText: { fontWeight: '600', color: Colors.darkGray },
  toggleActiveText: { color: Colors.white },
  dayTabsContainer: { flexGrow: 0, paddingBottom: Spacing.lg, paddingHorizontal: Spacing.lg },
  dayTab: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 30, marginRight: 8, backgroundColor: 'transparent' },
  activeDayTab: { backgroundColor: Colors.accent, shadowColor: Colors.accent, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 },
  dayTabText: { color: Colors.secondaryText, fontWeight: 'bold', fontSize: 14 },
  activeDayTabText: { color: Colors.white },
  periodCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.card, padding: Spacing.md, borderRadius: 12, marginBottom: Spacing.md, borderWidth: 1, borderColor: Colors.border },
  periodTimeContainer: { alignItems: 'center', paddingRight: Spacing.md, marginRight: Spacing.md, borderRightWidth: 1, borderRightColor: Colors.border },
  periodStartTime: { fontSize: 16, fontWeight: 'bold', color: Colors.primaryText },
  periodEndTime: { fontSize: 14, color: Colors.secondaryText },
  timeSeparator: { height: 6, width: 1, backgroundColor: Colors.border, marginVertical: 4 },
  periodInfo: { flex: 1, gap: 4 },
  periodSubject: { fontSize: 16, fontWeight: 'bold', color: Colors.primaryText },
  periodDetailsContainer: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm - 4 },
  periodDetailsText: { fontSize: 14, color: Colors.secondaryText },
  deleteButton: { padding: Spacing.sm, marginLeft: Spacing.sm },
  addPeriodButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: Spacing.lg-2, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, borderStyle: 'dashed', marginTop: Spacing.md, backgroundColor: '#FFFFFF55' },
  addPeriodText: { color: Colors.accent, fontWeight: 'bold', marginLeft: Spacing.sm, fontSize: 16 },
  emptyDayContainer: { alignItems: 'center', justifyContent: 'center', paddingTop: Spacing.xl * 2, opacity: 0.7 },
  emptyDayText: { fontSize: 20, color: Colors.primaryText, fontWeight: 'bold', marginTop: Spacing.md },
  emptyDaySubtext: { fontSize: 15, color: Colors.secondaryText, marginTop: Spacing.sm },
  modalBackdrop: { ...StyleSheet.absoluteFillObject, zIndex: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: '90%', backgroundColor: Colors.card, borderRadius: 20, padding: Spacing.lg, gap: Spacing.lg, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 15, elevation: 10 },
  modalTitle: { ...Typography.title, fontSize: 22, textAlign: 'center', marginBottom: Spacing.sm },
  input: { backgroundColor: Colors.lightGray, paddingHorizontal: Spacing.md, paddingVertical: 14, borderRadius: 12, fontSize: 16, borderColor: Colors.border, borderWidth: 1, color: Colors.primaryText, fontWeight: '500' },
  timePickerRow: { flexDirection: 'row', justifyContent: 'space-around', gap: Spacing.md },
  pickerContainer: { flex: 1, alignItems: 'center' },
  pickerLabel: { color: Colors.secondaryText, fontWeight: '600', marginBottom: Spacing.sm, fontSize: 14 },
  pickerWrapper: { height: Platform.OS === 'ios' ? 150 : 56, width: '100%', overflow: 'hidden', justifyContent: 'center', backgroundColor: Colors.lightGray, borderRadius: 12, borderWidth: 1, borderColor: Colors.border },
  pickerItem: { color: Colors.primaryText, fontSize: Platform.OS === 'ios' ? 22 : 16 },
});