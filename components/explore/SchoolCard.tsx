// app/components/explore/SchoolCard.tsx
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { LocalSchoolItem, SchoolEntry } from '@/types/explore';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SchoolCardProps {
  item: SchoolEntry | LocalSchoolItem;
  onPress: (item: SchoolEntry | LocalSchoolItem) => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ item, onPress }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const { name, curriculum } = item.data;

  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.schoolItemContainer}>
        <View style={styles.iconContainer}><Ionicons name="school-outline" size={24} color={colors.primary}/></View>
        <View style={styles.textContainer}>
            <Text style={styles.schoolName} numberOfLines={1}>{name}</Text>
            <Text style={styles.schoolCurriculum} numberOfLines={1}>{curriculum}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.textSecondary}/>
    </TouchableOpacity>
  );
};

const getThemedStyles = (colors) => StyleSheet.create({
  schoolItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
  },
  iconContainer: {
    padding: spacing.sm,
    backgroundColor: colors.border,
    borderRadius: radius.md,
    marginRight: spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  schoolName: { ...typography.bodyBold, color: colors.text, },
  schoolCurriculum: { ...typography.caption, color: colors.textSecondary, marginTop: 2 },
});

export default SchoolCard;