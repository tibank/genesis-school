import axios from 'axios';
import { ICourse } from '../../models/ICourse';
import { AppDispatch } from '../store';
import { courseSlice } from './CoursesSlice';

export const fetchCourses = () => async (dispatch: AppDispatch) => {
    const url: string = 'http://api.wisey.app/api/v1/core/preview-courses';

    const header: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    const body: string =
        'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0';
    const signature: string = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM';
    const token: string = [header, body, signature].join('.');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        dispatch(courseSlice.actions.coursesFetching());
        //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get<ICourse[]>(url, config);
        dispatch(courseSlice.actions.coursesFetchingSuccess(response.data));
    } catch (error) {}
};
