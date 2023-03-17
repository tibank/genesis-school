import React, { FC } from 'react';
import styles from './ColumnListHeader.module.css';

type ColumnHeaderProps = {
  item: string;
  width?: number;
};

export const ColumnListHeader: FC<ColumnHeaderProps> = ({ item, width = 10 }) => {
  return (
    <div className={styles.header} style={{ width: `${width}%` }}>
      {item}
    </div>
  );
};
