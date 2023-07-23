import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { NearEarthObject } from "../../types";
import { fetchAsteroids } from "./asteroidsAPI";

export interface AsteroidsState {
  asteroids: NearEarthObject[] | null;
  asteroidsStatus: "idle" | "loading" | "failed";
  asteroidsError: unknown | null;
}

const initialState: AsteroidsState = {
  asteroids: null,
  asteroidsStatus: "idle",
  asteroidsError: null,
};

interface SearchAsteroidsParams {
  startDate: string;
  endDate: string;
}

export const searchAsteroids = createAsyncThunk(
  "asteroids/fetchAsteroids",
  async ({ startDate, endDate }: SearchAsteroidsParams) => {
    const response = await fetchAsteroids(startDate, endDate);
    return response.data;
  },
);

export const asteroidsSlice = createSlice({
  name: "asteroids",
  initialState,
  reducers: {
    clearAsteroidsError: (state) => {
      state.asteroidsError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAsteroids.pending, (state) => {
        state.asteroidsStatus = "loading";
      })
      .addCase(searchAsteroids.fulfilled, (state, { payload }) => {
        state.asteroidsStatus = "idle";
        state.asteroids = payload;
      })
      .addCase(searchAsteroids.rejected, (state, { payload }) => {
        state.asteroidsStatus = "failed";
        state.asteroidsError = payload;
      });
  },
});

export const { clearAsteroidsError } = asteroidsSlice.actions;

export const selectAsteroids = (state: RootState) => state.asteroids.asteroids;

export default asteroidsSlice.reducer;
