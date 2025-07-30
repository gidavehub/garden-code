import { StudyPlan, Subject } from "@/app/(tabs)/index/material/studies/types";
import { Alert } from "react-native";

// --- PASTE YOUR GEMINI API KEY HERE ---
const GEMINI_API_KEY = "AIzaSyB0Xc2ynV7UELSmLhFC0AiG0PoXtuJQzAQ";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

/**
 * Creates the prompt for the Gemini API, now including the current date.
 */
const generateGeminiPrompt = (subjects: Subject[]): string => {
  // --- [NEW] GET AND FORMAT THE CURRENT DATE ---
  const today = new Date();
  const year = today.getFullYear();
  // padStart ensures that months/days are two digits (e.g., '07' instead of '7')
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  // --- END OF NEW DATE LOGIC ---

  return `You are a world-class academic advisor AI. Your task is to generate 3 unique and motivational study plans for a student. The student's subjects are: ${subjects.map(s => s.name).join(', ')}.

---
// --- [UPDATED] PROMPT INSTRUCTION WITH THE CURRENT DATE ---
IMPORTANT CONTEXT: The current date is ${formattedDate}. All "scheduledDate" values you generate in your response MUST be on or after this date. Create a realistic schedule for the upcoming 30 days.
---

Your entire response MUST be a single, valid JSON object. Do not include any text, notes, or markdown formatting like \`\`\`json.
The JSON object must have a single root key "plans" which is an array of 3 study plan objects.

Each study plan object in the "plans" array must conform to this exact structure:
{
  "id": "a-unique-id-string-for-the-plan",
  "name": "A creative and encouraging name for the plan (e.g., 'The Momentum Builder', 'The Exam Conqueror')",
  "description": "A brief, motivational description of the plan's strategy (2-3 sentences max).",
  "subjects": ${JSON.stringify(subjects)},
  "tasks": [ 
    // Generate tasks for the next 30 days. Skip weekends (Saturday/Sunday). A good plan has 20-25 total tasks.
    // Each task MUST be an object: {"id": "unique-task-id", "subjectId": "the-correct-id-of-the-subject", "title": "A clear, actionable goal (e.g., 'Master 2-3 topics in [Subject Name]', 'Review concepts from [Subject Name]')", "isCompleted": false, "scheduledDate": "YYYY-MM-DD", "duration": 60}
  ],
  "goals": {
    "weekly": "A concise and actionable weekly goal.",
    "monthly": "A challenging but achievable monthly goal related to course progress."
  }
}
`;
}

// Mock data generator (no changes needed here as it already uses the current date)
const getMockData = (subjects: Subject[]): { plans: StudyPlan[] } => {
    // ... (This function remains unchanged as it was already correct)
    console.warn("Gemini API Key is missing. Falling back to mock data for development.");
    const createTasks = (strategy: string) => Array.from({ length: 25 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + Math.floor(i * 1.5) + 1); 
        if (date.getDay() === 0 || date.getDay() === 6) date.setDate(date.getDate() + 2);
        
        const subject = subjects[i % subjects.length];
        const topics = strategy === 'intensive' ? '3-4 topics' : '2-3 topics';

        return {
            id: `task-${strategy}-${i}`, subjectId: subject.id, title: `Cover ${topics} in ${subject.name}`,
            isCompleted: false, scheduledDate: date.toISOString().split('T')[0], duration: strategy === 'intensive' ? 90 : 60,
        };
    });
    
    return {
        plans: [
            { id: 'plan-balanced', name: 'The Steady Grower', description: 'A consistent plan...', subjects, tasks: createTasks('balanced'), goals: { weekly: "...", monthly: "..."}},
            { id: 'plan-intensive', name: 'The Deep Dive', description: 'Longer, more focused sessions...', subjects, tasks: createTasks('intensive'), goals: { weekly: "...", monthly: "..." }},
            { id: 'plan-flexible', name: 'The Mindful Scholar', description: 'A flexible approach...', subjects, tasks: createTasks('flexible').slice(0, 18), goals: { weekly: "...", monthly: "..." }}
        ]
    };
}


/**
 * Generates study plans using the Gemini API.
 */
export const generateStudyPlansAI = async (subjects: Subject[]): Promise<StudyPlan[]> => {
    if (!GEMINI_API_KEY) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return getMockData(subjects).plans;
    }

    try {
        console.log("Calling Gemini API to generate study plans...");

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: generateGeminiPrompt(subjects) }] }],
              generationConfig: {
                responseMimeType: "application/json",
                temperature: 0.8,
                topP: 0.95,
              }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API Error Response:", errorData.error);
            throw new Error(errorData.error?.message || "Failed to get a valid response from the Gemini API.");
        }

        const data = await response.json();
        const content = data.candidates[0]?.content?.parts[0]?.text;
        
        if (!content) {
            throw new Error("AI response was empty or in an unexpected format.");
        }
        
        const parsedContent = JSON.parse(content);
        
        console.log("✅ --- Gemini AI Result --- ✅");
        console.log("Full parsed JSON object from Gemini:", JSON.stringify(parsedContent, null, 2));
        
        if (!parsedContent.plans || !Array.isArray(parsedContent.plans)) {
            console.error("❌ Parsed content is missing the 'plans' array!", parsedContent);
            throw new Error("AI response did not contain a 'plans' array as expected.");
        }

        console.log(`🎉 Successfully found and extracted ${parsedContent.plans.length} plans.`);

        return parsedContent.plans;

    } catch (error) {
        console.error("Error generating study plans with Gemini AI:", error);
        Alert.alert(
            "AI Generation Failed", 
            "There was an issue creating your plans. Please check your internet connection and try again."
        );
        return [];
    }
}