import axios from 'axios';
import { ICourse } from '../models/ICourse';
import { coursesMock } from './MockCourses';

interface IResponseCourses {
  courses: ICourse[];
}

export class CourcesService {
  static async findAll() {
    const token: string = [
      process.env.REACT_APP_HEADER,
      process.env.REACT_APP_BODY,
      process.env.REACT_APP_SIGNATRE,
    ].join('.');

    const url: string = process.env.REACT_APP_BASEURL + 'core/preview-courses';
    console.log(`token ${token}`);
    console.log(`url ${url}`);

    return await axios.get<IResponseCourses>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  static async findAll2() {
    return await coursesMock();
  }
}
