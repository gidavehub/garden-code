// app/components/profile/edit/SingleSelectEditor.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { formComponentStyles } from './editorStyles'; // We'll create this shared style file

interface SingleSelectEditorProps {
  label: string;
  options: string[];
  selectedValue: string | null | undefined;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

const SingleSelectEditor: React.FC<SingleSelectEditorProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
  placeholder = "Select an option..."
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={formComponentStyles.fieldContainer}>
      <Text style={formComponentStyles.fieldLabel}>{label}</Text>
      <TouchableOpacity style={formComponentStyles.dropdownToggle} onPress={() => setIsOpen(!isOpen)}>
        <Text style={formComponentStyles.dropdownToggleText}>{selectedValue || placeholder}</Text>
        <Ionicons name={isOpen ? "chevron-up-outline" : "chevron-down-outline"} size={20} color="#A0A0A0" />
      </TouchableOpacity>
      {isOpen && (
        <View style={formComponentStyles.dropdownMenu}>
          <ScrollView style={formComponentStyles.dropdownScroll} nestedScrollEnabled={true}>
            {options.map(option => (
              <TouchableOpacity
                key={option}
                style={formComponentStyles.dropdownItem}
                onPress={() => {
                  onValueChange(option);
                  setIsOpen(false);
                }}
              >
                <Text style={formComponentStyles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SingleSelectEditor;