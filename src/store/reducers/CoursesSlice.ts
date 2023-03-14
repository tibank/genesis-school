import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICourseState } from '../interfaces/ICourseState';

const initialState: ICourseState = {
  courses: [],
  isLoading: false,
  error: '',
  count: 0,
};

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export default courseSlice.reducer;
