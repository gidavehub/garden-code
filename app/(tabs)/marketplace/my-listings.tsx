// app/(tabs)/marketplace/my-listings.tsx
import { firestore } from '@/firebaseConfig'; // No 'auth' needed here anymore
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { Listing } from '@/types/marketplace';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { collection, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Card for a user's own listing (UNMODIFIED)
const MyListingCard = ({ item, onEdit, onToggleStatus }: { item: Listing; onEdit: (id: string) => void; onToggleStatus: (item: Listing) => void }) => {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const isSold = item.status === 'sold';
    return (
        <View style={[styles.card, isSold && styles.cardSold]}>
            <Image
                style={styles.cardImage}
                source={item.imageUrls?.[0] ? { uri: item.imageUrls[0] } : require('@/assets/images/logo.png')}
            />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.cardActions}>
                    <TouchableOpacity style={[styles.actionButton, styles.editButton]} onPress={() => onEdit(item.id)}>
                        <Text style={styles.actionButtonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, isSold ? styles.relistButton : styles.soldButton]} onPress={() => onToggleStatus(item)}>
                        <Text style={styles.actionButtonText}>{isSold ? 'Relist' : 'Mark Sold'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


export default function MyListingsScreen() {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const router = useRouter();

    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    
    const fetchMyListings = useCallback(async () => {
        try {
            // Get user info from AsyncStorage
            const userString = await AsyncStorage.getItem('user');
            if (!userString) {
                Alert.alert("Authentication Error", "You must be logged in to view your listings.");
                setLoading(false);
                return;
            }

            const user = JSON.parse(userString);
            if (!user.email) {
                Alert.alert("Authentication Error", "Your user session is invalid. Please log in again.");
                setLoading(false);
                return;
            }

            const q = query(
                collection(firestore, 'listings'),
                where('sellerId', '==', user.email), // Use email from AsyncStorage
                orderBy('createdAt', 'desc')
            );
            const querySnapshot = await getDocs(q);
            const userListings = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Listing));
            setListings(userListings);
        } catch (e) {
            console.error(e);
            Alert.alert("Error", "Could not fetch your listings.");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        fetchMyListings();
    }, [fetchMyListings]);

    const onRefresh = () => {
        setRefreshing(true);
        fetchMyListings();
    };

    const handleEdit = (id: string) => {
        router.push(`/marketplace/edit-listing/${id}`);
    };
    
    const handleToggleStatus = async (item: Listing) => {
        const newStatus = item.status === 'active' ? 'sold' : 'active';
        const confirmationMessage = `Are you sure you want to mark this item as "${newStatus}"?`;
        
        Alert.alert("Confirm Status Change", confirmationMessage, [
            { text: "Cancel", style: 'cancel' },
            {
                text: "Confirm",
                style: 'default',
                onPress: async () => {
                    try {
                        const listingRef = doc(firestore, 'listings', item.id);
                        await updateDoc(listingRef, { status: newStatus });
                        setListings(prev => prev.map(l => l.id === item.id ? { ...l, status: newStatus } : l));
                        Alert.alert("Success", "Listing status updated!");
                    } catch (error) {
                        Alert.alert("Error", "Could not update status.");
                    }
                }
            }
        ]);
    };

    if (loading) {
        return <View style={styles.centered}><ActivityIndicator size="large" color={colors.primary} /></View>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={colors.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Store</Text>
                <View style={{ width: 40 }} />
            </View>

            <FlatList
                data={listings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MyListingCard item={item} onEdit={handleEdit} onToggleStatus={handleToggleStatus} />}
                contentContainerStyle={{ padding: spacing.md }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />}
                ListEmptyComponent={
                    <View style={styles.centered}>
                        <Ionicons name="pricetags-outline" size={60} color={colors.textSecondary} />
                        <Text style={styles.emptyText}>You haven't listed anything yet.</Text>
                        <TouchableOpacity style={styles.createButton} onPress={() => router.push('/marketplace/create-listing')}>
                            <Text style={styles.createButtonText}>Create Your First Listing</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

// Styles (UNMODIFIED)
const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border },
    headerTitle: { ...typography.h3, color: colors.text },
    backButton: { padding: spacing.xs },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 100 },
    emptyText: { ...typography.body, color: colors.textSecondary, marginTop: spacing.md },
    createButton: { backgroundColor: colors.primary, padding: spacing.md, borderRadius: radius.md, marginTop: spacing.lg },
    createButtonText: { ...typography.bodyBold, color: colors.background },
    
    card: { flexDirection: 'row', backgroundColor: colors.card, borderRadius: radius.lg, marginBottom: spacing.md, overflow: 'hidden' },
    cardSold: { opacity: 0.6 },
    cardImage: { width: 100, height: '100%', backgroundColor: colors.border },
    cardContent: { flex: 1, padding: spacing.md, justifyContent: 'space-between' },
    cardTitle: { ...typography.bodyBold, color: colors.text, marginBottom: spacing.xs },
    cardPrice: { ...typography.h4, color: colors.primary },
    cardActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: spacing.sm, marginTop: spacing.md },
    actionButton: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: radius.sm },
    actionButtonText: { ...typography.small, fontWeight: 'bold', color: '#fff' },
    editButton: { backgroundColor: colors.textSecondary },
    soldButton: { backgroundColor: colors.accent },
    relistButton: { backgroundColor: colors.primary },
});