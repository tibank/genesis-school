import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { courseSlice } from './store/reducers/CoursesSlice';

function App() {
  const { increment } = courseSlice.actions;
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.courseReducer);

  return <div className='App'>Genesis</div>;
}

export default App;
