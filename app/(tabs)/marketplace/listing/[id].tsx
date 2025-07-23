// app/(tabs)/marketplace/listing/[id].tsx
import { firestore } from '@/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { ProfileData as ProfileDataType } from '@/types/explore'; // For seller info
import { Listing } from '@/types/marketplace';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For Chat
import { get, getDatabase, ref, serverTimestamp, set, update } from 'firebase/database'; // For Chat

const MOCK_FALLBACK_CURRENT_USER_EMAIL = 'testuser@example.com';
const encodeEmailForRTDB = (email: string) => email.replace(/\./g, ',').replace(/@/g, '_at_');


export default function ListingDetailScreen() {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const router = useRouter();
    const { id: listingId } = useLocalSearchParams<{ id: string }>();

    const [listing, setListing] = useState<Listing | null>(null);
    const [seller, setSeller] = useState<ProfileDataType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
    const [isInitiatingChat, setIsInitiatingChat] = useState(false);

    useEffect(() => {
        const loadCurrentUserEmail = async () => {
          try {
            const userJson = await AsyncStorage.getItem('user');
            setCurrentUserEmail(userJson ? JSON.parse(userJson).email : MOCK_FALLBACK_CURRENT_USER_EMAIL);
          } catch (e) { console.error("Profile: Err loading current user", e); setCurrentUserEmail(MOCK_FALLBACK_CURRENT_USER_EMAIL); }
        };
        loadCurrentUserEmail();
    }, []);

    useEffect(() => {
        if (!listingId) {
            setError("Listing ID not found."); setLoading(false); return;
        }

        const fetchListingAndSeller = async () => {
            setLoading(true); setError(null);
            try {
                // Fetch Listing
                const listingDocRef = doc(firestore, 'listings', listingId);
                const listingSnap = await getDoc(listingDocRef);

                if (!listingSnap.exists()) throw new Error("Listing not found.");
                const listingData = { id: listingSnap.id, ...listingSnap.data() } as Listing;
                setListing(listingData);

                // Fetch Seller Profile
                const sellerDocRef = doc(firestore, 'users', listingData.sellerId, 'profile', 'details');
                const sellerSnap = await getDoc(sellerDocRef);
                if(sellerSnap.exists()) setSeller(sellerSnap.data() as ProfileDataType);

            } catch (e: any) {
                setError(e.message || "Failed to load details.");
            } finally {
                setLoading(false);
            }
        };

        fetchListingAndSeller();
    }, [listingId]);

    const handleStartChat = async () => {
        if (!currentUserEmail || !listing || isInitiatingChat) return;
        setIsInitiatingChat(true);

        const viewedUserEmail = listing.sellerId;
        const db = getDatabase();
        const chatId = [encodeEmailForRTDB(currentUserEmail), encodeEmailForRTDB(viewedUserEmail)].sort().join('_dm_');
        const chatRef = ref(db, `chats/${chatId}`);

        try {
          const chatSnap = await get(chatRef);
          if (!chatSnap.exists()) {
            const encCur = encodeEmailForRTDB(currentUserEmail);
            const encView = encodeEmailForRTDB(viewedUserEmail);
            const newChat = { type: 'dm', members: { [encCur]: true, [encView]: true }, createdAt: serverTimestamp(), lastMessage: { text: "Chat started.", senderId: "system", timestamp: serverTimestamp() } };
            await set(chatRef, newChat);
            await update(ref(db), { [`/userChats/${encCur}/${chatId}`]: true, [`/userChats/${encView}/${chatId}`]: true });
          }
          router.push({
            pathname: `/messaging/${chatId}`,
            params: {
              chatId,
              chatName: listing.sellerName,
              chatType: 'dm',
              currentUserEmail
            }
          });
        } catch (e: any) {
            Alert.alert("Chat Error", e.message || "Could not start chat.");
        } finally {
            setIsInitiatingChat(false);
        }
    };
    
    if (loading) return <View style={styles.centered}><ActivityIndicator size="large" color={colors.primary} /></View>;
    if (error) return <View style={styles.centered}><Text style={styles.errorText}>{error}</Text></View>;
    if (!listing) return <View style={styles.centered}><Text style={styles.errorText}>Could not find listing.</Text></View>;

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={28} color={colors.text} />
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.imageCarousel}>
                    {/* Simplified for one image, can be replaced with a Swiper component */}
                    {listing.imageUrls?.[0] ? 
                        <Image source={{uri: listing.imageUrls[0]}} style={styles.mainImage} /> : 
                        <Ionicons name="storefront" size={150} color={colors.border} />
                    }
                </View>
                
                <View style={styles.content}>
                    <Text style={styles.title}>{listing.title}</Text>
                    <Text style={styles.price}>${listing.price.toFixed(2)}</Text>
                    
                    <View style={styles.detailRow}>
                        <Ionicons name="cube-outline" size={20} color={colors.textSecondary}/>
                        <Text style={styles.detailText}>Condition: {listing.condition}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Ionicons name="grid-outline" size={20} color={colors.textSecondary}/>
                        <Text style={styles.detailText}>Category: {listing.category}</Text>
                    </View>
                    
                    <Text style={styles.description}>{listing.description}</Text>

                    {/* Seller Info Card */}
                    {seller && (
                        <View style={styles.sellerCard}>
                            <Image source={seller.profilePicture ? {uri: seller.profilePicture} : require('@/assets/images/avatar.jpg')} style={styles.sellerAvatar} />
                            <View style={{flex: 1}}>
                                <Text style={styles.sellerName}>{seller.fullName}</Text>
                                <Text style={styles.sellerSchool}>{seller.school}</Text>
                            </View>
                            <TouchableOpacity onPress={() => router.push(`/explore/${listing.sellerId}`)}>
                                <Ionicons name="chevron-forward" size={24} color={colors.primary} />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>

            {listing.sellerId !== currentUserEmail && (
              <View style={styles.footer}>
                  <TouchableOpacity 
                      style={[styles.chatButton, isInitiatingChat && { opacity: 0.7 }]} 
                      onPress={handleStartChat} 
                      disabled={isInitiatingChat}
                  >
                      {isInitiatingChat 
                          ? <ActivityIndicator color={colors.buttonText} /> 
                          : <Text style={styles.chatButtonText}>Message Seller</Text>}
                  </TouchableOpacity>
              </View>
            )}
        </SafeAreaView>
    );
}

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    errorText: { ...typography.body, color: colors.error },
    backButton: { position: 'absolute', top: 50, left: 20, zIndex: 1, backgroundColor: `${colors.card}99`, padding: 8, borderRadius: radius.full },
    imageCarousel: { height: 300, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
    mainImage: { width: '100%', height: '100%', resizeMode: 'cover' },
    content: { padding: spacing.lg },
    title: { ...typography.h1, color: colors.text, marginBottom: spacing.sm },
    price: { ...typography.h2, color: colors.primary, marginBottom: spacing.lg },
    detailRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xs, textTransform: 'capitalize' },
    detailText: { ...typography.body, color: colors.textSecondary, textTransform: 'capitalize' },
    description: { ...typography.body, color: colors.text, marginTop: spacing.lg, lineHeight: 22 },
    sellerCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, padding: spacing.md, borderRadius: radius.lg, marginTop: spacing.xl, gap: spacing.md },
    sellerAvatar: { width: 50, height: 50, borderRadius: radius.full },
    sellerName: { ...typography.bodyBold, color: colors.text },
    sellerSchool: { ...typography.caption, color: colors.textSecondary },
    footer: { padding: spacing.md, borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.background },
    chatButton: { backgroundColor: colors.primary, padding: spacing.md, borderRadius: radius.lg, alignItems: 'center' },
    chatButtonText: { ...typography.h4, color: colors.buttonText },
});