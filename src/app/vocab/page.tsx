import React from 'react';
import styles from '../styles/vocab.module.sass';
import VocabList from '../components/VocabList';

type Props = {};

const Vocab = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1>Vocab</h1>
      <VocabList />
    </div>
  );
};

export default Vocab;
