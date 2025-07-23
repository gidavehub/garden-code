// components/setup/TeachingSubjects.tsx
import { subjects } from "@/constants/subjects";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { AuthStackParamList } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

export const TeachingSubjects = ({
  setTeachingSubjects,
}: {
  setTeachingSubjects: (val: string[]) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [fieldDropdownOpen, setFieldDropdownOpen] = useState(false);
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const [tempSubjects, setTempSubjects] = useState<string[]>([]);
  
  const fields = Object.keys(subjects);
  const subjectsInField = selectedField ? (subjects as any)[selectedField] : [];

  const handleAddSubject = () => {
    if (selectedSubject && !tempSubjects.includes(selectedSubject)) {
      setTempSubjects([...tempSubjects, selectedSubject]);
      setSelectedSubject(null);
    }
  };

  const handleRemoveSubject = (subjectToRemove: string) => {
    setTempSubjects(tempSubjects.filter((subj) => subj !== subjectToRemove));
  };

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  function handleContinue() {
    setTeachingSubjects(tempSubjects);
    navigation.navigate('Certificate'); // Updated navigation target
  }
  
  // Reusable dropdown component
  const Dropdown = ({ label, placeholder, value, isOpen, setIsOpen, options, onSelect }: any) => (
    <View style={{ width: '100%'}}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dropdownToggle} onPress={() => setIsOpen(!isOpen)}>
          <Text style={[styles.dropdownToggleText, !value && { color: colors.textSecondary }]}>
            {value || placeholder}
          </Text>
          <Ionicons name={isOpen ? "chevron-up" : "chevron-down"} size={20} color={colors.textSecondary} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          <ScrollView>
            {options.map((option: string) => (
              <TouchableOpacity key={option} style={styles.dropdownItem} onPress={() => { onSelect(option); setIsOpen(false); }}>
                  <Text style={styles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MaskedView maskElement={<Text style={styles.header}>What do you teach?</Text>}>
        <LinearGradient colors={[colors.primary, colors.accent]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Text style={[styles.header, { opacity: 0 }]}>What do you teach?</Text>
        </LinearGradient>
      </MaskedView>

      <Dropdown 
        label="Select Subject Field"
        placeholder="Choose a field..."
        value={selectedField}
        isOpen={fieldDropdownOpen}
        setIsOpen={setFieldDropdownOpen}
        options={fields}
        onSelect={(field: string) => {
          setSelectedField(field);
          setSelectedSubject(null);
          setSubjectDropdownOpen(false);
        }}
      />

      {selectedField && (
        <>
            <Dropdown 
                label="Select Subject"
                placeholder="Choose a subject..."
                value={selectedSubject}
                isOpen={subjectDropdownOpen}
                setIsOpen={setSubjectDropdownOpen}
                options={subjectsInField}
                onSelect={setSelectedSubject}
            />
          {selectedSubject && 
            <TouchableOpacity style={styles.addButton} onPress={handleAddSubject}>
              <Text style={styles.addButtonText}>Add Subject</Text>
            </TouchableOpacity>
          }
        </>
      )}

      {tempSubjects.length > 0 && 
        <View style={styles.listContainer}>
            <Text style={styles.label}>Your Subjects</Text>
            {tempSubjects.map((subj) => (
            <View key={subj} style={styles.subjectItem}>
                <Text style={styles.subjectText}>{subj} </Text>
                <TouchableOpacity onPress={() => handleRemoveSubject(subj)}>
                <Ionicons name="trash-outline" size={22} color={colors.error} />
                </TouchableOpacity>
            </View>
            ))}
        </View>
      }

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue} disabled={tempSubjects.length === 0}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    ...typography.h2,
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  label: {
    ...typography.h4,
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    alignSelf: 'flex-start'
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
    minHeight: 50,
  },
  dropdownToggleText: {
    ...typography.body,
    color: colors.text,
  },
  dropdown: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    width: '100%',
    marginTop: spacing.xs,
    maxHeight: 200,
  },
  dropdownItem: {
    padding: spacing.md,
  },
  dropdownItemText: {
    ...typography.body,
    color: colors.text,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    marginTop: spacing.md,
  },
  addButtonText: {
    ...typography.bodyBold,
    color: colors.background,
  },
  listContainer: {
    width: "100%",
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  subjectItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderColor: colors.border,
    borderWidth: 1,
  },
  subjectText: {
    ...typography.body,
    color: colors.text,
    flex: 1,
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