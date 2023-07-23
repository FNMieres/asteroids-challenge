import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchAsteroids, selectAsteroids } from "./asteroidsSlice";

export const useAsteroids = () => {
  const dispatch = useAppDispatch();
  const asteroids = useAppSelector(selectAsteroids);

  const searchAsteroidsAction = async (startDate: string, endDate: string) => {
    dispatch(searchAsteroids({ startDate, endDate }));
  };

  return { asteroids, searchAsteroidsAction };
};
