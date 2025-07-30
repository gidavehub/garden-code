// components/setup/TeachingStyle.tsx
import { TEACHING_STYLES_OPTIONS } from '@/constants/options';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { AuthStackParamList } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const TeachingStyle = ({ setTeachingStyle } : {setTeachingStyle: (style: string) => void}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  function handleContinue(){
    if (selectedStyle) {
      setTeachingStyle(selectedStyle);
      navigation.navigate('TeachingSubjects');
    }
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        What is your primary teaching style?
      </Text>

      <Text style={styles.label}>Select Teaching Style</Text>
      <TouchableOpacity
        style={styles.dropdownToggle}
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <Text style={[styles.dropdownToggleText, !selectedStyle && { color: colors.textSecondary }]}>
          {selectedStyle || "Choose a style..."}
        </Text>
        <Ionicons name={dropdownOpen ? "chevron-up" : "chevron-down"} size={20} color={colors.textSecondary} />
      </TouchableOpacity>

      {dropdownOpen && (
        <View style={styles.dropdown}>
          <ScrollView>
            {TEACHING_STYLES_OPTIONS.map((style) => (
              <TouchableOpacity
                key={style}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedStyle(style);
                  setDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{style}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      <TouchableOpacity style={[styles.continueButton, !selectedStyle && { opacity: 0.5 }]} onPress={handleContinue} disabled={!selectedStyle}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
  container: {
    padding: spacing.xl,
    backgroundColor: colors.background,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    ...typography.h2,
    color: colors.primary,
    marginBottom: spacing.xl,
    textAlign: "center",
  },
  label: {
    ...typography.h4,
    color: colors.text,
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
  },
  dropdownToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
    width: '100%',
  },
  dropdownToggleText: {
    ...typography.body,
    color: colors.text,
    flex: 1,
  },
  dropdown: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    marginTop: spacing.xs,
    width: '100%',
    maxHeight: 250,
  },
  dropdownItem: {
    padding: spacing.md,
  },
  dropdownItemText: {
    ...typography.body,
    color: colors.text,
  },
  continueButton: {
    marginTop: spacing.xl,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
    alignItems: "center",
  },
  continueButtonText: {
    color: colors.background,
    ...typography.bodyBold,
  },
});