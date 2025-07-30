// components/setup/Role.tsx
import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { AuthStackParamList } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Role = ({
  role,
  setRole,
}: {
  role: "student" | "teacher" | null;
  setRole: (val: "student" | "teacher") => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
     
  const onContinue = () => {
    if (!role) return;
    if (role === 'student'){
      navigation.navigate('ClassLevel');
    }else{
      navigation.navigate('TeachingStyle');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your Role?</Text>

      <View style={styles.radioGroup}>
        {(["student", "teacher"] as const).map((item) => {
          const isSelected = role === item;

          return (
            <TouchableOpacity
              key={item}
              style={[
                styles.radioButton,
                isSelected && styles.radioButtonSelected,
              ]}
              onPress={() => setRole(item)}
            >
              <Text style={[
                  styles.radioText,
                  isSelected && styles.radioTextSelected,
              ]}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={onContinue} disabled={!role}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xl,
  },
  radioGroup: {
    flexDirection: "row",
    gap: spacing.lg,
  },
  radioButton: {
    width: 140,
    height: 140,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.border
  },
  radioButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}20`,
  },
  radioText: {
    ...typography.h3,
    color: colors.text,
  },
  radioTextSelected: {
    color: colors.primary,
  },
  continueButton: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
  },
  continueText: {
    ...typography.bodyBold,
    color: colors.background,
  },
});