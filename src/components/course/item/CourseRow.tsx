import React, { FC } from 'react';
import { ICourse } from '../../../models/ICourse';
import styles from './CourseRow.module.css';

interface ICourseItemProps {
    course: ICourse;
}

const selectCourse = () => {
    console.log('click');
};

export const CourseItem: FC<ICourseItemProps> = ({ course }) => {
    return (
        <div className={styles.list} onClick={selectCourse}>
            <div className={styles.titleColumn}>{course.title} </div>
            <div className={styles.qtyColumn}>{course.lessonsCount}</div>
            <div className={styles.skillsColumn}> {course.meta.skills.join('\n')}</div>
            <div className={styles.ratingColumn}>{course.rating}</div>
            <div className={styles.imageColumn}>
                <div className={styles.imageBlock}>
                    <img src={course.previewImageLink + '/cover.webp'} alt='' />
                </div>
            </div>
        </div>
    );
};
