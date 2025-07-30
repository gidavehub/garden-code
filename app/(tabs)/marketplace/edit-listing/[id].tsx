// app/(tabs)/marketplace/edit-listing/[id].tsx
import { firestore } from '@/firebaseConfig';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { Listing } from '@/types/marketplace';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditListingScreen() {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const router = useRouter();
    const { id: listingId } = useLocalSearchParams<{ id: string }>();

    const [listing, setListing] = useState<Partial<Listing>>({});
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        if (!listingId) {
            Alert.alert("Error", "No listing ID provided.");
            router.back();
            return;
        }
        const fetchListing = async () => {
            setLoading(true);
            try {
                const docRef = doc(firestore, 'listings', listingId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setListing({ id: docSnap.id, ...docSnap.data() });
                } else {
                    Alert.alert("Error", "Listing not found.");
                    router.back();
                }
            } catch (error) {
                Alert.alert("Error", "Could not fetch listing details.");
            } finally {
                setLoading(false);
            }
        };
        fetchListing();
    }, [listingId, router]);
    
    const handleChange = (field: keyof Listing, value: string) => {
        setListing(prev => ({...prev, [field]: value}));
    };
    
    const handleUpdate = async () => {
        if (!listingId || !listing.title || !listing.price) {
             Alert.alert("Missing Info", "Title and price are required.");
            return;
        }
        setIsSaving(true);
        try {
            const docRef = doc(firestore, 'listings', listingId);
            await updateDoc(docRef, {
                title: listing.title,
                description: listing.description,
                price: Number(listing.price),
            });
            Alert.alert("Success", "Listing updated.");
            router.back();
        } catch (error) {
            Alert.alert("Error", "Could not update listing.");
        } finally {
            setIsSaving(false);
        }
    };
    
    const handleDelete = () => {
        Alert.alert(
            "Delete Listing",
            "Are you sure you want to permanently delete this listing? This cannot be undone.",
            [
                { text: "Cancel", style: 'cancel'},
                {
                    text: "Delete", style: 'destructive',
                    onPress: async () => {
                        if (!listingId) return;
                        setIsDeleting(true);
                        try {
                           await deleteDoc(doc(firestore, 'listings', listingId));
                           Alert.alert("Deleted", "Listing has been removed.");
                           router.replace('/(tabs)/marketplace/my-listings');
                        } catch (error) {
                            Alert.alert("Error", "Could not delete listing.");
                        } finally {
                            setIsDeleting(false);
                        }
                    }
                }
            ]
        );
    }
    
    if (loading) {
        return <View style={styles.centered}><ActivityIndicator size="large" /></View>;
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Edit Listing</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close-outline" size={32} color={colors.text} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <Text style={styles.label}>Title*</Text>
                <TextInput style={styles.input} value={listing.title} onChangeText={val => handleChange('title', val)} />

                <Text style={styles.label}>Description</Text>
                <TextInput style={[styles.input, styles.textArea]} value={listing.description} onChangeText={val => handleChange('description', val)} multiline/>
                
                <Text style={styles.label}>Price*</Text>
                <TextInput style={styles.input} value={String(listing.price || '')} onChangeText={val => handleChange('price', val)} keyboardType="numeric" />

                <TouchableOpacity style={[styles.saveButton, isSaving && {opacity: 0.7}]} onPress={handleUpdate} disabled={isSaving}>
                    {isSaving ? <ActivityIndicator color={colors.background} /> : <Text style={styles.saveButtonText}>Save Changes</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.deleteButton, isDeleting && {opacity: 0.7}]} onPress={handleDelete} disabled={isDeleting}>
                    {isDeleting ? <ActivityIndicator color={colors.error} /> : <Text style={styles.deleteButtonText}>Delete Listing</Text>}
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.lg, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border },
    headerTitle: { ...typography.h2, color: colors.text },
    scrollContent: { padding: spacing.lg },
    label: { ...typography.bodyBold, color: colors.textSecondary, marginBottom: spacing.sm, marginTop: spacing.md },
    input: { backgroundColor: colors.card, ...typography.body, color: colors.text, paddingHorizontal: spacing.md, paddingVertical: 12, borderRadius: radius.md, minHeight: 50 },
    textArea: { height: 120, textAlignVertical: 'top' },
    saveButton: { backgroundColor: colors.primary, padding: spacing.md, borderRadius: radius.lg, alignItems: 'center', marginTop: spacing.xl },
    saveButtonText: { ...typography.h4, color: colors.buttonText },
    deleteButton: { backgroundColor: 'transparent', padding: spacing.md, borderRadius: radius.lg, alignItems: 'center', marginTop: spacing.sm, borderWidth: 1, borderColor: colors.error},
    deleteButtonText: { ...typography.bodyBold, color: colors.error },
});