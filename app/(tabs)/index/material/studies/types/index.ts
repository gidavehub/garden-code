export interface Subject {
  id: string;
  name: string;
  color: string;
}

export interface StudyTask {
  id: string;
  subjectId: string;
  title: string;
  isCompleted: boolean;
  scheduledDate: string; // YYYY-MM-DD
  duration: number; // in minutes
}

export interface StudyPlan {
  id: string;
  name: string;
  description: string;
  subjects: Subject[];
  tasks: StudyTask[];
  goals: {
    weekly: string;
    monthly: string;
  };
}