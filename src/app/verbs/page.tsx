import React from 'react';
import styles from '../styles/vocab.module.sass';
import { verbL, verbList } from '../data/verbList';
import VerbList from '../components/VerbList';

type Props = {};

const Verbs = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1>Verbs</h1>
      <VerbList verbs={verbL} verbList={verbList} />
    </div>
  );
};

export default Verbs;
