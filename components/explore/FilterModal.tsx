// app/components/explore/FilterModal.tsx
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ActiveFilters { showTeachers: boolean; showStudents: boolean; showSchools: boolean; }
interface FilterModalProps { isVisible: boolean; onClose: () => void; activeFilters: ActiveFilters; onApplyFilters: () => void; setActiveFilters: React.Dispatch<React.SetStateAction<ActiveFilters>>; }

const FilterModal: React.FC<FilterModalProps> = ({ isVisible, onClose, activeFilters, onApplyFilters, setActiveFilters }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <BlurView intensity={Platform.OS === 'ios' ? 70 : 150} tint="dark" style={StyleSheet.absoluteFill}/>
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <Pressable style={styles.modalContainer} onPress={(e) => e.stopPropagation()}>
          <Text style={styles.modalTitle}>Filter Feed</Text>
          {Object.keys(activeFilters).map((key) => (
            <TouchableOpacity key={key} style={styles.filterOption} onPress={() => setActiveFilters(prev => ({ ...prev, [key]: !prev[key] }))}>
              <Text style={styles.filterOptionText}>Show {key.substring(4)}</Text>
              <Ionicons name={activeFilters[key] ? 'checkbox' : 'square-outline'} size={24} color={activeFilters[key] ? colors.primary : colors.textSecondary} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.applyButton} onPress={() => { onApplyFilters(); onClose(); }}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const getThemedStyles = (colors) => StyleSheet.create({
  modalOverlay: { flex: 1, justifyContent: 'flex-end', },
  modalContainer: { backgroundColor: colors.card, paddingTop: spacing.md, paddingHorizontal: spacing.lg, paddingBottom: 40, borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl },
  modalTitle: { ...typography.h3, color: colors.text, marginBottom: spacing.lg, textAlign: 'center', },
  filterOption: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border, },
  filterOptionText: { ...typography.body, color: colors.text, },
  applyButton: { backgroundColor: colors.primary, padding: spacing.md, borderRadius: radius.full, alignItems: 'center', marginTop: spacing.lg, },
  applyButtonText: { ...typography.bodyBold, color: colors.background, },
});

export default FilterModal;