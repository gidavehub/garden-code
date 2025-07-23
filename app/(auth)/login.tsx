// (auth)/login.tsx

import { MotiImage, MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// --- Original Navigation Imports (UNTOUCHED) ---
import { AuthStackParamList } from '@/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRouter } from 'expo-router';

// --- Image & Asset Imports ---
import GoogleLogo from '@/assets/images/google.png';
import Logo from '@/assets/images/logo.png';
import Vector2 from '@/assets/images/vector2.png';
import Vector3 from '@/assets/images/vector3.png';

// --- Theme and other necessary imports ---
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { showSuccessAlert } from '@/utils/showSuccessAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app, auth } from '../../firebaseConfig';

const useFocus = () => {
    const [isFocused, setIsFocused] = useState(false);
    return { isFocused, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false) };
};

const Login = () => {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);

    const emailFocus = useFocus();
    const passwordFocus = useFocus();

    // --- All original logic and useEffects are completely UNTOUCHED ---
    useEffect(() => {
        const checkAuthAndProfile = async () => {
          setAuthLoading(true);
          try {
            const storedUser = await AsyncStorage.getItem('user');
            const storedProfile = await AsyncStorage.getItem('profile');

            if (storedUser && storedProfile) {
              router.replace('/(tabs)');
            } else if (storedUser && !storedProfile) {
              const parsedUser = JSON.parse(storedUser);
              if (!parsedUser.email) {
                throw new Error("Stored user has no email for verification.");
              }
              const db = getFirestore(app);
              const profileRef = doc(db, 'users', parsedUser.email, 'profile', 'details');
              const profileSnap = await getDoc(profileRef);

              if (profileSnap.exists()) {
                await AsyncStorage.setItem('profile', JSON.stringify(profileSnap.data()));
                router.replace('/(tabs)');
              } else {
                navigation.navigate('NameAndPicture');
              }
            }
          } catch (err) {
            console.error('Auto-login check failed:', err);
          } finally {
            setAuthLoading(false);
          }
        };
        checkAuthAndProfile();
    }, []);

    const handleLogin = async () => {
        setLoading(true);
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const { user } = userCredential;
          
          const userData = { uid: user.uid, email: user.email };
          await AsyncStorage.setItem('user', JSON.stringify(userData));
          
          const db = getFirestore(app);
          if (!user.email) throw new Error('User email is missing');
          
          const profileRef = doc(db, 'users', user.email, 'profile', 'details');
          const profileSnap = await getDoc(profileRef);

          if (profileSnap.exists()) {
            await AsyncStorage.setItem('profile', JSON.stringify(profileSnap.data()));
            showSuccessAlert('Login Successful');
            router.replace('/(tabs)');
          } else {
            await AsyncStorage.removeItem('profile');
            navigation.navigate('NameAndPicture');
          }
        } catch (error: any) {
          let errorMessage = 'Invalid email or password.';
           if (error.code === 'auth/invalid-credential') {
                errorMessage = 'Invalid email or password. Please try again.';
           }
          Alert.alert('Login Failed', errorMessage);
        } finally {
          setLoading(false);
        }
    };

    if (authLoading) {
        return ( 
          <View style={styles.authContainer}>
            <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ActivityIndicator color={colors.primary} size="large" />
            </MotiView>
          </View>
        );
    }

    return (
        <View style={styles.rootContainer}>
            <MotiImage source={Vector3} style={styles.vectorTop} from={{ opacity: 0, translateX: -40 }} animate={{ opacity: 0.3, translateX: 0 }} transition={{ type: 'timing', duration: 800 }}/>
            <MotiImage source={Vector2} style={styles.vectorBottom} from={{ opacity: 0, translateX: 40 }} animate={{ opacity: 0.3, translateX: 0 }} transition={{ type: 'timing', duration: 800 }}/>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                
                {/* --- [FINAL] Logo Only Animation --- */}
                <View style={styles.logoContainer}>
                    <MotiImage
                        source={Logo}
                        style={styles.headerLogo}
                        from={{ opacity: 0, scale: 0.5, rotate: '-20deg' }}
                        animate={{ opacity: 1, scale: 1, rotate: '0deg' }}
                        transition={{
                            type: 'spring',
                            damping: 14,
                            stiffness: 200,
                            delay: 200
                        }}
                    />
                </View>

                {/* --- Delays adjusted for final animation --- */}
                <MotiView from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 350 }}>
                    <Text style={styles.title}>Welcome Back</Text>
                </MotiView>
                
                <MotiView style={styles.inputContainer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 450 }}>
                    <TextInput style={[styles.input, emailFocus.isFocused && styles.inputFocused]} onFocus={emailFocus.onFocus} onBlur={emailFocus.onBlur} placeholder="Email" placeholderTextColor={colors.textSecondary} keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
                </MotiView>
                <MotiView style={styles.inputContainer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 500 }}>
                    <TextInput style={[styles.input, passwordFocus.isFocused && styles.inputFocused]} onFocus={passwordFocus.onFocus} onBlur={passwordFocus.onBlur} placeholder="Password" placeholderTextColor={colors.textSecondary} secureTextEntry value={password} onChangeText={setPassword} />
                </MotiView>

                <MotiView style={styles.buttonContainer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 600 }}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading} activeOpacity={0.8}>
                        {loading ? <ActivityIndicator color={colors.background} /> : <Text style={styles.buttonText}>Sign In</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.googleButton} disabled>
                        <Image source={GoogleLogo} style={styles.googleIcon} />
                        <Text style={styles.googleButtonText}>Continue with Google</Text>
                    </TouchableOpacity>
                </MotiView>
            </KeyboardAvoidingView>
      
            <MotiView style={styles.footer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 700 }}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[styles.footerText, styles.footerLink]}>Sign up</Text>
                </TouchableOpacity>
            </MotiView>
        </View>
    );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
  // --- [UPDATED] STYLES for Logo-Only display ---
  logoContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  headerLogo: {
    width: 80,
    height: 80,
  },

  // --- ALL OTHER STYLES ARE UNCHANGED ---
  rootContainer: { flex: 1, backgroundColor: colors.background },
  vectorTop: { position: 'absolute', top: -70, left: -100, width: 550, height: 550, opacity: 0.3, resizeMode: 'contain' },
  vectorBottom: { position: 'absolute', bottom: -80, right: -120, width: 550, height: 550, opacity: 0.3, resizeMode: 'contain', },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.lg, },
  authContainer: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' },
  title: { ...typography.h1, color: colors.text, marginBottom: spacing.xl },
  inputContainer: { width: '100%' },
  input: {
    width: '100%', backgroundColor: colors.card, color: colors.text,
    borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md,
    ...typography.body, borderWidth: 1, borderColor: colors.border, height: 50,
  },
  inputFocused: { borderColor: colors.primary },
  buttonContainer: { width: '100%' },
  button: {
    width: '100%', backgroundColor: colors.primary, height: 50,
    borderRadius: radius.full, alignItems: 'center', justifyContent: 'center',
    marginTop: spacing.sm, shadowColor: "#000", shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 5, elevation: 6,
  },
  buttonText: { ...typography.bodyBold, color: colors.background, },
  googleButton: {
    width: '100%', backgroundColor: '#FFFFFF', height: 50, borderRadius: radius.full,
    alignItems: 'center', marginTop: spacing.md, flexDirection: 'row', justifyContent: 'center',
  },
  googleIcon: { width: 24, height: 24, marginRight: spacing.sm, },
  googleButtonText: { ...typography.bodyBold, color: '#000000', },
  footer: { flexDirection: 'row', position: 'absolute', alignSelf: 'center', bottom: spacing.xl, },
  footerText: { ...typography.body, color: colors.textSecondary },
  footerLink: { color: colors.primary, ...typography.bodyBold },
});

export default Login;