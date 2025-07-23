// components/setup/CoursesForStudents.tsx
import { subjects } from "@/constants/subjects";
import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { AuthStackParamList } from "@/types";
import { Ionicons } from '@expo/vector-icons';
import MaskedView from "@react-native-masked-view/masked-view";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const CoursesForStudents = ({
  setCourses,
  courses,
}: {
  setCourses: (val: string[]) => void;
  courses: string[];
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [courseList, setCourseList] = useState<string[]>(courses); // Initialize with passed courses
  const [fieldDropdownOpen, setFieldDropdownOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);

  const fields = Object.keys(subjects);
  const coursesInField = selectedField ? (subjects as any)[selectedField] : [];

  const handleAdd = () => {
    if (selectedCourse && !courseList.includes(selectedCourse)) {
      setCourseList([...courseList, selectedCourse]);
    }
    setSelectedCourse(null);
  };

  const handleRemove = (course: string) => {
    setCourseList(courseList.filter((item) => item !== course));
  };

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()
  function handleContinue(){
    setCourses(courseList);
    navigation.navigate('LearningStyle')
  }

  const Dropdown = ({ label, placeholder, value, isOpen, setIsOpen, options, onSelect } : any) => (
    <>
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
    </>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MaskedView maskElement={<Text style={styles.header}>Select Your Courses</Text>}>
        <LinearGradient colors={[colors.primary, colors.accent]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Text style={[styles.header, { opacity: 0 }]}>Select Your Courses</Text>
        </LinearGradient>
      </MaskedView>

      <Dropdown
        label="Select Subject Field"
        placeholder="Choose field..."
        value={selectedField}
        isOpen={fieldDropdownOpen}
        setIsOpen={setFieldDropdownOpen}
        options={fields}
        onSelect={(field: string) => {
            setSelectedField(field);
            setSelectedCourse(null);
            setCourseDropdownOpen(false);
        }}
      />

      {selectedField && (
        <>
            <Dropdown
                label="Select Course"
                placeholder="Choose course..."
                value={selectedCourse}
                isOpen={courseDropdownOpen}
                setIsOpen={setCourseDropdownOpen}
                options={coursesInField}
                onSelect={setSelectedCourse}
            />
          {selectedCourse && (
            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
              <Text style={styles.addButtonText}>Add Course</Text>
            </TouchableOpacity>
          )}
        </>
      )}

      {courseList.length > 0 && (
        <View style={{width: '100%', marginTop: spacing.xl}}>
            <Text style={styles.label}>Your Courses</Text>
            {courseList.map((item) => (
                <View key={item} style={styles.listItem}>
                <Text style={styles.listItemText}>{item}</Text>
                <TouchableOpacity onPress={() => handleRemove(item)}>
                    <Ionicons name="trash-outline" size={22} color={colors.error} />
                </TouchableOpacity>
                </View>
            ))}
        </View>
      )}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
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
    justifyContent : "center"
  },
  header: {
    ...typography.h2,
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  label: {
    ...typography.h4,
    color: colors.text,
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
    marginTop: spacing.md
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
    marginBottom: spacing.sm,
  },
  dropdownToggleText: {
    color: colors.text,
    ...typography.body,
    flex: 1,
  },
  dropdown: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    width: '100%',
    maxHeight: 200,
  },
  dropdownItem: {
    padding: spacing.md,
  },
  dropdownItemText: {
    color: colors.text,
    ...typography.body
  },
  addButton: {
    marginTop: spacing.md,
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    alignSelf: 'flex-start'
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
    flex: 1
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