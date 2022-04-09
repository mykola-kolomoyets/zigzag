import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import summaryReducer from './slices/summary';

const store = configureStore({
  reducer: {
    summary: summaryReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;