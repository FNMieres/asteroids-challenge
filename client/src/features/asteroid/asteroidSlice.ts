import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { AsteroidElement } from "../../types";
import {
  addFavoriteAsteroid,
  fetchAsteroid,
  removeFavoriteAsteroid,
} from "./asteroidAPI";
import {
  removeAsteroidAsFavorite,
  setAsteroidAsFavorite,
} from "../asteroids/asteroidsSlice";

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

export const searchAsteroid = createAsyncThunk(
  "asteroid/fetchAsteroid",
  async ({ id }: { id: string }) => {
    const response = await fetchAsteroid(id);
    return response.data;
  },
);

export const addAsteroidToFavorites = createAsyncThunk(
  "asteroid/addFavorite",
  async ({ id }: { id: string }, { dispatch }) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    dispatch(setFavorite());

    dispatch(setAsteroidAsFavorite(id));
    const response = await addFavoriteAsteroid(id);

    return response.data;
  },
);

export const removeAsteroidFromFavorites = createAsyncThunk(
  "asteroid/removeFavorite",
  async ({ id }: { id: string }, { dispatch }) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    dispatch(removeFavorite());
    dispatch(removeAsteroidAsFavorite(id));
    const response = await removeFavoriteAsteroid(id);
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
    setFavorite: (state) => {
      if (state.value) {
        state.value.favorite = true;
      }
    },
    removeFavorite: (state) => {
      if (state.value) {
        state.value.favorite = false;
      }
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

export const { clearAsteroidError, setFavorite, removeFavorite } =
  asteroidSlice.actions;

export const selectAsteroid = (state: RootState) => state.asteroid.value;
export const selectIsAsteroidLoading = (state: RootState) =>
  state.asteroid.status === "loading";

export default asteroidSlice.reducer;
