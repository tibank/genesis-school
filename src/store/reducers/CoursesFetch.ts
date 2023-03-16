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
      'Content-Type': 'application/json; charset=utf-8',
    },
  };

  interface IResponseCourses {
    courses: ICourse[];
  }

  try {
    console.log(config);
    dispatch(courseSlice.actions.coursesFetching());
    //axios.defaults.headers.common['Authorization'] = `Authorization: Bearer ${token}`;

    // axios.interceptors.request.use(function (config) {
    //   const token = 'Bearer ' + localStorage.getItem('token');
    //   config.headers.Authorization = `Bearer ${token}`;

    //   return config;
    // });

    const response = await axios.get<IResponseCourses>(url, config);
    dispatch(courseSlice.actions.coursesFetchingSuccess(response.data.courses));
  } catch (err: unknown) {
    if (err instanceof Error) {
      dispatch(courseSlice.actions.coursesFetchingError(err.message));
    }
  }
};
