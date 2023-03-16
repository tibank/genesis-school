import React, { useEffect } from 'react';
import './App.css';
import { CoursesListHeader } from './components/CoursesListHeader';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchCourses } from './store/reducers/CoursesFetch';

function App() {
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className='App'>
      <CoursesListHeader />
      {courses.map((course) => (
        <div>{course.id}</div>
      ))}
    </div>
  );
}

export default App;
