import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getOAuth } from "../api/animalsAPI";

export interface AnimalState {
  value: any;
  status: "idle" | "loading" | "failed";
}

const initialState: AnimalState = {
  value: {
    animals: [],
    pagination: {}
  },
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
  reducers: {
    setAnimals: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
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
export const loadingAnimals = (state: RootState) => state.animals.status;

export default AnimalsSlice.reducer;
