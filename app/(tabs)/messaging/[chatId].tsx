// (messaging)/[chatId].tsx

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    ImageBackground, // NEW: Import for the background image
    Keyboard,
    KeyboardAvoidingView,
    LayoutAnimation,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';

// --- ALL OTHER IMPORTS ARE PRESERVED ---
import MessageBackground from '@/assets/images/message.png'; // NEW: Import your background image
import { app, firestore } from '@/firebaseConfig';
import { radius, spacing, typography } from '@/theme/atoms';
import { ThemeColors, useTheme } from '@/theme/theme';
import { ChatDetailsFromDB as ChatDetailsType, ChatMessage, ProfileData } from '@/types/messagingTypes';
import { Ionicons } from '@expo/vector-icons';
import { getDatabase, off, onValue, orderByChild, push, query, ref, serverTimestamp, set } from 'firebase/database';
import { doc, getDoc } from 'firebase/firestore';


const FALLBACK_MOCK_CURRENT_USER_EMAIL = 'testuser@example.com';

const encodeEmailForRTDB = (email: string | null | undefined): string => {
  if (!email) return 'unknown_user_chat_encoded';
  return email.replace(/\./g, ',').replace(/#/g, '_p_').replace(/\$/g, '_d_').replace(/\[/g, '_oB_').replace(/\]/g, '_cB_').replace(/\//g, '_s_').replace(/@/g, '_at_');
};

export default function ChatDetailScreen() {
    const { colors } = useTheme();
    const styles = getThemedStyles(colors);

    const router = useRouter();
    const navigation = useNavigation();
    
    const params = useLocalSearchParams<{ chatId: string; chatName?: string; currentUserEmail?: string; }>();
    const { chatId, currentUserEmail: paramEmail } = params;
    const currentActualUserEmail = paramEmail || FALLBACK_MOCK_CURRENT_USER_EMAIL;
    const db = getDatabase(app);
    const flatListRef = useRef<FlatList<ChatMessage>>(null);
    
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [newMessageText, setNewMessageText] = useState('');
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [chatDetails, setChatDetails] = useState<ChatDetailsType | null>(null);
    const [profilesCache, setProfilesCache] = useState<Record<string, {fullName: string, profilePicture: string | null}>>({});

    // --- YOUR LOGIC IS 100% PRESERVED, NO CHANGES WERE MADE ---
    
    useLayoutEffect(() => {
        const title = chatDetails?.groupName || params.chatName || "Chat";
        navigation.setOptions({
            headerTitle: title,
            headerShown: true,
            headerStyle: { backgroundColor: colors.card },
            headerTintColor: colors.text,
            headerTitleStyle: { ...(typography.bodyBold as object) },
            headerShadowVisible: false,
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: spacing.md, padding: spacing.xs }}>
                    <Ionicons name="arrow-back" size={24} color={colors.primary} />
                </TouchableOpacity>
            )
        });
    }, [navigation, router, chatDetails, colors, params.chatName]);
    
    const getSenderProfile = useCallback(async (senderEmail: string) => {
        if (profilesCache[senderEmail]) return profilesCache[senderEmail];
        try {
            const userDocRef = doc(firestore, 'users', senderEmail, 'profile', 'details');
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                const data = docSnap.data() as ProfileData;
                const profile = { fullName: data.fullName, profilePicture: data.profilePicture || null };
                setProfilesCache(prev => ({ ...prev, [senderEmail]: profile }));
                return profile;
            }
        } catch (error) { console.error(`Failed to fetch profile for ${senderEmail}:`, error); }
        const fallbackProfile = { fullName: senderEmail.split('@')[0], profilePicture: null };
        setProfilesCache(prev => ({...prev, [senderEmail]: fallbackProfile}));
        return fallbackProfile;
    }, [profilesCache]);
    
    useEffect(() => {
        if (!chatId) return;
        const chatMetaRef = ref(db, `chats/${chatId}`);
        const messagesQueryRef = query(ref(db, `messages/${chatId}`), orderByChild('timestamp'));
        const metaListener = onValue(chatMetaRef, (snapshot) => { if (snapshot.exists()) setChatDetails(snapshot.val()); else setLoading(false); });
        const messagesListener = onValue(messagesQueryRef, async (snapshot) => {
            if (!snapshot.exists()) { setMessages([]); setLoading(false); return; }
            const messagesData: ChatMessage[] = [];
            const profilePromises: Promise<any>[] = [];
            snapshot.forEach(childSnapshot => {
                const message = { id: childSnapshot.key!, ...childSnapshot.val() };
                messagesData.push(message);
                if (message.senderId !== 'system' && !profilesCache[message.senderId]) profilePromises.push(getSenderProfile(message.senderId));
            });
            await Promise.all(profilePromises);
            setMessages(messagesData);
            setLoading(false);
            const lastMessage = messagesData[messagesData.length - 1];
            if (lastMessage?.senderId !== currentActualUserEmail && lastMessage?.senderId !== 'system') {
                const readByRef = ref(db, `chats/${chatId}/lastMessage/readBy/${encodeEmailForRTDB(currentActualUserEmail)}`);
                set(readByRef, true);
            }
        });
        return () => { off(chatMetaRef, 'value', metaListener); off(messagesQueryRef, 'value', messagesListener); };
    }, [chatId, db, currentActualUserEmail, getSenderProfile]);

    const handleSend = async () => {
        if (!newMessageText.trim() || sending) return;
        setSending(true);
        const messageData = { text: newMessageText.trim(), senderId: currentActualUserEmail, timestamp: serverTimestamp() };
        try {
            await push(ref(db, `messages/${chatId}`), messageData);
            await set(ref(db, `chats/${chatId}/lastMessage`), { ...messageData, readBy: { [encodeEmailForRTDB(currentActualUserEmail)]: true } });
            setNewMessageText('');
            Keyboard.dismiss();
            if (Platform.OS !== 'web') LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        } catch (error) { Alert.alert("Error", "Could not send message."); } 
        finally { setSending(false); }
    };
    // --- END OF PRESERVED LOGIC ---

    const renderMessageItem = ({ item }: { item: ChatMessage }) => {
        // This component's rendering logic is also perfectly preserved.
        const isMyMessage = item.senderId === currentActualUserEmail;
        const profile = profilesCache[item.senderId];
        if (item.senderId === 'system') return <View style={styles.systemMessageContainer}><Text style={styles.systemMessageText}>{item.text}</Text></View>;
        return (
            <View style={[styles.messageRow, { justifyContent: isMyMessage ? 'flex-end' : 'flex-start' }]}>
                {!isMyMessage && (<Image source={profile?.profilePicture ? { uri: profile.profilePicture } : require('@/assets/images/avatar.jpg')} style={styles.avatar} />)}
                <View style={[ styles.messageBubble, isMyMessage ? styles.myMessageBubble : styles.theirMessageBubble ]}>
                    <Text style={[styles.messageText, { color: isMyMessage ? colors.buttonText : colors.text }]}>{item.text}</Text>
                    <Text style={[styles.timestamp, { color: isMyMessage ? '#FFFFFF99' : colors.textSecondary }]}>
                        {item.timestamp ? new Date(item.timestamp as number).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                    </Text>
                </View>
            </View>
        );
    };

    // --- NEW UI STRUCTURE ---
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={MessageBackground} 
                style={styles.background} 
                resizeMode="cover"
            >
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.select({ ios: 90, android: 90 })}
                >
                    {loading ? (
                        <ActivityIndicator style={{ flex: 1 }} size="large" color={colors.primary} />
                    ) : (
                        <FlatList
                            ref={flatListRef}
                            data={messages}
                            renderItem={renderMessageItem}
                            keyExtractor={(item) => item.id}
                            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                            onLayout={() => flatListRef.current?.scrollToEnd({ animated: false })}
                            contentContainerStyle={{ paddingHorizontal: spacing.md, paddingTop: spacing.md }}
                            inverted={messages.length > 0 ? false : true}
                            ListEmptyComponent={<View style={styles.emptyListSpacer} />}
                        />
                    )}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type a message..."
                            placeholderTextColor={colors.textSecondary}
                            value={newMessageText}
                            onChangeText={setNewMessageText}
                            multiline
                        />
                        <TouchableOpacity onPress={handleSend} style={[styles.sendButton, { backgroundColor: (sending || !newMessageText.trim()) ? colors.border : colors.primary }]} disabled={sending || !newMessageText.trim()}>
                            {sending ? <ActivityIndicator size="small" color={colors.white} /> : <Ionicons name="send" size={22} color={colors.white} />}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
}

