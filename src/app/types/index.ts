export type vocabItem = {
  id: string;
  image: React.JSX.Element;
  name: string;
};

export type word = {
  pt: string;
  en: string;
};

export type vocab = {
  id: string;
  word: word;
  topic: string;
  gender?: string;
  contraction?: string;
};

export type verbItemType = {
  verb: string;
  meaning: string;
  tense: string;
  type?: string;
  firstSingle: string;
  secondSingle: string;
  thirdSingle: string;
  firstPlural: string;
  thirdPlural: string;
};

export enum Tense {
  present = 'present',
  past = 'past',
  future = 'future',
  imperfect = 'imperfect',
}

export type TenseItemType = {
  firstSingle: string;
  secondSingle: string;
  thirdSingle: string;
  firstPlural: string;
  thirdPlural: string;
};

export type TenseArray = {
  id: string;
  tense: Tense.past | Tense.future | Tense.present | Tense.imperfect;
  group: TenseItemType;
};

export type verbItemArray = {
  id: string;
  verb: string;
  meaning: string;
  tenses: TenseArray[];
};

export type verbListType = {
  id: string;
  verbItem: verbItemType;
};
