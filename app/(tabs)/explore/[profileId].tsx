// app/explore/[profileId].tsx
import { app as firebaseApp, firestore } from '@/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { get, getDatabase, ref, serverTimestamp, set, update } from 'firebase/database';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Linking, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { ProfileData as ProfileDataType, StudentProfile, TeacherProfile } from '@/types/explore';

const encodeEmailForRTDB = (email: string | null | undefined): string => {
  if (!email) return 'unknown_user_profile_encoded';
  return email.replace(/\./g, ',').replace(/@/g, '_at_');
};

const MOCK_FALLBACK_CURRENT_USER_EMAIL = 'testuser@example.com';

const UserProfileScreen = () => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const params = useLocalSearchParams<{ profileId?: string }>();
  const router = useRouter();
  const { profileId: viewedUserEmail } = params;

  // --- LOGIC PRESERVED 100% ---
  const [profileData, setProfileData] = useState<ProfileDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [isInitiatingChat, setIsInitiatingChat] = useState(false);

  useEffect(() => {
    const loadCurrentUserEmail = async () => {
      try {
        const userJson = await AsyncStorage.getItem('user');
        if (userJson) { setCurrentUserEmail(JSON.parse(userJson)?.email); return; }
      } catch (e) { console.error("Profile: Err loading current user", e); }
      setCurrentUserEmail(MOCK_FALLBACK_CURRENT_USER_EMAIL);
    };
    loadCurrentUserEmail();
  }, []);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      if (!viewedUserEmail) { setError("Profile ID missing."); setLoading(false); return; }
      setLoading(true); setError(null);
      try {
        const docSnap = await getDoc(doc(firestore, 'users', viewedUserEmail, 'profile', 'details'));
        if (docSnap.exists()) { setProfileData(docSnap.data() as ProfileDataType); }
        else { setError('Profile not found.'); }
      } catch (e: any) { setError(e.message || 'Failed to load profile.'); }
      finally { setLoading(false); }
    };
    if (viewedUserEmail) fetchProfileDetails();
  }, [viewedUserEmail]);

  const handleStartOrOpenDM = async () => {
    if (!currentUserEmail || !viewedUserEmail || !profileData?.fullName) return;
    setIsInitiatingChat(true);
    const db = getDatabase(firebaseApp);
    const chatId = [encodeEmailForRTDB(currentUserEmail), encodeEmailForRTDB(viewedUserEmail)].sort().join('_dm_');
    const chatRef = ref(db, `chats/${chatId}`);
    try {
      const chatSnap = await get(chatRef);
      if (!chatSnap.exists()) {
        const encCur = encodeEmailForRTDB(currentUserEmail);
        const encView = encodeEmailForRTDB(viewedUserEmail);
        const newChat = { type: 'dm', members: { [encCur]: true, [encView]: true }, createdAt: serverTimestamp(), lastMessage: { text: "Chat started.", senderId: "system", timestamp: serverTimestamp() } };
        await set(chatRef, newChat);
        await update(ref(db), { [`/userChats/${encCur}/${chatId}`]: true, [`/userChats/${encView}/${chatId}`]: true });
      }
      router.push({ pathname: `/messaging/${chatId}`, params: { chatId, chatName: profileData.fullName, chatType: 'dm', chatAvatar: profileData.profilePicture || undefined, currentUserEmail } });
    } catch (e: any) { Alert.alert("Chat Error", e.message || "Could not open or start chat."); }
    finally { setIsInitiatingChat(false); }
  };

  // --- HELPER RENDER COMPONENTS ---
  const InfoRow = ({ icon, label, value }) => {
    if (!value) return null;
    return (
      <View style={styles.infoRow}>
        <Ionicons name={icon} size={22} color={colors.primary} style={styles.infoIcon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoLabel}>{label}</Text>
          <Text style={styles.infoValue}>{Array.isArray(value) ? value.join(', ') : String(value)}</Text>
        </View>
      </View>
    );
  };
  const Pill = ({ text }) => <View style={styles.pill}><Text style={styles.pillText}>{text}</Text></View>;
  const ListRow = ({ label, items, renderItemText }) => {
    if (!items || items.length === 0) return null;
    return (
      <View style={styles.listRow}>
        <Text style={styles.infoLabel}>{label}</Text>
        <View style={styles.pillContainer}>
          {items.map((item, index) => <Pill key={index} text={renderItemText ? renderItemText(item) : String(item).trim()} />)}
        </View>
      </View>
    );
  };

  const renderContent = () => {
    if (loading) { return <View style={styles.centered}><ActivityIndicator size="large" color={colors.primary} /></View>; }
    if (error) { return (<View style={styles.centered}><Ionicons name="alert-circle-outline" size={48} color={colors.error} /><Text style={styles.errorText}>{error}</Text></View>); }
    if (!profileData) { return (<View style={styles.centered}><Ionicons name="person-remove-outline" size={48} color={colors.textSecondary} /><Text style={styles.errorText}>Profile not found.</Text></View>); }

    const { fullName, school, country, curriculum, role, profilePicture } = profileData;
    const teacherData = role === 'teacher' ? profileData as TeacherProfile : null;
    const studentData = role === 'student' ? profileData as StudentProfile : null;

    return (
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.headerSection}>
          <Image source={profilePicture ? { uri: profilePicture } : require('@/assets/images/avatar.jpg')} style={styles.avatar} />
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.roleText}>{role?.charAt(0).toUpperCase() + role?.slice(1)} at {school}</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={[styles.headerButton, {backgroundColor: '#1E9E67'}]} onPress={() => Linking.openURL(`mailto:${viewedUserEmail}`)}><Ionicons name="mail-outline" size={18} color="#FFFFFF" /><Text style={styles.headerButtonText}>Email</Text></TouchableOpacity>
            {currentUserEmail !== viewedUserEmail && (<TouchableOpacity style={[styles.headerButton, {backgroundColor: colors.primary}]} onPress={handleStartOrOpenDM} disabled={isInitiatingChat}>
                {isInitiatingChat ? <ActivityIndicator size="small" color="#000" /> : <Ionicons name="chatbubbles-outline" size={18} color="#000" />}<Text style={[styles.headerButtonText, {color: colors.background}]}>Message</Text></TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.card}>
          <InfoRow icon="school-outline" label="School" value={school} />
          <InfoRow icon="earth-outline" label="Country" value={country} />
          <InfoRow icon="book-outline" label="Curriculum" value={curriculum} />
        </View>

        {teacherData && (<View style={styles.card}>
          <ListRow label="Teaching Subjects" items={teacherData.teachingSubjects} />
          <ListRow label="Available For" items={teacherData.availableTimeSlots} />
          <InfoRow icon="people-circle-outline" label="Mentorship Interest" value={teacherData.mentorshipInterest ? 'Yes' : 'No'} />
        </View>)}
        
        {studentData && (<View style={styles.card}>
          <ListRow label="Interests" items={studentData.interests} />
          <InfoRow icon="layers-outline" label="Class Level" value={studentData.classLevel} />
          <InfoRow icon="bulb-outline" label="Learning Style" value={studentData.preferredLearningStyle} />
          <ListRow label="Current Courses" items={studentData.courses}/>
        </View>)}

        <View style={{ height: spacing.xl }} />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
        <View style={styles.topBarFixed}>
            <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.push('/explore')}><Ionicons name="arrow-back-outline" size={28} color={colors.text} /></TouchableOpacity>
        </View>
        {renderContent()}
    </SafeAreaView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: colors.background, },
  topBarFixed: { position: 'absolute', top: Platform.OS === 'android' ? spacing.lg : 50, left: 0, right: 0, paddingHorizontal: spacing.md, zIndex: 10, },
  scrollContainer: { flex: 1, },
  scrollContentContainer: { paddingTop: 60, paddingBottom: spacing.xl, },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.lg, backgroundColor: colors.background, },
  errorText: { ...typography.body, color: colors.error, textAlign: 'center', marginTop: spacing.md, },
  headerSection: { alignItems: 'center', paddingVertical: spacing.lg, margin: spacing.md, backgroundColor: colors.card, borderRadius: radius.xl },
  avatar: { width: 120, height: 120, borderRadius: radius.full, marginBottom: spacing.md, borderWidth: 3, borderColor: colors.primary, },
  fullName: { ...typography.h2, color: colors.text, marginBottom: spacing.sm, textAlign: 'center' },
  roleText: { ...typography.body, color: colors.textSecondary, marginBottom: spacing.lg, textAlign: 'center' },
  headerActions: { flexDirection: 'row', justifyContent: 'center', width: '100%', gap: spacing.md },
  headerButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: spacing.lg, borderRadius: radius.full },
  headerButtonText: { ...typography.bodyBold, marginLeft: spacing.sm },
  card: { backgroundColor: colors.card, borderRadius: radius.lg, padding: spacing.lg, marginHorizontal: spacing.md, marginTop: spacing.md, },
  infoRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.lg, },
  infoIcon: { marginRight: spacing.md, marginTop: 2, },
  infoTextContainer: { flex: 1, },
  infoLabel: { ...typography.caption, color: colors.textSecondary, marginBottom: 4 },
  infoValue: { ...typography.body, color: colors.text, },
  listRow: { marginBottom: spacing.lg },
  pillContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing.sm, },
  pill: { backgroundColor: colors.border, borderRadius: radius.full, paddingVertical: 8, paddingHorizontal: spacing.md, marginRight: spacing.sm, marginBottom: spacing.sm, },
  pillText: { ...typography.caption, color: colors.text, },
});

export default UserProfileScreen;