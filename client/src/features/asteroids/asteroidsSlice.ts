import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { AsteroidElement } from "../../types";
import { fetchAsteroids } from "./asteroidsAPI";

export interface AsteroidsState {
  value: AsteroidElement[] | null;
  status: "idle" | "loading" | "failed";
  error: unknown | null;
}

const initialState: AsteroidsState = {
  value: null,
  status: "idle",
  error: null,
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
      state.error = null;
    },
    setAsteroidAsFavorite: (state, { payload }) => {
      state.value = state.value!.map((asteroid) =>
        asteroid.id === payload ? { ...asteroid, favorite: true } : asteroid,
      );
    },
    removeAsteroidAsFavorite: (state, { payload }) => {
      state.value = state.value!.map((asteroid) =>
        asteroid.id === payload ? { ...asteroid, favorite: false } : asteroid,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAsteroids.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchAsteroids.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.value = payload;
      })
      .addCase(searchAsteroids.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      });
  },
});

export const {
  clearAsteroidsError,
  setAsteroidAsFavorite,
  removeAsteroidAsFavorite,
} = asteroidsSlice.actions;

export const selectAsteroids = (state: RootState) => state.asteroids.value;
export const selectIsAsteroidsLoading = (state: RootState) =>
  state.asteroids.status === "loading";

export default asteroidsSlice.reducer;
