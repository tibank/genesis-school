import React from 'react';
import { ColumnListHeader } from './ColumnListHeader';
import styles from './CoursesListHeader.module.css';

export const CoursesListHeader = () => {
  return (
    <div className={styles.list}>
      <ColumnListHeader title='Name' width={40} />
      <ColumnListHeader title='Qty lessons' width={10} />
      <ColumnListHeader title='Skills' width={20} />
      <ColumnListHeader title='Rate' width={10} />
      <ColumnListHeader title='Foto' width={20} />
    </div>
  );
};
