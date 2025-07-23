// app/(tabs)/explore/index.tsx
import FilterModalComponent from '@/components/explore/FilterModal';
import ProfileCard from '@/components/explore/ProfileCard';
import SchoolCard from '@/components/explore/SchoolCard';
import SearchDropdownModal from '@/components/explore/SearchDropdownModal';
import { highSchools } from '@/constants/highschool';
import { firestore } from '@/firebaseConfig';
import { LocalSchoolItem, ProfileData, SchoolData, SchoolEntry, UserProfile } from '@/types/explore';
import { Feather, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { collectionGroup, query as firestoreQuery, getDocs } from 'firebase/firestore';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- SKELETON LOADER COMPONENTS ---
const SkeletonElement = ({ style, duration = 1000 }: { style: any, duration?: number }) => {
  const fadeAnim = useRef(new Animated.Value(0.5)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 0.5, duration, useNativeDriver: true }),
      ])
    ).start();
  }, [fadeAnim, duration]);
  return <Animated.View style={[style, { opacity: fadeAnim }]} />;
};

const ProfileCardSkeleton = () => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  return (
    <View style={styles.profileCard}>
      <SkeletonElement style={styles.profileAvatarSkeleton} />
      <SkeletonElement style={styles.profileNameSkeleton} />
      <SkeletonElement style={styles.profileDescSkeleton} />
    </View>
  );
};

const SectionSkeleton = ({ title }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent}>
        {[...Array(3)].map((_, i) => <ProfileCardSkeleton key={i} />)}
      </ScrollView>
    </>
  );
};
// --- END SKELETONS ---

