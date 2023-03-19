import React, { FC } from 'react';
import styles from './ColumnListHeader.module.css';

type ColumnHeaderProps = {
  title: string;
  width?: number;
};

export const ColumnListHeader: FC<ColumnHeaderProps> = ({ title, width = 10 }) => {
  return (
    <div className={styles.header} style={{ width: `${width}%` }}>
      {title}
    </div>
  );
};
