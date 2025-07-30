import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Spacing } from '../constants/theme';
import { StudyPlan } from '../types';

interface CardProps {
  plan: StudyPlan;
  onSelect: () => void;
}

const planIcons = {
  'The Balanced Scholar': 'scale-outline',
  'The Deep Dive': 'compass-outline',
  'The Marathon Runner': 'footsteps-outline'
} as const;


export const PlanSuggestionCard = ({ plan, onSelect }: CardProps) => {
    const iconName = planIcons[plan.name] || 'layers-outline';

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                     <Ionicons name={iconName as any} size={28} color={Colors.primary} />
                </View>
                <Text style={styles.planTitle}>{plan.name}</Text>
            </View>

            <Text style={styles.planDescription}>{plan.description}</Text>

            <View style={styles.subjectsContainer}>
                {plan.subjects.slice(0, 4).map(subject => (
                    <View key={subject.id} style={[styles.subjectPill, {backgroundColor: subject.color}]}>
                        <Text style={styles.subjectText}>{subject.name}</Text>
                    </View>
                ))}
            </View>
            
            <TouchableOpacity style={styles.selectButton} onPress={onSelect}>
                <Text style={styles.selectButtonText}>Choose This Plan</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.card,
        borderRadius: 20,
        padding: Spacing.lg,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.md,
        marginBottom: Spacing.md
    },
    iconContainer: {
        backgroundColor: Colors.lightGray,
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    planTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primaryText,
    },
    planDescription: {
        fontSize: 15,
        color: Colors.secondaryText,
        lineHeight: 22,
        marginBottom: Spacing.lg,
    },
    subjectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.sm,
        marginBottom: Spacing.lg
    },
    subjectPill: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 15
    },
    subjectText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 12,
    },
    selectButton: {
        backgroundColor: Colors.primary,
        padding: Spacing.md,
        borderRadius: 14,
        alignItems: 'center'
    },
    selectButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});