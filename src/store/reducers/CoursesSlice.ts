import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICourse } from '../../models/ICourse';
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
        coursesFetching(state) {
            state.isLoading = true;
        },

        coursesFetchingSuccess(state, action: PayloadAction<ICourse[]>) {
            state.isLoading = false;
            state.error = '';
            state.courses = action.payload;
        },

        coursesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default courseSlice.reducer;
