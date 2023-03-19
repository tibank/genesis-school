import { CourcesService } from '../../services/CourcesService';
import { AppDispatch } from '../store';
import { courseSlice } from './CoursesSlice';

export const fetchCourses = () => async (dispatch: AppDispatch) => {
    const isMockApi: string = process.env.REACT_APP_MOCK_API ? process.env.REACT_APP_MOCK_API : '0';
    try {
        dispatch(courseSlice.actions.coursesFetching());
        const response = parseInt(isMockApi)
            ? await CourcesService.findAllMock()
            : await CourcesService.findAll();
        dispatch(courseSlice.actions.coursesFetchingSuccess(response.data.courses));
    } catch (err: unknown) {
        if (err instanceof Error) {
            dispatch(courseSlice.actions.coursesFetchingError(err.message));
        }
    }
};
