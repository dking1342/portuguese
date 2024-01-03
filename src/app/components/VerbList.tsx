'use client';
import React, { useEffect, useState } from 'react';
import { verbItemArray } from '../types';
import VerbItem from './VerbItem';
import styles from '../styles/VerbList.module.sass';

type Props = {
  verbs: verbItemArray[];
};

const VerbList = ({ verbs }: Props) => {
  const [list, setList] = useState<verbItemArray[]>([]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      const searchList = list.filter((item) =>
        item.verb.includes(e.currentTarget.value.toLocaleLowerCase())
      );
      setList(searchList);
    } else {
      resetList();
    }
  };

  const resetList = () => {
    const sortedList = verbs.sort((a, b) => a.verb.localeCompare(b.verb));
    setList(sortedList);
  };

  useEffect(() => {
    resetList();
  }, []);

  console.log({ verbs: verbs.length });

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" onChange={(e) => handleInput(e)} />
      </div>
      <div className={styles.list}>
        {list.map((item) => (
          <VerbItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default VerbList;
