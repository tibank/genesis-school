import { title } from 'process';
import React, { FC } from 'react';
import styles from './ColumnListHeader..module.css';

type ColumnHeaderProps = {
    title: string;
};

export const ColumnListHeader: FC<ColumnHeaderProps> = ({ title }) => {
    return <div className={styles.header}>{title}</div>;
};
