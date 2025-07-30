import { spacing } from '@/theme/spacing';
import { ThemeColors, useTheme } from '@/theme/theme'; // <-- IMPORT useTheme
import { typography } from '@/theme/typography';
import { Certificate, Experience, ProfileData as ProfileDataType, StudentProfile, TeacherProfile } from '@/types/explore';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, Alert, Image, Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { auth } from '../../../firebaseConfig';

// --- THEME-AWARE HELPER COMPONENTS ---
const InfoRow = ({ icon, label, value }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: any }) => {
    const { colors } = useTheme();
    const styles = getHelperStyles(colors);

    const stringValue = String(value);
    if (value === null || typeof value === 'undefined' || stringValue.trim() === '') return null;
    const displayValue = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : stringValue;

    return (
        <View style={styles.infoRow}>
            <Ionicons name={icon} size={20} color={colors.primary} style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>{label}</Text>
                <Text style={styles.infoValue}>{displayValue}</Text>
            </View>
        </View>
    );
};

const Pill = ({ text }: { text: string }) => {
    const { colors } = useTheme();
    const styles = getHelperStyles(colors);
    if (!text || text.trim() === '') return null;
    return <View style={styles.pill}><Text style={styles.pillText}>{text}</Text></View>;
};

const ListRow = ({ icon, label, items, renderItemText }: { icon: keyof typeof Ionicons.glyphMap; label?: string; items: any[] | undefined; renderItemText?: (item: any) => string }) => {
  const { colors } = useTheme();
  const styles = getHelperStyles(colors);
  
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  const renderedPills = items
    .map((item, index) => {
      const textToDisplay = renderItemText ? renderItemText(item) : String(item).trim();
      if (textToDisplay && textToDisplay.trim() !== '') return <Pill key={index} text={textToDisplay} />;
      return null;
    })
    .filter(Boolean);
  
  if (renderedPills.length === 0) return null;

  return (
    <View style={styles.infoRow}>
        <Ionicons name={icon} size={20} color={colors.primary} style={styles.infoIcon} />
        <View style={styles.infoTextContainer}>
            {label && label.trim() !== '' ? <Text style={styles.infoLabel}>{label}</Text> : null}
            <View style={styles.pillContainer}>{renderedPills}</View>
        </View>
    </View>
  );
};
// --- END HELPER COMPONENTS ---

export default function MainProfileScreen() {
  const { colors } = useTheme(); // <-- GET THEME
  const styles = getStyles(colors); // <-- APPLY THEME

  const [profile, setProfile] = useState<ProfileDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadProfile = async () => { 
      setLoading(true);
      try {
        const profileDataString = await AsyncStorage.getItem('profile');
        setProfile(profileDataString ? JSON.parse(profileDataString) : null);
      } catch (error) { 
        console.error('Failed to load profile:', error); setProfile(null);  
      } finally { 
        setLoading(false); 
      }
    };
    loadProfile();
  }, []);

  const handleLogout = async () => {
    Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            // Clear all data from AsyncStorage (user, profile, test history, etc.)
            await AsyncStorage.clear();
            await signOut(auth);
            router.replace('/(auth)/login');
          } catch (error) {
            Alert.alert('Logout Failed', 'Something went wrong.');
          }
        },
      },
    ]);
  };

  const handleEditProfile = () => {
    router.push('/(tabs)/profile/editProfile');
  };

  const handleSettings = () => {
    router.push('/(tabs)/profile/settings');
  };
  
  const renderAvatar = () => { 
    if (profile?.profilePicture) {
        return <Image source={{ uri: profile.profilePicture }} style={styles.avatar} />;
    }
    const initials = profile?.fullName ? profile.fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : '??';
    return (
        <View style={[styles.avatar, styles.avatarPlaceholder]}>
            <Text style={styles.avatarInitials}>{initials}</Text>
        </View>
    );
  };

  if (loading) { 
      return <View style={styles.centered}><ActivityIndicator size="large" color={colors.primary} /><Text style={styles.loadingInfoText}>Loading Profile...</Text></View>; 
  }

  if (!profile) {
      return (
          <SafeAreaView style={styles.centered}> 
              <Ionicons name="sad-outline" size={60} color={colors.textSecondary} /> 
              <Text style={styles.errorText}>No profile data found.</Text> 
              <Text style={styles.errorSubText}>Please try logging in again.</Text> 
              <TouchableOpacity style={[styles.actionButtonMain, {backgroundColor: colors.error}]} onPress={handleLogout}> 
                  <Ionicons name="log-out-outline" size={20} color={colors.buttonText} style={{ marginRight: 8 }} /> 
                  <Text style={styles.actionButtonMainText}>Logout</Text> 
              </TouchableOpacity> 
          </SafeAreaView> 
      ); 
  }

  const teacherData = profile.role === 'teacher' ? profile as TeacherProfile : null;
  const studentData = profile.role === 'student' ? profile as StudentProfile : null;

  return ( 
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerSection}>
          {renderAvatar()}
          <Text style={styles.fullName}>{profile.fullName || 'N/A'}</Text>
          <Text style={styles.roleText}>{profile.role ? profile.role.charAt(0).toUpperCase() + profile.role.slice(1) : 'N/A'}</Text>
          <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerButton} onPress={handleEditProfile}>
                  <Ionicons name="pencil-outline" size={18} color={colors.accent} />
                  <Text style={styles.headerButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton} onPress={handleSettings}>
                  <Ionicons name="settings-outline" size={18} color={colors.textSecondary} />
                  <Text style={styles.headerButtonText}>Settings</Text>
              </TouchableOpacity>
          </View>
      </View>
      
      <View style={styles.card}>
          <Text style={styles.cardTitle}>General Info</Text>
          <InfoRow icon="school-outline" label="School" value={profile.school} />
          <InfoRow icon="earth-outline" label="Country" value={profile.country} />
          <InfoRow icon="book-outline" label="Curriculum" value={profile.curriculum} />
      </View>
      
      {studentData && (
          <View style={styles.card}>
              <Text style={styles.cardTitle}>Student Details</Text>
              <InfoRow icon="ribbon-outline" label="Class Level" value={studentData.classLevel} />
              <InfoRow icon="bulb-outline" label="Learning Style" value={studentData.preferredLearningStyle} />
              <ListRow icon="heart-outline" label="Interests" items={studentData.interests} />
              <ListRow icon="bookmark-outline" label="Courses" items={studentData.courses} />
          </View>
      )}

      {teacherData && (
        <>
          <View style={styles.card}>
              <Text style={styles.cardTitle}>Teaching Details</Text>
              <ListRow icon="library-outline" label="Subjects Taught" items={teacherData.teachingSubjects} />
              <InfoRow icon="easel-outline" label="Teaching Style" value={teacherData.teachingStyle} />
              <ListRow icon="time-outline" label="Availability" items={teacherData.availableTimeSlots} />
              <InfoRow icon="people-circle-outline" label="Mentorship" value={teacherData.mentorshipInterest} />
          </View>
          {teacherData.teachingExperience?.length > 0 && (
              <View style={styles.card}>
                  <Text style={styles.cardTitle}>Experience</Text>
                  <ListRow icon="briefcase-outline" items={teacherData.teachingExperience} renderItemText={(e: Experience) => `${e.company} (${e.duration} yrs)`} />
              </View>
          )}
          {teacherData.certifications?.length > 0 && (
              <View style={styles.card}>
                  <Text style={styles.cardTitle}>Certifications</Text>
                  <ListRow icon="shield-checkmark-outline" items={teacherData.certifications} renderItemText={(c: Certificate) => `${c.title} (${c.level})`} />
              </View>
          )}
        </>
      )}

      <View style={{height: spacing.lg, }} />
      <TouchableOpacity style={styles.actionButtonMain} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color={colors.buttonText} style={{ marginRight: spacing.md,}} />
          <Text style={styles.actionButtonMainText}>Logout</Text>
      </TouchableOpacity>
      
      {/* This View adds extra space at the bottom, allowing the Logout button to be scrolled up higher on the screen. */}
      <View style={{ height: 120 }} />

    </ScrollView>
  );
};

