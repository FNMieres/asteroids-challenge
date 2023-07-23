import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import asteroidsReducer from "../features/asteroids/asteroidsSlice";

export const store = configureStore({
  reducer: {
    asteroids: asteroidsReducer,
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
