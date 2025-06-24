import React from 'react';
import styles from '../styles/VocabList.module.sass';
import { SlSpeech } from 'react-icons/sl';
import { BiSolidTShirt, BiBody, BiWorld } from 'react-icons/bi';
import {
  MdFamilyRestroom,
  MdLocationPin,
  MdHome,
  MdOutlineFastfood,
  MdOutlineWavingHand,
  MdCalendarMonth,
  MdOutlineFormatListNumbered,
  MdColorLens,
  MdOutlineWorkOutline,
  MdOutlineSchool,
  MdAbc,
  MdOutlineSportsBasketball,
  MdOutlineBusiness,
  MdEmojiPeople,
} from 'react-icons/md';
import {
  FaDog,
  FaTree,
  FaBookOpen,
  FaCar,
  FaCross,
  FaNetworkWired,
  FaShapes,
} from 'react-icons/fa';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { GiInjustice } from 'react-icons/gi';
import VocabItem from './VocabItem';
import { vocabItem } from '../types';
import { Topics } from '../constants';
import { v4 as uuidv4 } from 'uuid';

const vocabList: vocabItem[] = [
  {
    id: uuidv4(),
    name: Topics.Noun,
    image: <SlSpeech />,
  },
  {
    id: uuidv4(),
    name: Topics.Pronoun,
    image: <SlSpeech />,
  },
  {
    id: uuidv4(),
    name: Topics.Clothes,
    image: <BiSolidTShirt />,
  },
  {
    id: uuidv4(),
    name: Topics.Conjunctions,
    image: <SlSpeech />,
  },
  {
    id: uuidv4(),
    name: Topics.Adjectives,
    image: <SlSpeech />,
  },
  {
    id: uuidv4(),
    name: Topics.Places,
    image: <MdLocationPin />,
  },
  {
    id: uuidv4(),
    name: Topics.Adverbs,
    image: <SlSpeech />,
  },
  {
    id: uuidv4(),
    name: Topics.Family,
    image: <MdFamilyRestroom />,
  },
  {
    id: uuidv4(),
    name: Topics.Weather,
    image: <TiWeatherPartlySunny />,
  },
  {
    id: uuidv4(),
    name: Topics.House,
    image: <MdHome />,
  },
  {
    id: uuidv4(),
    name: Topics.Body,
    image: <BiBody />,
  },
  {
    id: uuidv4(),
    name: Topics.Food,
    image: <MdOutlineFastfood />,
  },
  {
    id: uuidv4(),
    name: Topics.Prepositions,
    image: <SlSpeech />,
  },
  {
    id: uuidv4(),
    name: Topics.Salutations,
    image: <MdOutlineWavingHand />,
  },
  {
    id: uuidv4(),
    name: Topics.Calendar,
    image: <MdCalendarMonth />,
  },
  {
    id: uuidv4(),
    name: Topics.Numbers,
    image: <MdOutlineFormatListNumbered />,
  },
  {
    id: uuidv4(),
    name: Topics.Colors,
    image: <MdColorLens />,
  },
  {
    id: uuidv4(),
    name: Topics.Verbs,
    image: <SlSpeech />,
  },
  {
    id: uuidv4(),
    name: Topics.Expressions,
    image: <SlSpeech />,
  },
  {
    id: uuidv4(),
    name: Topics.Animals,
    image: <FaDog />,
  },
  {
    id: uuidv4(),
    name: Topics.Plants,
    image: <FaTree />,
  },
  {
    id: uuidv4(),
    name: Topics.Jobs,
    image: <MdOutlineWorkOutline />,
  },
  {
    id: uuidv4(),
    name: Topics.School,
    image: <MdOutlineSchool />,
  },
  {
    id: uuidv4(),
    name: Topics.Grammar,
    image: <MdAbc />,
  },
  {
    id: uuidv4(),
    name: Topics.Shapes,
    image: <FaShapes />,
  },
  {
    id: uuidv4(),
    name: Topics.Sports,
    image: <MdOutlineSportsBasketball />,
  },
  {
    id: uuidv4(),
    name: Topics.Literature,
    image: <FaBookOpen />,
  },
  {
    id: uuidv4(),
    name: Topics.Earth,
    image: <BiWorld />,
  },
  {
    id: uuidv4(),
    name: Topics.Vehicles,
    image: <FaCar />,
  },
  {
    id: uuidv4(),
    name: Topics.Business,
    image: <MdOutlineBusiness />,
  },
  {
    id: uuidv4(),
    name: Topics.Faith,
    image: <FaCross />,
  },
  {
    id: uuidv4(),
    name: Topics.People,
    image: <MdEmojiPeople />,
  },
  {
    id: uuidv4(),
    name: Topics.Justice,
    image: <GiInjustice />,
  },
  {
    id: uuidv4(),
    name: Topics.Technology,
    image: <FaNetworkWired />,
  },
];

const VocabList = () => {
  let alphaList = vocabList.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.container}>
      {alphaList.map((item) => (
        <VocabItem item={item} />
      ))}
    </div>
  );
};

export default VocabList;
