import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';

const GEMINI_API_KEY = "AIzaSyB0Xc2ynV7UELSmLhFC0AiG0PoXtuJQzAQ";

// Use the model that supports multimodal input (text and images)
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

// A function to convert the image file to a Base64 string for the API
const imageToBase64 = async (uri: string): Promise<string> => {
    try {
        const base64 = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
        });
        return base64;
    } catch (e) {
        console.error("Failed to convert image to Base64", e);
        throw e;
    }
};

interface Part {
    text?: string;
    inline_data?: {
        mime_type: string;
        data: string;
    };
}

export const askGardenAI = async (prompt: string, imageUrl: string | null): Promise<string> => {
    if (!GEMINI_API_KEY) {
        Alert.alert("API Key Missing", "The Gemini API key has not been configured.");
        return "API Key is not set up. Please configure it to use Garden AI.";
    }

    if (!prompt) {
        return "Please ask a question or provide some context for the image.";
    }

    try {
        console.log("Asking Garden AI...");
        const parts: Part[] = [{ text: prompt }];

        if (imageUrl) {
            console.log("Image provided, processing...");
            const base64Image = await imageToBase64(imageUrl);
            parts.unshift({ // Add image first for better context
                inline_data: {
                    mime_type: 'image/jpeg',
                    data: base64Image,
                }
            });
        }
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts }],
                generationConfig: {
                    temperature: 0.6,
                    topP: 0.95,
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API Error Response:", errorData.error);
            throw new Error(errorData.error?.message || "Failed to get a response from the AI.");
        }

        const data = await response.json();

        // Extract the text from the response
        const textContent = data.candidates[0]?.content?.parts[0]?.text;

        if (!textContent) {
            console.warn("AI response was empty or in an unexpected format.");
            return "I'm sorry, I couldn't generate a response for that. Could you try rephrasing?";
        }

        console.log("✅ AI Response Received");
        return textContent;

    } catch (error) {
        console.error("Error asking Garden AI:", error);
        Alert.alert("AI Error", "There was an issue communicating with the AI. Please check your connection and try again.");
        return "I encountered an error. Please try again in a moment.";
    }
};