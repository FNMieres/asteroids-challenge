import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import asteroidsReducer from "../features/asteroids/asteroidsSlice";
import asteroidReducer from "../features/asteroid/asteroidSlice";

export const store = configureStore({
  reducer: {
    asteroids: asteroidsReducer,
    asteroid: asteroidReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
