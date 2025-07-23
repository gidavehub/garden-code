// components/setup/Interests.tsx
import { INTERESTS_OPTIONS } from '@/constants/options';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { AuthStackParamList } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Interests = ({
  setInterests,
  setLoadingReady,
}: {
  setInterests: (val: string[]) => void;
  setLoadingReady: (val: boolean) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tempInterests, setTempInterests] = useState<string[]>([]);

  const handleAddInterest = () => {
    if (selectedInterest && !tempInterests.includes(selectedInterest)) {
      setTempInterests((prev) => [...prev, selectedInterest]);
      setSelectedInterest(null);
    }
  };

  const handleRemoveInterest = (interestToRemove: string) => {
    setTempInterests(tempInterests.filter((interest) => interest !== interestToRemove));
  };

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  function handleContinue() {
    setInterests(tempInterests);
    navigation.navigate('LoadingScreen');
    setLoadingReady(true);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>What are your interests?</Text>

      <Text style={styles.label}>Select an Interest</Text>
      <TouchableOpacity style={styles.dropdownToggle} onPress={() => setDropdownOpen(!dropdownOpen)}>
        <Text style={[styles.dropdownToggleText, !selectedInterest && {color: colors.textSecondary}]}>
          {selectedInterest || "Choose an interest..."}
        </Text>
        <Ionicons name={dropdownOpen ? "chevron-up" : "chevron-down"} size={20} color={colors.textSecondary} />
      </TouchableOpacity>

      {dropdownOpen && (
        <View style={styles.dropdown}>
          <ScrollView>
            {INTERESTS_OPTIONS.map((interest) => (
              <TouchableOpacity
                key={interest}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedInterest(interest);
                  setDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{interest}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {selectedInterest && (
        <TouchableOpacity style={styles.addButton} onPress={handleAddInterest}>
          <Text style={styles.addButtonText}>Add Interest</Text>
        </TouchableOpacity>
      )}

      {tempInterests.length > 0 && (
        <View style={{width: '100%', marginTop: spacing.xl}}>
            <Text style={styles.label}>Your Interests</Text>
            {tempInterests.map((interest, index) => (
                <View key={index} style={styles.listItem}>
                <Text style={styles.listItemText}>{interest}</Text>
                <TouchableOpacity onPress={() => handleRemoveInterest(interest)}>
                    <Ionicons name="trash-outline" size={22} color={colors.error} />
                </TouchableOpacity>
                </View>
            ))}
        </View>
      )}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Finish Setup</Text>
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
        marginBottom: spacing.sm,
        alignSelf: 'flex-start',
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
        minHeight: 50
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
        width: '100%',
        maxHeight: 200,
        marginTop: spacing.xs
    },
    dropdownItem: {
        padding: spacing.md,
    },
    dropdownItemText: {
        ...typography.body,
        color: colors.text,
    },
    addButton: {
        marginTop: spacing.md,
        backgroundColor: colors.primary,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.lg,
    },
    addButtonText: {
        ...typography.bodyBold,
        color: colors.background,
    },
    listItem: {
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.md,
        marginTop: spacing.sm,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listItemText: {
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
        ...typography.bodyBold,
        color: colors.background,
    },
});