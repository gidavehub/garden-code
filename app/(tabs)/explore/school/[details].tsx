// app/explore/school/[details].tsx
import { firestore } from '@/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { collectionGroup, getDocs, limit, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';

type SchoolObject = { name: string; curriculum: string; };
type UserProfileSlim = { userId: string | null; profile: { fullName: string; profilePicture: string | null; role: 'teacher' | 'student'; }; };

const SchoolDetailsScreen = () => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const params = useLocalSearchParams<{ school?: string }>();
  const router = useRouter();
  
  // --- LOGIC PRESERVED 100% ---
  const [schoolData, setSchoolData] = useState<SchoolObject | null>(null);
  const [teachers, setTeachers] = useState<UserProfileSlim[]>([]);
  const [students, setStudents] = useState<UserProfileSlim[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllData = async () => {
        setLoading(true); setError(null);
        try {
            const school = JSON.parse(params.school || '{}') as SchoolObject;
            if (!school.name) throw new Error("Invalid school data provided.");
            setSchoolData(school);
            
            const teachersQuery = query(collectionGroup(firestore, 'profile'), where('school', '==', school.name), where('role', '==', 'teacher'), limit(15));
            const teacherSnap = await getDocs(teachersQuery);
            setTeachers(teacherSnap.docs.map(d => ({ userId: d.ref.parent.parent!.id, profile: d.data() } as UserProfileSlim)));

            const studentsQuery = query(collectionGroup(firestore, 'profile'), where('school', '==', school.name), where('role', '==', 'student'), limit(15));
            const studentSnap = await getDocs(studentsQuery);
            setStudents(studentSnap.docs.map(d => ({ userId: d.ref.parent.parent!.id, profile: d.data() } as UserProfileSlim)));
            
        } catch (e: any) { setError(e.message || "Failed to load data.");
        } finally { setLoading(false); }
    };
    if (params.school) loadAllData(); else setError("No school data found.");
  }, [params.school]);

  const handleProfilePress = (item: UserProfileSlim) => {
    if (item.userId) router.push(`/explore/${item.userId}`);
  };

  const renderProfileChip = (item: UserProfileSlim) => (
    <TouchableOpacity key={item.userId} style={styles.profileChip} onPress={() => handleProfilePress(item)}>
      <Image source={item.profile.profilePicture ? { uri: item.profile.profilePicture } : require('@/assets/images/avatar.jpg')} style={styles.chipAvatar}/>
      <Text style={styles.chipName} numberOfLines={1}>{item.profile.fullName}</Text>
    </TouchableOpacity>
  );

  if (loading) return <View style={styles.centered}><ActivityIndicator size="large" color={colors.primary} /></View>;
  if (error || !schoolData) return <View style={styles.centered}><Ionicons name="alert-circle-outline" size={48} color={colors.error} /><Text style={styles.errorText}>{error}</Text><TouchableOpacity onPress={() => router.back()} style={styles.backButton}><Text style={styles.backButtonText}>Go Back</Text></TouchableOpacity></View>;

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.fixedBackButton} onPress={() => router.back()}><Ionicons name="arrow-back" size={28} color={colors.text} /></TouchableOpacity>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.schoolIconPlaceholder}><Ionicons name="school" size={60} color={colors.primary} /></View>
            <Text style={styles.schoolNameText}>{schoolData.name}</Text>
            <Text style={styles.locationText}>{schoolData.curriculum} Curriculum</Text>
          </View>
          
          {teachers.length > 0 && <View style={styles.card}><Text style={styles.cardTitle}>Teachers</Text><ScrollView horizontal showsHorizontalScrollIndicator={false}>{teachers.map(renderProfileChip)}</ScrollView></View>}
          {students.length > 0 && <View style={styles.card}><Text style={styles.cardTitle}>Students</Text><ScrollView horizontal showsHorizontalScrollIndicator={false}>{students.map(renderProfileChip)}</ScrollView></View>}

          {(teachers.length === 0 && students.length === 0) && <View style={styles.centered}><Text style={styles.errorText}>No profiles listed for this school yet.</Text></View>}

          <View style={{height: spacing.xl}} />
        </ScrollView>
    </SafeAreaView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, },
    fixedBackButton: { position: 'absolute', top: 60, left: spacing.md, zIndex: 10, backgroundColor: colors.card, padding: spacing.sm, borderRadius: radius.full },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.lg, backgroundColor: colors.background },
    errorText: { ...typography.body, color: colors.textSecondary, marginTop: spacing.md, textAlign: 'center' },
    backButton: { backgroundColor: colors.card, padding: spacing.md, borderRadius: radius.md },
    backButtonText: { ...typography.bodyBold, color: colors.primary },
    header: { alignItems: 'center', padding: spacing.xl, backgroundColor: colors.card, borderBottomLeftRadius: radius.xl, borderBottomRightRadius: radius.xl },
    schoolIconPlaceholder: { width: 100, height: 100, borderRadius: radius.full, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center', marginBottom: spacing.md, borderWidth: 2, borderColor: colors.primary },
    schoolNameText: { ...typography.h2, color: colors.text, textAlign: 'center' },
    locationText: { ...typography.body, color: colors.textSecondary },
    card: { margin: spacing.md, backgroundColor: colors.card, borderRadius: radius.lg, padding: spacing.md },
    cardTitle: { ...typography.h4, color: colors.text, marginBottom: spacing.md, paddingBottom: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border },
    chipScrollContainer: { paddingVertical: spacing.sm },
    profileChip: { alignItems: 'center', marginHorizontal: spacing.sm, width: 90 },
    chipAvatar: { width: 64, height: 64, borderRadius: radius.full, marginBottom: spacing.sm },
    chipName: { ...typography.small, color: colors.text, textAlign: 'center' },
});

export default SchoolDetailsScreen;