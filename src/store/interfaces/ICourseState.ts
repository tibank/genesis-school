import { ICourse } from '../../models/ICourse';

export interface ICourseState {
  courses: ICourse[];
  isLoading: boolean;
  error: string;
  count: number;
}
