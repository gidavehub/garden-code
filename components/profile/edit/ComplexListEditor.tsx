// app/components/profile/edit/ComplexListEditor.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { formComponentStyles } from './editorStyles';

interface ComplexListEditorProps<T extends Record<string, any>> {
  label: string;
  items: T[];
  onItemsChange: (newItems: T[]) => void;
  itemSchema: Record<keyof T, 'string' | 'number' | 'boolean'>;
  displayItem: (item: T) => string;
  getNewItemPlaceholder: () => T; // Function to get a placeholder for a new item
}

const ComplexListEditor = <T extends Record<string, any>>({
  label,
  items = [], // Default to empty array
  onItemsChange,
  itemSchema,
  displayItem,
  getNewItemPlaceholder,
}: ComplexListEditorProps<T>) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState<T | null>(null); // Use T for stricter typing
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const openModalForNew = () => {
    setEditingItem(getNewItemPlaceholder());
    setEditingIndex(null);
    setIsModalVisible(true);
  };

  const openModalForEdit = (item: T, index: number) => {
    setEditingItem({ ...item }); // Create a copy for editing
    setEditingIndex(index);
    setIsModalVisible(true);
  };

  const handleSaveItem = () => {
    if (!editingItem) return;

    // Basic validation: ensure all string fields in schema are filled
    for (const key of Object.keys(itemSchema) as Array<keyof T>) {
        if (itemSchema[key] === 'string' && (!editingItem[key] || String(editingItem[key]).trim() === '')) {
            Alert.alert("Validation Error", `Please fill in the '${String(key)}' field.`);
            return;
        }
    }

    const newItems = [...items];
    if (editingIndex !== null) {
      newItems[editingIndex] = editingItem;
    } else {
      newItems.push(editingItem);
    }
    onItemsChange(newItems);
    setIsModalVisible(false);
    setEditingItem(null);
    setEditingIndex(null);
  };

  const handleRemoveItem = (index: number) => {
    Alert.alert("Confirm Deletion", `Are you sure you want to remove this ${label.slice(0,-1).toLowerCase()}?`, [
        {text: "Cancel", style: "cancel"},
        {text: "Remove", style: "destructive", onPress: () => {
            const newItems = [...items];
            newItems.splice(index, 1);
            onItemsChange(newItems);
        }}
    ]);
  };

  const handleModalFieldChange = (field: keyof T, value: string) => {
    if (editingItem) {
      const schemaType = itemSchema[field];
      let parsedValue: any = value;
      if (schemaType === 'number') parsedValue = parseFloat(value) || 0;
      // Add boolean handling if needed for a Switch in the modal
      setEditingItem(prev => ({ ...prev!, [field]: parsedValue }));
    }
  };

  return (
    <View style={formComponentStyles.fieldContainer}>
      <View style={formComponentStyles.labelContainer}>
        <Text style={formComponentStyles.fieldLabel}>{label}</Text>
        <TouchableOpacity onPress={openModalForNew} style={formComponentStyles.addItemButton}>
          <Ionicons name="add-circle" size={30} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      {items.length === 0 ? (
        <Text style={formComponentStyles.emptyListText}>No {label.toLowerCase()} added yet.</Text>
      ) : (
        items.map((item, index) => (
          <View key={index} style={formComponentStyles.complexItemTag}>
            <Text style={formComponentStyles.complexItemTagText} numberOfLines={2}>{displayItem(item)}</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => openModalForEdit(item, index)} style={formComponentStyles.actionIcon}>
                <Ionicons name="pencil-outline" size={22} color="#A0A0A0" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveItem(index)} style={formComponentStyles.actionIcon}>
                <Ionicons name="trash-outline" size={22} color="#EF4444" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => { setIsModalVisible(false); setEditingItem(null); setEditingIndex(null);}}
      >
        <View style={formComponentStyles.modalOverlay}>
          <ScrollView contentContainerStyle={{width: '100%', alignItems: 'center'}} keyboardShouldPersistTaps="handled">
            <View style={formComponentStyles.modalContainer}>
                <Text style={formComponentStyles.modalTitle}>{editingIndex !== null ? 'Edit' : 'Add New'} {label.slice(0,-1)}</Text>
                {editingItem && (Object.keys(itemSchema) as Array<keyof T>).map(key => (
                <View key={String(key)} style={formComponentStyles.modalField}>
                    <Text style={formComponentStyles.modalFieldLabel}>{String(key).charAt(0).toUpperCase() + String(key).slice(1)}</Text>
                    <TextInput
                    style={formComponentStyles.modalInput}
                    value={String(editingItem[key] ?? (itemSchema[key] === 'number' ? '0' : ''))}
                    onChangeText={(text) => handleModalFieldChange(key, text)}
                    placeholder={`Enter ${String(key)}`}
                    placeholderTextColor="#888"
                    keyboardType={itemSchema[key] === 'number' ? 'numeric' : 'default'}
                    />
                </View>
                ))}
                <View style={formComponentStyles.modalActions}>
                <TouchableOpacity style={[formComponentStyles.modalButton, formComponentStyles.cancelButton]} onPress={() => setIsModalVisible(false)}>
                    <Text style={formComponentStyles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[formComponentStyles.modalButton, formComponentStyles.saveModalButton]} onPress={handleSaveItem}>
                    <Text style={formComponentStyles.modalButtonText}>Save</Text>
                </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default ComplexListEditor;