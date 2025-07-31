// (auth)/welcome.tsx
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { MotiImage, MotiView } from 'moti';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Feature list, with the Garden Library description now accurately reflecting its interactive nature.
const FEATURES = [
    {
        icon: 'library-outline',
        title: 'The Garden Library',
        description: "This isn't a PDF viewer; I've completely re-imagined the digital textbook. Each chapter is broken down into dynamic, multi-modal learning sections. Every section includes a curated YouTube video for visual learners, detailed text for deep reading, and a custom-built MCQ quiz with explanations to instantly test and solidify knowledge. It’s active, engaging learning—not passive reading."
    },
    {
        icon: 'ribbon-outline',
        title: 'Garden Tests (GT)',
        description: 'To truly measure progress, I engineered a powerful assessment platform with over 50,000 questions specifically targeting the WAEC & Cambridge curricula. I knew connectivity could be an issue, so I built it to work offline, ensuring preparation is never halted.'
    },
    {
        icon: 'compass-outline',
        title: 'Explore & Connect: The Social Hub',
        description: 'This is my core vision. Garden is not just an app; it’s the social launchpad for the next generation of African leaders. I designed it to intelligently connect students with shared ambitions, enabling collaboration that goes far beyond the classroom.'
    },
    {
        icon: 'chatbubbles-outline',
        title: 'Mentorship-Driven Messaging',
        description: 'Chat must have a purpose. Students can DM each other, but the real power is connecting with teachers who have opted-in for mentorship. The app uses data from onboarding to suggest the perfect mentor for a student\'s specific academic needs.'
    },
    {
        icon: 'sparkles-outline',
        title: 'Garden AI: The 24/7 Tutor',
        description: 'I integrated a powerful AI to be the ultimate academic support system. Are you stuck on a tough math problem? Snap a picture for a guided solution. Need an English essay reviewed? The AI can do it. It can even provide career path counseling.'
    },
    {
        icon: 'person-add-outline',
        title: 'The "Why" Behind the Data',
        description: 'You noticed our detailed onboarding. Every piece of data we collect has a purpose: to tailor a hyper-personalized experience that matches each student\'s unique needs, from their learning style to their specific courses, and to power our community matching algorithms.'
    },
    {
        icon: 'storefront-outline',
        title: 'The P2P Marketplace',
        description: 'I believe in creating a self-sustaining academic economy. This marketplace allows students and teachers to buy and sell valuable resources—like lecture notes and study guides—creating a loop of shared knowledge and value within the community.'
    },
];

