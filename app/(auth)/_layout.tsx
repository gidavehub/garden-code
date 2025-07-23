// (auth)/_layout.tsx

// Import navigation and animation libraries
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

// Import all your screen components
import { AvailableTimeSlots } from '@/components/setup/AvailableTimeSlots';
import { Certifications } from '@/components/setup/Certificate';
import { ClassLevel } from '@/components/setup/ClassLevel';
import { CoursesForStudents } from '@/components/setup/CoursesForStudents';
import { Experience } from '@/components/setup/Experience';
import { Interests } from '@/components/setup/Interests';
import { LearningStyle } from '@/components/setup/LearningStyle';
import { MentorshipInterest } from '@/components/setup/MentorshipInterest';
import { NameAndPicture } from '@/components/setup/NameAndPicture';
import { Role } from '@/components/setup/Role';
import { School } from '@/components/setup/Schools';
import { TeachingStyle } from '@/components/setup/TeachingStyle';
import { TeachingSubjects } from '@/components/setup/TeachingSubjects';

// Import types, theme, and final screens
import { radius, spacing } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import type { AuthStackParamList } from '@/types';
import SignupScreen from './index';
import LoadingScreen from './loading';
import LoginScreen from './login';
import WelcomeScreen from './welcome';

const Tab = createMaterialTopTabNavigator<AuthStackParamList>();

// --- Types for State Management ---
type ExperienceItem = { company: string; duration: number, role: string };
type CertificateItem = { title: string; level: string; institute: string };

// --- FIX: Custom Animated Tab Bar Component for Progress Dots ---
const OnboardingTabBar = ({ state }: MaterialTopTabBarProps) => {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);

    // Routes that should NOT have dots displayed
    const hiddenRoutes = ['Login', 'SignUp', 'LoadingScreen', 'WelcomeScreen'];
    const currentRouteName = state.routes[state.index].name;
    
    // Don't render anything for these specific routes
    if (hiddenRoutes.includes(currentRouteName)) {
        return null; 
    }
    
    // Filter the full route list to only include onboarding "steps"
    const progressRoutes = state.routes.filter(r => !hiddenRoutes.includes(r.name));
    
    // Find the current index within our filtered "steps"
    const activeIndex = progressRoutes.findIndex(r => r.key === state.routes[state.index].key);

    const Dot = ({ index }: { index: number }) => {
        const isActive = activeIndex === index;
        const animatedStyle = useAnimatedStyle(() => {
            return {
                backgroundColor: withTiming(isActive ? colors.primary : colors.border, { duration: 300 }),
                width: withTiming(isActive ? spacing.lg : spacing.sm, { duration: 300 }),
            };
        });
        return <Animated.View style={[styles.dot, animatedStyle]} />;
    };

    return (
        <View style={styles.dotsContainer}>
            {progressRoutes.map((route, index) => (
                <Dot key={route.key} index={index} />
            ))}
        </View>
    );
};


