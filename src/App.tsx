import React from 'react';
import './App.css';
import { ErrorMessage } from './components/common/ErrorMessage';
import { CoursesListHeader } from './components/course/list/header/CoursesListHeader';
import { CourseListItem } from './components/course/list/item/CourseListItem';

function App() {
    return (
        <div className='App'>
            <CoursesListHeader />
            <CourseListItem />
        </div>
    );
}

export default App;
