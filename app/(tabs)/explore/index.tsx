// app/(tabs)/explore/index.tsx
import CollapsibleHeader from '@/components/explore/CollapsibleHeader';
import CreatePost from '@/components/explore/CreatePost';
import PostCard from '@/components/explore/PostCard';
import ProfileCard from '@/components/explore/ProfileCard';
import SchoolCard from '@/components/explore/SchoolCard';

import { firestore } from '@/firebaseConfig';
import { LocalSchoolItem, Post, ProfileData, SchoolData, SchoolEntry, UserProfile } from '@/types/explore';
import { Feather, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { AnimatePresence, MotiView } from 'moti';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { highSchools } from '@/constants/highschool';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';


const GardenFeedScreen = () => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const router = useRouter();
  
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [allProfiles, setAllProfiles] = useState<UserProfile[]>([]);
  const [allSchools, setAllSchools] = useState<(SchoolEntry | LocalSchoolItem)[]>([]);

  const fetchAllData = useCallback(async () => { 
    setLoading(true); 
    try { 
        const userJson = await AsyncStorage.getItem('user');
        const profileJson = await AsyncStorage.getItem('profile');
        
        if (userJson && profileJson) {
            const user = JSON.parse(userJson);
            const profile = JSON.parse(profileJson);
            
            if(user.email && profile) {
              const currentUserData: UserProfile = { userId: user.email, profile: profile as ProfileData };
              setCurrentUser(currentUserData);
              console.log('[EXPLORE SCREEN] Successfully loaded currentUser from AsyncStorage:', currentUserData.userId);
            } else {
               console.warn('[EXPLORE SCREEN] User or profile data in AsyncStorage is malformed.');
            }
        } else {
            console.warn('[EXPLORE SCREEN] Could not load current user from AsyncStorage.');
        }

        const postsQuery = query(collection(firestore, "posts"), orderBy("createdAt", "desc"));
        const postsSnap = await getDocs(postsQuery);
        setAllPosts(postsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Post[]);
        
        const profilesSnap = await getDocs(collection(firestore, "users"));
        const profilesData = await Promise.all(profilesSnap.docs.map(async (userDoc) => {
            const profileSnap = await getDoc(doc(firestore, `users/${userDoc.id}/profile/details`));
            return profileSnap.exists() ? { userId: userDoc.id, profile: profileSnap.data() } : null;
        }));
        setAllProfiles(profilesData.filter(p => p !== null) as UserProfile[]);

        const country = profileJson ? JSON.parse(profileJson).country : 'United States';
        const schoolsList = Object.entries((highSchools as any)[country] || {}).flatMap(([regionName, regionSchools]) =>
            Object.entries(regionSchools as any).map(([schoolKey, schoolData]) => ({
                key: schoolKey, schoolKey, data: schoolData as SchoolData, regionName, type: 'school' as const
            }))
        );
        setAllSchools(schoolsList);
        
    } catch (e) { 
        console.error("Failed to fetch data on explore screen:", e); 
        Alert.alert('Error', 'Could not load data.'); 
    } finally { 
        setLoading(false); 
    }}, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const lowerCaseQuery = searchQuery.toLowerCase();
    const profiles = allProfiles.filter(p => p.profile.fullName?.toLowerCase().includes(lowerCaseQuery)).map(p => ({ ...p, type: 'profile' as const }));
    const schools = allSchools.filter(s => s.data.name.toLowerCase().includes(lowerCaseQuery)).map(s => ({ ...s, type: 'school' as const }));
    const posts = allPosts.filter(p => p.text?.toLowerCase().includes(lowerCaseQuery)).map(p => ({ ...p, type: 'post' as const }));
    return [...profiles, ...schools, ...posts];
  }, [searchQuery, allProfiles, allSchools, allPosts]);
  
  const handleProfilePress = (item: UserProfile) => router.push(`/explore/${item.userId}`);
  const handleSchoolPress = (item: SchoolEntry | LocalSchoolItem) => router.push({ pathname: `/explore/school/${encodeURIComponent(item.schoolKey)}`, params: { school: JSON.stringify(item.data) } });
  const onSearchResultPress = (item: any) => { setIsSearchActive(false); setSearchQuery(''); Keyboard.dismiss(); if (item.type === 'profile') handleProfilePress(item); if (item.type === 'school') handleSchoolPress(item); if (item.type === 'post') Alert.alert("Navigate to Post", "Post navigation is not yet implemented."); }
  const cancelSearch = () => { Keyboard.dismiss(); setIsSearchActive(false); setSearchQuery(''); }

  const renderSearchResultItem = ({ item }: { item: any }) => {
      switch(item.type) {
        case 'profile':
            return <ProfileCard item={item} onPress={() => onSearchResultPress(item)} containerStyle={styles.searchProfileCard}/>;
        case 'school':
            return <SchoolCard item={item} onPress={() => onSearchResultPress(item)} containerStyle={styles.searchSchoolCard}/>;
        case 'post':
            return <View style={{paddingHorizontal: spacing.md, paddingBottom: spacing.sm}}><PostCard post={item} currentUser={currentUser} onCommentAdded={fetchAllData}/></View>;
        default:
            return null;
      }
  }
  const ListFooterSpacer = () => <View style={{ height: 100 }} />;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
            <AnimatePresence>
              {!isSearchActive && (
                <MotiView from={{ translateX: -50, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: -50, opacity: 0 }} transition={{ type: 'timing', duration: 250 }}>
                    <Text style={styles.headerTitle}>Explore</Text>
                </MotiView>
              )}
            </AnimatePresence>
        </View>
        <MotiView
            style={styles.searchContainer}
            animate={{ width: isSearchActive ? '80%' : 44, marginRight: isSearchActive ? spacing.sm : 0 }}
            transition={{ type: 'timing', duration: 300 }}
        >
             <TouchableOpacity onPress={() => setIsSearchActive(true)} style={styles.searchIcon}>
                <Ionicons name="search" size={20} color={colors.textSecondary} />
            </TouchableOpacity>
            {isSearchActive && (
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search anything..."
                    placeholderTextColor={colors.textSecondary}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    autoFocus
                />
            )}
        </MotiView>
        <AnimatePresence>
          {!isSearchActive && (
            <MotiView from={{ translateX: 50, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: 50, opacity: 0 }} transition={{ type: 'timing', duration: 250 }} style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => {}} style={styles.headerIcon}>
                  <Feather name="bell" size={24} color={colors.text} />
              </TouchableOpacity>
            </MotiView>
          )}
        </AnimatePresence>
        {isSearchActive && (
          <TouchableOpacity onPress={cancelSearch}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <View style={{ flex: 1 }}>
        {loading ? (
          <View style={styles.centered}><ActivityIndicator size="large" color={colors.primary} /></View>
        ) : (
          <FlatList
            data={allPosts}
            renderItem={({ item }) => <PostCard post={item} currentUser={currentUser} onCommentAdded={fetchAllData} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={ 
              <>
                <Text style={styles.sectionHeader}>Your Corner</Text>
                <CollapsibleHeader 
                  currentUser={currentUser} 
                  onProfilePress={handleProfilePress} 
                  onSchoolPress={handleSchoolPress} 
                />
                <CreatePost currentUser={currentUser} onPostCreated={fetchAllData} />
                <Text style={styles.feedTitle}>Garden Feed</Text>
              </>
            }
            ListEmptyComponent={() => (<View style={styles.emptyFeedContainer}><Text style={styles.defaultEmptyFeedText}>No posts yet.</Text></View>)}
            onRefresh={fetchAllData} refreshing={loading}
            ListFooterComponent={ListFooterSpacer}
          />
        )}

        <AnimatePresence>
          {isSearchActive && (
            <MotiView
              style={styles.searchOverlay}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BlurView intensity={Platform.OS === 'ios' ? 80 : 150} tint="dark" style={StyleSheet.absoluteFill}/>
              <View style={styles.greenTintOverlay} />
              
              <FlatList
                    data={searchResults}
                    renderItem={renderSearchResultItem}
                    keyExtractor={(item) => `${item.type}-${item.id || item.schoolKey || item.userId}`}
                    ListEmptyComponent={() => (
                      <View style={styles.emptyFeedContainer}>
                        <Text style={styles.emptyFeedText}>
                          {searchQuery.length > 0 ? `No results for "${searchQuery}"` : "Search for people, schools, and posts."}
                        </Text>
                      </View>
                    )}
                    contentContainerStyle={{ paddingTop: spacing.md }}
                    keyboardShouldPersistTaps="handled"
                    ListFooterComponent={ListFooterSpacer}
                />
            </MotiView>
          )}
        </AnimatePresence>
      </View>
    </SafeAreaView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.md, height: 60, backgroundColor: colors.background, borderBottomWidth: 1, borderBottomColor: colors.border, zIndex: 10 },
    headerContent: { flexDirection: 'row', alignItems: 'center', flex: 1 },
    logo: { width: 32, height: 32 },
    headerTitle: { ...typography.h2, color: colors.text, marginLeft: spacing.sm },
    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, height: 44, borderRadius: radius.full },
    searchIcon: { paddingHorizontal: 12 },
    searchInput: { flex: 1, fontSize: 16, color: colors.text, height: '100%' },
    headerIcon: { marginLeft: spacing.sm },
    cancelButton: { color: colors.primary, ...typography.body, marginLeft: spacing.sm },
    searchOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.background, 
    },
    sectionHeader: {
        ...typography.h4,
        color: colors.text,
        marginHorizontal: spacing.md,
        marginTop: spacing.md,
        marginBottom: spacing.sm,
    },
    feedTitle: { ...typography.h3, color: colors.text, marginHorizontal: spacing.md, marginTop: spacing.lg, marginBottom: spacing.sm },
    emptyFeedContainer: { padding: spacing.xl, alignItems: 'center', justifyContent: 'center', marginTop: spacing.xl },
    defaultEmptyFeedText: { ...typography.h4, color: colors.textSecondary },
    emptyFeedText: { ...typography.h4, color: 'white' },
    greenTintOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(10, 23, 16, 0.7)' },
    searchProfileCard: { width: 'auto', marginHorizontal: spacing.md, marginBottom: spacing.md, padding: spacing.md },
    searchSchoolCard: { marginHorizontal: spacing.md, marginBottom: spacing.sm },
});

export default GardenFeedScreen;