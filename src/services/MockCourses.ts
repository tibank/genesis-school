import { ICourse } from '../models/ICourse';
import mock from './mock.json';

interface IResponseCourses {
  courses: ICourse[];
}

interface IResponse {
  data: IResponseCourses;
}

export const coursesMock = (): IResponse => {
  return mock as IResponse;
};
