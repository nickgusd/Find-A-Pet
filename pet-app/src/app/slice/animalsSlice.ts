import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { fetchCount, fetchAnimals } from './counterAPI';
import { getOAuth } from "../api/animalsAPI";

export interface AnimalState {
  value: object;
  status: "idle" | "loading" | "failed";
}

const initialState: AnimalState = {
  value: [],
  status: "idle",
};

export const getAnimals = createAsyncThunk(
  "animals/fetchAnimals",
  async (url: string, thunkApi) => {
    try {
      const response = await getOAuth(url);
      thunkApi.dispatch(setAnimals(response));
    } catch (err) {
      console.log("err", err);
    }
    // The value we return becomes the `fulfilled` action payload
  }
);

export const AnimalsSlice = createSlice({
  name: "animals",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setAnimals: (state, action) => {
      console.log("payload", action.payload);
      state.value = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<string>) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnimals.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getAnimals.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setAnimals } = AnimalsSlice.actions;

export const selectAnimals = (state: RootState) => state.animals.value;

export default AnimalsSlice.reducer;
