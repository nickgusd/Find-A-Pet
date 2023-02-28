import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getOAuth } from "../api/animalsAPI";

export interface SingleAnimalState {
  value: any;
  status: "idle" | "loading" | "failed";
}

const initialState: SingleAnimalState = {
  value: {
    animal: [],
  },
  status: "idle",
};

export const getAnimal = createAsyncThunk(
  "animal/fetchAnimal",
  async (url: string, thunkApi) => {
    try {
      const response = await getOAuth(url);
      thunkApi.dispatch(setAnimal(response));
    } catch (err) {
      console.log("err", err);
    }
    // The value we return becomes the `fulfilled` action payload
  }
);

export const AnimalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    setAnimal: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnimal.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getAnimal.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setAnimal } = AnimalSlice.actions;

export const selectAnimal = (state: RootState) => state.animal.value;
export const loadingAnimal = (state: RootState) => state.animal.status;

export default AnimalSlice.reducer;
