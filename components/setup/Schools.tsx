// components/setup/Schools.tsx

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import navigation hooks from React Navigation
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Import your custom theme, types, and icons
import { highSchools, HighSchoolsData } from "@/constants/highschool";
import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import type { AuthStackParamList } from "@/types";
import { Ionicons } from "@expo/vector-icons";


export const School = ({
  setSchool,
  setCountry,
  setCurriculum,
}: {
  setSchool: (val: string) => void;
  setCountry: (val: string) => void;
  setCurriculum: (val: string) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [schoolDropdownOpen, setSchoolDropdownOpen] = useState(false);

  const typedHighSchools = highSchools as HighSchoolsData;
  const countries = Object.keys(typedHighSchools);
  const regions = selectedCountry ? Object.keys(typedHighSchools[selectedCountry]) : [];
  const schoolsInRegion = selectedCountry && selectedRegion ? Object.entries(typedHighSchools[selectedCountry][selectedRegion]) : [];
  
  // Use useNavigation for stack-internal navigation
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleContinue = () => {
    if (selectedCountry && selectedRegion && selectedSchool) {
      setSchool(selectedSchool);
      setCountry(selectedCountry);
      const curriculum = typedHighSchools[selectedCountry]?.[selectedRegion]?.[selectedSchool]?.curriculum || "";
      setCurriculum(curriculum);
      navigation.navigate('Role'); // This is the correct usage
    }
  };

  const Dropdown = ({ value, placeholder, isOpen, setIsOpen, options, renderItem }: any) => (
    <View>
      <TouchableOpacity style={styles.dropdownToggle} onPress={() => setIsOpen(!isOpen)}>
        <Text style={[styles.dropdownToggleText, !value && { color: colors.textSecondary }]}>
          {value || placeholder}
        </Text>
        <Ionicons name={isOpen ? "chevron-up" : "chevron-down"} size={20} color={colors.textSecondary} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          <ScrollView nestedScrollEnabled>{options.map(renderItem)}</ScrollView>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Where do you go to school?</Text>

        <View style={styles.formContainer}>
            <Text style={styles.label}>Select Your Country</Text>
            <Dropdown 
                value={selectedCountry}
                placeholder="Select a country..."
                isOpen={countryDropdownOpen}
                setIsOpen={setCountryDropdownOpen}
                options={countries}
                renderItem={(country: string) => (
                    <TouchableOpacity key={country} style={styles.dropdownItem} onPress={() => { setSelectedCountry(country); setSelectedRegion(null); setSelectedSchool(""); setCountryDropdownOpen(false); }}>
                        <Text style={styles.dropdownItemText}>{country}</Text>
                    </TouchableOpacity>
                )}
            />

            {selectedCountry && (
            <>
                <Text style={styles.label}>Select Your Region</Text>
                <View style={styles.radioGroup}>
                {regions.map((region) => (
                    <TouchableOpacity key={region} style={[ styles.radioButton, selectedRegion === region && styles.radioButtonSelected ]} onPress={() => { setSelectedRegion(region); setSelectedSchool(""); setSchoolDropdownOpen(false); }}>
                        <Text style={[ styles.radioLabel, selectedRegion === region && styles.radioLabelSelected ]}>{region}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            </>
            )}

            {selectedRegion && (
            <>
                <Text style={styles.label}>Select Your School</Text>
                <Dropdown 
                    value={selectedSchool}
                    placeholder="Select a school..."
                    isOpen={schoolDropdownOpen}
                    setIsOpen={setSchoolDropdownOpen}
                    options={schoolsInRegion}
                    renderItem={([schoolName, schoolObj] : [string, any]) => (
                        <TouchableOpacity key={schoolName} style={styles.dropdownItem} onPress={() => { setSelectedSchool(schoolName); setSchoolDropdownOpen(false); }}>
                             <Text style={styles.dropdownItemText}>{schoolName}</Text>
                             <Text style={styles.dropdownItemSubtext}>{schoolObj.curriculum}</Text>
                        </TouchableOpacity>
                    )}
                />
            </>
            )}
        </View>

        <TouchableOpacity style={[ styles.continueButton, !selectedSchool && styles.continueButtonDisabled ]} onPress={handleContinue} disabled={!selectedSchool}>
            <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flexGrow: 1,
        justifyContent: "center",
        padding: spacing.xl,
    },
    header: {
        ...typography.h2,
        color: colors.text,
        textAlign: 'center',
        marginBottom: spacing.xl
    },
    formContainer: {
        width: '100%',
    },
    label: {
        ...typography.h4,
        color: colors.text,
        marginTop: spacing.lg,
        marginBottom: spacing.sm,
    },
    radioGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: spacing.sm,
    },
    radioButton: {
        backgroundColor: colors.card,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        borderRadius: radius.full,
        borderWidth: 1,
        borderColor: colors.border,
    },
    radioButtonSelected: {
        backgroundColor: `${colors.primary}20`,
        borderColor: colors.primary,
    },
    radioLabel: {
        ...typography.body,
        color: colors.text,
    },
    radioLabelSelected: {
        color: colors.primary,
        ...typography.bodyBold
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
        marginTop: 5,
        width: '100%',
        maxHeight: 250
    },
    dropdownItem: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },
    dropdownItemText: {
        ...typography.body,
        color: colors.text,
    },
    dropdownItemSubtext: {
        ...typography.body,
        color: colors.textSecondary,
        fontSize: 12,
        marginTop: spacing.xs
    },
    continueButton: {
        marginTop: spacing.xl,
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
        borderRadius: radius.full,
        alignItems: "center",
        alignSelf: 'center'
    },
    continueButtonDisabled: {
        opacity: 0.5,
    },
    continueButtonText: {
        ...typography.bodyBold,
        color: colors.background,
    },
});