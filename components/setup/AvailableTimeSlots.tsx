// components/setup/AvailableTimeSlots.tsx
import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { AuthStackParamList } from "@/types";
import { Ionicons } from '@expo/vector-icons';
import MaskedView from "@react-native-masked-view/masked-view";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export const AvailableTimeSlots = ({
  availableTimeSlots,
  setAvailableTimeSlots,
}: {
  availableTimeSlots: string[];
  setAvailableTimeSlots: (val: string[]) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  const [slot, setSlot] = useState("");

  const handleAdd = () => {
    if (slot && !availableTimeSlots.includes(slot)) {
      setAvailableTimeSlots([...availableTimeSlots, slot]);
      setSlot("");
    }
  };

  const handleRemove = (s: string) => {
    setAvailableTimeSlots(availableTimeSlots.filter(x => x !== s));
  };

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  function handleContinue(){
    navigation.navigate('Experiences');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MaskedView maskElement={<Text style={styles.header}>Available Time Slots</Text>}>
        <LinearGradient colors={[colors.primary, colors.accent]} start={{x:0,y:0}} end={{x:1,y:0}}>
          <Text style={[styles.header, { opacity: 0 }]}>Available Time Slots</Text>
        </LinearGradient>
      </MaskedView>

      <TextInput
        style={styles.input}
        placeholder="e.g. Mon 4–6pm"
        placeholderTextColor={colors.textSecondary}
        value={slot}
        onChangeText={setSlot}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add Slot</Text>
      </TouchableOpacity>

      {availableTimeSlots.map((s) => (
        <View key={s} style={styles.listItem}>
          <Text style={styles.listItemText}>{s}</Text>
          <TouchableOpacity onPress={() => handleRemove(s)}>
            <Ionicons name="close-circle" size={24} color={colors.error} />
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity
        style={[styles.continueButton, { marginTop: availableTimeSlots.length ? 20 : 40 }]}
        onPress={handleContinue}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: spacing.xl,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent : "center",
  },
  header: {
    ...typography.h2,
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  input: {
    ...typography.body,
    width: '100%',
    backgroundColor: colors.card,
    color: colors.text,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
  },
  addButtonText: {
    ...typography.bodyBold,
    color: colors.background,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
  },
  listItemText: { ...typography.body, color: colors.text },
  continueButton: {
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
  },
  continueButtonText: {
    ...typography.bodyBold,
    color: colors.primary,
  },
});