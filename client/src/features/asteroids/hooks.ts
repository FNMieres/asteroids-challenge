import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  searchAsteroids,
  selectAsteroids,
  selectIsAsteroidsLoading,
} from "./asteroidsSlice";

export const useAsteroids = () => {
  const dispatch = useAppDispatch();
  const asteroids = useAppSelector(selectAsteroids);
  const isAsteroidsLoading = useAppSelector(selectIsAsteroidsLoading);

  const searchAsteroidsAction = async (startDate: string, endDate: string) => {
    dispatch(searchAsteroids({ startDate, endDate }));
  };

  return { asteroids, isAsteroidsLoading, searchAsteroidsAction };
};
