// components/setup/Certificate.tsx
import { certifications as certificationLevels } from "@/constants/certifications";
import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { AuthStackParamList } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Certificate = {
  title: string;
  level: string;
  institute: string;
};

export const Certifications = ({
  setCertifications,
}: {
  setCertifications: (val: Certificate[]) => void;
}) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  
  const [title, setTitle] = useState("");
  const [institute, setInstitute] = useState("");
  const [level, setLevel] = useState<string | null>(null);
  const [certList, setCertList] = useState<Certificate[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAdd = () => {
    if (title && institute && level) {
      const cert: Certificate = { title, institute, level };
      setCertList((prev) => [...prev, cert]);
      setTitle("");
      setInstitute("");
      setLevel(null);
    }
  };

  const handleRemove = (index: number) => {
    setCertList((prev) => prev.filter((_, i) => i !== index));
  };

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  function handleContinue() {
    setCertifications(certList);
    navigation.navigate('MentorshipInterest'); // Corrected navigation target
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>What are your qualifications?</Text>

      <Text style={styles.label}>Certification Title</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Teaching Diploma"
        placeholderTextColor={colors.textSecondary}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Institute</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Cambridge University"
        placeholderTextColor={colors.textSecondary}
        value={institute}
        onChangeText={setInstitute}
      />

      <Text style={styles.label}>Select Level</Text>
      <TouchableOpacity style={styles.dropdownToggle} onPress={() => setDropdownOpen(!dropdownOpen)}>
        <Text style={[styles.dropdownToggleText, !level && {color: colors.textSecondary}]}>
          {level || "Choose level..."}
        </Text>
        <Ionicons name={dropdownOpen ? "chevron-up" : "chevron-down"} size={20} color={colors.textSecondary} />
      </TouchableOpacity>

      {dropdownOpen && (
        <View style={styles.dropdown}>
          <ScrollView>
            {certificationLevels.map((lvl) => (
              <TouchableOpacity key={lvl} style={styles.dropdownItem} onPress={() => { setLevel(lvl); setDropdownOpen(false); }}>
                <Text style={styles.dropdownItemText}>{lvl}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {title && institute && level && (
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add Certificate</Text>
        </TouchableOpacity>
      )}

      {certList.length > 0 && (
        <View style={{width: '100%', marginTop: spacing.xl}}>
          <Text style={styles.label}>Your Certificates</Text>
          {certList.map((cert, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText} numberOfLines={2}>
                {cert.title} - {cert.level}{"\n"}<Text style={{color: colors.textSecondary}}>{cert.institute}</Text>
              </Text>
              <TouchableOpacity onPress={() => handleRemove(index)}>
                <Ionicons name="trash-outline" size={22} color={colors.error}/>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: {
        padding: spacing.xl,
        backgroundColor: colors.background,
        flexGrow: 1,
        alignItems: "center",
        justifyContent : "center"
    },
    header: {
        ...typography.h2,
        color: colors.primary,
        marginBottom: spacing.xl,
        textAlign: "center",
    },
    label: {
        ...typography.h4,
        color: colors.text,
        alignSelf: 'flex-start',
        marginBottom: spacing.sm,
    },
    input: {
        ...typography.body,
        backgroundColor: colors.card,
        color: colors.text,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.md,
        width: '100%',
        marginBottom: spacing.lg,
    },
    dropdownToggle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.md,
        width: '100%',
        marginBottom: spacing.sm,
    },
    dropdownToggleText: {
        color: colors.text,
        ...typography.body,
        flex: 1,
    },
    dropdown: {
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radius.lg,
        marginBottom: spacing.lg,
        width: '100%',
        maxHeight: 200,
    },
    dropdownItem: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.md,
    },
    dropdownItemText: {
        color: colors.text,
        ...typography.body,
    },
    addButton: {
        marginTop: spacing.md,
        backgroundColor: colors.primary,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        borderRadius: radius.lg,
    },
    addButtonText: {
        ...typography.bodyBold,
        color: colors.background,
    },
    listItem: {
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.md,
        marginTop: spacing.sm,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listItemText: {
        color: colors.text,
        ...typography.body,
        flex: 1,
    },
    continueButton: {
        marginTop: spacing.xl,
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
        borderRadius: radius.full,
        alignItems: "center",
    },
    continueButtonText: {
        color: colors.background,
        ...typography.bodyBold,
    },
});