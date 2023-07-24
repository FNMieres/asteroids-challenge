import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  searchAsteroid,
  selectAsteroid,
  selectIsAsteroidLoading,
} from "./asteroidSlice";

export const useAsteroid = () => {
  const dispatch = useAppDispatch();
  const asteroid = useAppSelector(selectAsteroid);
  const isAsteroidLoading = useAppSelector(selectIsAsteroidLoading);

  const searchAsteroidAction = (id: string) => {
    dispatch(searchAsteroid({ id }));
  };

  return { asteroid, isAsteroidLoading, searchAsteroidAction };
};
