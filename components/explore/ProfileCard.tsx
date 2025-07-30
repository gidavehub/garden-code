// app/components/explore/ProfileCard.tsx
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { UserProfile } from '@/types/explore';
import React from 'react';
// MODIFIED: Import StyleProp and ViewStyle for the new prop
import { ImageBackground, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface ProfileCardProps {
  item: UserProfile;
  onPress: (item: UserProfile) => void;
  // NEW: Add a containerStyle prop for custom styling
  containerStyle?: StyleProp<ViewStyle>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ item, onPress, containerStyle }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  if (!item?.profile) return <View style={[styles.personCard, containerStyle]}><Text>Invalid profile</Text></View>;
  
  return (
    // MODIFIED: Apply the new containerStyle here
    <TouchableOpacity onPress={() => onPress(item)} style={[styles.personCard, containerStyle]}>
      <ImageBackground source={item.profile.profilePicture ? { uri: item.profile.profilePicture } : require('@/assets/images/avatar.jpg')} style={styles.avatar} imageStyle={styles.avatarImage}/>
      <Text style={styles.personName} numberOfLines={1}>{item.profile.fullName || 'N/A'}</Text>
      <Text style={styles.personDesc} numberOfLines={1}>
        {item.profile.role === 'teacher' ? (item.profile.teachingSubjects?.[0] || 'Teacher') : (item.profile.classLevel || 'Student')}
      </Text>
    </TouchableOpacity>
  );
};

const getThemedStyles = (colors) => StyleSheet.create({
  personCard: {
    width: 150,
    alignItems: 'center',
    marginRight: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
  },
  // ... rest of styles are unchanged
  avatar: { width: 80, height: 80, borderRadius: radius.full, overflow: 'hidden', marginBottom: spacing.md, backgroundColor: colors.border, borderWidth: 2, borderColor: colors.background, },
  avatarImage: { borderRadius: radius.full },
  personName: { ...typography.bodyBold, color: colors.text, textAlign: 'center' },
  personDesc: { ...typography.caption, color: colors.textSecondary, textAlign: 'center' },
});

export default ProfileCard;