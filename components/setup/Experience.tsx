// components/setup/Experience.tsx
import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { AuthStackParamList } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ExperienceType = {
  company: string;
  duration: number;
};

export const Experience = ({
  teachingExperience,
  setTeachingExperience,
  setLoadingReady,
}: {
  teachingExperience: ExperienceType[];
  setTeachingExperience: any;
  setLoadingReady: (value: boolean) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");

  const addExperience = () => {
    if (company && duration && role) {
      setTeachingExperience([
        ...teachingExperience,
        { company, duration: parseInt(duration, 10) },
      ]);
      setCompany("");
      setRole("");
      setDuration("");
    }
  };

  const removeExperience = (index: number) => {
    const updated = teachingExperience.filter((_, i) => i !== index);
    setTeachingExperience(updated);
  };

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  function onContinue() {
    navigation.navigate('LoadingScreen');
    setLoadingReady(true);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>What Experience do you have?</Text>

      <Text style={styles.label}>Role / Position</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Math Teacher"
        placeholderTextColor={colors.textSecondary}
        value={role}
        onChangeText={setRole}
      />
      
      <Text style={styles.label}>Company / School</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Grand High School"
        placeholderTextColor={colors.textSecondary}
        value={company}
        onChangeText={setCompany}
      />
      
      <Text style={styles.label}>Duration (in months)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 12"
        placeholderTextColor={colors.textSecondary}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <TouchableOpacity style={styles.addButton} onPress={addExperience}>
        <Text style={styles.addButtonText}>Add Experience</Text>
      </TouchableOpacity>

      <View style={{ width: '100%'}}>
        {teachingExperience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={{flex: 1}}>
              <Text style={[styles.experienceText, {color: colors.textSecondary}]}>{exp.company} — {exp.duration} months</Text>
            </View>
            <TouchableOpacity onPress={() => removeExperience(index)}>
                <Ionicons name="trash-outline" size={22} color={colors.error}/>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
        <Text style={styles.continueButtonText}>Finish Setup</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: {
        padding: spacing.xl,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent : "center",
        flexGrow: 1,
    },
    header: {
        ...typography.h2,
        color: colors.primary,
        textAlign: "center",
        marginBottom: spacing.xl,
    },
    label: {
        ...typography.h4,
        color: colors.text,
        alignSelf: 'flex-start',
        marginBottom: spacing.sm,
    },
    input: {
        ...typography.body,
        backgroundColor: colors.card,
        color: colors.text,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.md,
        fontSize: 16,
        width: '100%',
        marginBottom: spacing.lg,
    },
    addButton: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.lg,
        marginBottom: spacing.xl,
    },
    addButtonText: {
        ...typography.bodyBold,
        color: colors.background,
    },
    experienceItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.md,
        width: '100%',
        marginBottom: spacing.md,
    },
    experienceText: {
        ...typography.body,
        color: colors.text,
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