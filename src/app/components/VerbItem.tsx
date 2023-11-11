'use client';
import React, { useState } from 'react';
import { verbItemType } from '../types';
import styles from '../styles/VerbItem.module.sass';

type Props = {
  item: verbItemType;
};

const VerbItem = ({ item }: Props) => {
  const [show, setShow] = useState(false);

  const toggleBody = () => {
    setShow(!show);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{item.verb}</h1>
        <h2>{item.tense}</h2>
        <button onClick={toggleBody}>Show</button>
      </div>
      <div
        className={`${styles.body} ${show ? styles.active : styles.disable}`}
      >
        <div>
          <h2>Meaning: {item.meaning}</h2>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.row}>
            <h3>Eu</h3>
            <p>{item.firstSingle}</p>
          </div>
          <div className={styles.row}>
            <h3>Tu</h3>
            <p>{item.secondSingle}</p>
          </div>
          <div className={styles.row}>
            <h3>Ele, Ela, Você</h3>
            <p>{item.thirdSingle}</p>
          </div>
          <div className={styles.row}>
            <h3>Nós</h3>
            <p>{item.firstPlural}</p>
          </div>
          <div className={styles.row}>
            <h3>Vós</h3>
            <p>{item.secondPlural ? item.secondPlural : ''}</p>
          </div>
          <div className={styles.row}>
            <h3>Eles, Elas</h3>
            <p>{item.thirdPlural}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerbItem;
