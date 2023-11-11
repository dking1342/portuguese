import React from 'react';
import styles from '../styles/flashcard.module.sass';
import { vocab } from '../types';

type Props = {
  handleSliderToggle: () => void;
  sliderState: boolean;
  flashcard: vocab | null;
  handleNextBtn: () => void;
  langState: boolean;
};

const Flashcard = ({
  handleSliderToggle,
  handleNextBtn,
  sliderState,
  flashcard,
  langState,
}: Props) => {
  return (
    <div className={styles.flashcard}>
      <div
        className={styles.top}
        style={{ background: langState ? '#0A3161' : 'rgb(0,151,57)' }}
      >
        <p>{langState ? flashcard?.word.en : flashcard?.word.pt}</p>
        <p>{flashcard?.gender ? flashcard.gender : ''}</p>
        <p>{flashcard?.contraction ? flashcard.contraction : ''}</p>
      </div>
      <div
        className={styles.bottom}
        style={{ background: !langState ? '#0A3161' : 'rgb(0,151,57)' }}
      >
        <p>{!langState ? flashcard?.word.en : flashcard?.word.pt}</p>
        <p>{flashcard?.gender ? flashcard.gender : ''}</p>
        <p>{flashcard?.contraction ? flashcard.contraction : ''}</p>
      </div>
      <div
        className={`${styles.slider} ${sliderState ? styles.up : styles.down}`}
        onClick={handleSliderToggle}
      >
        <button className={styles.sliderBtn}>show</button>
      </div>
      <button className={styles.nextBtn} onClick={handleNextBtn}>
        next
      </button>
    </div>
  );
};

export default Flashcard;
