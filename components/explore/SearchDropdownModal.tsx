// app/components/explore/SearchDropdownModal.tsx
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { SchoolEntry, UserProfile } from '@/types/explore';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Dimensions, Image, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { height } = Dimensions.get('window');

interface SearchDropdownModalProps {
  isVisible: boolean; onClose: () => void; searchTerm: string; searchDropdownResults: (UserProfile | SchoolEntry)[];
  onProfilePress: (item: UserProfile) => void; onSchoolPress: (item: SchoolEntry) => void;
}

const SearchDropdownModal: React.FC<SearchDropdownModalProps> = ({ isVisible, onClose, searchTerm, searchDropdownResults, onProfilePress, onSchoolPress }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const renderItem = (item, index) => {
    if ('type' in item && item.type === 'school') {
        const isFirst = index === 0 || !('type' in searchDropdownResults[index-1] && searchDropdownResults[index-1].type === 'school');
        return (<View key={`${item.schoolKey}-${index}`}>
          {isFirst && <Text style={styles.dropdownSectionTitle}>Schools</Text>}
          <TouchableOpacity onPress={() => onSchoolPress(item)} style={styles.schoolItem}>
              <View style={styles.schoolIcon}><Ionicons name="school-outline" size={20} color={colors.primary} /></View>
              <View>
                <Text style={styles.profileName}>{item.data.name}</Text>
                <Text style={styles.profileDesc}>{item.data.curriculum}</Text>
              </View>
          </TouchableOpacity>
        </View>);
    }
    const profileItem = item as UserProfile;
    const isFirst = index === 0 || searchDropdownResults[index-1].profile.role !== profileItem.profile.role;
    return (<View key={`${profileItem.userId}-${index}`}>
      {isFirst && <Text style={styles.dropdownSectionTitle}>{profileItem.profile.role === 'teacher' ? 'Teachers' : 'Students'}</Text>}
      <TouchableOpacity onPress={() => onProfilePress(profileItem)} style={styles.profileItem}>
          <Image source={profileItem.profile.profilePicture ? { uri: profileItem.profile.profilePicture } : require('@/assets/images/avatar.jpg')} style={styles.avatar}/>
          <View>
            <Text style={styles.profileName}>{profileItem.profile.fullName}</Text>
            <Text style={styles.profileDesc}>{profileItem.profile.school || 'Unknown School'}</Text>
          </View>
      </TouchableOpacity>
    </View>);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <BlurView intensity={Platform.OS === 'ios' ? 80 : 150} tint="dark" style={StyleSheet.absoluteFill}/>
        <Pressable style={styles.dropdownContainer} onPress={e => e.stopPropagation()}>
          {searchDropdownResults.length === 0 && searchTerm.trim() ? (
            <View style={styles.dropdownEmptyState}>
              <Ionicons name="sad-outline" size={48} color={colors.textSecondary} /><Text style={styles.dropdownEmptyText}>No results for "{searchTerm}"</Text>
            </View>
          ) : (
            <ScrollView keyboardShouldPersistTaps="handled">{searchDropdownResults.map(renderItem)}</ScrollView>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const getThemedStyles = (colors) => StyleSheet.create({
  modalOverlay: { flex: 1, },
  dropdownContainer: { marginTop: 125, marginHorizontal: spacing.md, maxHeight: height * 0.65, backgroundColor: colors.card, borderRadius: radius.lg, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 8, overflow: 'hidden' },
  dropdownEmptyState: { alignItems: 'center', justifyContent: 'center', padding: spacing.xl },
  dropdownEmptyText: { ...typography.h4, color: colors.textSecondary, marginTop: spacing.md, textAlign: 'center' },
  dropdownSectionTitle: { ...typography.caption, fontWeight: 'bold', color: colors.textSecondary, paddingVertical: spacing.sm, paddingHorizontal: spacing.md, backgroundColor: colors.border },
  profileItem: { flexDirection: 'row', alignItems: 'center', padding: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border, },
  avatar: { width: 44, height: 44, borderRadius: radius.full, marginRight: spacing.md, backgroundColor: colors.border },
  profileName: { ...typography.body, color: colors.text, },
  profileDesc: { ...typography.caption, color: colors.textSecondary },
  schoolItem: { flexDirection: 'row', alignItems: 'center', padding: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border, },
  schoolIcon: { width: 44, height: 44, borderRadius: radius.full, marginRight: spacing.md, backgroundColor: colors.border, justifyContent: 'center', alignItems: 'center' },
});

export default SearchDropdownModal;