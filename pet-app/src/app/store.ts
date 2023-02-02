import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import animalsReducer from './slice/animalsSlice';
import breedsReducer from "./slice/breedsSlice";
import typesReducer from "./slice/typesSlice"

export const store = configureStore({
  reducer: {
    animals: animalsReducer,
    breeds: breedsReducer,
    types: typesReducer,
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
