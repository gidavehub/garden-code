// src/screens/GardenScreen.js
import {
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_700Bold,
  useFonts,
} from '@expo-google-fonts/lexend';
// --- [NEW] Import Ionicons for the new tile icons ---
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Path, Svg } from 'react-native-svg';

// --- Data and Component Imports ---
import PerformanceSection from '@/components/home/PerformanceSection';
// This component now handles its own sizing, as per your original file.
import StudyMaterialItem from '@/components/home/StudyMaterialItem';
import { ALL_TEXTBOOKS } from '@/data/allTextBooks';

SplashScreen.preventAutoHideAsync();

const BEAUTIFUL_COLORS = {
  primaryBg: '#0A1710',
  cardBg: '#122419',
  primaryText: '#E0F0E8',
  secondaryText: '#87B59A',
  accentGreen: '#38e07b',
  buttonText: '#0A1710',
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32',
  border: '#2A3C32',
};

const FONT_FAMILY = {
  regular: 'Lexend_400Regular',
  medium: 'Lexend_500Medium',
  bold: 'Lexend_700Bold',
};

const GearIcon = ({ color = BEAUTIFUL_COLORS.primaryText, size = 24 }) => (
  <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
    <Path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" />
  </Svg>
);

const leaderboardData = [
  { name: 'Ethan Carter', points: '1200 points', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG9eFpekoyiaQxyIMtRssbj698MD_l91uRqxw9FFXBT6X3aKdvnalLJkpME9SMIcbNnezCTzD4SX9CztyhgijxqobUyOOWfFignvhQvRCZdJsdo_lcvGORXaOh1rqCfI2cv-q6ylxiyagsCQSud6qiTEPD3kYKFUs2QajeDtJzEzIVKE5zullIuHUPNjlHhZZ2bFrcCM6mlXxkSBHApGbE9iInZLRyCxVd4zjOjh_vm8D70BrFKEW2UiH_We2OQs2o3cWOuKs_xRs' },
  { name: 'Olivia Bennett', points: '1150 points', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaoT0bo1HS_bjE4cR4TpqXZFVX178oc91WWgWtLdVZVVVyOcWCwDdLEPR-tTELG6cRSclUik1YHocwvDGt72L_Z7KUi0nldVaYqjdk2ry2SR4mU83cygFxhf2UR2BDjVtmVqwYSl7lE50bdxaAwi_FZCgrJKQVo4H5wtcddsttO4aR_B2zslDNStcq8b1SIiPq7QaImv1EqfEyPp8h2MwXbhZTpoX72pMDj15mH8mdQr377NUS_b5fp3wIYtBw8anh5hVVcf8Krss' },
  { name: 'Noah Thompson', points: '1100 points', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9HuJF7wViuhVcF4jfi9qaZbCg4XuWOdHQ-4Kx9mivUY2lNqJtzhYkseBN73bfwp2rEZXzX9bFbu5R71KagqOOJOSjNVHdovhCT2cwynywSb6z29tTYgAbQlAiXoLSDlL_u_cE5l0-VzMQruQVthUWYU4XVrrXJVNIWkU50NjPnwnT2thgitRvZL2troCn2Uidel4jn65cK_4soFUsswz7Gg9V2vtECQnMtODbtyaPNyJDLrdOaq2yqUsrXkwwnhJsWsVxIl4s5o8' },
];

const getRankColor = (index) => {
  if (index === 0) return BEAUTIFUL_COLORS.gold;
  if (index === 1) return BEAUTIFUL_COLORS.silver;
  if (index === 2) return BEAUTIFUL_COLORS.bronze;
  return 'transparent';
};

export default function GardenScreen() {
  const [fontsLoaded, fontError] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold,
  });
  const router = useRouter();
  const libraryData = ALL_TEXTBOOKS.slice(0, 4);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.header}>
          <View style={{ width: 48 }} />
          <View style={styles.headerTitleContainer}>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <Text style={[styles.headerTitle, { fontFamily: FONT_FAMILY.bold }]}>Garden</Text>
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <GearIcon />
          </TouchableOpacity>
        </View>

        <PerformanceSection />
        
        <View style={styles.contentContainer}>
          <View style={styles.card}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/textbook')}>
              <View style={styles.libraryHeader}>
                <Image
                  source={require('@/assets/images/logo.png')}
                  style={styles.libraryLogo}
                  resizeMode="contain"
                />
                <Text style={[styles.sectionTitle, { fontFamily: FONT_FAMILY.bold }]}>Library</Text>
              </View>
              <View style={styles.libraryGrid}>
                {libraryData.map((item) => (
                  <StudyMaterialItem key={item.id} item={item} />
                ))}
              </View>
            </TouchableOpacity>
          </View>

          {/* === [NEW] GARDEN MATERIALS TILE START === */}
          <View style={styles.sectionHeader}>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.sectionLogo}
              resizeMode="contain"
            />
            <Text style={[styles.sectionTitle, { fontFamily: FONT_FAMILY.bold }]}>Garden Materials</Text>
          </View>
          <View style={[styles.card, styles.materialsCard]}>
              <View style={styles.materialsGridContainer}>
                {/* School Timetable Item */}
                <TouchableOpacity style={styles.materialsGridItem} activeOpacity={0.8} onPress={() => router.push('/material/timetable')}>
                    <Ionicons name="calendar-outline" size={40} color={BEAUTIFUL_COLORS.secondaryText} />
                    <Text style={styles.materialText}>School Timetable</Text>
                </TouchableOpacity>

                {/* My Studies Item */}
                <TouchableOpacity style={styles.materialsGridItem} activeOpacity={0.8} onPress={() => router.push('/material/studies')}>
                    <Ionicons name="book-outline" size={40} color={BEAUTIFUL_COLORS.secondaryText} />
                    <Text style={styles.materialText}>My Studies</Text>
                </TouchableOpacity>
              </View>
          </View>
          {/* === [NEW] GARDEN MATERIALS TILE END === */}

          <View style={styles.sectionHeader}>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.sectionLogo}
              resizeMode="contain"
            />
            <Text style={[styles.sectionTitle, { fontFamily: FONT_FAMILY.bold }]}>Garden Test (GT)</Text>
          </View>
          <View style={[styles.card, styles.aiCard]}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/test')}>
              <View style={styles.aiCardContent}>
                <View style={styles.aiAssistanceTextColumn}>
                  <Text style={[styles.aiAssistanceLabel, { fontFamily: FONT_FAMILY.regular }]}>Assessment</Text>
                  <Text style={[styles.aiAssistanceTitle, { fontFamily: FONT_FAMILY.bold }]}>Take Garden Test</Text>
                  <Text style={[styles.aiAssistanceDescription, { fontFamily: FONT_FAMILY.regular }]}>
                    Test your knowledge to deepen your roots.
                  </Text>
                </View>
                <Image
                  source={require('@/assets/images/test.png')}
                  style={styles.aiAssistanceImage}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.sectionLogo}
              resizeMode="contain"
            />
            <Text style={[styles.sectionTitle, { fontFamily: FONT_FAMILY.bold }]}>Garden AI</Text>
          </View>
          <View style={[styles.card, styles.aiCard]}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/gardenAI')}>
              <View style={styles.aiCardContent}>
                <View style={styles.aiAssistanceTextColumn}>
                  <Text style={[styles.aiAssistanceLabel, { fontFamily: FONT_FAMILY.regular }]}>Ask GAI</Text>
                  <Text style={[styles.aiAssistanceTitle, { fontFamily: FONT_FAMILY.bold }]}>Get instant answers</Text>
                  <Text style={[styles.aiAssistanceDescription, { fontFamily: FONT_FAMILY.regular }]}>
                    Ask any question and get detailed explanations.
                  </Text>
                </View>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7aLSbJcUS_4jov3B6kXv0amhhz7O0sZVDyFj_b1TMbxNEIsnFgr9K1OyQRjIgupNoXFUKEC8E70T84ggF_SqgN7g8KrQ2kdTdr5KEn_N3Rs-BNXYsM4SY51oBdDNkE1vaKxisxVSsLf-JJSGXvu8Q1ijA9czE98mzUcqgW0c17qhpKuNpdj3RkLGb1n1GN0dtm3YGlLvuOPZuZHkwJjoHRFWp8itH3TPCeZhiY5GEMqpmMhK4-tcZ0OJNQ160_aw2vApJWcXVpDM' }}
                  style={styles.aiAssistanceImage}
                />
              </View>
            </TouchableOpacity>
          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: BEAUTIFUL_COLORS.primaryBg },
  contentContainer: {
    paddingHorizontal: 16,
    gap: 24,
    paddingTop: 24,
  },
  card: {
    backgroundColor: BEAUTIFUL_COLORS.cardBg,
    borderRadius: 16,
    borderColor: BEAUTIFUL_COLORS.border,
    borderWidth: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 16 : 4,
    paddingBottom: 16,
  },
  headerTitleContainer: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerLogo: { width: 24, height: 24 },
  headerTitle: { color: BEAUTIFUL_COLORS.primaryText, fontSize: 22, letterSpacing: -0.3 },
  settingsButton: { width: 48, height: 48, alignItems: 'flex-end', justifyContent: 'center' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16 },
  sectionLogo: { width: 28, height: 28 },
  sectionTitle: { color: BEAUTIFUL_COLORS.primaryText, fontSize: 24, letterSpacing: -0.4 },
  standaloneSectionTitle: { paddingTop: 8, paddingHorizontal: 16 },
  libraryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  libraryLogo: { width: 32, height: 32 },
  libraryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  // --- [NEW] STYLES FOR GARDEN MATERIALS TILE ---
  materialsCard: {
    padding: 12,
  },
  materialsGridContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  materialsGridItem: {
    flex: 1,
    aspectRatio: 1, // This makes the item a perfect square
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A1710', // A slightly different background
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: BEAUTIFUL_COLORS.border,
  },
  materialText: {
    color: BEAUTIFUL_COLORS.secondaryText,
    fontFamily: FONT_FAMILY.medium,
    fontSize: 14,
  },
  // --- END NEW STYLES ---
  aiCard: { padding: 0, overflow: 'hidden' },
  aiCardContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, gap: 12 },
  aiAssistanceTextColumn: { flex: 1, flexShrink: 1, gap: 4 },
  aiAssistanceLabel: { color: BEAUTIFUL_COLORS.secondaryText, fontSize: 14, lineHeight: 20 },
  aiAssistanceTitle: { color: BEAUTIFUL_COLORS.primaryText, fontSize: 18, lineHeight: 24 },
  aiAssistanceDescription: { color: BEAUTIFUL_COLORS.secondaryText, fontSize: 14, lineHeight: 20 },
  aiAssistanceImage: { width: 100, height: '100%', borderRadius: 10, aspectRatio: 1 },
  leaderboardCard: { paddingVertical: 8, paddingHorizontal: 12, gap: 8 },
  leaderboardItem: { flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 60 },
  leaderboardRank: { fontSize: 16, width: 20, textAlign: 'center', color: BEAUTIFUL_COLORS.secondaryText },
  leaderboardAvatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderboardAvatar: { width: 44, height: 44, borderRadius: 22 },
  leaderboardTextColumn: { flex: 1, justifyContent: 'center' },
  leaderboardName: { color: BEAUTIFUL_COLORS.primaryText, fontSize: 16 },
  leaderboardPoints: { color: BEAUTIFUL_COLORS.secondaryText, fontSize: 14 },
});