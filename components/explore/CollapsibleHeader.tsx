// app/components/explore/CollapsibleHeader.tsx
import { firestore } from '@/firebaseConfig';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { collection, collectionGroup, getDocs, query, where } from 'firebase/firestore';
import { AnimatePresence, MotiView } from 'moti';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ProfileData, UserProfile } from '@/types/explore';

import ProfileCard from './ProfileCard';
import SchoolCard from './SchoolCard';

// Internal types
interface UserProfileWithScore extends UserProfile {
    highestGTScore: number;
}
interface RankedSchool {
    key: string;
    data: { name: string; curriculum: string; gardenTestAverage: number; };
    studentCount: number;
}
interface CollapsibleHeaderProps {
  currentUser: UserProfile | null;
  onProfilePress: (item: UserProfile) => void;
  onSchoolPress: (item: any) => void;
}

const ScrollIndicators = ({ showLeft, showRight }: { showLeft: boolean; showRight: boolean; }) => {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    return (
        <>
            <AnimatePresence>
                {showLeft && (
                    <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={[styles.indicator, styles.indicatorLeft]}>
                        <LinearGradient colors={[`${colors.card}`, 'transparent']} start={{ x: 0.2, y: 0 }} end={{ x: 1, y: 0 }} style={StyleSheet.absoluteFill} />
                        <Ionicons name="chevron-back" size={24} color={colors.textSecondary} style={{ paddingLeft: spacing.sm}}/>
                    </MotiView>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showRight && (
                    <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={[styles.indicator, styles.indicatorRight]}>
                         <LinearGradient colors={['transparent', `${colors.card}`]} start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }} style={StyleSheet.absoluteFill} />
                        <Ionicons name="chevron-forward" size={24} color={colors.textSecondary} style={{ paddingRight: spacing.sm}} />
                    </MotiView>
                )}
            </AnimatePresence>
        </>
    );
};

const HorizontalRowSection = ({ title, children, hasData, loading, animationDelay = 0 }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const [scrollState, setScrollState] = useState({ showLeft: false, showRight: false });
  const scrollViewRef = useRef<ScrollView>(null);
  
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const showLeft = contentOffset.x > 15;
    const showRight = contentOffset.x < contentSize.width - layoutMeasurement.width - 15;
    if (showLeft !== scrollState.showLeft || showRight !== scrollState.showRight) {
        setScrollState({ showLeft, showRight });
    }
  };
  
  const handleLayout = () => {
    // Check initial position on layout
    if (scrollViewRef.current) {
         scrollViewRef.current.measure((x, y, width, height, pageX, pageY) => {
             // In this simple check, we rely on contentSize being available
         });
    }
  };

  const handleContentSizeChange = (contentWidth: number, contentHeight: number) => {
    if (scrollViewRef.current) {
        scrollViewRef.current.measure((x, y, width, height, pageX, pageY) => {
            setScrollState(prev => ({...prev, showRight: contentWidth > width }));
        });
    }
  }

  return (
    <MotiView style={styles.rowSection} from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', duration: 400, delay: animationDelay }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View>
          {loading ? ( <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent}>{[...Array(3)].map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)}</ScrollView>
          ) : hasData ? ( 
              <View>
                  <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalScrollContent}
                    onScroll={handleScroll}
                    onLayout={handleLayout}
                    onContentSizeChange={handleContentSizeChange}
                    scrollEventThrottle={16}
                  >
                      <AnimatePresence>{React.Children.map(children, (child, i) => ( <MotiView key={i} from={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'timing', duration: 300, delay: i * 75 }}>{child}</MotiView> ))}</AnimatePresence>
                  </ScrollView>
                  <ScrollIndicators showLeft={scrollState.showLeft} showRight={scrollState.showRight} />
              </View>
          ) : ( <Text style={styles.emptyStateText}>No matching profiles found.</Text> )}
      </View>
    </MotiView>
  );
};


