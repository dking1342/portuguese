import React from 'react';
import { verbListType } from '../types';
import VerbItem from './VerbItem';
import styles from '../styles/VerbList.module.sass';

type Props = {
  verbList: verbListType[];
};

const VerbList = ({ verbList }: Props) => {
  const sortedList = verbList.sort((a, b) =>
    a.verbItem.verb.localeCompare(b.verbItem.verb)
  );

  return (
    <div className={styles.container}>
      {sortedList.map((item) => (
        <VerbItem key={item.id} item={item.verbItem} />
      ))}
    </div>
  );
};

export default VerbList;
