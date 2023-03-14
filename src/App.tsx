import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchCourses } from './store/reducers/CoursesFetch';

function App() {
    const dispatch = useAppDispatch();
    const { courses } = useAppSelector((state) => state.courseReducer);

    ///useEffect(() => {
    //    dispatch(fetchCourses());
    //});

    return <div className='App'>{JSON.stringify(courses, null, 2)}</div>;
}

//
export default App;
function useEffect(arg0: () => void) {
    throw new Error('Function not implemented.');
}
