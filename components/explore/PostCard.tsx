// app/components/explore/PostCard.tsx
import { firestore } from '@/firebaseConfig';
import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { Ionicons } from '@expo/vector-icons';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Post, PostComment, UserProfile } from '@/types/explore';

interface PostCardProps {
  post: Post;
  currentUser: UserProfile | null;
  onCommentAdded: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, currentUser, onCommentAdded }) => {
  const { colors } = useTheme();
  const styles = getThemedStyles(colors);

  // *** FIX APPLIED HERE: Add safe fallbacks for likes and comments ***
  // This ensures `postLikes` is always an array, preventing crashes.
  const postLikes = Array.isArray(post.likes) ? post.likes : [];
  // This ensures `postComments` is always an array.
  const postComments = Array.isArray(post.comments) ? post.comments : [];

  // State initialization now uses the safe fallbacks
  const [isLikedByMe, setIsLikedByMe] = useState(() => postLikes.includes(currentUser?.userId || ''));
  const [likesCount, setLikesCount] = useState(postLikes.length);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dateObject = post.createdAt?.toDate ? post.createdAt.toDate() : new Date();
  const timestampDisplay = !isNaN(dateObject.getTime()) ? dateObject.toLocaleString() : 'a few moments ago';

  const handleLike = async () => {
    if (!currentUser) return;
    const postRef = doc(firestore, "posts", post.id);

    const newLikedState = !isLikedByMe;
    setIsLikedByMe(newLikedState);
    setLikesCount(prev => newLikedState ? prev + 1 : prev - 1);

    try {
      await updateDoc(postRef, {
        likes: newLikedState ? arrayUnion(currentUser.userId) : arrayRemove(currentUser.userId)
      });
    } catch (error) {
      console.error("Error updating like:", error);
      setIsLikedByMe(!newLikedState);
      setLikesCount(prev => !newLikedState ? prev + 1 : prev - 1);
      Alert.alert("Error", "Could not process your like. Please try again.");
    }
  };

  const handlePostComment = async () => {
    if (!commentText.trim() || !currentUser || isSubmitting) return;

    setIsSubmitting(true);
    const postRef = doc(firestore, "posts", post.id);

    const newComment: PostComment = {
      authorId: currentUser.userId,
      authorName: currentUser.profile.fullName,
      text: commentText,
      createdAt: new Date().toISOString(),
    };

    try {
      await updateDoc(postRef, {
        comments: arrayUnion(newComment)
      });

      setCommentText('');
      setShowCommentInput(false);
      onCommentAdded();
    } catch (error) {
      console.error("Error posting comment:", error);
      Alert.alert("Error", "Could not post your comment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotiView style={styles.postCard} from={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring' }}>
      <View style={styles.postHeader}>
        <Image source={post.authorAvatar ? { uri: post.authorAvatar } : require('@/assets/images/avatar.jpg')} style={styles.postAuthorAvatar} />
        <View>
          <Text style={styles.postAuthorName}>{post.authorName}</Text>
          <Text style={styles.postTimestamp}>{timestampDisplay}</Text>
        </View>
      </View>

      {post.text ? <Text style={styles.postText}>{post.text}</Text> : null}
      {post.imageBase64 && <Image source={{ uri: `data:image/jpeg;base64,${post.imageBase64}` }} style={styles.postImage} resizeMode="cover" />}

      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.postActionButton} onPress={handleLike}>
          <Ionicons name={isLikedByMe ? 'heart' : 'heart-outline'} size={22} color={isLikedByMe ? colors.error : colors.textSecondary} />
          <Text style={styles.postActionText}>{likesCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postActionButton} onPress={() => setShowCommentInput(!showCommentInput)}>
          <Ionicons name="chatbubble-outline" size={22} color={colors.textSecondary} />
          <Text style={styles.postActionText}>{postComments.length}</Text>
        </TouchableOpacity>
      </View>

      {showCommentInput && (
        <View style={styles.commentSection}>
          {postComments.slice(-3).map((comment, index) => (
            <Text key={index} style={styles.commentTextDisplay} numberOfLines={2}>
              <Text style={{ fontWeight: 'bold' }}>{comment.authorName}:</Text> {comment.text}
            </Text>
          ))}
          {postComments.length > 3 && <Text style={styles.commentSeeMore}>View all {postComments.length} comments...</Text>}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Add a comment..."
              placeholderTextColor={colors.textSecondary}
              value={commentText}
              onChangeText={setCommentText}
            />
            <TouchableOpacity onPress={handlePostComment} disabled={isSubmitting}>
              {isSubmitting ? <ActivityIndicator size="small" color={colors.primary} /> : <Ionicons name="send" size={24} color={colors.primary} />}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </MotiView>
  );
};

const getThemedStyles = (colors: any) => StyleSheet.create({
    postCard: { backgroundColor: colors.card, marginHorizontal: spacing.md, marginBottom: spacing.lg, borderRadius: radius.lg, overflow: 'hidden' },
    postHeader: { flexDirection: 'row', alignItems: 'center', padding: spacing.md },
    postAuthorAvatar: { width: 44, height: 44, borderRadius: radius.full, marginRight: spacing.md },
    postAuthorName: { ...typography.bodyBold, color: colors.text },
    postTimestamp: { ...typography.caption, color: colors.textSecondary },
    postText: { ...typography.body, color: colors.text, paddingHorizontal: spacing.md, paddingBottom: spacing.md },
    postImage: { width: '100%', height: 300 },
    postFooter: { flexDirection: 'row', paddingHorizontal: spacing.md, paddingTop: spacing.md, paddingBottom: spacing.sm, borderTopWidth: 1, borderTopColor: colors.border },
    postActionButton: { flexDirection: 'row', alignItems: 'center', marginRight: spacing.lg },
    postActionText: { ...typography.body, color: colors.textSecondary, marginLeft: spacing.sm },
    commentSection: { paddingHorizontal: spacing.md, paddingBottom: spacing.md, borderTopWidth: 1, borderTopColor: colors.border },
    commentTextDisplay: { ...typography.caption, color: colors.textSecondary, marginTop: spacing.sm },
    commentSeeMore: { ...typography.caption, color: colors.textSecondary, fontWeight: 'bold', marginTop: spacing.sm },
    inputContainer: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.md },
    input: { flex: 1, height: 40, backgroundColor: colors.background, borderRadius: radius.full, paddingHorizontal: spacing.md, marginRight: spacing.md, color: colors.text, fontSize: 14 },
});

export default PostCard;