const GardenFeedScreen = () => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const router = useRouter();

  // --- ALL STATE AND LOGIC IS PRESERVED 100% ---
  const [allProfiles, setAllProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [userCountry, setUserCountry] = useState<string>('');
  const [schoolsInUserCountry, setSchoolsInUserCountry] = useState<{ [regionName: string]: { [schoolKey: string]: SchoolData } }>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState<boolean>(false);
  const [searchDropdownResults, setSearchDropdownResults] = useState<(UserProfile | SchoolEntry)[]>([]);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState<boolean>(false);
  const [activeFilters, setActiveFilters] = useState({ showTeachers: true, showStudents: true, showSchools: true });

  useEffect(() => {
    const loadUserCountryAndSchools = async () => {
      try {
        const profile = JSON.parse(await AsyncStorage.getItem('profile') || '{}');
        const country = profile.country || 'Unknown Area';
        setUserCountry(country);
        setSchoolsInUserCountry((highSchools as any)[country] || {});
      } catch (error) {
        setUserCountry('Unknown Area');
        setSchoolsInUserCountry({});
      }
    };
    loadUserCountryAndSchools();
  }, []);

  const fetchAllProfileDetails = useCallback(async () => {
    setLoading(true);
    setLoadingError(null);
    try {
      if (!firestore) throw new Error('Firestore is not initialized');
      const q = firestoreQuery(collectionGroup(firestore, 'profile'));
      const snap = await getDocs(q);
      const profilesData = snap.docs
        .filter(docSnap => docSnap.id === 'details' && docSnap.exists() && docSnap.ref.parent.parent?.id)
        .map(docSnap => ({ userId: docSnap.ref.parent.parent!.id, profile: docSnap.data() as ProfileData }))
        .filter(p => p.userId && p.profile?.role && p.profile?.fullName) as UserProfile[];
      setAllProfiles(profilesData);
    } catch (err: any) {
      console.error('GardenFeed: Error fetching profiles:', err);
      Alert.alert('Loading Error', err.message || 'Could not load profiles.');
      setAllProfiles([]);
      setLoadingError(err.message || 'Failed to load profiles.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAllProfileDetails(); }, [fetchAllProfileDetails]);

  const performSearch = useCallback((term: string) => {
      if (!term.trim()) { setIsSearchDropdownVisible(false); return; }
      const lowerTerm = term.toLowerCase();
      let results: (UserProfile | SchoolEntry)[] = [];

      if (activeFilters.showTeachers) {
        results.push(...allProfiles.filter(p => p.profile.role === 'teacher' && p.profile.fullName?.toLowerCase().includes(lowerTerm)));
      }
      if (activeFilters.showStudents) {
        results.push(...allProfiles.filter(p => p.profile.role === 'student' && p.profile.fullName?.toLowerCase().includes(lowerTerm)));
      }
      if (activeFilters.showSchools) {
        Object.keys(highSchools).forEach(c => Object.keys((highSchools as any)[c]).forEach(r => Object.keys((highSchools as any)[c][r]).forEach(sk => {
            const s = (highSchools as any)[c][r][sk] as SchoolData;
            if (s.name.toLowerCase().includes(lowerTerm)) {
                results.push({ type: 'school', country: c, region: r, schoolKey: sk, data: s });
            }
        })));
      }
      setSearchDropdownResults(results);
      setIsSearchDropdownVisible(results.length > 0);
  }, [allProfiles, activeFilters]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const t = setTimeout(() => performSearch(searchTerm), 300);
      return () => clearTimeout(t);
    } else {
      setIsSearchDropdownVisible(false);
      setSearchDropdownResults([]);
    }
  }, [searchTerm, performSearch]);

  const filteredSchoolsForMainPage = useMemo(() => Object.entries(schoolsInUserCountry).reduce((acc, [rn, sD]) => ({...acc, [rn]: sD}), {}), [schoolsInUserCountry]);
  const handleProfilePress = (item: UserProfile) => {
    if (!item.userId) return;
    setIsSearchDropdownVisible(false); setSearchTerm('');
    router.push(`/explore/${item.userId}`);
  };
  const handleSchoolPress = (item: SchoolEntry | LocalSchoolItem) => {
    setIsSearchDropdownVisible(false); setSearchTerm('');
    if (!item.schoolKey) return;
    const rd = { name: item.data.name, curriculum: item.data.curriculum, schoolKey: item.schoolKey };
    router.push({ pathname: `/explore/school/${encodeURIComponent(item.schoolKey)}`, params: { school: JSON.stringify(rd) } });
  };
  const handleApplyFilters = () => {
    setIsFilterModalVisible(false);
    if (searchTerm.trim()) performSearch(searchTerm);
  };
  // --- END OF LOGIC ---

  if (loading && allProfiles.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerTitleContainer}><Image source={require('@/assets/images/logo.png')} style={styles.logo}/><Text style={styles.headerTitle}>Feed</Text></View>
            <Feather name="sliders" size={24} color={colors.textSecondary} />
        </View>
        <SectionSkeleton title="Top Teachers" />
        <SectionSkeleton title="Top Students" />
      </SafeAreaView>
    );
  }

  if (loadingError) {
    return (
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Ionicons name="cloud-offline-outline" size={60} color={colors.error} />
        <Text style={styles.errorTextLarge}>{loadingError}</Text>
        <TouchableOpacity onPress={fetchAllProfileDetails} style={styles.retryButton}><Text style={styles.retryButtonText}>Retry</Text></TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <View style={styles.headerTitleContainer}><Image source={require('@/assets/images/logo.png')} style={styles.logo}/><Text style={styles.headerTitle}>Feed</Text></View>
          <TouchableOpacity onPress={() => setIsFilterModalVisible(true)}><Feather name="sliders" size={24} color={colors.text} /></TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
        <TextInput style={styles.input} placeholderTextColor={colors.textSecondary} placeholder="Search for people or schools..." value={searchTerm} onChangeText={setSearchTerm} onFocus={() => { if (searchTerm.trim()) setIsSearchDropdownVisible(true); }}/>
        {searchTerm.length > 0 && (<TouchableOpacity onPress={() => setSearchTerm('')} style={styles.clearSearchButton}><Ionicons name="close-circle" size={20} color={colors.textSecondary} /></TouchableOpacity>)}
      </View>

      <SearchDropdownModal isVisible={isSearchDropdownVisible} onClose={() => setIsSearchDropdownVisible(false)} searchTerm={searchTerm} searchDropdownResults={searchDropdownResults} onProfilePress={handleProfilePress} onSchoolPress={handleSchoolPress} />
      <FilterModalComponent isVisible={isFilterModalVisible} onClose={() => setIsFilterModalVisible(false)} activeFilters={activeFilters} setActiveFilters={setActiveFilters} onApplyFilters={handleApplyFilters} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
        {activeFilters.showTeachers && (
          <>
            <Text style={styles.sectionTitle}>Top Teachers</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent}>
              {allProfiles.filter((p) => p.profile.role === 'teacher').slice(0, 10).map((ps) => <ProfileCard key={ps.userId} item={ps} onPress={handleProfilePress}/>)}
              {allProfiles.filter((p) => p.profile.role === 'teacher').length === 0 && !loading && (<View style={styles.emptyHorizontalStateContainer}><Text style={styles.emptyStateText}>No teachers found.</Text></View>)}
            </ScrollView>
          </>
        )}
        {activeFilters.showStudents && (
          <>
            <Text style={styles.sectionTitle}>Top Students</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent}>
              {allProfiles.filter((p) => p.profile.role === 'student').slice(0, 10).map((ps) => <ProfileCard key={ps.userId} item={ps} onPress={handleProfilePress}/>)}
              {allProfiles.filter((p) => p.profile.role === 'student').length === 0 && !loading && (<View style={styles.emptyHorizontalStateContainer}><Text style={styles.emptyStateText}>No students found.</Text></View>)}
            </ScrollView>
          </>
        )}
        {activeFilters.showSchools && (
          <>
            <Text style={styles.sectionTitle}>Schools in {userCountry || 'your area'}</Text>
            <View style={styles.schoolsListContainer}>
              {Object.keys(filteredSchoolsForMainPage).length > 0 ? (
                Object.entries(filteredSchoolsForMainPage).map(([rn, sIR]) => (
                  <View key={rn} style={styles.regionContainer}>
                    <Text style={styles.regionTitle}>{rn}</Text>
                    {Object.entries(sIR as any).map(([sk, sD]) => <SchoolCard key={sk} item={{ schoolKey: sk, data: sD as SchoolData, regionName: rn, type: 'school'}} onPress={handleSchoolPress} />)}
                  </View>
                ))
              ) : (
                !loading && <Text style={styles.emptyStateTextLarge}>No schools listed for {userCountry || 'area'}.</Text>
              )}
            </View>
          </>
        )}
        <View style={{ height: spacing.lg }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background, padding: spacing.lg },
    errorTextLarge: { ...typography.body, color: colors.error, textAlign: 'center', marginBottom: spacing.md, },
    retryButton: { backgroundColor: colors.primary, paddingVertical: spacing.sm, paddingHorizontal: spacing.lg, borderRadius: radius.full },
    retryButtonText: { ...typography.bodyBold, color: colors.background },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.lg, paddingTop: Platform.OS === 'android' ? spacing.lg : spacing.md, paddingBottom: spacing.sm, backgroundColor: colors.background, borderBottomWidth: 1, borderBottomColor: colors.border },
    headerTitleContainer: { flexDirection: 'row', alignItems: 'center' },
    logo: { width: 32, height: 32, marginRight: spacing.sm },
    headerTitle: { ...typography.h2, color: colors.text, },
    searchContainer: { flexDirection: 'row', alignItems: 'center', marginHorizontal: spacing.md, marginVertical: spacing.md, borderRadius: radius.full, backgroundColor: colors.card, height: 50, paddingHorizontal: spacing.md },
    searchIcon: { marginRight: spacing.sm, },
    input: { flex: 1, fontSize: 16, color: colors.text },
    clearSearchButton: { padding: spacing.sm },
    scrollView: { flex: 1 },
    scrollViewContent: { paddingBottom: spacing.lg },
    sectionTitle: { ...typography.h3, color: colors.text, marginHorizontal: spacing.lg, marginTop: spacing.lg, marginBottom: spacing.md },
    horizontalScrollContent: { paddingHorizontal: spacing.lg, paddingVertical: spacing.sm, },
    emptyHorizontalStateContainer: { width: 300, justifyContent: 'center', alignItems: 'center', padding: spacing.lg, backgroundColor: colors.card, borderRadius: radius.lg, },
    schoolsListContainer: { paddingHorizontal: spacing.lg },
    regionContainer: { marginBottom: spacing.lg, },
    regionTitle: { ...typography.h4, color: colors.textSecondary, marginBottom: spacing.md, paddingBottom: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border, },
    emptyStateText: { color: colors.textSecondary, ...typography.body },
    emptyStateTextLarge: { color: colors.textSecondary, ...typography.body, paddingVertical: spacing.xl, textAlign: 'center' },
    // SKELETON STYLES
    profileCard: { width: 150, alignItems: 'center', marginRight: spacing.md, padding: spacing.md, backgroundColor: colors.card, borderRadius: radius.lg },
    profileAvatarSkeleton: { width: 80, height: 80, borderRadius: radius.full, backgroundColor: colors.border },
    profileNameSkeleton: { width: '80%', height: 16, borderRadius: radius.sm, backgroundColor: colors.border, marginTop: spacing.md, marginBottom: spacing.sm },
    profileDescSkeleton: { width: '60%', height: 12, borderRadius: radius.sm, backgroundColor: colors.border },
});

export default GardenFeedScreen;