
import { Stack } from "expo-router";
import { Platform } from "react-native";
 const ChatLayout = ()=> {

    return (
        <Stack screenOptions={{headerShown : false}}>
         <Stack.Screen 
        name="[chatId]" 
        options={{ 
          headerStyle: { backgroundColor: '#17162B', borderBottomWidth: Platform.OS === 'ios' ? 0 : 1, borderBottomColor: '#2A2947', shadowColor: 'transparent' },
          headerTintColor: '#E0E0E0',
          headerTitleStyle: { fontWeight: '600', fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'sans-serif-medium' },
          headerBackTitle: "Back",
        }} 
      />
        </Stack>
    )
}

export default ChatLayout;