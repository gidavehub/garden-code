// app/(tabs)/marketplace/create-listing.tsx
import { auth, firestore } from '@/firebaseConfig';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { ProfileData } from '@/types/explore';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker'; // For image picking
import { useRouter } from 'expo-router';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CreateListingScreen() {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState<string[]>([]); // stores local URIs
    const [isSaving, setIsSaving] = useState(false);

    // This would be replaced with actual image upload to a service like Firebase Storage
    const uploadImageMock = async (uri: string) => {
        console.log(`Uploading ${uri}...`);
        await new Promise(resolve => setTimeout(resolve, 1500)); // simulate network delay
        return `https://picsum.photos/seed/${Math.random()}/400/300`; // return a placeholder URL
    };
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.8,
        });

        if (!result.canceled) {
            setImages(prev => [...prev, result.assets[0].uri]);
        }
    };


    const handleSaveListing = async () => {
        const user = auth.currentUser;
        if (!user || !user.email) {
            Alert.alert("Authentication Error", "You must be logged in.");
            return;
        }
        if (!title.trim() || !price.trim()) {
            Alert.alert("Missing Info", "Please provide at least a title and a price.");
            return;
        }

        setIsSaving(true);
        try {
            // In a real app, this is where you'd upload local image URIs and get back storage URLs
            const imageUrls = await Promise.all(images.map(uri => uploadImageMock(uri)));

            // Fetch denormalized seller data
            const profileString = await AsyncStorage.getItem('profile');
            const profile: ProfileData = profileString ? JSON.parse(profileString) : {};

            const newListingData = {
                title,
                description,
                price: parseFloat(price) || 0,
                category: 'physical', // Default category for simplicity
                condition: 'used', // Default condition
                imageUrls,
                sellerId: user.email,
                sellerName: profile.fullName || "Unknown User",
                sellerProfilePicture: profile.profilePicture || null,
                school: profile.school || null,
                subject: null, // Could be added as another field
                status: 'active',
                createdAt: serverTimestamp(),
            };

            await addDoc(collection(firestore, 'listings'), newListingData);
            Alert.alert("Success!", "Your item has been listed.");
            router.back();
        } catch (error: any) {
            Alert.alert("Error", error.message || "Could not save your listing.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Listing</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close-outline" size={32} color={colors.text} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <Text style={styles.label}>Title*</Text>
                <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="e.g., IB Math HL Textbook" placeholderTextColor={colors.textSecondary} />

                <Text style={styles.label}>Description</Text>
                <TextInput style={[styles.input, styles.textArea]} value={description} onChangeText={setDescription} placeholder="Include condition, edition, etc." multiline placeholderTextColor={colors.textSecondary}/>
                
                <Text style={styles.label}>Price*</Text>
                <TextInput style={styles.input} value={price} onChangeText={setPrice} placeholder="e.g., 49.99" keyboardType="numeric" placeholderTextColor={colors.textSecondary} />
                
                <Text style={styles.label}>Images</Text>
                <View style={styles.imageGrid}>
                    {images.map((uri, index) => <Image key={index} source={{uri}} style={styles.imagePreview} />)}
                    <TouchableOpacity style={styles.addImageButton} onPress={pickImage}>
                        <Ionicons name="camera-outline" size={30} color={colors.textSecondary} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.saveButton, isSaving && {opacity: 0.7}]} onPress={handleSaveListing} disabled={isSaving}>
                    {isSaving ? <ActivityIndicator color={colors.background} /> : <Text style={styles.saveButtonText}>List My Item</Text>}
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.lg, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border },
    headerTitle: { ...typography.h2, color: colors.text },
    scrollContent: { padding: spacing.lg, paddingBottom: 100 },
    label: { ...typography.bodyBold, color: colors.textSecondary, marginBottom: spacing.sm, marginTop: spacing.md },
    input: { backgroundColor: colors.card, ...typography.body, color: colors.text, paddingHorizontal: spacing.md, paddingVertical: 12, borderRadius: radius.md, minHeight: 50 },
    textArea: { height: 120, textAlignVertical: 'top' },
    imageGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, },
    addImageButton: { width: 80, height: 80, borderRadius: radius.md, backgroundColor: colors.card, justifyContent: 'center', alignItems: 'center' },
    imagePreview: { width: 80, height: 80, borderRadius: radius.md },
    saveButton: { backgroundColor: colors.primary, padding: spacing.md, borderRadius: radius.lg, alignItems: 'center', marginTop: spacing.xl },
    saveButtonText: { ...typography.h4, color: colors.buttonText },
});