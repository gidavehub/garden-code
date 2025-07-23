// (auth)/index.tsx

import { MotiImage, MotiView } from 'moti';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// --- Original Navigation Imports (UNTOUCHED) ---
import { AuthStackParamList } from '@/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// --- Image & Asset Imports ---
import GoogleLogo from '@/assets/images/google.png';
import Logo from '@/assets/images/logo.png';
import Vector1 from '@/assets/images/vector1.png';
import Vector2 from '@/assets/images/vector2.png';

import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { showSuccessAlert } from '@/utils/showSuccessAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// A simple custom hook to manage focus state cleanly
const useFocus = () => {
    const [isFocused, setIsFocused] = useState(false);
    return { isFocused, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false) };
};

const Signup = () => {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    const emailFocus = useFocus();
    const passwordFocus = useFocus();
    const confirmPasswordFocus = useFocus();

    // --- Original handleSignup Logic (UNTOUCHED) ---
    const handleSignup = async () => {
        if (!email || !password) {
          Alert.alert('Missing Fields', 'Please enter both email and password.');
          return;
        }
        if (password !== confirmPassword) {
          Alert.alert('Passwords Mismatch', 'The passwords you entered do not match.');
          return;
        }
        setLoading(true);
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const { user } = userCredential;
          const userData = { uid: user.uid, email: user.email };
          await AsyncStorage.setItem('user', JSON.stringify(userData));
          showSuccessAlert('Account Created!', 'Time to set you up.');
          navigation.navigate('NameAndPicture');
        } catch (error: any) {
          let errorMessage = 'An unknown error occurred. Please try again.';
          if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'This email address is already in use. Please log in or use a different email.';
          } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Please enter a valid email address.';
          } else if (error.code === 'auth/weak-password') {
            errorMessage = 'Your password must be at least 6 characters long.';
          }
          Alert.alert('Sign Up Failed', errorMessage);
        } finally {
          setLoading(false);
        }
    };

    return (
        <View style={styles.rootContainer}>
            <MotiImage source={Vector1} style={styles.vectorTop} from={{ opacity: 0, translateX: -40 }} animate={{ opacity: 0.3, translateX: 0 }} transition={{ type: 'timing', duration: 800 }}/>
            <MotiImage source={Vector2} style={styles.vectorBottom} from={{ opacity: 0, translateX: 40 }} animate={{ opacity: 0.3, translateX: 0 }} transition={{ type: 'timing', duration: 800 }}/>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                
                {/* --- Logo Only Animation --- */}
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
                    <Text style={styles.title}>Create Account</Text>
                </MotiView>
                
                <MotiView style={styles.inputContainer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 450 }}>
                    <TextInput style={[styles.input, emailFocus.isFocused && styles.inputFocused]} onFocus={emailFocus.onFocus} onBlur={emailFocus.onBlur} placeholder="Email" placeholderTextColor={colors.textSecondary} keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
                </MotiView>
                <MotiView style={styles.inputContainer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 500 }}>
                    <TextInput style={[styles.input, passwordFocus.isFocused && styles.inputFocused]} onFocus={passwordFocus.onFocus} onBlur={passwordFocus.onBlur} placeholder="Password" placeholderTextColor={colors.textSecondary} secureTextEntry value={password} onChangeText={setPassword} />
                </MotiView>
                <MotiView style={styles.inputContainer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 550 }}>
                    <TextInput style={[styles.input, confirmPasswordFocus.isFocused && styles.inputFocused]} onFocus={confirmPasswordFocus.onFocus} onBlur={confirmPasswordFocus.onBlur} placeholder="Confirm Password" placeholderTextColor={colors.textSecondary} secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
                </MotiView>
                
                <MotiView style={styles.buttonContainer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 650 }}>
                    <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={loading} activeOpacity={0.8}>
                        {loading ? (<ActivityIndicator color={colors.background} />) : (<Text style={styles.buttonText}>Sign Up</Text>)}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.googleButton} disabled>
                        <Image source={GoogleLogo} style={styles.googleIcon} />
                        <Text style={styles.googleButtonText}>Continue with Google</Text>
                    </TouchableOpacity>
                </MotiView>
            </KeyboardAvoidingView>
      
            <MotiView style={styles.footer} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ type: 'timing', duration: 400, delay: 750 }}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.footerLink}>Log in here</Text>
                </TouchableOpacity>
            </MotiView>
        </View>
    );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
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
  rootContainer: { flex: 1, backgroundColor: colors.background },
  vectorTop: { position: 'absolute', top: -70, left: -100, width: 550, height: 550, opacity: 0.3, resizeMode: 'contain', },
  vectorBottom: { position: 'absolute', bottom: -80, right: -120, width: 550, height: 550, opacity: 0.3, resizeMode: 'contain', },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
  title: { ...typography.h1, color: colors.text, marginBottom: spacing.xl, },
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
    marginTop: spacing.sm, shadowColor: "#000", shadowOffset: { width: 0, height: 4, },
    shadowOpacity: 0.2, shadowRadius: 5, elevation: 6,
  },
  buttonText: { ...typography.bodyBold, color: colors.background },
  googleButton: {
    width: '100%', backgroundColor: '#FFFFFF', height: 50, borderRadius: radius.full,
    alignItems: 'center', marginTop: spacing.md, flexDirection: 'row', justifyContent: 'center',
  },
  googleIcon: { width: 24, height: 24, marginRight: spacing.sm },
  googleButtonText: { ...typography.bodyBold, color: '#000000' },
  footer: { flexDirection: 'row', position: 'absolute', alignSelf: 'center', bottom: spacing.xl, },
  footerText: { ...typography.body, color: colors.textSecondary },
  footerLink: { ...typography.bodyBold, color: colors.primary },
});

export default Signup;