const YourRankings = ({ loading, ranks, currentUserProfile, colors }) => {
  const styles = getThemedStyles(colors);
  if (!currentUserProfile) return null;
  const renderRankItem = (label: string, value: number | null) => (
    <View style={styles.rankItem}>
      <Text style={styles.rankLabel}>{label}</Text>
      {loading ? ( <ActivityIndicator size="small" color={colors.primary} />
      ) : ( <Text style={styles.rankValue}>#{value ?? 'N/A'}</Text> )}
    </View>
  );
  return (
    <MotiView style={styles.rankContainer} from={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} transition={{type: 'timing', duration: 300}}>
        <Text style={styles.yourRankTitle}>Your Leaderboard Ranks</Text>
        {renderRankItem('Global Rank', ranks.global)}
        {renderRankItem(`${currentUserProfile.country} Rank`, ranks.country)}
        {renderRankItem('School Rank', ranks.school)}
    </MotiView>
  );
};

const SkeletonCard = () => {
  const { colors } = useTheme();
  return (
    <MotiView style={[getThemedStyles(colors).profileCardSkeleton, { backgroundColor: colors.border }]}
      from={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ type: 'timing', duration: 1000, loop: true }}>
        <LinearGradient colors={['transparent', 'rgba(255,255,255,0.1)', 'transparent']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={StyleSheet.absoluteFill} />
    </MotiView>
  );
};

const CollapsibleHeader: React.FC<CollapsibleHeaderProps> = ({ currentUser, onProfilePress, onSchoolPress }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const [activeTileKey, setActiveTileKey] = useState<string | null>(null);
  
  const [loading, setLoading] = useState(false);
  
  const [allStudentsWithScores, setAllStudentsWithScores] = useState<UserProfileWithScore[]>([]);
  const [allTeachers, setAllTeachers] = useState<UserProfile[]>([]);

  const TILE_KEYS = { TOP_STUDENTS: 'Top Students', SIMILAR_INTERESTS: 'Similar Interests', TEACHERS: 'Teachers', SCHOOLS: 'Schools' };
  const tiles = useMemo(() => [
    { key: TILE_KEYS.TOP_STUDENTS, title: 'Top Students', icon: 'ribbon' as const },
    { key: TILE_KEYS.SIMILAR_INTERESTS, title: 'Similar Interests', icon: 'heart' as const },
    { key: TILE_KEYS.TEACHERS, title: 'Teachers', icon: 'school' as const },
    { key: TILE_KEYS.SCHOOLS, title: 'Schools', icon: 'business' as const },
  ], []);

  const activeTileData = useMemo(() => tiles.find(t => t.key === activeTileKey), [activeTileKey, tiles]);
  
  useEffect(() => {
    const fetchDataForTile = async () => {
        if (!activeTileKey || !currentUser) return;

        setLoading(true);

        const isStudentDataNeeded = activeTileKey === TILE_KEYS.TOP_STUDENTS || activeTileKey === TILE_KEYS.SIMILAR_INTERESTS || activeTileKey === TILE_KEYS.SCHOOLS;

        if (isStudentDataNeeded) {
            try {
                const profilesQuery = query(collectionGroup(firestore, 'profile'), where('role', '==', 'student'));
                const profilesSnap = await getDocs(profilesQuery);
                const studentsPromises = profilesSnap.docs.map(async (profileDoc) => {
                    const userId = profileDoc.ref.parent.parent!.id;
                    const testHistorySnap = await getDocs(collection(firestore, 'users', userId, 'testHistory'));
                    let highestGTScore = 0;
                    if (!testHistorySnap.empty) {
                        const scores = testHistorySnap.docs.map(doc => doc.data().score).filter(s => typeof s === 'number');
                        if (scores.length > 0) highestGTScore = Math.max(...scores);
                    }
                    return { userId, profile: profileDoc.data() as ProfileData, highestGTScore };
                });
                const finalStudents = await Promise.all(studentsPromises);
                setAllStudentsWithScores(finalStudents);
            } catch(e) { console.error("Error fetching student data:", e); }
        }

        if (activeTileKey === TILE_KEYS.TEACHERS) {
            try {
                const teachersQuery = query(collectionGroup(firestore, 'profile'), where('role', '==', 'teacher'));
                const teachersSnap = await getDocs(teachersQuery);
                const teachersData = teachersSnap.docs.map(doc => ({ userId: doc.ref.parent.parent!.id, profile: doc.data() as ProfileData }));
                setAllTeachers(teachersData);
            } catch(e) { console.error("Error fetching teacher data:", e); }
        }
        
        setLoading(false);
    };

    fetchDataForTile();
  }, [activeTileKey, currentUser]);

  const currentUserProfile = currentUser?.profile;
  const myData = useMemo(() => allStudentsWithScores.find(s => s.userId === currentUser?.userId), [allStudentsWithScores, currentUser]);
  const userRanks = useMemo(() => {
      if (!myData) return { global: null, country: null, school: null };
      const myScore = myData.highestGTScore;
      const globalHigher = allStudentsWithScores.filter(s => s.highestGTScore > myScore).length;
      const countryHigher = allStudentsWithScores.filter(s => s.profile.country === myData.profile.country && s.highestGTScore > myScore).length;
      const schoolHigher = allStudentsWithScores.filter(s => s.profile.school === myData.profile.school && s.highestGTScore > myScore).length;
      return { global: globalHigher + 1, country: countryHigher + 1, school: schoolHigher + 1, };
  }, [allStudentsWithScores, myData]);

  const { bestInSchool, bestInRegion, bestInWorld } = useMemo(() => {
    const studentsInMyGrade = currentUserProfile ? allStudentsWithScores.filter(p => p.profile.classLevel === currentUserProfile.classLevel) : [];
    const world = [...studentsInMyGrade].sort((a, b) => b.highestGTScore - a.highestGTScore);
    const region = world.filter(p => p.profile.region === currentUserProfile?.region);
    const school = region.filter(p => p.profile.school === currentUserProfile?.school);
    return { bestInSchool: school, bestInRegion: region, bestInWorld: world };
  }, [allStudentsWithScores, currentUserProfile]);
  
  const similarInterests = useMemo(() => {
    if (!currentUserProfile?.interests || allStudentsWithScores.length === 0) return [];
    return allStudentsWithScores.filter(student =>
        student.userId !== currentUser?.userId &&
        student.profile.interests?.some(interest => currentUserProfile.interests.includes(interest))
    );
  }, [allStudentsWithScores, currentUserProfile, currentUser]);
  
  const teachersInSchool = useMemo(() => allTeachers.filter(t => t.profile.school === currentUserProfile?.school), [allTeachers, currentUserProfile]);
  const mentorTeachers = useMemo(() => {
    if(!currentUserProfile?.courses) return [];
    return allTeachers.filter(t =>
        t.profile.mentorshipInterest === true &&
        t.profile.teachingSubjects?.some(subject => currentUserProfile.courses.includes(subject))
    );
  }, [allTeachers, currentUserProfile]);

  const rankedSchools = useMemo<RankedSchool[]>(() => {
    if (activeTileKey !== TILE_KEYS.SCHOOLS || allStudentsWithScores.length === 0) return [];

    const studentsBySchool = allStudentsWithScores.reduce((acc, student) => {
        const schoolName = student.profile.school;
        if (!schoolName) return acc;
        if (!acc[schoolName]) { acc[schoolName] = []; }
        acc[schoolName].push(student);
        return acc;
    }, {} as Record<string, UserProfileWithScore[]>);

    const schoolsData = Object.keys(studentsBySchool).map(schoolName => {
        const students = studentsBySchool[schoolName];
        const totalScore = students.reduce((sum, s) => sum + s.highestGTScore, 0);
        const avgScore = totalScore / students.length;
        
        return {
            key: schoolName,
            data: {
                name: schoolName,
                curriculum: students[0]?.profile.curriculum || "N/A",
                gardenTestAverage: Math.round(avgScore),
            },
            studentCount: students.length,
        };
    });

    return schoolsData.sort((a, b) => b.data.gardenTestAverage - a.data.gardenTestAverage);
  }, [allStudentsWithScores, activeTileKey]);

  const handleTilePress = (tileKey: string) => setActiveTileKey(prev => (prev === tileKey ? null : tileKey));

  const renderContent = () => {
    switch (activeTileKey) {
        case TILE_KEYS.TOP_STUDENTS:
            return <>
                <YourRankings loading={loading} ranks={userRanks} currentUserProfile={currentUserProfile} colors={colors} />
                <HorizontalRowSection title="Best in Your School" loading={loading} hasData={bestInSchool.length > 0}>{bestInSchool.map(p => <ProfileCard key={p.userId} item={p} onPress={onProfilePress} />)}</HorizontalRowSection>
                <HorizontalRowSection title="Best in Your Region" loading={loading} hasData={bestInRegion.length > 0} animationDelay={100}>{bestInRegion.map(p => <ProfileCard key={p.userId} item={p} onPress={onProfilePress} />)}</HorizontalRowSection> 
                <HorizontalRowSection title="Best in the World" loading={loading} hasData={bestInWorld.length > 0} animationDelay={200}>{bestInWorld.map(p => <ProfileCard key={p.userId} item={p} onPress={onProfilePress} />)}</HorizontalRowSection> 
            </>;
        case TILE_KEYS.SIMILAR_INTERESTS:
            return <HorizontalRowSection title="Students with Similar Interests" loading={loading} hasData={similarInterests.length > 0}>{similarInterests.map(p => <ProfileCard key={p.userId} item={p} onPress={onProfilePress} />)}</HorizontalRowSection>;
        case TILE_KEYS.TEACHERS:
            return <>
                <HorizontalRowSection title="Teachers in Your School" loading={loading} hasData={teachersInSchool.length > 0}>{teachersInSchool.map(p => <ProfileCard key={p.userId} item={p} onPress={onProfilePress} />)}</HorizontalRowSection>
                <HorizontalRowSection title="Mentors for Your Courses" loading={loading} hasData={mentorTeachers.length > 0} animationDelay={100}>{mentorTeachers.map(p => <ProfileCard key={p.userId} item={p} onPress={onProfilePress} />)}</HorizontalRowSection>
            </>;
        case TILE_KEYS.SCHOOLS:
            return <MotiView style={styles.rowSection} from={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Text style={styles.sectionTitle}>Ranked Schools</Text>
                {loading ? <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 40 }}/> : (
                    <ScrollView style={styles.schoolsContainer} nestedScrollEnabled>
                        <View style={{ paddingHorizontal: spacing.md, paddingBottom: spacing.lg }}>
                            {rankedSchools.length > 0 ?
                                rankedSchools.map(s => <SchoolCard key={s.key} item={s} onPress={onSchoolPress} />) :
                                <Text style={styles.emptyStateText}>No student data available to rank schools.</Text>
                            }
                        </View>
                    </ScrollView>
                )}
            </MotiView>;
        default:
            return null;
    }
  };

  return (
    <MotiView style={styles.container} animate={{ height: activeTileKey ? 'auto' : 110 }} transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.8 }}>
      <AnimatePresence>
        {!activeTileKey && (
            <MotiView key="tile-grid" style={styles.collapsedHeaderContainer} from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: 'timing', duration: 200 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.collapsedHeaderScrollContent}>
                    {tiles.map(tile => (
                        <TouchableOpacity key={tile.key} onPress={() => handleTilePress(tile.key)} activeOpacity={0.8} >
                            <MotiView style={styles.tile} animate={{ backgroundColor: colors.backgroundMuted }}>
                                <Ionicons name={tile.icon} size={28} color={colors.primary} />
                                <Text style={styles.tileText}>{tile.title}</Text>
                            </MotiView>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </MotiView>
        )}
        {activeTileKey && activeTileData && (
             <MotiView key="expanded-view" from={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: 'timing', duration: 300, delay: 150 }}>
                <TouchableOpacity style={styles.expandedHeader} onPress={() => handleTilePress(activeTileKey)} activeOpacity={0.8}>
                    <Ionicons name={activeTileData.icon} size={24} color={colors.primary} />
                    <Text style={styles.expandedTitle}>{activeTileData.title}</Text>
                    <Ionicons name="chevron-up" size={20} color={colors.textSecondary} />
                </TouchableOpacity>
                {renderContent()}
             </MotiView>
        )}
      </AnimatePresence>
    </MotiView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { marginHorizontal: spacing.lg, borderRadius: radius.xl, backgroundColor: colors.card, overflow: 'hidden', shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.05, shadowRadius: 12, elevation: 5, borderWidth: 1, borderColor: colors.border, marginBottom: spacing.md },
    collapsedHeaderContainer: { height: 110, justifyContent: 'center' },
    collapsedHeaderScrollContent: { alignItems: 'center', paddingHorizontal: spacing.lg, gap: spacing.md },
    tile: { width: 85, height: 85, justifyContent: 'center', alignItems: 'center', borderRadius: radius.lg, padding: spacing.sm },
    tileText: { ...typography.small, color: colors.text, textAlign: 'center', marginTop: spacing.sm, fontSize: 12, fontWeight: '600' },
    expandedHeader: { flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.md, paddingHorizontal: spacing.lg, borderBottomWidth: 1, borderBottomColor: colors.border, backgroundColor: colors.background },
    expandedTitle: { ...typography.h4, color: colors.text, flex: 1, marginLeft: spacing.md, fontSize: 18 },
    rowSection: { paddingVertical: spacing.md, minHeight: 180, position: 'relative' },
    sectionTitle: { ...typography.h3, color: colors.text, marginHorizontal: spacing.lg, marginBottom: spacing.md, fontWeight: '700' },
    horizontalScrollContent: { paddingHorizontal: spacing.md, paddingBottom: spacing.sm, gap: spacing.md, alignItems: 'center' },
    emptyStateText: { ...typography.body, color: colors.textSecondary, textAlign: 'center', padding: spacing.xl, fontStyle: 'italic', lineHeight: 22 },
    schoolsContainer: { maxHeight: 350 },
    rankContainer: {
        marginHorizontal: spacing.lg,
        marginBottom: spacing.md,
        backgroundColor: colors.background,
        borderRadius: radius.lg,
        padding: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
    },
    yourRankTitle: {
      ...typography.bodyBold,
      color: colors.text,
      marginBottom: spacing.sm,
      paddingBottom: spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border
    },
    rankItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.sm,
    },
    rankLabel: {
        ...typography.body,
        color: colors.textSecondary,
    },
    rankValue: {
        ...typography.bodyBold,
        color: colors.primary,
        fontSize: 18,
    },
    profileCardSkeleton: { width: 150, height: 180, borderRadius: radius.lg },
    indicator: {
        position: 'absolute',
        top: 25,
        bottom: 0,
        width: 50,
        justifyContent: 'center',
        zIndex: 10,
        pointerEvents: 'none',
    },
    indicatorLeft: {
        left: 0,
        alignItems: 'flex-start',
    },
    indicatorRight: {
        right: 0,
        alignItems: 'flex-end',
    },
});

export default CollapsibleHeader;