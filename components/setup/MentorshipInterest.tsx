// components/setup/MentorshipInterest.tsx
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { AuthStackParamList } from '@/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const MentorshipInterest = ({
  mentorshipInterest,
  setMentorshipInterest,
}: {
  mentorshipInterest: boolean;
  setMentorshipInterest: (val: boolean) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  function handleContinue(){
    navigation.navigate('AvailableTimeSlots');
  }

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>
                Are you interested in mentorship?
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.choiceButton,
                        mentorshipInterest === true && styles.choiceButtonActive,
                    ]}
                    onPress={() => setMentorshipInterest(true)}
                >
                <Text style={[
                    styles.choiceButtonText,
                    mentorshipInterest === true && styles.choiceButtonTextActive,
                ]}>
                    Yes
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.choiceButton,
                        mentorshipInterest === false && styles.choiceButtonActive,
                    ]}
                    onPress={() => setMentorshipInterest(false)}
                >
                <Text style={[
                    styles.choiceButtonText,
                    mentorshipInterest === false && styles.choiceButtonTextActive,
                ]}>
                    No
                </Text>
                </TouchableOpacity>
            </View>
        </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    ...typography.h2,
    color: colors.primary,
    marginBottom: spacing.xl,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: spacing.md,
  },
  choiceButton: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.lg,
    borderWidth: 2,
    backgroundColor: colors.card,
    borderColor: colors.border,
    flex: 1,
    alignItems: 'center',
  },
  choiceButtonActive: {
    backgroundColor: `${colors.primary}20`,
    borderColor: colors.primary,
  },
  choiceButtonText: {
    ...typography.h4,
    color: colors.text,
  },
  choiceButtonTextActive: {
    color: colors.primary,
  },
  continueButton: {
    marginTop: spacing.xl,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
    position: 'absolute',
    bottom: 60,
  },
  continueButtonText: {
    color: colors.background,
    ...typography.bodyBold,
  },
});