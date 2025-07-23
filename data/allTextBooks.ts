// @/data/allTextbooks.ts
import { textbook as accountingData } from '@/assets/textbooks/objects/accounting/obj';
import { textbook as addmathsData } from '@/assets/textbooks/objects/addmaths/obj';
import { textbook as agricultureData } from '@/assets/textbooks/objects/agriculture/obj';
import { textbook as biologyData } from '@/assets/textbooks/objects/biology/obj';
import { textbook as chemistryData } from '@/assets/textbooks/objects/chemistry/obj';
import { textbook as commerceData } from '@/assets/textbooks/objects/commerce/obj';
import { textbook as computerData } from '@/assets/textbooks/objects/computer/obj';
import { textbook as economicsData } from '@/assets/textbooks/objects/economics/obj';
import { textbook as englishData } from '@/assets/textbooks/objects/english/obj';
import { textbook as geographyData } from '@/assets/textbooks/objects/geography/obj';
import { textbook as governmentData } from '@/assets/textbooks/objects/government/obj';
import { textbook as historyData } from '@/assets/textbooks/objects/history/obj';
import { textbook as literatureData } from '@/assets/textbooks/objects/literature/obj';
import { textbook as mathsData } from '@/assets/textbooks/objects/mathematics/obj';
import { textbook as physicsData } from '@/assets/textbooks/objects/physics/obj';
import { textbook as scienceData } from '@/assets/textbooks/objects/science/obj';
import { MCQ, Section, Textbook, TextbookData } from '@/types/textbook';


const normalizeTextbookData = (rawData: any): TextbookData => {
  return {
    ...rawData,
    chapters: rawData.chapters.map((chapter: any) => ({
      ...chapter,
      sections: chapter.sections.map((section: any): Section => {
        let normalizedMcq: MCQ[] = [];
        if (section.mcq) {
          normalizedMcq = Array.isArray(section.mcq) ? section.mcq : [section.mcq];
        }
        return { ...section, mcq: normalizedMcq };
      }),
    })),
  };
};

export const ALL_TEXTBOOKS: Textbook[] = [
  { id: 'accounting', name: accountingData.name, author: accountingData.author, coverImage: require('@/assets/textbooks/images/accounting.png'), data: normalizeTextbookData(accountingData), },
  { id: 'addmaths', name: addmathsData.name || 'Additional Mathematics', author: addmathsData.author || 'Author', coverImage: require('@/assets/textbooks/images/addmaths.png'), data: normalizeTextbookData(addmathsData), },
  { id: 'agriculture', name: agricultureData.name || 'Agriculture', author: agricultureData.author || 'Author', coverImage: require('@/assets/textbooks/images/agriculture.png'), data: normalizeTextbookData(agricultureData), },
  { id: 'biology', name: biologyData.name || 'Biology', author: biologyData.author || 'Author', coverImage: require('@/assets/textbooks/images/biology.png'), data: normalizeTextbookData(biologyData), },
  { id: 'chemistry', name: chemistryData.name || 'Chemistry', author: chemistryData.author || 'Author', coverImage: require('@/assets/textbooks/images/chemistry.png'), data: normalizeTextbookData(chemistryData), },
  { id: 'commerce', name: commerceData.name || 'Commerce', author: commerceData.author || 'Author', coverImage: require('@/assets/textbooks/images/commerce.png'), data: normalizeTextbookData(commerceData), },
  { id: 'computer', name: computerData.name || 'Computer Science', author: computerData.author || 'Author', coverImage: require('@/assets/textbooks/images/computer.png'), data: normalizeTextbookData(computerData), },
  { id: 'economics', name: economicsData.name || 'Economics', author: economicsData.author || 'Author', coverImage: require('@/assets/textbooks/images/economics.png'), data: normalizeTextbookData(economicsData), },
  { id: 'english', name: englishData.name || 'English Language', author: englishData.author || 'Author', coverImage: require('@/assets/textbooks/images/english.png'), data: normalizeTextbookData(englishData), },
  { id: 'geography', name: geographyData.name || 'Geography', author: geographyData.author || 'Author', coverImage: require('@/assets/textbooks/images/geography.png'), data: normalizeTextbookData(geographyData), },
  { id: 'government', name: governmentData.name || 'Government', author: governmentData.author || 'Author', coverImage: require('@/assets/textbooks/images/government.png'), data: normalizeTextbookData(governmentData), },
  { id: 'history', name: historyData.name || 'History', author: historyData.author || 'Author', coverImage: require('@/assets/textbooks/images/history.png'), data: normalizeTextbookData(historyData), },
  { id: 'literature', name: literatureData.name || 'Literature', author: literatureData.author || 'Author', coverImage: require('@/assets/textbooks/images/literature.png'), data: normalizeTextbookData(literatureData), },
  { id: 'maths', name: mathsData.name || 'Mathematics', author: mathsData.author || 'Author', coverImage: require('@/assets/textbooks/images/maths.png'), data: normalizeTextbookData(mathsData), },
  { id: 'physics', name: physicsData.name || 'Physics', author: physicsData.author || 'Author', coverImage: require('@/assets/textbooks/images/physics.png'), data: normalizeTextbookData(physicsData), },
  { id: 'science', name: scienceData.name || 'Integrated Science', author: scienceData.author || 'Author', coverImage: require('@/assets/textbooks/images/science.png'), data: normalizeTextbookData(scienceData), },
];


export const getTextbookById = (id: string | string[] | undefined): Textbook | undefined => {
  if (!id || Array.isArray(id)) {
    return undefined;
  }
  return ALL_TEXTBOOKS.find(book => book.id === id);
};