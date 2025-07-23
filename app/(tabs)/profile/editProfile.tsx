// app/(tabs)/profile/editProfile.tsx
import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';

import {
  CERTIFICATION_LEVELS,
  CLASS_LEVELS,
  INTERESTS_OPTIONS,
  LEARNING_STYLES,
  TEACHING_STYLES_OPTIONS,
  TIME_SLOTS_OPTIONS,
} from '@/constants/options';
import { subjects as SUBJECTS_DATA } from '@/constants/subjects';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import {
  Certificate,
  Experience,
  ProfileData as ProfileDataType,
  StudentProfile,
  TeacherProfile,
} from '@/types/explore';

import { highSchools, HighSchoolsData } from '../../../constants/highschool';
import { auth, firestore } from '../../../firebaseConfig';

// --- SingleSelectEditor ---
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
  placeholder = 'Select an option...',
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TouchableOpacity style={styles.dropdownToggle} onPress={() => setIsOpen(!isOpen)}>
        <Text style={[styles.dropdownToggleText, !selectedValue && { color: colors.textSecondary }]}>
          {selectedValue || placeholder}
        </Text>
        <Ionicons
          name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={20}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownMenu}>
          <ScrollView style={styles.dropdownScroll} nestedScrollEnabled={true}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.dropdownItem}
                onPress={() => {
                  onValueChange(option);
                  setIsOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

// --- MultiSelectEditor ---
interface MultiSelectEditorProps {
  label: string;
  items: string[];
  onItemsChange: (newItems: string[]) => void;
  placeholder?: string;
  options?: string[];
}

const MultiSelectEditor: React.FC<MultiSelectEditorProps> = ({
  label,
  items = [],
  onItemsChange,
  placeholder = 'Add an item',
  options,
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const [inputValue, setInputValue] = useState('');
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
    onItemsChange(items.filter((i) => i !== itemToRemove));
  };

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {options ? (
        <>
          <TouchableOpacity style={styles.dropdownToggle} onPress={() => setIsOptionsOpen(!isOptionsOpen)}>
            <Text style={[styles.dropdownToggleText, { color: colors.textSecondary }]}>
              {placeholder}
            </Text>
            <Ionicons
              name={isOptionsOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
          {isOptionsOpen && (
            <View style={styles.dropdownMenu}>
              <ScrollView style={styles.dropdownScroll} nestedScrollEnabled={true}>
                {options.filter((opt) => !items.includes(opt)).length > 0 ? (
                  options
                    .filter((opt) => !items.includes(opt))
                    .map((option) => (
                      <TouchableOpacity
                        key={option}
                        style={styles.dropdownItem}
                        onPress={() => handleAddItem(option)}
                      >
                        <Text style={styles.dropdownItemText}>{option}</Text>
                      </TouchableOpacity>
                    ))
                ) : (
                  <Text style={styles.emptyDropdownText}>All options added</Text>
                )}
              </ScrollView>
            </View>
          )}
        </>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputForMulti}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder={placeholder}
            placeholderTextColor={colors.textSecondary}
            onSubmitEditing={() => handleAddItem()}
          />
          <TouchableOpacity style={styles.addButton} onPress={() => handleAddItem()}>
            <Ionicons name="add-circle-outline" size={30} color={colors.primary} />
          </TouchableOpacity>
        </View>
      )}

      {items.length > 0 && (
        <View style={styles.itemsList}>
          {items.map((item, index) => (
            <View key={item + index} style={styles.itemTag}>
              <Text style={styles.itemTagText}>{item}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(item)} style={styles.removeButton}>
                <Ionicons name="close-circle" size={22} color={colors.error} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

// --- ComplexListEditor ---
interface ComplexListEditorProps<T extends Record<string, any>> {
  label: string;
  items: T[];
  onItemsChange: (newItems: T[]) => void;
  itemSchema: Record<keyof T, 'string' | 'number' | 'boolean'>;
  displayItem: (item: T) => string;
  getNewItemPlaceholder: () => T;
}

const ComplexListEditor = <T extends Record<string, any>>({
  label,
  items = [],
  onItemsChange,
  itemSchema,
  displayItem,
  getNewItemPlaceholder,
}: ComplexListEditorProps<T>) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState<T | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const openModalForNew = () => {
    setEditingItem(getNewItemPlaceholder());
    setEditingIndex(null);
    setIsModalVisible(true);
  };

  const openModalForEdit = (item: T, index: number) => {
    setEditingItem({ ...item });
    setEditingIndex(index);
    setIsModalVisible(true);
  };

  const handleSaveItem = () => {
    if (!editingItem) return;

    for (const key of Object.keys(itemSchema) as Array<keyof T>) {
      if (itemSchema[key] === 'string' && (!editingItem[key] || String(editingItem[key]).trim() === '')) {
        Alert.alert('Validation Error', `Please fill in the '${String(key)}' field.`);
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
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to remove this ${label.slice(0, -1).toLowerCase()}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            const newItems = [...items];
            newItems.splice(index, 1);
            onItemsChange(newItems);
          },
        },
      ],
    );
  };

  const handleModalFieldChange = (field: keyof T, value: string) => {
    if (editingItem) {
      const schemaType = itemSchema[field];
      let parsedValue: any = value;
      if (schemaType === 'number') {
        parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
          parsedValue = 0;
        }
      }
      setEditingItem((prev) => ({ ...prev!, [field]: parsedValue }));
    }
  };

  return (
    <View style={styles.fieldContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <TouchableOpacity onPress={openModalForNew} style={styles.addItemButton}>
          <Ionicons name="add-circle" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {items.length === 0 ? (
        <Text style={styles.emptyListText}>No {label.toLowerCase()} added.</Text>
      ) : (
        items.map((item, index) => (
          <View key={index} style={styles.complexItemTag}>
            <Text style={styles.complexItemTagText} numberOfLines={2}>
              {displayItem(item)}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => openModalForEdit(item, index)}
                style={styles.actionIcon}
              >
                <Ionicons name="pencil-outline" size={22} color={colors.textSecondary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.actionIcon}>
                <Ionicons name="trash-outline" size={22} color={colors.error} />
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
          setEditingItem(null);
          setEditingIndex(null);
        }}
      >
        <View style={styles.modalOverlay}>
          <ScrollView
            contentContainerStyle={{ width: '100%', alignItems: 'center' }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>
                {editingIndex !== null ? 'Edit' : 'Add New'} {label.slice(0, -1)}
              </Text>
              {editingItem &&
                (Object.keys(itemSchema) as Array<keyof T>).map((key) => (
                  <View key={String(key)} style={styles.modalField}>
                    <Text style={styles.modalFieldLabel}>
                      {String(key).charAt(0).toUpperCase() + String(key).slice(1)}
                    </Text>
                    <TextInput
                      style={styles.modalInput}
                      value={String(editingItem[key] ?? (itemSchema[key] === 'number' ? '0' : ''))}
                      onChangeText={(text) => handleModalFieldChange(key, text)}
                      placeholder={`Enter ${String(key)}`}
                      placeholderTextColor={colors.textSecondary}
                      keyboardType={itemSchema[key] === 'number' ? 'numeric' : 'default'}
                    />
                  </View>
                ))}
              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => {
                    setIsModalVisible(false);
                    setEditingItem(null);
                    setEditingIndex(null);
                  }}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, styles.saveModalButton]} onPress={handleSaveItem}>
                  <Text style={styles.modalButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

// --- SchoolSelectorEditor ---
interface SchoolSelectorEditorProps {
  initialSchool?: string;
  initialCountry?: string;
  initialCurriculum?: string;
  onSchoolChange: (details: { school: string; country: string; curriculum: string }) => void;
}

const SchoolSelectorEditor: React.FC<SchoolSelectorEditorProps> = ({
  initialSchool,
  initialCountry,
  initialCurriculum,
  onSchoolChange,
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const [selectedCountry, setSelectedCountry] = useState<string | null>(initialCountry || null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedSchoolName, setSelectedSchoolName] = useState<string>(initialSchool || '');
  const [currentCurriculum, setCurrentCurriculum] = useState<string>(initialCurriculum || '');

  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [schoolDropdownOpen, setSchoolDropdownOpen] = useState(false);

  const typedHighSchools = highSchools as HighSchoolsData;

  const countries = Object.keys(typedHighSchools);
  const regions =
    selectedCountry && typedHighSchools[selectedCountry] ? Object.keys(typedHighSchools[selectedCountry]) : [];
  const schoolsInRegion =
    selectedCountry && selectedRegion && typedHighSchools[selectedCountry]?.[selectedRegion]
      ? Object.entries(typedHighSchools[selectedCountry][selectedRegion])
      : [];

  useEffect(() => {
    if (initialSchool && initialCountry && typedHighSchools[initialCountry]) {
      for (const regionKey in typedHighSchools[initialCountry]) {
        if (typedHighSchools[initialCountry][regionKey][initialSchool]) {
          setSelectedRegion(regionKey);
          break;
        }
      }
    } else if (selectedCountry && regions.length === 1 && !selectedRegion) {
      setSelectedRegion(regions[0]);
    }
  }, [selectedCountry, regions, initialSchool, initialCountry, typedHighSchools, selectedRegion]);

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

  const Dropdown = ({
    label,
    value,
    placeholder,
    isOpen,
    setIsOpen,
    options,
    onSelect,
    style,
  }: any) => (
    <>
      <TouchableOpacity
        style={[styles.dropdownToggle, style]}
        onPress={() => setIsOpen(!isOpen)}
        disabled={options.length === 0}
      >
        <Text style={[styles.dropdownToggleText, !value && { color: colors.textSecondary }]}>
          {value || placeholder}
        </Text>
        <Ionicons
          name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={20}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownMenu}>
          <ScrollView nestedScrollEnabled style={styles.dropdownScroll}>
            {options.map(onSelect)}
          </ScrollView>
        </View>
      )}
    </>
  );

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>School Information</Text>

      <Dropdown
        placeholder="Select Country..."
        value={selectedCountry}
        isOpen={countryDropdownOpen}
        setIsOpen={setCountryDropdownOpen}
        options={countries}
        onSelect={(country: string) => (
          <TouchableOpacity
            key={country}
            style={styles.dropdownItem}
            onPress={() => {
              setSelectedCountry(country);
              setSelectedRegion(null);
              setSelectedSchoolName('');
              setCurrentCurriculum('');
              setCountryDropdownOpen(false);
              setRegionDropdownOpen(false);
              setSchoolDropdownOpen(false);
            }}
          >
            <Text style={styles.dropdownItemText}>{country}</Text>
          </TouchableOpacity>
        )}
      />

      {selectedCountry && (
        <Dropdown
          placeholder="Select Region..."
          value={selectedRegion}
          isOpen={regionDropdownOpen}
          setIsOpen={setRegionDropdownOpen}
          options={regions}
          style={{ marginTop: spacing.sm }}
          onSelect={(region: string) => (
            <TouchableOpacity
              key={region}
              style={styles.dropdownItem}
              onPress={() => {
                setSelectedRegion(region);
                setSelectedSchoolName('');
                setCurrentCurriculum('');
                setRegionDropdownOpen(false);
                setSchoolDropdownOpen(false);
              }}
            >
              <Text style={styles.dropdownItemText}>{region}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {selectedRegion && (
        <Dropdown
          placeholder="Select School..."
          value={selectedSchoolName}
          isOpen={schoolDropdownOpen}
          setIsOpen={setSchoolDropdownOpen}
          options={schoolsInRegion}
          style={{ marginTop: spacing.sm }}
          onSelect={([schoolName, schoolData]: [string, any]) => (
            <TouchableOpacity
              key={schoolName}
              style={styles.dropdownItem}
              onPress={() => handleSchoolSelect(schoolName, schoolData)}
            >
              <Text style={styles.dropdownItemText}>{schoolName}</Text>
              <Text style={styles.dropdownItemSubText}>{schoolData.curriculum}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {currentCurriculum && selectedSchoolName && (
        <Text style={styles.infoTextSmall}>Curriculum: {currentCurriculum}</Text>
      )}
    </View>
  );
};

// --- ImagePickerEditor ---
interface ImagePickerEditorProps {
  label: string;
  currentImageUrl?: string | null;
  onImageSelected: (localUri: string | null) => void;
}

const ImagePickerEditor: React.FC<ImagePickerEditorProps> = ({
  label,
  currentImageUrl,
  onImageSelected,
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const [imagePreviewUri, setImagePreviewUri] = useState<string | null>(currentImageUrl || null);

  useEffect(() => {
    setImagePreviewUri(currentImageUrl || null);
  }, [currentImageUrl]);

  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Camera roll permission is required to select an image.');
        return false;
      }
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const localUri = result.assets[0].uri;
        setImagePreviewUri(localUri);
        onImageSelected(localUri);
      }
    } catch (error) {
      console.error('ImagePicker Error: ', error);
      Alert.alert('Image Picker Error', 'Could not open the image library.');
    }
  };

  const clearImage = () => {
    setImagePreviewUri(null);
    onImageSelected(null);
  };

  return (
    <View style={styles.fieldContainer}>
      <Text style={[styles.fieldLabel, { textAlign: 'center' }]}>{label}</Text>
      <TouchableOpacity style={styles.imagePickerBox} onPress={pickImage}>
        {imagePreviewUri ? (
          <Image source={{ uri: imagePreviewUri }} style={styles.profileImagePreview} />
        ) : (
          <View style={styles.imagePlaceholderContainer}>
            <Ionicons name="camera-outline" size={40} color={colors.textSecondary} />
            <Text style={styles.imagePlaceholderText}>Tap to select</Text>
          </View>
        )}
      </TouchableOpacity>
      {imagePreviewUri && (
        <TouchableOpacity onPress={clearImage} style={styles.clearImageButton}>
          <Text style={styles.clearImageButtonText}>Clear Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// Helper to get all subject/course options from your subjects data
const getSubjectOptions = () => {
  const allSubjects = new Set<string>();
  if (SUBJECTS_DATA && typeof SUBJECTS_DATA === 'object') {
    Object.values(SUBJECTS_DATA).forEach((subjectList) => {
      if (Array.isArray(subjectList)) {
        subjectList.forEach((sub) => allSubjects.add(sub));
      }
    });
  }
  return Array.from(allSubjects).sort();
};
const ALL_SUBJECT_COURSE_OPTIONS = getSubjectOptions();

// --- Main EditProfilePage Component ---
const EditProfilePage = () => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const router = useRouter();
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ProfileDataType>>({});
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [newLocalImageUri, setNewLocalImageUri] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const user = auth.currentUser;
        if (!user || !user.email) {
          Alert.alert('Authentication Error', 'No user identified. Please login again.');
          router.replace('/(auth)');
          return;
        }
        setCurrentUserEmail(user.email);

        const profileString = await AsyncStorage.getItem('profile');
        if (profileString) {
          const profile: ProfileDataType = JSON.parse(profileString);
          setFormData({
            ...profile,
            interests: (profile as StudentProfile).interests || [],
            courses: (profile as StudentProfile).courses || [],
            teachingSubjects: (profile as TeacherProfile).teachingSubjects || [],
            availableTimeSlots: (profile as TeacherProfile).availableTimeSlots || [],
            certifications: (profile as TeacherProfile).certifications || [],
            teachingExperience: (profile as TeacherProfile).teachingExperience || [],
          });
          if (profile.profilePicture) {
            setNewLocalImageUri(profile.profilePicture);
          }
        } else {
          Alert.alert(
            'Profile Error',
            'No profile data found locally. Please complete onboarding or re-login.',
          );
          router.back();
        }
      } catch (e) {
        console.error('EditProfilePage: Error loading data:', e);
        Alert.alert('Loading Error', 'Could not load profile data.');
        router.back();
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [router]);

  const handleChange = useCallback((field: keyof ProfileDataType, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleListChange = useCallback((field: keyof ProfileDataType, newItems: any[]) => {
    setFormData((prev) => ({ ...prev, [field]: newItems }));
  }, []);

  const handleSchoolSelection = useCallback(
    (schoolDetails: { school: string; country: string; curriculum: string }) => {
      setFormData((prev) => ({
        ...prev,
        school: schoolDetails.school,
        country: schoolDetails.country,
        curriculum: schoolDetails.curriculum,
      }));
    },
    [],
  );

  const handleImageSelected = useCallback((localUri: string | null) => {
    setNewLocalImageUri(localUri);
  }, []);

  const handleSaveChanges = async () => {
    if (!currentUserEmail) {
      Alert.alert('Error', 'User not identified. Cannot save changes.');
      return;
    }
    setIsSaving(true);

    let finalProfilePictureUrl = formData.profilePicture;

    if (newLocalImageUri && newLocalImageUri.startsWith('file://')) {
      // NOTE: Here you would typically upload the new image to a storage service (like Firebase Storage)
      // and get a new URL. For this example, we assume this is handled elsewhere or being stored as a local ref.
      finalProfilePictureUrl = newLocalImageUri;
      console.log('Profile picture will be set to local URI:', finalProfilePictureUrl);
    } else if (newLocalImageUri === null && formData.profilePicture !== undefined) {
      // User cleared the image
      finalProfilePictureUrl = null;
    }

    const dataToSave: Partial<ProfileDataType> = {
      ...formData,
      profilePicture: finalProfilePictureUrl,
    };

    Object.keys(dataToSave).forEach((keyStr) => {
      const key = keyStr as keyof ProfileDataType;
      if (dataToSave[key] === undefined) {
        delete dataToSave[key];
      }
    });

    try {
      const profileDocRef = doc(firestore, 'users', currentUserEmail, 'profile', 'details');
      await updateDoc(profileDocRef, dataToSave);

      const docSnap = await getDoc(profileDocRef);
      const finalProfileForStorage = docSnap.exists()
        ? (docSnap.data() as ProfileDataType)
        : (dataToSave as ProfileDataType);

      await AsyncStorage.setItem('profile', JSON.stringify(finalProfileForStorage));
      Alert.alert('Success', 'Profile updated successfully!');
      router.back();
    } catch (e) {
      console.error('EditProfilePage: Error saving changes:', e);
      Alert.alert('Save Error', 'Could not save profile changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading Profile Data...</Text>
      </View>
    );
  }

  if (!formData.role) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Profile data is incomplete or role is missing.</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const role = formData.role;

  const BasicTextInputField = ({
    fieldLabel,
    fieldKey,
    placeholder,
    multiline = false,
    keyboardType = 'default',
  }: {
    fieldLabel: string;
    fieldKey: keyof ProfileDataType;
    placeholder?: string;
    multiline?: boolean;
    keyboardType?: 'default' | 'numeric' | 'email-address';
  }) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{fieldLabel}</Text>
      <TextInput
        style={[styles.input, multiline && { height: 100, textAlignVertical: 'top' }]}
        value={String(formData[fieldKey] || '')}
        onChangeText={(text) => handleChange(fieldKey, text)}
        placeholder={placeholder || `Enter ${fieldLabel.toLowerCase()}`}
        placeholderTextColor={colors.textSecondary}
        multiline={multiline}
        keyboardType={keyboardType}
      />
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ImagePickerEditor
        label="Profile Picture"
        currentImageUrl={formData.profilePicture}
        onImageSelected={handleImageSelected}
      />
      <BasicTextInputField fieldLabel="Full Name" fieldKey="fullName" />

      <SchoolSelectorEditor
        initialSchool={formData.school}
        initialCountry={formData.country}
        initialCurriculum={formData.curriculum}
        onSchoolChange={handleSchoolSelection}
      />

      {/* Student Specific Fields */}
      {role === 'student' && (
        <>
          <Text style={styles.sectionTitle}>Student Details</Text>
          <SingleSelectEditor
            label="Class Level"
            options={CLASS_LEVELS}
            selectedValue={(formData as StudentProfile).classLevel}
            onValueChange={(value) => handleChange('classLevel', value)}
          />
          <SingleSelectEditor
            label="Preferred Learning Style"
            options={LEARNING_STYLES}
            selectedValue={(formData as StudentProfile).preferredLearningStyle}
            onValueChange={(value) => handleChange('preferredLearningStyle', value)}
          />
          <MultiSelectEditor
            label="Interests"
            items={(formData as StudentProfile).interests || []}
            onItemsChange={(newItems) => handleListChange('interests', newItems)}
            options={INTERESTS_OPTIONS}
            placeholder="Select interests..."
          />
          <MultiSelectEditor
            label="Courses Taken / Taking"
            items={(formData as StudentProfile).courses || []}
            onItemsChange={(newItems) => handleListChange('courses', newItems)}
            options={ALL_SUBJECT_COURSE_OPTIONS}
            placeholder="Select courses..."
          />
        </>
      )}

      {/* Teacher Specific Fields */}
      {role === 'teacher' && (
        <>
          <Text style={styles.sectionTitle}>Teacher Details</Text>
          <SingleSelectEditor
            label="Teaching Style"
            options={TEACHING_STYLES_OPTIONS}
            selectedValue={(formData as TeacherProfile).teachingStyle}
            onValueChange={(value) => handleChange('teachingStyle', value)}
          />
          <MultiSelectEditor
            label="Teaching Subjects"
            items={(formData as TeacherProfile).teachingSubjects || []}
            onItemsChange={(newItems) => handleListChange('teachingSubjects', newItems)}
            options={ALL_SUBJECT_COURSE_OPTIONS}
            placeholder="Select subjects you teach..."
          />
          <MultiSelectEditor
            label="Available Time Slots"
            items={(formData as TeacherProfile).availableTimeSlots || []}
            onItemsChange={(newItems) => handleListChange('availableTimeSlots', newItems)}
            options={TIME_SLOTS_OPTIONS}
            placeholder="Select available slots..."
          />
          <View style={styles.switchFieldContainer}>
            <Text style={styles.fieldLabel}>Interested in Mentorship?</Text>
            <Switch
              trackColor={{ false: colors.card, true: colors.primary }}
              thumbColor={colors.background}
              ios_backgroundColor={colors.card}
              onValueChange={(value) => handleChange('mentorshipInterest', value)}
              value={(formData as TeacherProfile).mentorshipInterest || false}
            />
          </View>
          <ComplexListEditor<Certificate>
            label="Certifications"
            items={(formData as TeacherProfile).certifications || []}
            onItemsChange={(newItems) => handleListChange('certifications', newItems)}
            itemSchema={{ title: 'string', level: 'string', institute: 'string' }}
            displayItem={(item) =>
              `${item.title || 'N/A'} (${item.level || 'N/A'}) - ${item.institute || 'N/A'}`
            }
            getNewItemPlaceholder={() => ({ title: '', level: CERTIFICATION_LEVELS[0] || '', institute: '' })}
          />
          <ComplexListEditor<Experience>
            label="Teaching Experience"
            items={(formData as TeacherProfile).teachingExperience || []}
            onItemsChange={(newItems) => handleListChange('teachingExperience', newItems)}
            itemSchema={{ company: 'string', duration: 'number', role: 'string' }} // Assuming 'role' is part of Experience
            displayItem={(item) => `${item.role || item.company || 'N/A'} - ${item.duration || 0} months`}
            getNewItemPlaceholder={() => ({ company: '', duration: 0, role: '' })} // Added 'role'
          />
        </>
      )}

      <TouchableOpacity
        style={[styles.button, styles.saveButton, isSaving && styles.buttonDisabled]}
        onPress={handleSaveChanges}
        disabled={isSaving}
      >
        {isSaving ? (
          <ActivityIndicator size="small" color={colors.background} />
        ) : (
          <Text style={styles.buttonText}>Save Changes</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};
export default EditProfilePage;

// Centralized stylesheet using the theme
const getThemedStyles = (colors: any) =>
  StyleSheet.create({
    // Main page layout
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    contentContainer: {
      paddingBottom: spacing.xl,
      paddingHorizontal: spacing.lg,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: Platform.OS === 'android' ? spacing.xl : spacing.lg,
      paddingBottom: spacing.md,
      marginBottom: spacing.sm,
    },
    backButton: {
      padding: spacing.xs,
    },
    headerTitle: {
      ...typography.h3,
      color: colors.text,
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: spacing.lg,
    },
    loadingText: {
      ...typography.body,
      color: colors.textSecondary,
      marginTop: spacing.sm,
    },
    errorText: {
      ...typography.body,
      color: colors.error,
      textAlign: 'center',
      marginBottom: spacing.md,
    },
    sectionTitle: {
      ...typography.h3,
      color: colors.text,
      marginTop: spacing.lg,
      marginBottom: spacing.md,
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
      paddingBottom: spacing.sm,
    },

    // Form fields & Inputs
    fieldContainer: {
      marginBottom: spacing.lg,
    },
    fieldLabel: {
      ...typography.body,
      fontSize: 14,
      color: colors.textSecondary,
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
    switchFieldContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.lg,
      backgroundColor: colors.card,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: colors.border,
      minHeight: 50,
    },
    button: {
      backgroundColor: colors.card,
      paddingVertical: spacing.md,
      borderRadius: radius.lg,
      alignItems: 'center',
      marginTop: spacing.md,
    },
    saveButton: {
      backgroundColor: colors.primary,
    },
    buttonText: {
      ...typography.bodyBold,
      color: colors.background,
    },
    buttonDisabled: {
      opacity: 0.7,
    },

    // Dropdown / Select styles
    dropdownToggle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.card,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: colors.border,
      minHeight: 50,
    },
    dropdownToggleText: {
      color: colors.text,
      ...typography.body,
      flex: 1,
    },
    dropdownMenu: {
      backgroundColor: colors.card,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: radius.lg,
      marginTop: 2,
      maxHeight: 200,
      zIndex: 1000,
    },
    dropdownScroll: {},
    dropdownItem: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.border,
    },
    dropdownItemText: {
      color: colors.text,
      ...typography.body,
    },
    dropdownItemSubText: {
      color: colors.textSecondary,
      fontSize: 12,
      paddingTop: 2,
    },
    emptyDropdownText: {
      color: colors.textSecondary,
      fontStyle: 'italic',
      textAlign: 'center',
      paddingVertical: spacing.sm,
    },

    // Multi-item / Tag styles
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: spacing.sm,
    },
    inputForMulti: {
      flex: 1,
      backgroundColor: colors.card,
      color: colors.text,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.lg,
      ...typography.body,
      borderWidth: 1,
      borderColor: colors.border,
      marginRight: spacing.sm,
      minHeight: 50,
    },
    addButton: {
      padding: spacing.xs,
    },
    itemsList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: spacing.sm,
    },
    itemTag: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: radius.full,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      marginRight: spacing.sm,
      marginBottom: spacing.sm,
    },
    itemTagText: {
      color: colors.text,
      fontSize: 14,
      marginRight: spacing.xs,
    },
    removeButton: {
      paddingLeft: spacing.xs,
    },

    // Complex list styles (with modal)
    labelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.sm,
    },
    addItemButton: {
      padding: spacing.xs,
    },
    emptyListText: {
      color: colors.textSecondary,
      fontStyle: 'italic',
      textAlign: 'center',
      paddingVertical: spacing.sm,
    },
    complexItemTag: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.card,
      borderRadius: radius.lg,
      padding: spacing.sm,
      marginBottom: spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
    },
    complexItemTagText: {
      color: colors.text,
      ...typography.body,
      flex: 1,
      marginRight: spacing.sm,
    },
    actionIcon: {
      paddingHorizontal: spacing.xs,
    },

    // Modal styles
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.85)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.md,
    },
    modalContainer: {
      backgroundColor: colors.card,
      borderRadius: radius.xl,
      padding: spacing.lg,
      width: '100%',
      borderColor: colors.border,
      borderWidth: 1,
      maxHeight: '90%',
    },
    modalTitle: {
      ...typography.h3,
      color: colors.text,
      marginBottom: spacing.lg,
      textAlign: 'center',
    },
    modalField: {
      marginBottom: spacing.md,
    },
    modalFieldLabel: {
      fontSize: 13,
      color: colors.textSecondary,
      marginBottom: spacing.xs,
    },
    modalInput: {
      backgroundColor: colors.background,
      color: colors.text,
      padding: spacing.sm,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: colors.border,
      minHeight: 44,
      ...typography.body,
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: spacing.lg,
    },
    modalButton: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      borderRadius: radius.md,
      marginLeft: spacing.sm,
    },
    cancelButton: {
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border
    },
    saveModalButton: {
      backgroundColor: colors.primary,
    },
    modalButtonText: {
      ...typography.bodyBold,
      color: colors.background,
    },
    infoTextSmall: {
      ...typography.body,
      fontSize: 12,
      color: colors.textSecondary,
      fontStyle: 'italic',
      marginTop: spacing.xs,
      marginLeft: spacing.xs,
    },

    // Image Picker
    imagePickerBox: {
      width: 150,
      height: 150,
      borderRadius: radius.full,
      backgroundColor: colors.card,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      alignSelf: 'center',
      marginBottom: spacing.sm,
      overflow: 'hidden',
    },
    profileImagePreview: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    imagePlaceholderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagePlaceholderText: {
      color: colors.textSecondary,
      marginTop: spacing.xs,
      fontSize: 12,
    },
    clearImageButton: {
      alignSelf: 'center',
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      backgroundColor: `${colors.card}99`,
      borderRadius: radius.md,
      marginTop: spacing.sm,
    },
    clearImageButtonText: {
      color: colors.text,
      ...typography.body,
      fontSize: 13,
    },
  });