// /app/(tabs)/profile/settings.tsx

import { radius, spacing, typography } from '@/theme/atoms'; // <--- CORRECTED IMPORT
import { useTheme } from '@/theme/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// ... ThemeOption component remains the same ...
const ThemeOption = ({ title, active, onPress }: { title: string; active: boolean; onPress: () => void }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
          style={[
            styles.optionButton,
            {
              backgroundColor: active ? colors.primary : colors.card,
              borderColor: active ? colors.primary : colors.border,
            },
          ]}
          onPress={onPress}
        >
          <Text style={[styles.optionText, { color: active ? colors.buttonText : colors.text }]}>{title}</Text>
          {active && <Ionicons name="checkmark-circle" size={24} color={colors.buttonText} />}
        </TouchableOpacity>
      );
};


export default function SettingsScreen() {
  const router = useRouter();
  const { colors, mode, setTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[typography.h3, { color: colors.text }]}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <Text style={[typography.body, { color: colors.textSecondary, marginBottom: spacing.lg }]}>
          Choose your preferred application theme.
        </Text>
        <View style={styles.optionsContainer}>
          <ThemeOption title="Light" active={mode === 'light'} onPress={() => setTheme('light')} />
          <ThemeOption title="Dark" active={mode === 'dark'} onPress={() => setTheme('dark')} />
          <ThemeOption title="System Default" active={mode === 'system'} onPress={() => setTheme('system')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Stylesheet uses the imported constants
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: spacing.sm,
  },
  content: {
    padding: spacing.lg,
  },
  optionsContainer: {
    gap: spacing.md,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1.5,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
  },
});