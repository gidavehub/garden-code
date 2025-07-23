// utils/ai/timetableScanScript.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';

export type TimetableData = { [key: string]: { subject: string; startTime: string; endTime: string; location: string }[] };

// 🔴 ======================================================================
// 🔴 VITAL: PASTE YOUR GEMINI API KEY INSIDE THE QUOTES BELOW
// 🔴 Note: For a real app, loading this from a secure .env file is the
// 🔴       recommended and safest practice.
// 🔴 ======================================================================
const GEMINI_API_KEY = "AIzaSyB11kq2KGuvZveR65kqRy-vmVn8FfZImcA"; // <--- PASTE YOUR API KEY HERE

// --- Initialize the AI ---
let genAI: GoogleGenerativeAI;
if (GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
} else {
  // This helps prevent crashes and provides a clear warning during development.
  console.warn(`
    Gemini API key is missing in @/utils/ai/timetableScanScript.ts.
    The AI scanning feature will not work until you add your key.
  `);
}

/**
 * Converts a local file URI to a Base64 string required by the Gemini API.
 * @param uri The local URI of the image file.
 * @param mimeType The MIME type of the image (e.g., 'image/jpeg').
 * @returns An object formatted for the Gemini API.
 */
async function fileToGenerativePart(uri: string, mimeType: string) {
  const base64Data = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return {
    inlineData: {
      data: base64Data,
      mimeType,
    },
  };
}

/**
 * Calls the real Gemini AI model to extract timetable data from an image.
 * @param imageUri The URI of the image to be processed.
 * @returns A promise that resolves to the structured timetable data, or null if an error occurs.
 */
export async function scanTimetableWithAI(imageUri: string): Promise<TimetableData | null> {
    if (!genAI) {
        console.error("Gemini AI not initialized. The API key is missing.");
        return null;
    }

    // Use the latest vision model from Gemini
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
        You are an expert timetable scanner. Analyze the provided image of a school or university timetable.
        Extract all class schedules for Monday, Tuesday, Wednesday, Thursday, and Friday.
        Your response MUST be a valid JSON object. Do not include any text, markdown formatting (like \`\`\`json), or explanations outside of the JSON object itself.
        The JSON object must have keys for each day ("monday", "tuesday", etc.). The value for each day must be an array of objects.
        Each object represents a period and must contain four string properties: "subject", "startTime", "endTime", "location".
        If a day has no classes, provide an empty array [].
    `;

    try {
        const imagePart = await fileToGenerativePart(imageUri, 'image/jpeg');
        const result = await model.generateContent([prompt, imagePart]);
        const responseText = result.response.text();
        
        // Clean the response to ensure it is parsable JSON
        const jsonString = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        
        console.log("[Gemini API Response]", jsonString);
        return JSON.parse(jsonString) as TimetableData;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        // Provide a more helpful alert for common issues
        Alert.alert(
            "API Error",
            "There was an issue communicating with the AI. Please check your network connection and ensure your API key is correct and has billing enabled."
        );
        return null;
    }
}