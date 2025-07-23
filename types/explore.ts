// app/types/explore.ts



export interface UserProfile {
  userId: string | null;
  profile: ProfileData;
}

export interface SchoolData {
  name: string;
  curriculum: string;
  // Add other school properties if needed
}

// For items in the global search results (schools from highSchools.ts)
export interface SchoolEntry {
  type: 'school';
  country: string;
  region: string;
  schoolKey: string; // Unique key for the school within its region/country
  data: SchoolData;
}

// For schools listed on the main page (from user's country, derived from highSchools.ts)
export interface LocalSchoolItem {
  type?: 'school'; // Optional, as it might be inferred
  schoolKey: string;
  data: SchoolData;
  regionName: string; // Region within the user's country
}


// types/explore.ts (or types/sharedTypes.ts)

export type ExperienceItem = {
  company: string;
  duration: number; // Assuming years
};

export type CertificateItem = {
  title: string;
  level: string;
  institute: string;
};

export type BaseProfile = {
  fullName: string;
  school: string;
  country: string;
  curriculum: string;
  profilePicture: string | null;
  createdAt: string; // Stored as ISO string in Firestore typically, convert to Date on client
};

export type TeacherProfileData = BaseProfile & {
  role: 'teacher';
  teachingSubjects: string[];
  teachingExperience: ExperienceItem[];
  certifications: CertificateItem[];
  teachingStyle: string;
  availableTimeSlots: string[];
  mentorshipInterest: boolean;
};

export type StudentProfileData = BaseProfile & {
  role: 'student';
  interests: string[];
  classLevel: string;
  preferredLearningStyle: string;
  courses: string[];
};

// This is what your list items in ExploreScreen likely expect
export interface UserProfile { 
  userId: string | null; // User's email
  profile: ProfileData;  // The detailed, discriminated union profile
 
}


export type ProfileData = BaseProfile  &  (StudentProfileData | TeacherProfileData)
  
// @/types/explore.ts

// Your existing ProfileData, StudentProfile, TeacherProfile


// Define Certificate and Experience types
export interface Certificate {
  title: string;
  level: string; // e.g., Bachelor's, Master's, Professional
  institute: string; // Name of the institution
  // year?: number; // Optional: year obtained
}

export interface Experience {
  company: string; // Or school, organization
  role?: string; // e.g., "Math Teacher", "Software Developer Intern" (if it's general experience)
  duration: number; // In months or years, be consistent
  description?: string; // Optional
  // startDate?: Date; // Optional
  // endDate?: Date;   // Optional
}


export interface StudentProfile  {
  role: 'student';
  classLevel?: string;
  preferredLearningStyle?: string;
  interests?: string[];
  courses?: string[];
  userId: string; // Assuming you have a userId
  email: string;
  fullName: string;
    profilePicture?: string | null;
  school?: string;
  country?: string;
  curriculum?: string;
  // ... other student-specific fields
}

export interface TeacherProfile  {
  role: 'teacher';
  teachingStyle?: string;
  teachingSubjects?: string[];
  certifications?: Certificate[]; // Array of Certificate objects
  teachingExperience?: Experience[]; // Array of Experience objects
  availableTimeSlots?: string[];
  mentorshipInterest?: boolean;
  userId: string; // Assuming you have a userId
  email: string;
  fullName: string;
  profilePicture?: string | null;
  school?: string;
  country?: string;
  curriculum?: string;
  // ... other teacher-specific fields
}
// Keep your other explore-specific types: SchoolData, SchoolEntry, LocalSchoolItem
// ...