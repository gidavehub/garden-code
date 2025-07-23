// You can put this in a shared types file, e.g., types/notificationTypes.ts
export interface AppNotification {
  id: string; // Unique ID for the notification
  title: string; // e.g., "New Message from John Doe"
  body: string;  // Message preview
  timestamp: number;
  chatId?: string; // To potentially navigate to the chat
  type: 'message' | 'system' | 'other';
}

export const NOTIFICATIONS_STORAGE_KEY = 'app_transient_notifications';