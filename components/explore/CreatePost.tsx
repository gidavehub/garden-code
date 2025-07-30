// app/components/explore/CreatePost.tsx
import { firestore } from '@/firebaseConfig';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { UserProfile } from '@/types/explore';
import { Ionicons } from '@expo/vector-icons';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';

interface CreatePostProps {
  currentUser: UserProfile | null;
  onPostCreated: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ currentUser, onPostCreated }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);
  const [isCreating, setIsCreating] = useState(false);
  const [postText, setPostText] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [postImage, setPostImage] = useState<{ uri: string, base64: string } | null>(null);

  const handleSelectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "You need to grant permission to access your photos to upload an image.");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.canceled) {
      return;
    }

    const selectedAsset = pickerResult.assets[0];
    const manipResult = await ImageManipulator.manipulateAsync(
      selectedAsset.uri,
      [{ resize: { width: 800 } }],
      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG, base64: true }
    );
    
    setPostImage({ uri: manipResult.uri, base64: manipResult.base64! }); // Added non-null assertion as we requested it
  };

  const handlePost = async () => {
    if ((!postText.trim() && !postImage) || isPosting || !currentUser) {
      if (!currentUser) Alert.alert("Error", "You must be logged in to post.");
      return;
    }

    setIsPosting(true);
    try {
      const newPost = {
        authorId: currentUser.userId,
        authorName: currentUser.profile.fullName,
        authorAvatar: currentUser.profile.profilePicture || null,
        text: postText,
        imageBase64: postImage ? postImage.base64 : null,
        createdAt: serverTimestamp(),
        // *** FIX APPLIED HERE: Initialize as empty arrays ***
        likes: [], 
        comments: [],
      };
      await addDoc(collection(firestore, 'posts'), newPost);
      
      onPostCreated();
      setPostText('');
      setPostImage(null);
      setIsCreating(false);
      Keyboard.dismiss();

    } catch (error) {
      console.error("Error creating post: ", error);
      Alert.alert('Error', 'Could not create post. Please try again.');
    } finally {
      setIsPosting(false);
    }
  };
  
  const userAvatar = currentUser?.profile.profilePicture 
    ? { uri: currentUser.profile.profilePicture } 
    : require('@/assets/images/avatar.jpg');

  return (
    <View style={styles.createPostContainer}>
      <AnimatePresence>
        {!isCreating && (
          <MotiView from={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <TouchableOpacity style={styles.createPostBar} onPress={() => setIsCreating(true)}>
              <Image source={userAvatar} style={styles.createPostAvatar} />
              <Text style={styles.createPostPlaceholder}>Share something with the garden...</Text>
              <Ionicons name="images-outline" size={24} color={colors.textSecondary} />
            </TouchableOpacity>
          </MotiView>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isCreating && (
          <MotiView style={styles.createPostExpanded} from={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ type: 'spring' }}>
            <TextInput
              style={styles.postInput}
              placeholder="What's on your mind?"
              placeholderTextColor={colors.textSecondary}
              multiline value={postText} onChangeText={setPostText}
            />

            {postImage && (
              <View style={styles.previewContainer}>
                  <Image source={{ uri: postImage.uri }} style={styles.postPreviewImage} />
                  <TouchableOpacity style={styles.removeImageButton} onPress={() => setPostImage(null)}>
                      <Ionicons name="close-circle" size={28} color={colors.card} />
                  </TouchableOpacity>
              </View>
            )}

            <View style={styles.createPostActions}>
              <TouchableOpacity onPress={handleSelectImage}><Ionicons name="image-outline" size={28} color={colors.primary} /></TouchableOpacity>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 <TouchableOpacity onPress={() => { setIsCreating(false); setPostImage(null); }}><Text style={{color: colors.textSecondary, marginRight: spacing.lg}}>Cancel</Text></TouchableOpacity>
                 <TouchableOpacity style={styles.postButton} onPress={handlePost} disabled={isPosting}>
                    {isPosting ? <ActivityIndicator size="small" color={colors.background} /> : <Text style={styles.postButtonText}>Post</Text>}
                </TouchableOpacity>
              </View>
            </View>
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    createPostContainer: { marginHorizontal: spacing.md, marginTop: spacing.lg },
    createPostBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, padding: spacing.md, borderRadius: radius.lg },
    createPostAvatar: { width: 40, height: 40, borderRadius: radius.full, marginRight: spacing.md },
    createPostPlaceholder: { flex: 1, color: colors.textSecondary, ...typography.body },
    createPostExpanded: { backgroundColor: colors.card, borderRadius: radius.lg, padding: spacing.md, overflow: 'hidden' },
    postInput: { ...typography.body, color: colors.text, minHeight: 80, textAlignVertical: 'top' },
    previewContainer: {
      marginTop: spacing.md,
      position: 'relative',
    },
    postPreviewImage: {
        width: '100%',
        height: 200,
        borderRadius: radius.md,
    },
    removeImageButton: {
      position: 'absolute',
      top: 8,
      right: 8,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: radius.full,
    },
    createPostActions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: spacing.md, marginTop: spacing.md, borderTopWidth: 1, borderTopColor: colors.border },
    postButton: { backgroundColor: colors.primary, paddingVertical: spacing.sm, paddingHorizontal: spacing.lg, borderRadius: radius.full },
    postButtonText: { ...typography.bodyBold, color: colors.background },
});

export default CreatePost;