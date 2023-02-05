import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import animalsReducer from './slice/animalsSlice';
import breedsReducer from "./slice/breedsSlice";
import typesReducer from "./slice/typesSlice";
import animalReducer from "./slice/singleAnimalSlice";

export const store = configureStore({
  reducer: {
    animals: animalsReducer,
    breeds: breedsReducer,
    types: typesReducer,
    animal: animalReducer,
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
