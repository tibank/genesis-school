import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { fetchCourses } from '../../../../store/reducers/CoursesFetch';

export const CourseListItem: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>{course.title}</div>
      ))}
    </div>
  );
};
