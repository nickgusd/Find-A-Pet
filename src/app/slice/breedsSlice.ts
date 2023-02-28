import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getOAuth } from "../api/animalsAPI";

export interface BreedsState {
  value: any;
  status: "idle" | "loading" | "failed";
}

const initialState: BreedsState = {
  value: {
    breeds: [],
  },
  status: "idle",
};

export const getBreeds = createAsyncThunk(
  "breeds/fetchBreeds",
  async (url: string, thunkApi) => {
    try {
      const response = await getOAuth(url);
      thunkApi.dispatch(setBreeds(response));
    } catch (err) {
      console.log("err", err);
    }
    // The value we return becomes the `fulfilled` action payload
  }
);

export const BreedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBreeds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBreeds.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getBreeds.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setBreeds } = BreedsSlice.actions;

export const selectBreeds = (state: RootState) => state.breeds.value;
export const loadingBreeds = (state: RootState) => state.breeds.status;

export default BreedsSlice.reducer;