// Styles for Helpers
const getHelperStyles = (colors: ThemeColors) => StyleSheet.create({
    infoRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: spacing.md },
    infoIcon: { marginRight: spacing.md, marginTop: Platform.OS === 'ios' ? 1 : 3 },
    infoTextContainer: { flex: 1 },
    infoLabel: { ...typography.small, color: colors.textSecondary, marginBottom: 4 },
    infoValue: { ...typography.body, color: colors.text, lineHeight: 20 },
    pillContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 },
    pill: { backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border, borderRadius: 15, paddingVertical: 6, paddingHorizontal: 12, marginRight: 8, marginBottom: 8 },
    pillText: { ...typography.small, color: colors.textSecondary },
});

// Styles for the Main Profile Screen
const getStyles = (colors: ThemeColors) => StyleSheet.create({ 
    container: { flex: 1, backgroundColor: colors.background  },
    // Note: an alternative to the <View> spacer would be to increase paddingBottom here
    contentContainer: { paddingBottom: spacing.sm }, // Adjusted to remove redundant padding
    centered: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
    loadingInfoText: { color: colors.textSecondary, marginTop: spacing.md, fontSize: 16 },
    errorText: { ...typography.bodyBold, color: colors.text, textAlign: 'center', marginTop: spacing.md },
    errorSubText: { ...typography.caption, color: colors.textSecondary, textAlign: 'center', marginTop: spacing.sm },
    headerSection: {
      backgroundColor: colors.card,
      paddingVertical: spacing.xl,
      paddingHorizontal: spacing.lg,
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      marginBottom: spacing.lg,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      borderBottomWidth: 1,
      borderColor: colors.border,
    },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: spacing.md, backgroundColor: colors.border, borderColor: colors.primary, borderWidth: 3 },
    avatarPlaceholder: { justifyContent: 'center', alignItems: 'center' },
    avatarInitials: { ...typography.h1, color: colors.primary },
    fullName: { ...typography.h2, color: colors.text, marginBottom: 4, textAlign: 'center' },
    roleText: { ...typography.body, color: colors.textSecondary, marginBottom: spacing.lg, textTransform: 'capitalize' },
    headerActions: { flexDirection: 'row', justifyContent: 'center', width: '100%', gap: spacing.md },
    headerButton: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: colors.background },
    headerButtonText: { ...typography.caption, color: colors.text, fontWeight: '600', marginLeft: 8 },
    card: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.lg, marginHorizontal: spacing.md, marginBottom: spacing.lg, borderWidth: 1, borderColor: colors.border },
    cardTitle: { ...typography.h3, color: colors.text, marginBottom: spacing.md, borderBottomColor: colors.border, borderBottomWidth: 1, paddingBottom: spacing.md },
    actionButtonMain: { 
      backgroundColor: colors.error, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center', 
      paddingVertical: 14, 
      borderRadius: 8, 
      marginHorizontal: spacing.lg, 
      marginTop: spacing.md
    },
    actionButtonMainText: { ...typography.bodyBold, color: colors.buttonText },
});