// --- UPDATED STYLES ---
const getThemedStyles = (colors: ThemeColors) => StyleSheet.create({
    // The main container now only provides the safe area and a background color for notches.
    container: { flex: 1, backgroundColor: colors.background },
    // NEW: Style for the ImageBackground component
    background: {
        flex: 1, // Make it fill the parent (the SafeAreaView)
    },
    // The rest of the styles are perfectly preserved.
    avatar: { width: 36, height: 36, borderRadius: radius.full, marginRight: spacing.sm, alignSelf: 'flex-end' },
    messageRow: { flexDirection: 'row', alignItems: 'flex-end', marginVertical: spacing.sm, gap: spacing.sm },
    messageBubble: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md, borderRadius: radius.lg, maxWidth: '80%' },
    myMessageBubble: { backgroundColor: colors.primary, borderBottomRightRadius: radius.sm },
    theirMessageBubble: { backgroundColor: colors.card, borderBottomLeftRadius: radius.sm },
    messageText: { ...(typography.body as object), fontSize: 15, lineHeight: 22 },
    timestamp: { ...(typography.small as object), fontSize: 10, alignSelf: 'flex-end', marginTop: spacing.xs, },
    inputContainer: { flexDirection: 'row', alignItems: 'center', padding: spacing.sm, borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.card },
    input: { flex: 1, backgroundColor: colors.background, color: colors.text, borderRadius: radius.full, paddingHorizontal: spacing.md, paddingVertical: Platform.OS === 'ios' ? 12 : 8, fontSize: 16, maxHeight: 120, },
    sendButton: { width: 44, height: 44, borderRadius: radius.full, justifyContent: 'center', alignItems: 'center', marginLeft: spacing.sm },
    systemMessageContainer: { alignSelf: 'center', backgroundColor: colors.border, borderRadius: radius.full, paddingVertical: spacing.xs, paddingHorizontal: spacing.md, marginVertical: spacing.md },
    systemMessageText: { ...(typography.small as object), color: colors.textSecondary, fontStyle: 'italic' },
    emptyListSpacer: { flex: 1 },
});