import React from 'react';
import { verbItemArray, verbListType } from '../types';
import VerbItem from './VerbItem';
import styles from '../styles/VerbList.module.sass';

type Props = {
  verbList: verbListType[];
  verbs: verbItemArray[] | null;
};

const VerbList = ({ verbList, verbs }: Props) => {
  const sortedList = verbList.sort((a, b) =>
    a.verbItem.verb.localeCompare(b.verbItem.verb)
  );

  return (
    <div className={styles.container}>
      {verbs?.map((item) => (
        <VerbItem key={item.id} item={item} />
      ))}
      {/* {sortedList.map((item) => (
        <VerbItem key={item.id} item={item.verbItem} />
      ))} */}
    </div>
  );
};

export default VerbList;
