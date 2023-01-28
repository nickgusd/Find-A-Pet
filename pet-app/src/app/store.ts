import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import animalsReducer from './slice/animalsSlice';

export const store = configureStore({
  reducer: {
    animals: animalsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
