import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getOAuth } from "../api/animalsAPI";

export interface OrganizationsState {
  value: any;
  status: "idle" | "loading" | "failed";
}

const initialState: OrganizationsState = {
  value: {
    organization: {},
    pagination: {}
  },
  status: "idle",
};

export const getOrganizations = createAsyncThunk(
  "organizations/fetchOrganizations",
  async (url: string, thunkApi) => {
    try {
      const response = await getOAuth(url);
      thunkApi.dispatch(setOrganizations(response));
    } catch (err) {
      console.log("err", err);
    }
    // The value we return becomes the `fulfilled` action payload
  }
);

export const OrganizationsSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {
    setOrganizations: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrganizations.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getOrganizations.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setOrganizations } = OrganizationsSlice.actions;

export const selectOrganizations = (state: RootState) => state.organizations.value;
export const loadingOrganizations = (state: RootState) => state.organizations.status;

export default OrganizationsSlice.reducer;
