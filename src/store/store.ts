import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import courseReducer from './reducers/CoursesSlice';

const rootReducer = combineReducers({
  courseReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
