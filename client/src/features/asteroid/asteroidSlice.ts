import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { AsteroidElement } from "../../types";
import { fetchAsteroid } from "./asteroidAPI";

export interface AsteroidState {
  value: AsteroidElement | null;
  status: "idle" | "loading" | "failed";
  error: unknown | null;
}

const initialState: AsteroidState = {
  value: null,
  status: "idle",
  error: null,
};

interface SearchAsteroidParams {
  id: string;
}

export const searchAsteroid = createAsyncThunk(
  "asteroid/fetchAsteroid",
  async ({ id }: SearchAsteroidParams) => {
    const response = await fetchAsteroid(id);
    return response.data;
  },
);

export const asteroidSlice = createSlice({
  name: "asteroid",
  initialState,
  reducers: {
    clearAsteroidError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAsteroid.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchAsteroid.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.value = payload;
      })
      .addCase(searchAsteroid.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      });
  },
});

export const { clearAsteroidError } = asteroidSlice.actions;

export const selectAsteroid = (state: RootState) => state.asteroid.value;
export const selectIsAsteroidLoading = (state: RootState) =>
  state.asteroid.status === "loading";

export default asteroidSlice.reducer;
