// app/components/explore/SchoolCard.tsx
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { LocalSchoolItem, SchoolEntry } from '@/types/explore';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
// MODIFIED: Import StyleProp and ViewStyle for the new prop
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface SchoolCardProps {
  item: SchoolEntry | LocalSchoolItem;
  onPress: (item: SchoolEntry | LocalSchoolItem) => void;
  // NEW: Add a containerStyle prop for custom styling
  containerStyle?: StyleProp<ViewStyle>;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ item, onPress, containerStyle }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const { name, curriculum, gardenTestAverage } = item.data;

  return (
    // MODIFIED: Apply the new containerStyle here
    <TouchableOpacity onPress={() => onPress(item)} style={[styles.schoolItemContainer, containerStyle]}>
        <View style={styles.iconContainer}><Ionicons name="school-outline" size={24} color={colors.primary}/></View>
        <View style={styles.textContainer}>
            <Text style={styles.schoolName} numberOfLines={1}>{name}</Text>
            <Text style={styles.schoolCurriculum} numberOfLines={1}>{curriculum}</Text>
        </View>
        {gardenTestAverage && ( <View style={styles.gtScoreContainer}><Text style={styles.gtScoreLabel}>GT Avg</Text><Text style={styles.gtScoreValue}>{gardenTestAverage}</Text></View> )}
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
  // ... rest of styles are unchanged
  iconContainer: { padding: spacing.sm, backgroundColor: colors.border, borderRadius: radius.md, marginRight: spacing.md, },
  textContainer: { flex: 1, },
  schoolName: { ...typography.bodyBold, color: colors.text, },
  schoolCurriculum: { ...typography.caption, color: colors.textSecondary, marginTop: 2 },
  gtScoreContainer: { alignItems: 'center', marginHorizontal: spacing.md, paddingHorizontal: spacing.sm, },
  gtScoreLabel: { ...typography.small, color: colors.textSecondary, fontWeight: 'bold', },
  gtScoreValue: { ...typography.bodyBold, color: colors.primary, },
});

export default SchoolCard;