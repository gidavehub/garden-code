// (auth)/loading.tsx

import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Animated, Easing, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';

// --- NEW IMPORTS FOR UI ---
import LoadingBackground from '@/assets/images/loading.png'; // Your new background image
import Logo from '@/assets/images/logo.png';
import { spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';

// --- IMPORTS THAT REMAIN FROM YOUR ORIGINAL FILE ---
import { app } from '@/firebaseConfig';
import { AuthStackParamList } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// --- ALL OF YOUR TYPES AND PROPS LOGIC IS 100% PRESERVED ---
type AuthNav = NativeStackNavigationProp<AuthStackParamList>;

type ExperienceItem = {
  company: string;
  duration: number;
  role: string;
};

type CertificateItem = {
  title: string;
  level: string;
  institute: string;
};

type Props = {
  role: 'student' | 'teacher';
  fullName: string;
  school: string;
  country: string;
  curriculum: string;
  profilePicture: string | null;
  createdAt: Date;
  teachingSubjects: string[];
  teachingExperience: ExperienceItem[];
  certifications: CertificateItem[];
  teachingStyle: string;
  availableTimeSlots: string[];
  mentorshipInterest: boolean;
  interests: string[];
  classLevel: string;
  preferredLearningStyle: string;
  courses: string[];
  setWelcomeReady : (val : boolean) => void;
  loadingReady : boolean;
};


export default function LoadingScreen (props: Props) {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const navigation = useNavigation<AuthNav>();
  const router = useRouter();
  
  // --- NEW: Animation value for the spinning logo ---
  const spinAnim = useRef(new Animated.Value(0)).current;

  // This `useEffect` hook handles the spinning animation
  useEffect(() => {
    // Creates a smooth, continuous, linear spin
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1500, // The speed of one full rotation
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinAnim]);

  
  // --- YOUR LOGIC IS 100% PRESERVED, UNTOUCHED ---
  useEffect(() => {
    if (props.loadingReady === true){
      const saveProfile = async () => {
        try {
          const userData = await AsyncStorage.getItem('user');
          const user = userData ? JSON.parse(userData) : null;
          if (!user || !user.email) return;

          const commonFields = { role: props.role, fullName: props.fullName, school: props.school, country: props.country, curriculum: props.curriculum, profilePicture: props.profilePicture, createdAt: props.createdAt.toISOString() };
          const roleSpecificFields = props.role === 'student' ? { interests: props.interests, classLevel: props.classLevel, preferredLearningStyle: props.preferredLearningStyle, courses: props.courses } : { teachingSubjects: props.teachingSubjects, teachingExperience: props.teachingExperience, certifications: props.certifications, teachingStyle: props.teachingStyle, availableTimeSlots: props.availableTimeSlots, mentorshipInterest: props.mentorshipInterest };

          const db = getFirestore(app);
          const detailsRef = doc(collection(doc(collection(db, 'users'), user.email),'profile'),'details');
          const completeProfile = { ...commonFields, ...roleSpecificFields };
          await setDoc(detailsRef, completeProfile);
          await AsyncStorage.setItem('profile', JSON.stringify(completeProfile));
          props.setWelcomeReady(true);
          navigation.navigate('WelcomeScreen');
        } catch (error) {
          console.error('Error saving profile:', error);
        }
      };
      saveProfile();
    }
  }, [props.loadingReady]);

  // Interpolate the animation value to a rotation string
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  // --- NEW: Render the new beautiful UI ---
  return (
    <ImageBackground
      source={LoadingBackground}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.spinnerContainer}>
            {/* The spinning logo, absolutely positioned inside the indicator */}
            <Animated.Image 
              source={Logo} 
              style={[styles.logo, { transform: [{ rotate: spin }] }]} 
            />
            {/* The ActivityIndicator acts as a halo around the logo */}
            <ActivityIndicator size={120} color={colors.primary} />
        </View>

        <Text style={styles.text}>Sowing your seeds...</Text>
      </View>
    </ImageBackground>
  );
}


// --- NEW STYLES ---
const getThemedStyles = (colors: any) => StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(13, 20, 28, 0.4)', // Darkens the image to make content pop
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // The size of the ActivityIndicator dictates this container's size
  },
  logo: {
    width: 60,  // Adjust size to fit nicely within the indicator
    height: 60,
    position: 'absolute', // Position it on top of the indicator
    zIndex: 1, // Ensure it's above the indicator
  },
  text: {
    ...typography.h3,
    color: '#FFFFFF', // Use a light color for readability on the dark background
    marginTop: spacing.xl,
    // Add a subtle glow effect to the text
    textShadowColor: 'rgba(251, 146, 60, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
});