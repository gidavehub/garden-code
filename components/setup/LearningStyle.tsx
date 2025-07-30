// components/setup/LearningStyle.tsx
import { LEARNING_STYLES } from "@/constants/options";
import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { AuthStackParamList } from "@/types";
import MaskedView from "@react-native-masked-view/masked-view";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const LearningStyle = ({
  preferredLearningStyle,
  setPreferredLearningStyle,
}: {
  preferredLearningStyle: string;
  setPreferredLearningStyle: (val: string) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()
  function onContinue(){
    if(preferredLearningStyle) {
      navigation.navigate('Interests')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MaskedView maskElement={<Text style={styles.header}>What's your Learning Style?</Text>}>
        <LinearGradient colors={[colors.primary, colors.accent]} start={{x:0,y:0}} end={{x:1,y:0}}>
          <Text style={[styles.header, { opacity: 0 }]}>What's your Learning Style?</Text>
        </LinearGradient>
      </MaskedView>

      <View style={styles.optionsContainer}>
        {LEARNING_STYLES.map((style) => (
          <TouchableOpacity
            key={style}
            style={[
              styles.option,
              preferredLearningStyle === style && styles.optionSelected,
            ]}
            onPress={() => setPreferredLearningStyle(style)}
          >
            <Text
              style={[
                styles.optionText,
                preferredLearningStyle === style && styles.optionTextSelected,
              ]}
            >
              {style}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={onContinue} disabled={!preferredLearningStyle}>
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
    justifyContent : 'center'
  },
  header: {
    ...typography.h2,
    marginBottom: spacing.xl,
    textAlign: "center",
  },
  optionsContainer: {
    width: '100%',
    gap: spacing.md,
  },
  option: {
    width: '100%',
    padding: spacing.md,
    minHeight: 50,
    justifyContent: 'center',
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
    color: colors.primary
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