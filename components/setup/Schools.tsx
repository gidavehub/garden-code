// components/setup/Schools.tsx

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const OTHER = 'Other';

  // State for dropdown selections
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  
  // Dropdown visibility states
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [schoolDropdownOpen, setSchoolDropdownOpen] = useState(false);
  
  // State for manual inputs (now with manualRegion)
  const [manualCountry, setManualCountry] = useState("");
  const [manualRegion, setManualRegion] = useState("");
  const [manualSchool, setManualSchool] = useState("");
  const [manualCurriculum, setManualCurriculum] = useState("");

  const typedHighSchools = highSchools as HighSchoolsData;
  const countries = [...Object.keys(typedHighSchools), OTHER];
  const regions = selectedCountry && typedHighSchools[selectedCountry] ? [...Object.keys(typedHighSchools[selectedCountry]), OTHER] : [];
  const schoolsInRegion =
    selectedCountry && selectedRegion && typedHighSchools[selectedCountry]?.[selectedRegion]
      ? Object.entries(typedHighSchools[selectedCountry][selectedRegion])
      : [];


  const handleContinue = () => {
    let finalCountry = '', finalSchool = '', finalCurriculum = '';
    
    if (selectedCountry === OTHER) {
        finalCountry = manualCountry.trim();
        finalSchool = manualSchool.trim();
        finalCurriculum = manualCurriculum.trim();
    } else if (selectedRegion === OTHER) {
        finalCountry = selectedCountry!;
        finalSchool = manualSchool.trim();
        finalCurriculum = manualCurriculum.trim();
    } else if (selectedSchool === OTHER) {
        finalCountry = selectedCountry!;
        finalSchool = manualSchool.trim();
        finalCurriculum = manualCurriculum.trim();
    } else if (selectedCountry && selectedRegion && selectedSchool) {
        finalCountry = selectedCountry;
        finalSchool = selectedSchool;
        finalCurriculum = typedHighSchools[selectedCountry]?.[selectedRegion]?.[selectedSchool]?.curriculum || "";
    }

    // This check is a safeguard, but `isContinueDisabled` should prevent this from being called in an invalid state.
    if (finalCountry && finalSchool) {
        setCountry(finalCountry);
        setSchool(finalSchool);
        setCurriculum(finalCurriculum);
        navigation.navigate('Role');
    }
  };

  const isContinueDisabled = !(
      (selectedCountry === OTHER && manualCountry.trim() !== '' && manualSchool.trim() !== '') ||
      (selectedCountry && selectedCountry !== OTHER && selectedRegion === OTHER && manualRegion.trim() !== '' && manualSchool.trim() !== '') ||
      (selectedCountry && selectedCountry !== OTHER && selectedRegion && selectedRegion !== OTHER && selectedSchool === OTHER && manualSchool.trim() !== '') ||
      (selectedCountry && selectedCountry !== OTHER && selectedRegion && selectedRegion !== OTHER && selectedSchool && selectedSchool !== OTHER)
  );


  const Dropdown = ({ label, value, placeholder, isOpen, setIsOpen, options, onSelect, style = {} }: any) => (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity style={[styles.dropdownToggle, style]} onPress={() => setIsOpen(!isOpen)} disabled={!options || options.length === 0}>
        <Text style={[styles.dropdownToggleText, !value && { color: colors.textSecondary }]}>
          {value || placeholder}
        </Text>
        <Ionicons name={isOpen ? "chevron-up" : "chevron-down"} size={20} color={colors.textSecondary} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          <ScrollView nestedScrollEnabled>{options.map(onSelect)}</ScrollView>
        </View>
      )}
    </>
  );

   const ManualInput = ({ label, value, onChange, placeholder }: any) => (
    <View style={{ marginTop: spacing.sm }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
      />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>Where do you go to school?</Text>

        <View style={styles.formContainer}>
            {/* Country Dropdown */}
            <Dropdown 
                label="Select Your Country"
                value={selectedCountry}
                placeholder="Select a country..."
                isOpen={countryDropdownOpen}
                setIsOpen={setCountryDropdownOpen}
                options={countries}
                onSelect={(country: string) => (
                    <TouchableOpacity key={country} style={styles.dropdownItem} onPress={() => { setSelectedCountry(country); setSelectedRegion(null); setSelectedSchool(null); setCountryDropdownOpen(false); }}>
                        <Text style={styles.dropdownItemText}>{country}</Text>
                    </TouchableOpacity>
                )}
            />
            
            {/* Manual inputs if Country is "Other" */}
            {selectedCountry === OTHER && (
                 <View style={styles.manualInputContainer}>
                     <ManualInput label="Your Country's Name" value={manualCountry} onChange={setManualCountry} placeholder="e.g., Japan"/>
                     <ManualInput label="Region / State / Province" value={manualRegion} onChange={setManualRegion} placeholder="e.g., Tokyo"/>
                     <ManualInput label="Your School's Full Name" value={manualSchool} onChange={setManualSchool} placeholder="e.g., Tokyo International School"/>
                     <ManualInput label="Curriculum (Optional)" value={manualCurriculum} onChange={setManualCurriculum} placeholder="e.g., IB, A-Levels"/>
                 </View>
            )}

            {/* Region Dropdown (if Country is selected and not "Other") */}
            {selectedCountry && selectedCountry !== OTHER && (
                <Dropdown 
                    label="Select Your Region"
                    value={selectedRegion}
                    placeholder="Select a region..."
                    isOpen={regionDropdownOpen}
                    setIsOpen={setRegionDropdownOpen}
                    options={regions}
                    style={{marginTop: spacing.lg}}
                    onSelect={(region: string) => (
                        <TouchableOpacity key={region} style={styles.dropdownItem} onPress={() => { setSelectedRegion(region); setSelectedSchool(null); setRegionDropdownOpen(false); }}>
                            <Text style={styles.dropdownItemText}>{region}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}

            {/* Manual inputs if Region is "Other" */}
            {selectedRegion === OTHER && selectedCountry !== OTHER && (
                <View style={styles.manualInputContainer}>
                     <Text style={styles.infoText}>Please enter your school details manually.</Text>
                     <ManualInput label="Region / State / Province" value={manualRegion} onChange={setManualRegion} placeholder="e.g., Northern Area"/>
                     <ManualInput label="Your School's Full Name" value={manualSchool} onChange={setManualSchool} placeholder="e.g., Redwood Academy"/>
                     <ManualInput label="Curriculum (Optional)" value={manualCurriculum} onChange={setManualCurriculum} placeholder="e.g., CBSE"/>
                 </View>
            )}

            {/* School Dropdown (if Region is selected and not "Other") */}
            {selectedRegion && selectedRegion !== OTHER && (
                <Dropdown 
                    label="Select Your School"
                    value={selectedSchool}
                    placeholder="Select a school..."
                    isOpen={schoolDropdownOpen}
                    setIsOpen={setSchoolDropdownOpen}
                    options={[...schoolsInRegion, [OTHER, { curriculum: "" }]]}
                    style={{marginTop: spacing.lg}}
                    onSelect={([schoolName, schoolObj] : [string, any]) => (
                        <TouchableOpacity key={schoolName} style={styles.dropdownItem} onPress={() => { setSelectedSchool(schoolName); setSchoolDropdownOpen(false); }}>
                            <Text style={styles.dropdownItemText}>{schoolName}</Text>
                            {schoolObj.curriculum && <Text style={styles.dropdownItemSubtext}>{schoolObj.curriculum}</Text>}
                        </TouchableOpacity>
                    )}
                />
            )}

            {/* Manual input if School is "Other" */}
            {selectedSchool === OTHER && selectedRegion !== OTHER && (
                 <View style={styles.manualInputContainer}>
                     <ManualInput label="Your School's Full Name" value={manualSchool} onChange={setManualSchool} placeholder="e.g., Oakridge International"/>
                     <ManualInput label="Curriculum (Optional)" value={manualCurriculum} onChange={setManualCurriculum} placeholder="e.g., IB Diploma"/>
                 </View>
            )}
        </View>

        <TouchableOpacity style={[ styles.continueButton, isContinueDisabled && styles.continueButtonDisabled ]} onPress={handleContinue} disabled={isContinueDisabled}>
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
        marginBottom: spacing.lg,
    },
    label: {
        ...typography.h4,
        color: colors.text,
        marginBottom: spacing.sm,
    },
    input: {
      backgroundColor: colors.card,
      color: colors.text,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.lg,
      ...typography.body,
      borderWidth: 1,
      borderColor: colors.border,
      minHeight: 50,
    },
    manualInputContainer: {
        backgroundColor: `${colors.primary}10`,
        padding: spacing.md,
        borderRadius: radius.lg,
        marginTop: spacing.md,
        borderWidth: 1,
        borderColor: `${colors.primary}30`,
    },
    infoText: {
        ...typography.body,
        color: colors.textSecondary,
        fontStyle: 'italic',
        textAlign: 'center',
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
        maxHeight: 250,
        zIndex: 10
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