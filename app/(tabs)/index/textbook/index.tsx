import logo from '@/assets/images/logo.png'; // Reminder: Make sure this path is correct
import { ALL_TEXTBOOKS } from '@/data/allTextBooks';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Define a type for our textbook items
type Textbook = {
  id: string;
  name: string;
  author: string;
  coverImage: ImageSourcePropType;
};

// Typed component props for our card
const TextbookCard = ({ item }: { item: Textbook }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/textbook/${item.id}`)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.imageContainer}>
        <Image source={item.coverImage} style={styles.coverImage} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
      </View>
    </Pressable>
  );
};

export default function LibraryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* --- Header with Home Icon Button, Centered Logo, and Title --- */}
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.push('/')} style={({ pressed }) => [styles.homeIconButton, pressed && styles.buttonPressed]}>
          <Ionicons name="home-outline" size={28} color={themeColors.primaryGreen} />
        </Pressable>
        <View style={styles.headerTitleRow}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerTitle}>Library</Text>
        </View>
        <Text style={styles.headerSubtitle}>Browse the collection</Text>
      </View>

      <FlatList
        data={ALL_TEXTBOOKS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => <TextbookCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// A fresh, "green-ish" theme
const themeColors = {
  primaryGreen: '#388E3C',
  lightBackground: '#f7fbf7',
  darkText: '#1c1c1c',
  secondaryText: '#555',
  cardBackground: '#FFFFFF',
  shadowColor: '#000000',
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: themeColors.lightBackground,
  },
  // --- Header Styles ---
  headerContainer: {
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
    position: 'relative',
  },
  homeIconButton: {
    position: 'absolute',
    top: 20,
    left: 16,
    padding: 8, // increase touch area without visible border
    backgroundColor: 'transparent',
  },
  buttonPressed: {
    opacity: 0.6,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: themeColors.primaryGreen,
  },
  headerSubtitle: {
    fontSize: 16,
    color: themeColors.secondaryText,
    marginTop: 4,
    width: 126,
    alignSelf: 'center',
  },
  // --- List & Card Styles ---
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: themeColors.cardBackground,
    borderRadius: 12,
    shadowColor: themeColors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardPressed: {
    transform: [{ scale: 0.97 }],
  },
  imageContainer: {
    height: 160,
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: themeColors.darkText,
    minHeight: 36,
  },
  author: {
    fontSize: 12,
    color: themeColors.secondaryText,
    marginTop: 2,
  },
});
