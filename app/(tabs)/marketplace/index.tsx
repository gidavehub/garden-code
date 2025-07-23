// app/(tabs)/marketplace/index.tsx
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // CORRECTED IMPORT

// Your app's imports
import { firestore } from '@/firebaseConfig';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { Listing } from '@/types/marketplace';

// Reusable component for a single listing card
const ListingCard = ({ item, onPress }: { item: Listing; onPress: (item: Listing) => void }) => {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
            <View style={styles.cardImageContainer}>
                {item.imageUrls?.[0] ? 
                    <Image source={{ uri: item.imageUrls[0] }} style={styles.cardImage} /> : 
                    <Ionicons name="storefront-outline" size={40} color={colors.textSecondary}/>
                }
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
                <Text style={styles.cardSeller} numberOfLines={1}>by {item.sellerName}</Text>
            </View>
        </TouchableOpacity>
    );
};


export default function MarketplaceScreen() {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const router = useRouter();

  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // The logic for fetching and handling listings is preserved...
  const fetchListings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(firestore, 'listings'),
        where('status', '==', 'active'),
        orderBy('createdAt', 'desc'),
        limit(20)
      );
      const querySnapshot = await getDocs(q);
      const fetchedListings = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
      } as Listing));
      setListings(fetchedListings);
    } catch (e: any) {
      setError(e.message || "Failed to load listings.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  const handleListingPress = (item: Listing) => {
    router.push(`/marketplace/listing/${item.id}`);
  };

  const renderContent = () => {
    if (loading) {
      return <View style={styles.centered}><ActivityIndicator size="large" color={colors.primary} /></View>;
    }
    if (error) {
      return (
        <View style={styles.centered}>
          <Ionicons name="cloud-offline-outline" size={50} color={colors.error} />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={fetchListings} style={styles.retryButton}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListingCard item={item} onPress={handleListingPress} />}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={
              <>
                  <Text style={styles.sectionTitle}>Featured Items</Text>
                  <View style={styles.horizontalScrollPlaceholder}><Text style={styles.placeholderText}>Featured Area</Text></View>
                  <Text style={styles.sectionTitle}>Recent Listings</Text>
              </>
          }
          ListEmptyComponent={
            <View style={styles.centered}>
                <Ionicons name="storefront-outline" size={50} color={colors.textSecondary} />
                <Text style={styles.errorText}>The marketplace is empty.</Text>
                <Text style={{color: colors.textSecondary}}>Be the first to list an item!</Text>
            </View>
          }
      />
    );
  };
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
            <Text style={styles.headerTitle}>Market</Text>
        </View>
        <View style={{flexDirection: 'row', gap: spacing.md}}>
            <TouchableOpacity onPress={() => router.push('/marketplace/my-listings')}>
              <Ionicons name="pricetags-outline" size={24} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/marketplace/create-listing')}>
              <Ionicons name="add-circle-outline" size={28} color={colors.primary} />
            </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
          <TextInput style={styles.input} placeholder="Search books, notes, services..." placeholderTextColor={colors.textSecondary} value={searchTerm} onChangeText={setSearchTerm}/>
        </View>
        <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={20} color={colors.primary}/>
        </TouchableOpacity>
      </View>
      
      {renderContent()}

    </SafeAreaView>
  );
}

// Styles
const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.lg, paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border },
    headerTitleContainer: { flexDirection: 'row', alignItems: 'center' },
    logo: { width: 32, height: 32, marginRight: spacing.sm },
    headerTitle: { ...typography.h2, color: colors.text },
    searchBarContainer: { flexDirection: 'row', paddingHorizontal: spacing.md, paddingVertical: spacing.sm, gap: spacing.md },
    searchInputWrapper: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: radius.md,},
    searchIcon: { paddingLeft: spacing.md },
    input: { flex: 1, height: 44, paddingHorizontal: spacing.sm, ...typography.body, color: colors.text },
    filterButton: { height: 44, width: 44, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.card, borderRadius: radius.md },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.lg },
    errorText: { ...typography.body, color: colors.textSecondary, marginTop: spacing.sm, textAlign: 'center' },
    retryButton: { backgroundColor: colors.primary, paddingVertical: 10, paddingHorizontal: 20, borderRadius: radius.full, marginTop: spacing.md },
    retryButtonText: { color: colors.background, ...typography.bodyBold },
    listContainer: { paddingHorizontal: spacing.sm },
    sectionTitle: { ...typography.h3, color: colors.text, marginHorizontal: spacing.sm, marginBottom: spacing.md, marginTop: spacing.lg },
    horizontalScrollPlaceholder: { height: 120, backgroundColor: colors.card, borderRadius: radius.lg, justifyContent: 'center', alignItems: 'center', marginBottom: spacing.md, marginHorizontal: spacing.sm },
    placeholderText: { ...typography.body, color: colors.textSecondary },
    card: { flex: 1/2, backgroundColor: colors.card, borderRadius: radius.lg, margin: spacing.sm, overflow: 'hidden' },
    cardImageContainer: { height: 120, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center'},
    cardImage: { width: '100%', height: '100%' },
    cardContent: { padding: spacing.sm, borderTopWidth: 1, borderTopColor: colors.border },
    cardTitle: { ...typography.bodyBold, color: colors.text, height: 40 },
    cardPrice: { ...typography.h4, color: colors.primary, marginVertical: spacing.xs },
    cardSeller: { ...typography.caption, color: colors.textSecondary },
});