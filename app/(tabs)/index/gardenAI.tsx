import { askGardenAI } from '@/utils/ai/gardenAiScript';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { AnimatePresence, MotiView } from 'moti';
import { nanoid } from 'nanoid/non-secure';
import React, { useRef, useState } from 'react';
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Define message types
type Message = { id: string; text: string; sender: 'user' | 'ai'; imageUrl?: string | null };

// --- Mini Aurora for the button ---
const ButtonProcessingAurora = () => {
    const colors = ['#38e07b', '#a7f3d0', '#FEFEFE']; // Lighter colors for better visibility in button
    return (
        <MotiView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} from={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}}>
             {colors.map((color, index) => (
                <MotiView
                    key={index}
                    from={{ opacity: 0, scale: 0.1, rotate: '0deg' }}
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.8, 1.2, 0.8], rotate: ['45deg', '-45deg', '45deg'] }}
                    transition={{ loop: true, type: 'timing', duration: 1500 + index * 500, delay: index * 200, repeatReverse: false }}
                    style={[styles.miniAuroraBlob, { backgroundColor: color }]}
                />
            ))}
        </MotiView>
    );
};

// --- The chat message bubble component ---
const MessageBubble = ({ message }: { message: Message }) => {
  const isUser = message.sender === 'user';
  return (
    <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        style={[styles.messageRow, isUser ? styles.userMessageRow : styles.aiMessageRow]}>
        {!isUser && <Image source={require('@/assets/images/logo.png')} style={styles.aiAvatar}/>}
        <View style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]}>
            {message.imageUrl && <Image source={{uri: message.imageUrl}} style={styles.messageImage} />}
            <Text style={isUser ? styles.userText : styles.aiText}>{message.text}</Text>
        </View>
    </MotiView>
  );
};

// --- MAIN GARDEN AI SCREEN ---
export default function GardenAIScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
      {id: 'initial', text: 'Hello! I am Garden AI. Ask me anything about your studies or upload a picture of a problem.', sender: 'ai'}
  ]);
  const [input, setInput] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const isSendDisabled = isProcessing || (!input.trim() && !imageUri);

  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true, quality: 0.7,
      });
      if (!result.canceled) {
          setImageUri(result.assets[0].uri);
      }
  };

  const handleSend = async () => {
      if (isSendDisabled) return;

      const userMessage: Message = { id: nanoid(), text: input, sender: 'user', imageUrl: imageUri };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setImageUri(null);
      Keyboard.dismiss();
      setIsProcessing(true);

      const aiResponseText = await askGardenAI(userMessage.text, userMessage.imageUrl);

      const aiMessage: Message = { id: nanoid(), text: aiResponseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
  };
  
  return (
    <LinearGradient colors={['#1a3325', '#0A1710']} style={styles.gradient}>
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#E0F0E8" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Garden AI</Text>
                <View style={{ width: 44 }} />
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}>
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    renderItem={({ item }) => <MessageBubble message={item} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.messageList}
                    onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                    onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
                />
                
                <View style={styles.inputContainer}>
                    {imageUri && (
                        <View style={styles.imagePreviewContainer}>
                            <Image source={{uri: imageUri}} style={styles.imagePreview}/>
                            <TouchableOpacity style={styles.removeImageButton} onPress={() => setImageUri(null)}>
                                <Ionicons name="close-circle" size={24} color="#0A1710" />
                            </TouchableOpacity>
                        </View>
                    )}
                    <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
                        <Ionicons name="image-outline" size={26} color="#87B59A" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInput}
                        value={input}
                        onChangeText={setInput}
                        placeholder="Ask about anything..."
                        placeholderTextColor="#87B59A"
                        multiline
                    />
                    
                    <MotiView 
                        style={[styles.sendButtonContainer, isSendDisabled && { opacity: 0.5 }]} 
                        animate={{ backgroundColor: isProcessing ? '#122419' : '#38e07b' }}
                        transition={{type:'timing', duration: 300}}
                    >
                        <TouchableOpacity onPress={handleSend} disabled={isSendDisabled} style={styles.sendButton}>
                            <AnimatePresence>
                                {isProcessing ? (
                                    <ButtonProcessingAurora />
                                ) : (
                                    <MotiView from={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}>
                                        <Ionicons name="arrow-up" size={26} color="#0A1710" />
                                    </MotiView>
                                )}
                            </AnimatePresence>
                        </TouchableOpacity>
                    </MotiView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    </LinearGradient>
  );
}

// STYLES
const styles = StyleSheet.create({
    gradient: {flex: 1},
    safeArea: {flex: 1},
    header: {flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:16, paddingBottom: 10, borderBottomWidth: 1, borderColor:'rgba(135, 181, 154, 0.2)'},
    backButton: {padding: 5},
    headerTitle: {color:'#E0F0E8', fontSize:20, fontWeight:'bold'},
    messageList: {paddingHorizontal: 16, paddingVertical: 10},
    messageRow: {flexDirection: 'row', marginVertical: 8, maxWidth: '85%'},
    userMessageRow: {alignSelf: 'flex-end'},
    aiMessageRow: {alignSelf: 'flex-start'},
    bubble: {paddingVertical: 12, paddingHorizontal: 16, borderRadius: 20},
    userBubble: {backgroundColor:'#38e07b', borderBottomRightRadius: 5},
    aiBubble: {backgroundColor:'#122419', borderBottomLeftRadius: 5},
    userText: {color:'#0A1710', fontSize:16, lineHeight: 22},
    aiText: {color:'#E0F0E8', fontSize:16, lineHeight: 24},
    aiAvatar: {width: 36, height: 36, borderRadius:18, marginRight: 8, alignSelf:'flex-end', backgroundColor: '#122419'},
    messageImage: {width: 200, height: 200, borderRadius: 12, marginBottom: 8, resizeMode:'cover'},

    // Input area styles
    inputContainer: {flexDirection:'row', alignItems:'flex-end', padding:10, backgroundColor:'#0A1710', borderTopWidth:1, borderColor:'rgba(135, 181, 154, 0.2)'},
    textInput: {flex:1, backgroundColor:'#122419', borderRadius:24, paddingVertical: Platform.OS === 'ios' ? 12 : 8, paddingHorizontal: 16, color:'#E0F0E8', fontSize: 16, maxHeight: 120, lineHeight: 22},
    iconButton: {padding: 10},
    sendButtonContainer: { width: 48, height: 48, borderRadius:24, marginLeft: 10, overflow: 'hidden' },
    sendButton: {flex: 1, justifyContent:'center', alignItems: 'center'},
    imagePreviewContainer: {position: 'absolute', bottom: '110%', left:10, backgroundColor:'#fff', padding:4, borderRadius:12, shadowColor: "#000", shadowOffset: {width:0, height:2}, shadowOpacity: 0.2, shadowRadius: 4},
    imagePreview: {width: 80, height: 80, borderRadius:8},
    removeImageButton: {position: 'absolute', top: -10, right: -10, backgroundColor: '#fff', borderRadius:12},

    // Mini Aurora Styles
    miniAuroraBlob: { position: 'absolute', width: '100%', height: '100%', borderRadius: 24, }
});