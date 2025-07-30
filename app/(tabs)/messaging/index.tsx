// app/(tabs)/messaging/index.tsx
import { app, firestore } from '@/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import {
  getDatabase,
  off,
  onValue,
  push,
  ref,
  serverTimestamp,
  set,
  update,
} from 'firebase/database';
import {
  collectionGroup,
  doc,
  query as firestoreQuery,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  FlatList,
  Image,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { radius, spacing, typography } from '@/theme/atoms';
import { useTheme } from '@/theme/theme';
import { ProfileData } from '@/types/explore';
import {
  ChatDetailsFromDB,
  ChatListItemData,
  ChatUserProfileMinimal,
} from '@/types/messagingTypes';

// --- NOTIFICATION & UTILITY CODE (Preserved 100%) ---
const NOTIFICATIONS_STORAGE_KEY = 'app_transient_notifications';

interface AppNotification {
  id: string;
  title: string;
  body: string;
  timestamp: number;
  chatId?: string;
  type: 'message' | 'system' | 'other';
}

export const addAppNotification = async (
  notificationData: Omit<AppNotification, 'id' | 'timestamp'> & { messageId?: string }
) => {
  try {
    const existingNotificationsString = await AsyncStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
    let notifications: AppNotification[] = existingNotificationsString ? JSON.parse(existingNotificationsString) : [];

    const newNotification: AppNotification = {
      id: notificationData.messageId || `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      ...notificationData,
      timestamp: Date.now(),
    };

    if (notificationData.messageId && notifications.some(n => n.id === notificationData.messageId)) return;

    notifications.push(newNotification);
    await AsyncStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(notifications));
  } catch (error) {
    console.error('Error adding app notification to queue:', error);
  }
};

const encodeEmailForRTDB = (email: string | null | undefined): string => {
  if (!email) return 'unknown_user_chat_encoded';
  return email
    .replace(/\./g, ',')
    .replace(/#/g, '_p_')
    .replace(/\$/g, '_d_')
    .replace(/\[/g, '_oB_')
    .replace(/\]/g, '_cB_')
    .replace(/\//g, '_s_')
    .replace(/@/g, '_at_');
};
const MOCK_CURRENT_USER_EMAIL = 'testuser@example.com';

// --- SKELETON LOADER COMPONENT ---
const ChatListItemSkeleton = () => {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const fadeAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
                Animated.timing(fadeAnim, { toValue: 0.5, duration: 800, useNativeDriver: true }),
            ])
        ).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={[styles.chatItem, { opacity: fadeAnim }]}>
            <View style={[styles.avatar, { backgroundColor: colors.border }]} />
            <View style={styles.chatInfo}>
                <View style={{ height: 20, width: '70%', backgroundColor: colors.border, borderRadius: radius.sm, marginBottom: spacing.sm }} />
                <View style={{ height: 16, width: '90%', backgroundColor: colors.border, borderRadius: radius.sm }} />
            </View>
        </Animated.View>
    );
};


export default function MessagingScreen() {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);
    const router = useRouter();
    const db = getDatabase(app);

    // --- STATE MANAGEMENT (Preserved 100%) ---
    const [currentUser, setCurrentUser] = useState<ChatUserProfileMinimal | null>(null);
    const [chats, setChats] = useState<ChatListItemData[]>([]);
    const [allUsers, setAllUsers] = useState<ChatUserProfileMinimal[]>([]);
    const [loadingChats, setLoadingChats] = useState(true);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [isCreateGroupModalVisible, setCreateGroupModalVisible] = useState(false);
    const [newGroupName, setNewGroupName] = useState('');
    const [selectedMembers, setSelectedMembers] = useState<ChatUserProfileMinimal[]>([]);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [chatToDelete, setChatToDelete] = useState<ChatListItemData | null>(null);

    // --- DATA FETCHING & LOGIC HOOKS (Preserved 100%) ---

    useEffect(() => {
        const fetchCurrentUserProfile = async (userEmail: string) => {
            if (!userEmail) {
                setCurrentUser(null); setLoadingChats(false); setLoadingUsers(false);
                Alert.alert('Authentication Error','Current user email is not defined.');
                return;
            }
            try {
                const userProfileDocRef = doc(firestore, 'users', userEmail, 'profile', 'details');
                const docSnap = await getDoc(userProfileDocRef);
                const userMinimalProfile = docSnap.exists()
                    ? { email: userEmail, fullName: (docSnap.data() as ProfileData).fullName, profilePicture: (docSnap.data() as ProfileData).profilePicture || null }
                    : { email: userEmail, fullName: `User ${userEmail.split('@')[0]}`, profilePicture: null };
                setCurrentUser(userMinimalProfile);
            } catch (e) {
                setCurrentUser({ email: userEmail, fullName: 'Error Loading Profile', profilePicture: null });
                console.error('Error fetching current user profile:', e);
            }
        };

        const loadEmailAndFetchProfile = async () => {
            let userEmailToFetch = MOCK_CURRENT_USER_EMAIL;
            try {
                const storedUser = JSON.parse(await AsyncStorage.getItem('user') || '{}');
                if (storedUser?.email) userEmailToFetch = storedUser.email;
            } catch (e) { console.error("Error reading 'user' from AsyncStorage:", e); }
            if (userEmailToFetch) fetchCurrentUserProfile(userEmailToFetch);
        };
        loadEmailAndFetchProfile();
    }, []);

    useEffect(() => {
        if (!currentUser?.email) {
          setAllUsers([]); setLoadingUsers(false); return;
        }
        setLoadingUsers(true);
        const fetchAllOtherUsers = async () => {
          try {
            const q = firestoreQuery(collectionGroup(firestore, 'profile'));
            const snap = await getDocs(q);
            const usersData = snap.docs.filter(ds => ds.id === 'details' && ds.exists() && ds.ref.parent?.parent)
              .map(ds => ({
                  email: ds.ref.parent!.parent!.id,
                  fullName: (ds.data() as ProfileData).fullName,
                  profilePicture: (ds.data() as ProfileData).profilePicture || null,
                } as ChatUserProfileMinimal))
              .filter(u => u.email !== currentUser.email);
            setAllUsers(usersData);
          } catch (e) { setAllUsers([]); console.error('Fetch all users error:', e);
          } finally { setLoadingUsers(false); }
        };
        fetchAllOtherUsers();
    }, [currentUser]);

    useEffect(() => {
        if (!currentUser?.email || !db || loadingUsers) {
          if (!loadingUsers && !currentUser?.email) setLoadingChats(false);
          return;
        }

        const encodedCurrentUserEmail = encodeEmailForRTDB(currentUser.email);
        setLoadingChats(true);
        const userChatsRef = ref(db, `userChats/${encodedCurrentUserEmail}`);
        const individualChatListeners: { [chatId: string]: () => void } = {};

        const mainListener = onValue(
          userChatsRef,
          async (snapshot) => {
            Object.values(individualChatListeners).forEach((detach) => detach());
            Object.keys(individualChatListeners).forEach(key => delete individualChatListeners[key]);

            if (!snapshot.exists()) {
              setChats([]); setLoadingChats(false); return;
            }
            const chatIds = Object.keys(snapshot.val() || {});
            if (chatIds.length === 0) {
              setChats([]); setLoadingChats(false); return;
            }

            const chatPromises = chatIds.map(
              (chatId) => new Promise<ChatListItemData | null>((resolveChat) => {
                const chatRef = ref(db, `chats/${chatId}`);
                const listener = onValue(chatRef,
                    async (chatSnap) => {
                      if (!chatSnap.exists()) { resolveChat(null); return; }

                      const chatDataFromDB = chatSnap.val() as ChatDetailsFromDB;
                      const enrichedListItem: ChatListItemData = { ...chatDataFromDB, id: chatId };

                      if (chatDataFromDB.type === 'dm') {
                        const otherEncodedEmail = Object.keys(chatDataFromDB.members).find(e => e !== encodedCurrentUserEmail);
                        enrichedListItem.otherUserDetails = allUsers.find(u => encodeEmailForRTDB(u.email) === otherEncodedEmail)
                                                           || { email: 'unknown', fullName: 'Chat User', profilePicture: null };
                      }

                      const isUnread = !!(currentUser.email && chatDataFromDB.lastMessage && chatDataFromDB.lastMessage.senderId !== currentUser.email &&
                          (!chatDataFromDB.lastMessage.readBy || !chatDataFromDB.lastMessage.readBy[encodedCurrentUserEmail]));
                      enrichedListItem.unreadCount = isUnread ? 1 : 0;
                      
                      if (isUnread && chatDataFromDB.lastMessage?.text) {
                        const senderName = chatDataFromDB.type === 'dm' ? enrichedListItem.otherUserDetails?.fullName || 'A User' : allUsers.find(u => u.email === chatDataFromDB.lastMessage!.senderId)?.fullName || 'A User';
                        const notificationTitle = chatDataFromDB.type === 'dm' ? `New message from ${senderName}` : `Message in ${chatDataFromDB.groupName}`;
                        addAppNotification({ title: notificationTitle, body: chatDataFromDB.lastMessage.text.substring(0, 100), chatId, type: 'message' });
                      }
                      
                      resolveChat(enrichedListItem);
                    },
                    (error) => { console.error(`Error on chat ${chatId}:`, error); resolveChat(null); }
                  );
                  individualChatListeners[chatId] = () => off(chatRef, 'value', listener);
                }),
            );

            try {
              const resolvedChats = (await Promise.all(chatPromises)).filter(Boolean) as ChatListItemData[];
              resolvedChats.sort((a, b) => ((b.lastMessage?.timestamp || 0) as number) - ((a.lastMessage?.timestamp || 0) as number));
              setChats(resolvedChats);
            } catch (e) { console.error('Error processing chats:', e); setChats([]);
            } finally { setLoadingChats(false); }
          },
          (error) => {
            console.error(`Error on userChats listener:`, error);
            setLoadingChats(false); setChats([]);
          }
        );

        return () => {
          off(userChatsRef, 'value', mainListener);
          Object.values(individualChatListeners).forEach((detach) => detach());
        };
    }, [currentUser, db, allUsers, loadingUsers]);


    const performDeleteChat = useCallback(async (chatToDeleteItem: ChatListItemData) => {
        const updates: { [key: string]: null } = {};
        const chatId = chatToDeleteItem.id;
        updates[`/chats/${chatId}`] = null;
        Object.keys(chatToDeleteItem.members).forEach(encodedMemberEmail => {
            updates[`/userChats/${encodedMemberEmail}/${chatId}`] = null;
        });
        try {
            await update(ref(db), updates);
        } catch (error) { Alert.alert("Error", `Could not delete chat. ${(error as Error).message}`); }
    }, [db]);

    const promptDeleteChat = useCallback((chat: ChatListItemData) => {
        setChatToDelete(chat); setDeleteModalVisible(true);
    }, []);

    const handleConfirmDelete = useCallback(() => {
        if (chatToDelete) performDeleteChat(chatToDelete);
        setDeleteModalVisible(false); setChatToDelete(null);
    }, [chatToDelete, performDeleteChat]);
    
    const handleCancelDelete = useCallback(() => {
        setDeleteModalVisible(false); setChatToDelete(null);
    }, []);

    const handleCreateGroup = () => {
        setSelectedMembers([]); setNewGroupName(''); setCreateGroupModalVisible(true);
    };

    const toggleMemberSelection = (user: ChatUserProfileMinimal) => {
        setSelectedMembers(prev => prev.some(m => m.email === user.email) ? prev.filter(m => m.email !== user.email) : [...prev, user]);
    };

    const handleSaveGroup = async () => {
        if (!currentUser?.email || !newGroupName.trim() || selectedMembers.length === 0) {
            Alert.alert('Incomplete Information', 'A group name and at least one member are required.'); return;
        }
        const newChatId = push(ref(db, 'chats')).key;
        if (!newChatId) { Alert.alert('Error', 'Could not generate group ID.'); return; }
        const membersToSave = [currentUser, ...selectedMembers].reduce((acc, member) => {
            acc[encodeEmailForRTDB(member.email)] = true; return acc; }, {} as { [key:string]: boolean });
        const groupData = {
            type: 'group', groupName: newGroupName.trim(), members: membersToSave,
            admins: { [encodeEmailForRTDB(currentUser.email)]: true },
            createdBy: currentUser.email, createdAt: serverTimestamp(),
            lastMessage: { text: `${currentUser.fullName} created the group.`, senderId: 'system', timestamp: serverTimestamp() }
        };
        try {
            await set(ref(db, `chats/${newChatId}`), groupData);
            const userChatUpdates = Object.keys(membersToSave).reduce((acc, email) => {
                acc[`/userChats/${email}/${newChatId}`] = true; return acc; }, {} as {[key:string]: boolean});
            await update(ref(db), userChatUpdates);
            setCreateGroupModalVisible(false);
        } catch (e) { Alert.alert('Error', `Could not save group: ${(e as Error).message}`); }
    };

    const navigateToChat = (chat: ChatListItemData) => {
        if (!currentUser?.email) return;
        const encodedUserEmail = encodeEmailForRTDB(currentUser.email);
        if (chat.unreadCount > 0) {
            set(ref(db, `chats/${chat.id}/lastMessage/readBy/${encodedUserEmail}`), true);
        }
        const chatDisplayName = chat.type === 'dm' ? chat.otherUserDetails?.fullName || 'Chat User' : chat.groupName || 'Group Chat';
        router.push({
            pathname: `/messaging/${chat.id}`,
            params: {
                chatId: chat.id, chatName: chatDisplayName, chatType: chat.type,
                chatAvatar: chat.type === 'dm' ? chat.otherUserDetails?.profilePicture : chat.groupAvatar,
                currentUserEmail: currentUser.email,
            },
        });
    };

    // --- RENDER METHODS ---
    const renderChatListItem = ({ item }: { item: ChatListItemData }) => {
        const displayName = item.type === 'dm' ? (item.otherUserDetails?.fullName || 'Chat User') : (item.groupName || 'Group Chat');
        const displayAvatar = item.type === 'dm' ? item.otherUserDetails?.profilePicture : item.groupAvatar;
        const lastMsgText = item.lastMessage?.text || 'No messages yet.';
        const lastMsgTime = item.lastMessage?.timestamp ? new Date(item.lastMessage.timestamp as number).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
        const isUnread = item.unreadCount > 0;

        return (
            <TouchableOpacity style={styles.chatItem} onPress={() => navigateToChat(item)} onLongPress={() => promptDeleteChat(item)}>
                <Image
                    source={displayAvatar ? { uri: displayAvatar } : require('@/assets/images/avatar.jpg')}
                    style={styles.avatar}
                />
                <View style={styles.chatInfo}>
                    <Text style={[styles.chatName, isUnread && { color: colors.primary }]} numberOfLines={1}>{displayName}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>
                        {item.lastMessage?.senderId === currentUser?.email && "You: "}
                        {item.lastMessage?.senderId === 'system' && <Ionicons name="information-circle-outline" size={14} color={colors.textSecondary} style={{ marginRight: 2 }}/>}
                        {lastMsgText}
                    </Text>
                </View>
                <View style={styles.chatMeta}>
                    <Text style={styles.timestamp}>{lastMsgTime}</Text>
                    {isUnread && <View style={[styles.unreadDot, { backgroundColor: colors.primary }]} />}
                </View>
            </TouchableOpacity>
        );
    };

    const renderUserSelectItem = ({ item }: { item: ChatUserProfileMinimal }) => {
        const isSelected = selectedMembers.some((member) => member.email === item.email);
        return (
          <Pressable style={({ pressed }) => [styles.userSelectItem, isSelected && styles.userItemSelected, pressed && { backgroundColor: '#2A2947' } ]}
            onPress={() => toggleMemberSelection(item)} >
            <Image source={item.profilePicture ? { uri: item.profilePicture } : require('@/assets/images/avatar.jpg')} style={styles.userSelectAvatar} />
            <Text style={styles.userSelectName}>{item.fullName}</Text>
            <Ionicons name={isSelected ? 'checkmark-circle' : 'ellipse-outline'} size={24} color={isSelected ? colors.primary : colors.textSecondary} />
          </Pressable>
        );
      };
    
    // --- JSX RETURN ---
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitleContainer}>
                    <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
                    <Text style={styles.headerTitle}>Meet</Text>
                </View>
                <TouchableOpacity onPress={handleCreateGroup} style={styles.createGroupButton} disabled={loadingUsers}>
                    <Ionicons name="add" size={32} color={loadingUsers ? colors.textSecondary : colors.primary} />
                </TouchableOpacity>
            </View>

            {(loadingChats || loadingUsers) && chats.length === 0 ? (
                <View style={{paddingHorizontal: spacing.md}}>
                    {[...Array(5)].map((_, i) => <ChatListItemSkeleton key={i} />)}
                </View>
            ) : !loadingChats && chats.length === 0 ? (
                <View style={styles.centered}>
                    <Ionicons name="chatbubbles-outline" size={60} color={colors.textSecondary} />
                    <Text style={styles.emptyText}>It's quiet in the Garden.</Text>
                    <Text style={styles.emptySubText}>Create a new group or wait for a message.</Text>
                </View>
            ) : (
                <FlatList
                    data={chats}
                    renderItem={renderChatListItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingHorizontal: spacing.md, paddingBottom: spacing.lg }}
                />
            )}
            
            <Modal animationType="slide" transparent visible={isCreateGroupModalVisible} onRequestClose={() => setCreateGroupModalVisible(false)}>
              <Pressable style={styles.modalOverlay} onPress={() => setCreateGroupModalVisible(false)}>
                <Pressable style={styles.modalContainer} onPress={e => e.stopPropagation()}>
                    <Text style={styles.modalTitle}>New Group</Text>
                    <TextInput style={styles.input} placeholder="Group Name..." placeholderTextColor={colors.textSecondary} value={newGroupName} onChangeText={setNewGroupName} />
                    <Text style={styles.modalSubtitle}>Select Members:</Text>
                    {loadingUsers ? <ActivityIndicator color={colors.primary} /> : <FlatList data={allUsers} renderItem={renderUserSelectItem} keyExtractor={(item) => item.email} style={styles.userSelectList}/>}
                    <View style={styles.modalActions}>
                        <TouchableOpacity style={[styles.modalButton, {backgroundColor: colors.textSecondary}]} onPress={() => setCreateGroupModalVisible(false)}>
                            <Text style={[styles.modalButtonText, {color: colors.background}]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton, {backgroundColor: colors.primary}, (loadingUsers || !newGroupName.trim() || selectedMembers.length === 0) && styles.disabledButton]} onPress={handleSaveGroup} disabled={loadingUsers || !newGroupName.trim() || selectedMembers.length === 0}>
                            <Text style={styles.modalButtonText}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
              </Pressable>
            </Modal>
            
            <Modal animationType="fade" transparent visible={isDeleteModalVisible} onRequestClose={handleCancelDelete}>
              <Pressable style={styles.modalOverlay} onPress={handleCancelDelete}>
                <Pressable style={styles.modalContainer} onPress={e => e.stopPropagation()}>
                    <Text style={styles.modalTitle}>Delete Chat?</Text>
                    <Text style={styles.deleteModalMessage}>
                      {chatToDelete ? `This will permanently delete the ${chatToDelete.type === 'group' ? 'group' : 'chat'} for everyone. This action cannot be undone.` : ''}
                    </Text>
                    <View style={styles.modalActions}>
                        <TouchableOpacity style={[styles.modalButton, {backgroundColor: colors.textSecondary}]} onPress={handleCancelDelete}>
                            <Text style={[styles.modalButtonText, {color: colors.background}]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton, {backgroundColor: colors.error}]} onPress={handleConfirmDelete}>
                            <Text style={styles.modalButtonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
              </Pressable>
            </Modal>

        </SafeAreaView>
    );
}

const getThemedStyles = (colors: any) => StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, paddingTop: Platform.OS === 'android' ? spacing.lg : 0 },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.lg, },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border, },
    headerTitleContainer: { flexDirection: 'row', alignItems: 'center' },
    logo: { width: 32, height: 32, marginRight: spacing.sm },
    headerTitle: { ...typography.h2, color: colors.text, },
    createGroupButton: { padding: spacing.sm, },
    chatItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, padding: spacing.md, borderRadius: radius.lg, marginTop: spacing.md },
    avatar: { width: 56, height: 56, borderRadius: radius.full, marginRight: spacing.md, borderWidth: 2, borderColor: colors.background, backgroundColor: colors.border },
    chatInfo: { flex: 1, marginRight: spacing.sm },
    chatName: { ...typography.bodyBold, color: colors.text, marginBottom: 4 },
    lastMessage: { ...typography.caption, color: colors.textSecondary, flexDirection: 'row', alignItems: 'center' },
    chatMeta: { alignItems: 'flex-end', paddingTop: 4 },
    timestamp: { ...typography.small, color: colors.textSecondary, marginBottom: spacing.sm, },
    unreadDot: { width: 12, height: 12, borderRadius: radius.full },
    emptyText: { ...typography.h3, color: colors.textSecondary, marginTop: spacing.md, textAlign: 'center', },
    emptySubText: { ...typography.body, color: colors.textSecondary, marginTop: spacing.sm, textAlign: 'center', maxWidth: '80%', },
    // MODAL STYLES
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center', alignItems: 'center', paddingHorizontal: spacing.md },
    modalContainer: { width: '100%', maxWidth: 400, backgroundColor: colors.card, borderRadius: radius.lg, padding: spacing.lg, borderColor: colors.border, borderWidth: 1, },
    modalTitle: { ...typography.h3, color: colors.text, marginBottom: spacing.lg, textAlign: 'center', },
    modalSubtitle: { ...typography.bodyBold, color: colors.text, marginTop: spacing.sm, marginBottom: spacing.sm },
    input: { backgroundColor: colors.background, color: colors.text, paddingHorizontal: 15, paddingVertical: 12, borderRadius: radius.md, fontSize: 16, marginBottom: 15, borderWidth: 1, borderColor: colors.border },
    userSelectList: { maxHeight: 220, },
    userSelectItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: colors.border },
    userItemSelected: { backgroundColor: colors.border+'90' },
    userSelectAvatar: { width: 40, height: 40, borderRadius: radius.full, marginRight: 12 },
    userSelectName: { flex: 1, ...typography.body, color: colors.text },
    modalActions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: spacing.lg },
    modalButton: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: radius.full, minWidth: 120, alignItems: 'center' },
    modalButtonText: { ...typography.bodyBold, color: '#FFFFFF' },
    disabledButton: { opacity: 0.5 },
    deleteModalMessage: { ...typography.body, color: colors.textSecondary, textAlign: 'center', lineHeight: 22, marginBottom: spacing.lg },
});