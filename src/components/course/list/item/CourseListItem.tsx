import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { fetchCourses } from '../../../../store/reducers/CoursesFetch';
import { ErrorMessage } from '../../../common/ErrorMessage';
import { CourseItem } from '../../item/CourseRow';

export const CourseListItem: FC<{}> = () => {
    const dispatch = useAppDispatch();
    const { courses, isLoading, error } = useAppSelector((state) => state.course);
    const qtyPerPage: number = process.env.REACT_APP_COURSES_PER_PAGE
        ? parseInt(process.env.REACT_APP_COURSES_PER_PAGE)
        : 10;

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    return (
        <div>
            {error && <ErrorMessage message={error} />}
            {courses
                .filter((course, i) => i < qtyPerPage)
                .map((course) => (
                    <div key={course.id}>
                        <CourseItem course={course} />
                    </div>
                ))}
        </div>
    );
};
