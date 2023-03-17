import { CourcesService } from '../../services/CourcesService';
import { AppDispatch } from '../store';
import { courseSlice } from './CoursesSlice';

export const fetchCourses = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(courseSlice.actions.coursesFetching());
    const response = await CourcesService.findAll2();
    dispatch(courseSlice.actions.coursesFetchingSuccess(response.data.courses));
  } catch (err: unknown) {
    if (err instanceof Error) {
      dispatch(courseSlice.actions.coursesFetchingError(err.message));
    }
  }
};
