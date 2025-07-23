// @/data/allGTs.ts
import { easyGT as accountingEasyGT } from '@/assets/textbooks/objects/accounting/easyGT';
import { hardGT as accountingHardGT } from '@/assets/textbooks/objects/accounting/hardGT';
import { easyGT as addMathsEasyGT } from '@/assets/textbooks/objects/addmaths/easyGT';
import { hardGT as addMathsHardGT } from '@/assets/textbooks/objects/addmaths/hardGT';
import { easyGT as agricultureEasyGT } from '@/assets/textbooks/objects/agriculture/easyGT';
import { hardGT as agricultureHardGT } from '@/assets/textbooks/objects/agriculture/hardGT';
import { easyGT as biologyEasyGT } from '@/assets/textbooks/objects/biology/easyGT';
import { hardGT as biologyHardGT } from '@/assets/textbooks/objects/biology/hardGT';
import { easyGT as chemistryEasyGT } from '@/assets/textbooks/objects/chemistry/easyGT';
import { hardGT as chemistryHardGT } from '@/assets/textbooks/objects/chemistry/hardGT';
import { easyGT as commerceEasyGT } from '@/assets/textbooks/objects/commerce/easyGT';
import { hardGT as commerceHardGT } from '@/assets/textbooks/objects/commerce/hardGT';
import { easyGT as computerEasyGT } from '@/assets/textbooks/objects/computer/easyGT';
import { hardGT as computerHardGT } from '@/assets/textbooks/objects/computer/hardGT';
import { easyGT as economicsEasyGT } from '@/assets/textbooks/objects/economics/easyGT';
import { hardGT as economicsHardGT } from '@/assets/textbooks/objects/economics/hardGT';
import { easyGT as englishEasyGT } from '@/assets/textbooks/objects/english/easyGT';
import { hardGT as englishHardGT } from '@/assets/textbooks/objects/english/hardGT';
import { easyGT as geographyEasyGT } from '@/assets/textbooks/objects/geography/easyGT';
import { hardGT as geographyHardGT } from '@/assets/textbooks/objects/geography/hardGT';
import { easyGT as governmentEasyGT } from '@/assets/textbooks/objects/government/easyGT';
import { hardGT as governmentHardGT } from '@/assets/textbooks/objects/government/hardGT';
import { easyGT as historyEasyGT } from '@/assets/textbooks/objects/history/easyGT';
import { hardGT as historyHardGT } from '@/assets/textbooks/objects/history/hardGT';
import { easyGT as literatureEasyGT } from '@/assets/textbooks/objects/literature/easyGT';
import { hardGT as literatureHardGT } from '@/assets/textbooks/objects/literature/hardGT';
import { easyGT as mathsEasyGT } from '@/assets/textbooks/objects/mathematics/easyGT';
import { hardGT as mathsHardGT } from '@/assets/textbooks/objects/mathematics/hardGT';
import { easyGT as physicsEasyGT } from '@/assets/textbooks/objects/physics/easyGT';
import { hardGT as physicsHardGT } from '@/assets/textbooks/objects/physics/hardGT';
import { easyGT as scienceEasyGT } from '@/assets/textbooks/objects/science/easyGT';
import { hardGT as scienceHardGT } from '@/assets/textbooks/objects/science/hardGT';

export interface GTSet {
  id: string;
  name: string;
  easy: typeof accountingEasyGT.Questions;
  hard: typeof accountingHardGT.Questions;
}

export const ALL_GTS: GTSet[] = [
  { id: 'accounting',    name: 'Accounting',             easy: accountingEasyGT.Questions,    hard: accountingHardGT.Questions },
  { id: 'addmaths',      name: 'Additional Mathematics',  easy: addMathsEasyGT.Questions,      hard: addMathsHardGT.Questions },
  { id: 'agriculture',   name: 'Agriculture',            easy: agricultureEasyGT.Questions,   hard: agricultureHardGT.Questions },
  { id: 'biology',       name: 'Biology',               easy: biologyEasyGT.questions,       hard: biologyHardGT.Questions },
  { id: 'chemistry',     name: 'Chemistry',             easy: chemistryEasyGT.Questions,     hard: chemistryHardGT.Questions },
  { id: 'commerce',      name: 'Commerce',              easy: commerceEasyGT.Questions,      hard: commerceHardGT.Questions },
  { id: 'computer',      name: 'Computer Science',      easy: computerEasyGT.Questions,      hard: computerHardGT.Questions },
  { id: 'economics',     name: 'Economics',             easy: economicsEasyGT.Questions,     hard: economicsHardGT.Questions },
  { id: 'english',       name: 'English Language',      easy: englishEasyGT.questions,       hard: englishHardGT.Questions },
  { id: 'geography',     name: 'Geography',             easy: geographyEasyGT.Questions,     hard: geographyHardGT.Questions },
  { id: 'government',    name: 'Government',            easy: governmentEasyGT.Questions,    hard: governmentHardGT.Questions },
  { id: 'history',       name: 'History',               easy: historyEasyGT.Questions,       hard: historyHardGT.Questions },
  { id: 'literature',    name: 'Literature',            easy: literatureEasyGT.Questions,    hard: literatureHardGT.Questions },
  { id: 'maths',         name: 'Mathematics',           easy: mathsEasyGT.Questions,         hard: mathsHardGT.Questions },
  { id: 'physics',       name: 'Physics',               easy: physicsEasyGT.questions,       hard: physicsHardGT.Questions },
  { id: 'science',       name: 'Integrated Science',    easy: scienceEasyGT.Questions,       hard: scienceHardGT.Questions },
];

export const getGTById = (id: string | undefined): GTSet | undefined => {
  return ALL_GTS.find(g => g.id === id);
};
