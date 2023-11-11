import React from 'react';
import { vocabItem } from '../types';
import styles from '../styles/VocabItem.module.sass';
import Link from 'next/link';

type Props = {
  item: vocabItem;
};

const VocabItem = (item: Props) => {
  const {
    item: { id, image, name },
  } = item;
  return (
    <Link
      href={{ pathname: `/vocab/${name}` }}
      key={id}
      className={styles.card}
    >
      <div className={styles.cardHeader}>{image}</div>
      <div className={styles.cardBody}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default VocabItem;
