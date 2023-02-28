import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getOAuth } from "../api/animalsAPI";

export interface TypesState {
  value: any;
  status: "idle" | "loading" | "failed";
}

const initialState: TypesState = {
  value: {
    types: {
      coats: [],
      colors: [],
      genders: []
    }
  },
  status: "idle",
};

export const getTypes = createAsyncThunk(
  "types/fetchTypes",
  async (url: string, thunkApi) => {
    try {
      const response = await getOAuth(url);
      thunkApi.dispatch(setTypes(response));
    } catch (err) {
      console.log("err", err);
    }
    // The value we return becomes the `fulfilled` action payload
  }
);

export const TypesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    setTypes: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTypes.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getTypes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setTypes } = TypesSlice.actions;

export const selectTypes = (state: RootState) => state.types.value;
export const loadingTypes = (state: RootState) => state.types.status;

export default TypesSlice.reducer;
