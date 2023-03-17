import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { fetchCourses } from '../../../../store/reducers/CoursesFetch';
import styles from './CourseListItem.module.css';

export const CourseListItem: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      {courses.map((course) => (
        <div className={styles.list} key={course.id}>
          <div className={styles.titleWidth}>{course.title} </div>
          <div className={styles.qtyWidth}>{course.lessonsCount}</div>
          <div className={styles.skillsWidth}></div>
          <div className={styles.ratingWidth}>{course.rating}</div>
        </div>
      ))}
    </div>
  );
};