// --- The Welcome Screen Component ---
export default function WelcomeScreen() {
    const router = useRouter();

    const navigateToApp = () => {
      // Navigate to the main application tab group
      router.replace('/(tabs)');
    };
    
    return (
        <LinearGradient colors={['#f3f9ef', '#dde9d5']} style={styles.gradient}>
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <ScrollView contentContainerStyle={styles.container}>
                    {/* --- Emblem Header --- */}
                    <MotiView
                        style={styles.sunburstEmblem}
                        from={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', damping: 15 }}
                    >
                        <MotiView
                            style={styles.sunburstInner}
                            from={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', damping: 12, delay: 150 }}
                        >
                            <MotiImage
                                source={{ uri: 'https://africadeeptech.org/logo.png' }}
                                style={styles.headerLogo}
                                from={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', delay: 300 }}
                            />
                        </MotiView>
                    </MotiView>
                    
                    {/* --- Animated Title --- */}
                    <MotiView from={{opacity:0, translateY: 10}} animate={{opacity:1, translateY:0}} transition={{type: 'timing', delay: 400, duration: 500}}>
                        <Text style={styles.title}>Africa Deep Tech Challenge</Text>
                        <Text style={styles.subtitle}>2025 Submission: Garden</Text>
                    </MotiView>

                    {/* --- Note from the Creator --- */}
                    <MotiView 
                        from={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'timing', duration: 500, delay: 600 }}
                        style={styles.creatorCard}
                     >
                        <Ionicons name="megaphone-outline" size={32} color="#059669" style={{ alignSelf: 'center', marginBottom: 12 }} />
                        <Text style={styles.creatorTitle}>A Message to the Judges</Text>
                        <Text style={styles.creatorText}>
                            My name is Godswill Iyke Dave. I’m an 18-year-old software developer and entrepreneur. I built Garden to solve the fundamental fragmentation in the student learning experience. It’s more than an app; it’s an all-in-one ecosystem designed to cultivate academic success and foster the next generation of leaders.
                            {"\n\n"}
                            This fully-functional platform is ready for the market. The only thing standing between this solution and the millions of students who need it is the capital to handle the cost of scale—both for server infrastructure and for targeted inorganic marketing. I know this is the app that will win. Thank you for your time.
                        </Text>
                     </MotiView>

                    {/* --- App Features --- */}
                    {FEATURES.map((feature, index) => (
                        <MotiView
                            key={index}
                            style={styles.featureCard}
                            from={{ opacity: 0, translateX: -20 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ type: 'timing', duration: 400, delay: 900 + index * 100 }}
                        >
                            <View style={styles.featureIconContainer}>
                                <Ionicons name={feature.icon as any} size={28} color="#2E8540" />
                            </View>
                            <View style={styles.featureTextContainer}>
                                <Text style={styles.featureTitle}>{feature.title}</Text>
                                <Text style={styles.featureDescription}>{feature.description}</Text>
                            </View>
                        </MotiView>
                    ))}

                     {/* --- Proceed Button --- */}
                     <MotiView 
                        from={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'timing', duration: 500, delay: 1000 + FEATURES.length * 100 }}
                     >
                        <TouchableOpacity style={styles.beginButton} activeOpacity={0.8} onPress={navigateToApp}>
                            <Text style={styles.beginButtonText}>Explore the App</Text>
                            <Ionicons name="arrow-forward-outline" size={22} color="#FEFEFE" />
                        </TouchableOpacity>
                     </MotiView>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

// --- Stylesheet ---
const styles = StyleSheet.create({
    gradient: { flex: 1 },
    safeArea: { flex: 1 },
    container: {
      paddingTop: 30,
      paddingHorizontal: 24,
      paddingBottom: 50
    },
    sunburstEmblem: {
        width: 140, height: 140, borderRadius: 70, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#cddfc6',
    },
    sunburstInner: {
        width: 130, height: 130, borderRadius: 65,
        backgroundColor: '#FCFFF5',
        justifyContent: 'center', alignItems: 'center',
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5
    },
    headerLogo: {
        width: 100, height: 100, borderRadius: 20,
    },
    title: { 
        fontSize: 26, 
        fontWeight: '900', color: '#1a3325', 
        marginTop: 24, textAlign: 'center',
    },
    subtitle: {
        fontSize: 18, color: '#446955', textAlign: 'center',
        marginTop: 4, marginBottom: 24, fontWeight: '500',
    },
    creatorCard: {
      backgroundColor: 'rgba(236, 252, 241, 0.9)',
      borderRadius: 20,
      borderWidth: 1.5,
      borderColor: '#d1fae5',
      padding: 20,
      marginBottom: 32,
    },
    creatorTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#065f46',
      textAlign: 'center',
      marginBottom: 10,
    },
    creatorText: {
        fontSize: 15,
        color: '#064e3b',
        lineHeight: 23,
        textAlign: 'center',
        fontWeight: '500',
    },
    featureCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#e9f0ec',
        borderRadius: 20,
        borderColor: '#ffffff',
        borderWidth: 1.5,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    featureIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#cddfc6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    featureTextContainer: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1a3325',
    },
    featureDescription: {
        fontSize: 14,
        color: '#446955',
        marginTop: 4,
        lineHeight: 20,
    },
    beginButton: {
        backgroundColor: '#1a3325',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        borderRadius: 20,
        marginTop: 24,
        gap: 12,
        shadowColor: '#1a3325',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6
    },
    beginButtonText: {
        color: '#FEFEFE',
        fontSize: 18,
        fontWeight: 'bold'
    },
});