// components/setup/ClassLevel.tsx
import { AuthStackParamList } from "@/types";
import MaskedView from "@react-native-masked-view/masked-view";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
// FIX: Added 'View' to the import list
import { CLASS_LEVELS } from "@/constants/options";
import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ClassLevel = ({
  classLevel,
  setClassLevel,
}: {
  classLevel: string;
  setClassLevel: (val: string) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()
  
  function onContinue(){
    navigation.navigate('CoursesForStudents')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MaskedView maskElement={<Text style={styles.header}>What is your Class Level?</Text>}>
        <LinearGradient colors={[colors.primary, colors.accent]} start={{x:0,y:0}} end={{x:1,y:0}}>
          <Text style={[styles.header, { opacity: 0 }]}>What is your Class Level?</Text>
        </LinearGradient>
      </MaskedView>

      <View style={styles.optionsContainer}>
        {CLASS_LEVELS.map((lvl) => (
            <TouchableOpacity
            key={lvl}
            style={[
                styles.option,
                classLevel === lvl && styles.optionSelected,
            ]}
            onPress={() => setClassLevel(lvl)}
            >
            <Text
                style={[
                styles.optionText,
                classLevel === lvl && styles.optionTextSelected,
                ]}
            >
                {lvl}
            </Text>
            </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={[styles.continueButton, !classLevel && {opacity: 0.5}]} onPress={onContinue} disabled={!classLevel}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
  container: {
    padding: spacing.xl,
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent : 'center'
  },
  header: {
    ...typography.h2,
    marginBottom: spacing.xl,
    textAlign: "center",
  },
  optionsContainer: {
      width: '100%',
      gap: spacing.md
  },
  option: {
    width: '100%',
    padding: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.border,
  },
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}20`
  },
  optionText: {
    ...typography.body,
    color: colors.text,
  },
  optionTextSelected: {
    ...typography.bodyBold,
    color: colors.primary,
  },
  continueButton: {
    marginTop: spacing.xl,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
  },
  continueButtonText: {
    ...typography.bodyBold,
    color: colors.background,
  },
});