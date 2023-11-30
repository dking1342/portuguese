'use client';
import React, { useState } from 'react';
import { Tense, TenseArray, TenseItemType, verbItemArray } from '../types';
import styles from '../styles/VerbItem.module.sass';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  item: verbItemArray;
};

const VerbItem = ({ item }: Props) => {
  const [show, setShow] = useState(false);
  const [showTense, setShowTense] = useState('');
  const [currentGroup, setCurrentGroup] = useState<TenseItemType | null>(null);

  const toggleTenses = (id: string) => {
    setShowTense(id);
    const list: TenseArray = item.tenses.filter((t) => t.tense === id)[0];
    setCurrentGroup(list.group);
    setShow(true);
  };

  const closeDialog = () => {
    setShow(false);
  };

  const tenses = [
    {
      id: uuidv4(),
      tense: Tense.present,
    },
    {
      id: uuidv4(),
      tense: Tense.past,
    },
    {
      id: uuidv4(),
      tense: Tense.future,
    },
    {
      id: uuidv4(),
      tense: Tense.imperfect,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{item.verb}</h1>
        <h2>{item.meaning}</h2>
      </div>
      <div className={styles.btnContainer}>
        {tenses.map((t) => (
          <button
            className={styles.tensesBtn}
            key={t.id}
            onClick={() => toggleTenses(t.tense)}
          >
            {t.tense}
          </button>
        ))}
      </div>
      {show && currentGroup && (
        <div className={styles.dialog}>
          <div className={styles.rowContainer}>
            <div className={styles.row}>
              <h3>Eu</h3>
              <p>{currentGroup.firstSingle}</p>
            </div>
            <div className={styles.row}>
              <h3>Tu</h3>
              <p>{currentGroup.secondSingle}</p>
            </div>
            <div className={styles.row}>
              <h3>Ele, Ela, Você</h3>
              <p>{currentGroup.thirdSingle}</p>
            </div>
            <div className={styles.row}>
              <h3>Nós</h3>
              <p>{currentGroup.firstPlural}</p>
            </div>
            <div className={styles.row}>
              <h3>Eles, Elas</h3>
              <p>{currentGroup.thirdPlural}</p>
            </div>
          </div>
          <button className={styles.dialogCloseBtn} onClick={closeDialog}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default VerbItem;
