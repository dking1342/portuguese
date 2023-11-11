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
  type: string;
  firstSingle: string;
  secondSingle: string;
  thirdSingle: string;
  firstPlural: string;
  secondPlural?: string;
  thirdPlural: string;
};

export type verbListType = {
  id: string;
  verbItem: verbItemType;
};
