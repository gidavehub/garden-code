// @/types/textbook.ts
export interface MCQ {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Section {
  title: string;
  image: string;
  video?: string | string[];
  content: string;
  mcq: MCQ[]; // <-- IMPORTANT: Always an array now
}

export interface Chapter {
  name: string;
  image: string;
  video?: string[];
  sections: Section[];
}

export interface TextbookData {
  chapters: Chapter[];
  // Other properties from your obj.ts like name, author...
  name: string;
  author: string;
}

export interface Textbook {
  id: string;
  name: string;
  author: string;
  coverImage: { uri: string } | number; // Support remote URI or local require
  data: TextbookData;
}