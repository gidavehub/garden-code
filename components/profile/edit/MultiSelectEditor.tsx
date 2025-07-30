// app/components/profile/edit/MultiSelectEditor.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { formComponentStyles } from './editorStyles';

interface MultiSelectEditorProps {
  label: string;
  items: string[];
  onItemsChange: (newItems: string[]) => void;
  placeholder?: string;
  options?: string[]; // Suggested options for a dropdown
}

const MultiSelectEditor: React.FC<MultiSelectEditorProps> = ({
  label,
  items = [], // Default to empty array
  onItemsChange,
  placeholder = "Add an item",
  options,
}) => {
  const [inputValue, setInputValue] = useState(''); // For direct text input
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleAddItem = (itemToAdd?: string) => {
    const item = (itemToAdd || inputValue).trim();
    if (item && !items.includes(item)) {
      onItemsChange([...items, item]);
    }
    setInputValue('');
    setIsOptionsOpen(false);
  };

  const handleRemoveItem = (itemToRemove: string) => {
    onItemsChange(items.filter(i => i !== itemToRemove));
  };

  return (
    <View style={formComponentStyles.fieldContainer}>
      <Text style={formComponentStyles.fieldLabel}>{label}</Text>
      {options ? (
        <>
          <TouchableOpacity style={formComponentStyles.dropdownToggle} onPress={() => setIsOptionsOpen(!isOptionsOpen)}>
            <Text style={formComponentStyles.dropdownToggleText}>{placeholder}</Text>
            <Ionicons name={isOptionsOpen ? "chevron-up-outline" : "chevron-down-outline"} size={20} color="#A0A0A0" />
          </TouchableOpacity>
          {isOptionsOpen && (
            <View style={formComponentStyles.dropdownMenu}>
              <ScrollView style={formComponentStyles.dropdownScroll} nestedScrollEnabled={true}>
                {options.filter(opt => !items.includes(opt)).map(option => (
                  <TouchableOpacity key={option} style={formComponentStyles.dropdownItem} onPress={() => handleAddItem(option)}>
                    <Text style={formComponentStyles.dropdownItemText}>{option}</Text>
                  </TouchableOpacity>
                ))}
                {options.filter(opt => !items.includes(opt)).length === 0 && (
                    <Text style={formComponentStyles.emptyDropdownText}>All options added or no options available</Text>
                )}
              </ScrollView>
            </View>
          )}
        </>
      ) : (
        <View style={formComponentStyles.inputContainer}>
          <TextInput
            style={formComponentStyles.inputForMulti}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder={placeholder}
            placeholderTextColor="#888"
            onSubmitEditing={() => handleAddItem()}
          />
          <TouchableOpacity style={formComponentStyles.addButton} onPress={() => handleAddItem()}>
            <Ionicons name="add-circle-outline" size={30} color="#3B82F6" />
          </TouchableOpacity>
        </View>
      )}

      {items.length > 0 && (
        <View style={formComponentStyles.itemsList}>
          {items.map((item, index) => (
            <View key={item + index} style={formComponentStyles.itemTag}>
              <Text style={formComponentStyles.itemTagText}>{item}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(item)} style={formComponentStyles.removeButton}>
                <Ionicons name="close-circle" size={22} color="#EF4444" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default MultiSelectEditor;