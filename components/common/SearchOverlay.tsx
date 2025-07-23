import { GlobalStyles } from '@/constants/Styles';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { SearchResult, useSearch } from '@/context/SearchProvider';
import { ALL_TEXTBOOKS } from '@/data/allTextBooks';
import { AntDesign } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet, Text,
  TextInput,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchReplicaView } from './SearchReplicaView';

/**
 * THIS IS THE COMPLETE TILE COMPONENT
 * It displays a single search result item.
 */
const SearchResultTile = ({ item, onPress }: { item: SearchResult; onPress: () => void }) => {
  const { query } = useSearch();

  // This helper bolds the matching text within the snippet
  const renderSnippet = () => {
    if (!item.snippet || !query) {
      return <Text style={styles.snippetText} numberOfLines={2}>{item.snippet}</Text>;
    }
    const parts = item.snippet.split(new RegExp(`(${query})`, 'gi'));
    return (
      <Text style={styles.snippetText} numberOfLines={2}>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <Text key={i} style={{ fontWeight: 'bold', color: Colors.primary }}>{part}</Text>
          ) : part
        )}
      </Text>
    );
  };

  return (
    <MotiView from={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <MotiPressable onPress={onPress} style={styles.tileContainer}>
            <Text style={Typography.bodyBold} numberOfLines={1}>{item.sectionTitle}</Text>
            {renderSnippet()}
        </MotiPressable>
    </MotiView>
  );
};

export function SearchOverlay() {
  const { isSearchActive, query, setQuery, results, closeSearch, selectedResult, selectResult } = useSearch();
  const insets = useSafeAreaInsets();

  if (!isSearchActive) return null;
  if (selectedResult) {
      const textbook = ALL_TEXTBOOKS.find(t => t.id === selectedResult.textbookId);
      const section = textbook?.data.chapters[selectedResult.chapterIndex].sections[selectedResult.sectionIndex];
      if (section) return <SearchReplicaView section={section} searchTerm={query} onClose={() => selectResult(null)} />;
  }

  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'timing', duration: 250 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={[styles.headerWrapper, { paddingTop: insets.top }]}>
          <View style={styles.headerContent}>
            <MotiPressable style={[styles.closeButton, styles.glassyBackground]} onPress={closeSearch} from={{ scale: 0.5, rotate: '-180deg' }} animate={{ scale: 1, rotate: '0deg' }} transition={{ type: 'spring' }} >
              <AntDesign name="close" size={24} color={Colors.text} />
            </MotiPressable>

            <View style={[styles.searchBarView, styles.glassyBackground]}>
              <AntDesign name="search1" size={20} color={Colors.text} style={{ opacity: 0.8 }} />
              <TextInput style={styles.input} placeholder="Find any concept..." placeholderTextColor={Colors.textMuted} value={query} onChangeText={setQuery} autoFocus selectionColor={Colors.primary} />
            </View>
          </View>
        </View>

        <FlatList
          data={results}
          keyExtractor={(item, index) => `${item.sectionTitle}-${index}`}
          renderItem={({ item }) => <SearchResultTile item={item} onPress={() => selectResult(item)} />}
          contentContainerStyle={{ paddingHorizontal: Spacing.md, paddingTop: insets.top + 90, paddingBottom: Spacing.xl }}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{query.length < 3 ? 'Start typing...' : 'No results found.'}</Text>
            </View>
          }
        />
      </KeyboardAvoidingView>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  // THIS IS THE ONLY CHANGE
  container: { ...StyleSheet.absoluteFillObject, zIndex: 99, backgroundColor: Colors.primary + '15' }, // Light Green Backdrop

  headerWrapper: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, paddingBottom: Spacing.sm },
  headerContent: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: Spacing.md, height: 60 },
  glassyBackground: { backgroundColor: 'rgba(242, 242, 242, 0.4)', borderColor: 'rgba(255, 255, 255, 0.5)', borderWidth: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 3 },
  closeButton: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  searchBarView: { flex: 1, height: 44, flexDirection: 'row', alignItems: 'center', borderRadius: 22, paddingHorizontal: Spacing.md, marginLeft: Spacing.sm },
  input: { flex: 1, ...Typography.body, fontWeight: '500', color: Colors.text, height: '100%', paddingHorizontal: Spacing.sm },
  emptyContainer: { alignItems: 'center', paddingTop: 40, },
  emptyText: { ...Typography.title3, color: Colors.textMuted },
  tileContainer: { padding: Spacing.md, backgroundColor: Colors.white, borderRadius: 12, marginBottom: Spacing.md, ...GlobalStyles.shadow, borderWidth: 1, borderColor: Colors.lightGray },
  snippetText: { ...Typography.caption, color: "darkGray", marginTop: Spacing.xs, lineHeight: 18 },
});