// components/setup/NameAndPicture.tsx
import { AuthStackParamList } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { radius, spacing, typography } from "@/theme/atoms";
import { useTheme } from "@/theme/theme";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  setFullName: (val: string) => void;
  setProfilePicture: (val: string | null) => void;
  fullName: string;
  profilePicture: string | null;
};

export const NameAndPicture = ({ setFullName, setProfilePicture, fullName, profilePicture }: Props) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [name, setName] = useState<string>('');

  const handlePickImage = async (mode: 'camera' | 'library') => {
    let result;
    try {
      if (mode === 'library') {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });
      } else {
         const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
         if (permissionResult.granted === false) {
            Alert.alert("Permission required", "You need to grant camera permissions to take a photo.");
            return;
         }
        result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });
      }
  
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const image = result.assets[0];
        const resized = await ImageManipulator.manipulateAsync(
          image.uri,
          [{ resize: { width: 400, height: 400 } }], // 1/1 aspect ratio
          // Add base64: true to get the image data as a string
          { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG, base64: true }
        );

        if (resized.base64) {
          // Prepend the data URI scheme which is crucial for Image components and web standards
          const dataUri = `data:image/jpeg;base64,${resized.base64}`;
          setProfilePicture(dataUri);
        } else {
          Alert.alert("Error", "Could not process image. Please try again.");
          console.error("Image manipulation did not return base64 data.");
        }
      }
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Could not select image. Please try again.");
    }
  };

  const onContinue = () => {
    // FIX: Validate the current input `name` from state, not the old `fullName` prop
    if(!name.trim()) {
        Alert.alert("Missing Name", "Please enter your full name.");
        return;
    }
    setFullName(name); // Set the parent state after successful validation
    navigation.navigate("School");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.topContainer}>
            <View style={styles.header}>
              <View style={{ width: spacing.xl }} /> 
              <TouchableOpacity onPress={onContinue}>
                  <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Add a profile photo</Text>
            <Text style={styles.subtitle}>Have a favorite selfie? Upload it now.</Text>
            
             <View style={styles.inputContainer}>
                <Text style={styles.label}>What is your name?</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Full Name"
                placeholderTextColor={colors.textSecondary}
                value={name}
                onChangeText={setName}
                />
            </View>
            
            {/* The Image component works seamlessly with Base64 data URIs */}
            <TouchableOpacity style={styles.imageContainer} onPress={() => handlePickImage('library')}>
              {profilePicture ? (
                <Image source={{ uri: profilePicture }} style={styles.image} />
              ) : (
                <View style={styles.imagePlaceholder}>
                  <Ionicons name="camera-outline" size={60} color={colors.textSecondary}/>
                  <Text style={styles.imagePlaceholderText}>Upload a photo</Text>
                </View>
              )}
            </TouchableOpacity>

            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button} onPress={() => handlePickImage('camera')}>
                <Text style={styles.buttonText}>Take a Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handlePickImage('library')}>
                <Text style={styles.buttonText}>Upload from Library</Text>
              </TouchableOpacity>
            </View>
        </View>

        <View style={styles.bottomSpacer}/>
    </ScrollView>
  );
};

const getThemedStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop : spacing.lg,
      backgroundColor: colors.background,
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: "space-between",
    },
    topContainer:{
        paddingHorizontal: spacing.md,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: spacing.md,
        paddingBottom: spacing.sm,
    },
    nextButtonText: {
        ...typography.bodyBold,
        color: colors.primary,
    },
    title: {
      ...typography.h2,
      color: colors.text,
      textAlign: "center",
      paddingTop: spacing.lg,
      paddingBottom: spacing.xs,
    },
    subtitle: {
      ...typography.body,
      color: colors.textSecondary,
      textAlign: "center",
      paddingBottom: spacing.xl,
    },
    inputContainer: {
        marginBottom: spacing.lg,
    },
    label:{
      ...typography.body,
      color: colors.textSecondary,
      marginBottom: spacing.sm,
      paddingLeft: spacing.xs
    },
    textInput: {
      backgroundColor: colors.card,
      color: colors.text,
      ...typography.body,
      height: 50,
      borderRadius: radius.lg,
      paddingHorizontal: spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
    },
    imageContainer: {
      width: "100%",
      aspectRatio: 1/1,
      borderRadius: radius.xl,
      backgroundColor: colors.card,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.border,
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    imagePlaceholder:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: spacing.sm,
    },
    imagePlaceholderText: {
      ...typography.body,
      color: colors.textSecondary
    },
    buttonGroup: {
        paddingTop: spacing.lg,
        gap: spacing.md,
    },
    button: {
      height: 50,
      backgroundColor: colors.card,
      borderRadius: radius.full,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
        ...typography.bodyBold,
        color: colors.text
    },
    bottomSpacer: {
        height: spacing.lg,
    },
  });