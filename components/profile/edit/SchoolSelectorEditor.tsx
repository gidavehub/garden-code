// app/components/profile/edit/SchoolSelectorEditor.tsx
import { highSchools, } from '@/constants/highschool'; // Adjust path
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { formComponentStyles } from './editorStyles';

interface SchoolSelectorEditorProps {
  initialSchool?: string;
  initialCountry?: string;
  initialCurriculum?: string;
  onSchoolChange: (details: { school: string; country: string; curriculum: string }) => void;
}

const SchoolSelectorEditor: React.FC<SchoolSelectorEditorProps> = ({
  initialSchool,
  initialCountry,
  initialCurriculum, // curriculum is mostly for display, derived from school selection
  onSchoolChange,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(initialCountry || null);
  // Assuming your highSchools data might have a "Region" level, if not, this can be simplified
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null); // You'll need to determine how to pre-fill this if needed
  const [selectedSchoolName, setSelectedSchoolName] = useState<string>(initialSchool || "");
  const [currentCurriculum, setCurrentCurriculum] = useState<string>(initialCurriculum || "");


  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [schoolDropdownOpen, setSchoolDropdownOpen] = useState(false);

  const typedHighSchools = highSchools as any;

  const countries = Object.keys(typedHighSchools);
  
  const regions = selectedCountry && typedHighSchools[selectedCountry]
    ? Object.keys(typedHighSchools[selectedCountry])
    : [];

  const schoolsInRegion = selectedCountry && selectedRegion && typedHighSchools[selectedCountry]?.[selectedRegion]
    ? Object.entries(typedHighSchools[selectedCountry][selectedRegion])
    : [];

  // Effect to auto-select region if only one exists for a country
   useEffect(() => {
    if (selectedCountry && regions.length === 1 && !selectedRegion) {
        setSelectedRegion(regions[0]);
    }
  }, [selectedCountry, regions, selectedRegion]);


  const handleSchoolSelect = (schoolName: string, schoolData: { curriculum: string }) => {
    if (selectedCountry) {
      setSelectedSchoolName(schoolName);
      setCurrentCurriculum(schoolData.curriculum);
      onSchoolChange({
        school: schoolName,
        country: selectedCountry,
        curriculum: schoolData.curriculum,
      });
      setSchoolDropdownOpen(false);
    }
  };

  return (
    <View style={formComponentStyles.fieldContainer}>
      <Text style={formComponentStyles.fieldLabel}>School Information</Text>
      {/* Country Dropdown */}
      <TouchableOpacity style={formComponentStyles.dropdownToggle} onPress={() => setCountryDropdownOpen(!countryDropdownOpen)}>
        <Text style={formComponentStyles.dropdownToggleText}>{selectedCountry || "Select Country..."}</Text>
        <Ionicons name={countryDropdownOpen ? "chevron-up-outline" : "chevron-down-outline"} size={20} color="#A0A0A0" />
      </TouchableOpacity>
      {countryDropdownOpen && (
        <View style={formComponentStyles.dropdownMenu}>
          <ScrollView nestedScrollEnabled style={formComponentStyles.dropdownScroll}>
            {countries.map(c => (
              <TouchableOpacity key={c} style={formComponentStyles.dropdownItem} onPress={() => { setSelectedCountry(c); setSelectedRegion(null); setSelectedSchoolName(""); setCurrentCurriculum(""); setCountryDropdownOpen(false); setRegionDropdownOpen(false); setSchoolDropdownOpen(false); }}>
                <Text style={formComponentStyles.dropdownItemText}>{c}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Region Dropdown */}
      {selectedCountry && regions.length > 0 && (
        <>
          <TouchableOpacity style={[formComponentStyles.dropdownToggle, {marginTop: 10}]} onPress={() => setRegionDropdownOpen(!regionDropdownOpen)}>
            <Text style={formComponentStyles.dropdownToggleText}>{selectedRegion || "Select Region..."}</Text>
             <Ionicons name={regionDropdownOpen ? "chevron-up-outline" : "chevron-down-outline"} size={20} color="#A0A0A0" />
          </TouchableOpacity>
          {regionDropdownOpen && (
            <View style={formComponentStyles.dropdownMenu}>
              <ScrollView nestedScrollEnabled style={formComponentStyles.dropdownScroll}>
                {regions.map(r => (
                  <TouchableOpacity key={r} style={formComponentStyles.dropdownItem} onPress={() => { setSelectedRegion(r); setSelectedSchoolName(""); setCurrentCurriculum(""); setRegionDropdownOpen(false); setSchoolDropdownOpen(false);}}>
                    <Text style={formComponentStyles.dropdownItemText}>{r}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}
        </>
      )}

      {/* School Dropdown */}
      {selectedCountry && selectedRegion && (
        <>
          <TouchableOpacity style={[formComponentStyles.dropdownToggle, {marginTop: 10}]} onPress={() => setSchoolDropdownOpen(!schoolDropdownOpen)}>
            <Text style={formComponentStyles.dropdownToggleText}>{selectedSchoolName || "Select School..."}</Text>
             <Ionicons name={schoolDropdownOpen ? "chevron-up-outline" : "chevron-down-outline"} size={20} color="#A0A0A0" />
          </TouchableOpacity>
          {schoolDropdownOpen && (
            <View style={formComponentStyles.dropdownMenu}>
              <ScrollView nestedScrollEnabled style={formComponentStyles.dropdownScroll}>
                {schoolsInRegion.map(([schoolName, schoolData]) => (
                  <TouchableOpacity key={schoolName} style={formComponentStyles.dropdownItem} onPress={() => handleSchoolSelect(schoolName, schoolData as {curriculum: string})}>
                    <Text style={formComponentStyles.dropdownItemText}>{schoolName}</Text>
                    <Text style={formComponentStyles.dropdownItemSubText}>{(schoolData as {curriculum: string}).curriculum}</Text>
                  </TouchableOpacity>
                ))}
                {schoolsInRegion.length === 0 && <Text style={formComponentStyles.emptyDropdownText}>No schools listed for this region</Text>}
              </ScrollView>
            </View>
          )}
        </>
      )}
      {currentCurriculum && selectedSchoolName && <Text style={formComponentStyles.infoTextSmall}>Curriculum: {currentCurriculum}</Text>}
    </View>
  );
};

export default SchoolSelectorEditor;