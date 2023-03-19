import axios from 'axios';
import { ICourse } from '../models/ICourse';
import { coursesMock } from './MockCourses';

interface IResponseCourses {
    courses: ICourse[];
}

export class CourcesService {
    static async findAll() {
        const token2: string = [
            process.env.REACT_APP_HEADER,
            process.env.REACT_APP_BODY,
            process.env.REACT_APP_SIGNATRE,
        ].join('.');

        const token: string =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMjM0NjI1OS0zNzc4LTQ5YzEtYTI5Yy01MDhmYTc4ZDJlMjkiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkyMzAzOTMsImV4cCI6MTY4MDEzMDM5M30.fZL293gHLxIjyGOLGPLfrRwI-2RL_1ELyPjRBCirSd8';
        const url: string = process.env.REACT_APP_BASEURL + 'core/preview-courses';

        return await axios.get<IResponseCourses>(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json; charset=utf-8',
            },
        });
    }

    static async findAllMock() {
        return coursesMock();
    }
}
