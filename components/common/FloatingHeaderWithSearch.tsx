import { Colors, Spacing, Typography } from '@/constants/theme';
import { useSearch } from '@/context/SearchProvider';
import { AntDesign } from '@expo/vector-icons';
import { AnimatePresence, MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  onPress: () => void;
};

export function FloatingHeaderWithSearch({ onPress }: Props) {
  const { isSearchActive, openSearch } = useSearch();
  const insets = useSafeAreaInsets();

  return (
    <AnimatePresence>
      {!isSearchActive && (
        <MotiView
          style={[styles.container, { paddingTop: insets.top }]}
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -20 }}
          transition={{ type: 'timing', duration: 250 }}
        >
          <View style={styles.headerContent}>
            
            {/* BACK BUTTON with SHADOW + GLASS */}
            <MotiPressable
              onPress={onPress}
              from={{ scale: 1 }}
              animate={({ pressed }) => ({ scale: pressed ? 0.95 : 1 })}
              style={styles.backShadowContainer}
            >
              <View style={styles.backGlassContainer}>
                <MotiView
                  style={[styles.glassyBackground, styles.backInner]}
                  from={{ scale: 1 }}
                  animate={({ pressed }) => ({ scale: pressed ? 0.98 : 1 })}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  <AntDesign name="arrowleft" size={20} color={Colors.text} />
                </MotiView>
              </View>
            </MotiPressable>

            {/* SEARCH BAR */}
            <Pressable style={styles.searchBarPressable} onPress={openSearch}>
              <MotiView
                style={[styles.glassyBackground, styles.searchBarView]}
                from={{ scale: 1 }}
                animate={({ pressed }) => ({ scale: pressed ? 0.98 : 1 })}
                transition={{ type: 'spring', damping: 15 }}
              >
                <AntDesign name="search1" size={20} color={Colors.textMuted} />
                <Text style={styles.searchText}>Search...</Text>
              </MotiView>
            </Pressable>
          </View>
        </MotiView>
      )}
    </AnimatePresence>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    zIndex: 10,
    paddingBottom: Spacing.sm,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    height: 60,
  },

  // 1) Shadow container around the glass circle
  backShadowContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    // subtle shadow for Android and iOS:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    marginRight: Spacing.sm,
  },
  // 2) Glass container that clips into a perfect circle
  backGlassContainer: {
    flex: 1,
    borderRadius: 22,
    overflow: 'hidden',
  },
  backInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Shared liquid-glass style
  glassyBackground: {
    backgroundColor: 'rgba(242, 242, 242, 0.4)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
  },

  // Search bar
  searchBarPressable: {
    flex: 1,
    height: 44,
  },
  searchBarView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    paddingHorizontal: Spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  searchText: {
    ...Typography.body,
    color: Colors.textMuted,
    marginLeft: Spacing.sm,
    fontSize: 16,
  },
});
