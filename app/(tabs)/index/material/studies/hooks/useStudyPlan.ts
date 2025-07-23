import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { StudyPlan } from '../types';

const STUDY_PLAN_STORAGE_KEY = 'study_plan';
const NOTIFICATION_CHANNEL_ID = 'StudyReminders';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync(): Promise<boolean> {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(NOTIFICATION_CHANNEL_ID, {
      name: 'Study Reminders',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    Alert.alert('Permission Required','To receive daily reminders, enable notifications in your device settings.');
    return false;
  }
  return true;
}

// [UPDATED] Function to schedule multiple reminders throughout the day
async function scheduleMultiReminders(plan: StudyPlan) {
  // 1. Cancel all previous notifications to avoid duplicates from old plans.
  await Notifications.cancelAllScheduledNotificationsAsync();

  // 2. Define the schedule times (hours of the day in 24-hour format).
  const reminderTimes = [6, 9, 12, 14, 18, 20]; // 6am, 9am, 12pm, 2pm, 6pm, 8pm

  // 3. Loop through each time and schedule a separate, daily-repeating notification.
  for (const hour of reminderTimes) {
    let title = '';
    let body = '';

    // Create dynamic messages based on the time of day
    if (hour < 12) {
      title = 'Good Morning! Rise and Study! ☀️';
      body = `It's a new day to make progress on your '${plan.name}' plan!`;
    } else if (hour < 17) {
      title = 'Midday Check-in! 🧠';
      body = `Keep the momentum going! How are today's tasks for the '${plan.name}' plan?`;
    } else {
      title = 'Evening Focus! 🌙';
      body = `Time for a final push. Let's finish today strong with your '${plan.name}' plan!`;
    }

    const content = {
      title,
      body,
      data: { url: '/material/studies' }, // Deep-links to the app
    };
    
    // This trigger makes the notification repeat at the specified time every day.
    const trigger: Notifications.NotificationRequestInput['trigger'] = {
      hour,
      minute: 0,
      repeats: true,
    };

    const identifier = await Notifications.scheduleNotificationAsync({ content, trigger });
    console.log(`✅ Daily reminder scheduled for ${hour}:00. ID: ${identifier}`);
  }
}

// [UPDATED] A new test function for our multi-reminder system
async function sendImmediateTestNotification() {
    console.log('🚀 Scheduling immediate test notification...');
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "✅ Notifications are set!",
            body: "You will now receive reminders throughout the day to keep you on track.",
        },
        trigger: { seconds: 3 }, // Fires in 3 seconds
    });
}


export function useStudyPlan() {
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // ... (loadStudyPlan and useEffect are unchanged)
  const loadStudyPlan = useCallback(async () => {
    setIsLoading(true);
    try {
      const jsonValue = await AsyncStorage.getItem(STUDY_PLAN_STORAGE_KEY);
      const plan = jsonValue != null ? JSON.parse(jsonValue) : null;
      setStudyPlan(plan);
    } catch (e) {
      console.error('Failed to load study plan', e);
      setStudyPlan(null);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => { loadStudyPlan(); }, [loadStudyPlan]);
  
  const saveStudyPlan = async (data: StudyPlan) => {
    try {
      await AsyncStorage.setItem(STUDY_PLAN_STORAGE_KEY, JSON.stringify(data));
      setStudyPlan(data);

      console.log('Plan saved. Attempting to schedule notifications...');
      const hasPermission = await registerForPushNotificationsAsync();
      if (hasPermission) {
        // [UPDATED] Call the new multi-reminder function
        await scheduleMultiReminders(data);
        // [UPDATED] Send one simple test notification to confirm setup
        await sendImmediateTestNotification();
      } else {
        console.log('Permission not granted. Skipping scheduling.');
      }
    } catch (e) {
      console.error('Failed to save study plan', e);
    }
  };

  const clearStudyPlan = async () => {
    try {
      await AsyncStorage.removeItem(STUDY_PLAN_STORAGE_KEY);
      setStudyPlan(null);
      console.log('Plan cleared. Cancelling all scheduled notifications.');
      // This single command cancels ALL notifications scheduled by this app.
      await Notifications.cancelAllScheduledNotificationsAsync();
    } catch (e) {
      console.error('Failed to clear study plan', e);
    }
  };
  
  // ... (updateTaskStatus is unchanged)
  const updateTaskStatus = async (taskId: string, isCompleted: boolean) => {
    if (!studyPlan) return;
    const updatedTasks = studyPlan.tasks.map(task => 
        task.id === taskId ? { ...task, isCompleted } : task
    );
    const updatedPlan = { ...studyPlan, tasks: updatedTasks };
    const jsonValue = JSON.stringify(updatedPlan);
    await AsyncStorage.setItem(STUDY_PLAN_STORAGE_KEY, jsonValue);
    setStudyPlan(updatedPlan);
  };


  return { 
    studyPlan, 
    isLoading, 
    saveStudyPlan, 
    clearStudyPlan, 
    updateTaskStatus 
  };
}