// types/messagingTypes.ts

// Profile information needed for displaying sender info in chat
export interface ChatUserProfileMinimal {
  email: string; // Plain email, used as an identifier
  fullName: string;
  profilePicture: string | null;
}

// Structure of an individual message in RTDB and for display
export interface ChatMessage {
  id: string; // Firebase push key for the message
  text: string;
  senderId: string; // PLAIN email of the sender (or "system")
  timestamp: number | object; // Firebase server timestamp or a number
  profilePicture?: string | null; // Denormalized or fetched for UI for sender (if not current user)
  senderFullName?: string; // Denormalized or fetched for UI for sender (if not current user)
}

// Core structure of chat metadata stored in RTDB `chats/{chatId}`
// This is what's fetched directly and used for chat details.
export interface ChatDetailsFromDB {
  type: 'dm' | 'group';
  members: { [encodedEmail: string]: boolean }; // Keys are ENCODED emails
  createdAt: number | object; // Firebase server timestamp or a number

  // Optional fields that might not exist on all chat objects initially
  lastMessage?: {
    text: string;
    senderId: string; // PLAIN email or "system"
    timestamp: number | object;
    readBy?: { [encodedEmail: string]: boolean }; // Keys are ENCODED emails
  };

  // Group specific fields (will be undefined for DMs)
  groupName?: string;
  groupAvatar?: string;
  admins?: { [encodedEmail: string]: boolean }; // Keys are ENCODED emails
  createdBy?: string; // PLAIN email of the group creator
}

// Enriched data structure used for displaying chats in the main chat list (messaging/index.tsx)
// It combines ChatDetailsFromDB with resolved information for DMs.
export interface ChatListItemData extends ChatDetailsFromDB {
  id: string; // The chat ID (key from RTDB `chats` node)
  otherUserDetails?: ChatUserProfileMinimal; // For DMs, profile of the other user
  unreadCount?: number; // Calculated client-side
}

// Structure for Firestore user profile documents (e.g., /users/{email}/profile/details)
// This is used by explore screens and for fetching detailed profile info.
export interface ProfileData {
  role: 'teacher' | 'student' | string;
  fullName: string;
  school: string;
  country: string;
  curriculum: string;
  profilePicture: string | null;

  // Teacher specific fields (optional)
  teachingSubjects?: string[];
  teachingExperience?: { company: string; duration: number }[];
  certifications?: { title: string; level: string; institute: string }[];
  teachingStyle?: string;
  availableTimeSlots?: string[];
  mentorshipInterest?: boolean;

  // Student specific fields (optional)
  interests?: string[];
  classLevel?: string;
  preferredLearningStyle?: string;
  courses?: string[];
}

// General user profile structure that might be used in other parts of the app (e.g., Explore list)
export interface UserProfile {
  userId: string | null; // This might be the plain email or a Firebase Auth UID
  profile: ProfileData; // The nested detailed profile data

  // Convenience fields, often derived or duplicated for easier access
  email?: string;
  fullName?: string;
  // profilePicture is available via profile.profilePicture
}