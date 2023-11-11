'use client';
import { useParams } from 'next/navigation';
import stylesHome from '../../styles/vocab.module.sass';
import styles from '../../styles/flashcard.module.sass';
import React, { useState } from 'react';
import vocabulary from '../../data/vocab';
import { vocab } from '@/app/types';
import Flashcard from '@/app/components/Flashcard';

type Props = {};

const Practice = (props: Props) => {
  const params = useParams();
  const [langState, setLangState] = useState(true);
  const [sliderState, setSliderState] = useState(true);
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [words, setWords] = useState<vocab[]>(vocabulary);
  const [flashcard, setFlashcard] = useState<vocab | null>(null);

  const handleLangChange = (lang: string) => {
    lang == 'pt2en' ? setLangState(true) : setLangState(false);
  };

  const handleFlashcardToggle = () => {
    setShowFlashcards(true);
    const filteredWords = handleWordsFilter(words, params.name as string);
    handleNextWord(filteredWords);
  };

  const handleSliderToggle = () => {
    setSliderState(!sliderState);
  };

  const handleCreateFlashcardIndex = (words: vocab[]) => {
    const wordLen = words.length;
    const randWord = Math.floor(Math.random() * wordLen);
    return wordLen > 1 ? randWord : wordLen;
  };

  const handleWordsFilter = (words: vocab[], param: string) => {
    return words.filter((item) => item.topic === param);
  };

  const handleNextWord = (wordList: vocab[]) => {
    const index =
      wordList.length > 1 ? handleCreateFlashcardIndex(wordList) : 0;
    setFlashcard(wordList[index]);

    if (wordList.length > 0) {
      let newWordList = wordList;
      newWordList = newWordList.filter((_, idx) => index !== idx);
      setWords(newWordList);
    } else {
      setWords(vocabulary);
      setShowFlashcards(false);
    }
  };

  const handleNextBtn = () => {
    handleNextWord(words);
  };

  return (
    <div className={stylesHome.container}>
      <h1>Practice: {params.name}</h1>
      <div
        className={`${styles.flashcardIntroContainer} ${
          !showFlashcards ? styles.showing : styles.notShowing
        }`}
      >
        <button
          className={`${styles.flashcardIntroBtn} ${
            langState ? styles.selected : styles.notSelected
          }`}
          onClick={() => handleLangChange('pt2en')}
        >
          🇧🇷 ➡️ 🇺🇸
        </button>
        <button
          className={`${styles.flashcardIntroBtn} ${
            !langState ? styles.selected : styles.notSelected
          }`}
          onClick={() => handleLangChange('en2pt')}
        >
          🇺🇸 ➡️ 🇧🇷
        </button>
        <button className={styles.startBtn} onClick={handleFlashcardToggle}>
          start
        </button>
      </div>
      <div
        className={`${styles.flashcardContainer} ${
          showFlashcards ? styles.showing : styles.notShowing
        }`}
      >
        <Flashcard
          handleSliderToggle={handleSliderToggle}
          sliderState={sliderState}
          flashcard={flashcard}
          handleNextBtn={handleNextBtn}
          langState={langState}
        />
      </div>
    </div>
  );
};

export default Practice;