const AuthLayout = () => {
  // --- All State Definitions (Unchanged) ---
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [fullName, setFullName] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [curriculum, setCurriculum] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [createdAt] = useState<Date>(new Date());
  const [teachingSubjects, setTeachingSubjects] = useState<string[]>([]);
  const [teachingExperience, setTeachingExperience] = useState<ExperienceItem[]>([]);
  const [certifications, setCertifications] = useState<CertificateItem[]>([]);
  const [teachingStyle, setTeachingStyle] = useState<string>('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [mentorshipInterest, setMentorshipInterest] = useState<boolean>(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [classLevel, setClassLevel] = useState<string>('');
  const [preferredLearningStyle, setPreferredLearningStyle] = useState<string>('');
  const [courses, setCourses] = useState<string[]>([]);
  const [loadingReady, setLoadingReady] = useState(false)
  const [welcomeReady, setWelcomeReady] = useState(false)

  // --- Screen Component Wrappers (Unchanged) ---
  const NameAndPictureScreen = () => (<NameAndPicture fullName={fullName} profilePicture={profilePicture} setFullName={setFullName} setProfilePicture={setProfilePicture} />);
  const SchoolScreen = () => (<School setSchool={setSchool} setCountry={setCountry} setCurriculum={setCurriculum} />);
  const RoleScreen = () => (<Role role={role} setRole={setRole} />);
  const ClassLevelScreen = () => (<ClassLevel classLevel={classLevel} setClassLevel={setClassLevel} />);
  const CoursesScreen = () => (<CoursesForStudents setCourses={setCourses} courses={courses} />);
  const LearningStyleScreen = () => (<LearningStyle preferredLearningStyle={preferredLearningStyle} setPreferredLearningStyle={setPreferredLearningStyle} />);
  const InterestsScreen = () => (<Interests setInterests={setInterests} setLoadingReady={setLoadingReady} />);
  const TeachingStyleScreen = () => (<TeachingStyle setTeachingStyle={setTeachingStyle} />);
  const TeachingSubjectsScreen = () => (<TeachingSubjects setTeachingSubjects={setTeachingSubjects} />);
  const CertificationScreen = () => (<Certifications setCertifications={setCertifications} />);
  const MentorshipScreen = () => (<MentorshipInterest mentorshipInterest={mentorshipInterest} setMentorshipInterest={setMentorshipInterest} />);
  const AvailableTimeSlotsScreen = () => (<AvailableTimeSlots setAvailableTimeSlots={setAvailableTimeSlots} availableTimeSlots={availableTimeSlots} />);
  const ExperienceScreen = () => (<Experience teachingExperience={teachingExperience} setTeachingExperience={setTeachingExperience} setLoadingReady={setLoadingReady} />);
  const LoadingScreenWrapper = () => (<LoadingScreen role={role} fullName={fullName} school={school} country={country} curriculum={curriculum} profilePicture={profilePicture} createdAt={createdAt} teachingSubjects={teachingSubjects} teachingExperience={teachingExperience} certifications={certifications} teachingStyle={teachingStyle} availableTimeSlots={availableTimeSlots} mentorshipInterest={mentorshipInterest} interests={interests} classLevel={classLevel} preferredLearningStyle={preferredLearningStyle} courses={courses} setWelcomeReady={setWelcomeReady} loadingReady={loadingReady} />);
  const WelcomeScreenWrapper = () => (<WelcomeScreen welcomeReady={welcomeReady} />);

  return (
    <Tab.Navigator
      initialRouteName="Login"
      // FIX: Replace the hidden tab bar with our custom dots component
      tabBar={props => <OnboardingTabBar {...props} />}
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false,
        animationEnabled: true,
        // The `tabBarStyle` is no longer needed
      }}
    >
      {/* --- Screen registration is identical to your working version --- */}
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="SignUp" component={SignupScreen} />
      <Tab.Screen name="NameAndPicture" component={NameAndPictureScreen} />
      <Tab.Screen name="School" component={SchoolScreen} />
      <Tab.Screen name="Role" component={RoleScreen} />

      {role === 'student' ? (
        <>
          <Tab.Screen name="ClassLevel" component={ClassLevelScreen} />
          <Tab.Screen name="CoursesForStudents" component={CoursesScreen} />
          <Tab.Screen name="LearningStyle" component={LearningStyleScreen} />
          <Tab.Screen name="Interests" component={InterestsScreen} />
          <Tab.Screen name="LoadingScreen" component={LoadingScreenWrapper} />
          <Tab.Screen name="WelcomeScreen" component={WelcomeScreenWrapper} />
        </>
      ) : (
        <>
          <Tab.Screen name="TeachingStyle" component={TeachingStyleScreen} />
          <Tab.Screen name="TeachingSubjects" component={TeachingSubjectsScreen} />
          <Tab.Screen name="Certificate" component={CertificationScreen} />
          <Tab.Screen name="MentorshipInterest" component={MentorshipScreen} />
          <Tab.Screen name="AvailableTimeSlots" component={AvailableTimeSlotsScreen} />
          <Tab.Screen name="Experiences" component={ExperienceScreen} />
          <Tab.Screen name="LoadingScreen" component={LoadingScreenWrapper} />
          <Tab.Screen name="WelcomeScreen" component={WelcomeScreenWrapper} />
        </>
      )}
    </Tab.Navigator>
  );
};


const getThemedStyles = (colors: any) =>
  StyleSheet.create({
    dotsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.sm,
      paddingTop: spacing.md,
      paddingBottom: spacing.xl,
      backgroundColor: colors.background,
    },
    dot: {
      height: spacing.sm,
      borderRadius: radius.full,
    },
  });


export default AuthLayout;