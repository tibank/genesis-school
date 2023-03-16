import React from 'react';
import { ColumnListHeader } from './ColumnListHeader';
import styles from './CoursesListHeader.module.css';

export const CoursesListHeader = () => {
  return (
    <div className={styles.list}>
      <ColumnListHeader item='Name' width={40} />
      <ColumnListHeader item='Qty lessons' width={10} />
      <ColumnListHeader item='Skills' width={20} />
      <ColumnListHeader item='Rate' width={10} />
      <ColumnListHeader item='Foto' width={20} />
    </div>
  );
};
