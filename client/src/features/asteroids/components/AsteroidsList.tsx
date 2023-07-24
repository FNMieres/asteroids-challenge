import Stack from "@mui/material/Stack";
import { AsteroidElement } from "../../../types";
import AsteroidCard from "../../asteroid/components/AsteroidCard";
import { useAppDispatch } from "../../../app/hooks";
import {
  addAsteroidToFavorites,
  removeAsteroidFromFavorites,
} from "../../asteroid/asteroidSlice";

interface AsteroidsListProps {
  asteroids: AsteroidElement[] | null;
}

function AsteroidsList({ asteroids }: AsteroidsListProps) {
  const dispatch = useAppDispatch();

  const toggleFavorite = (id: string) => {
    const asteroidFound = asteroids?.find((asteroid) => asteroid.id === id);
    if (asteroidFound) {
      if (asteroidFound?.favorite) {
        dispatch(removeAsteroidFromFavorites({ id }));
      } else {
        dispatch(addAsteroidToFavorites({ id }));
      }
    }
  };

  return (
    <Stack spacing={4}>
      {asteroids &&
        asteroids.map((asteroid) => (
          <AsteroidCard
            key={asteroid.id}
            id={asteroid.id}
            name={asteroid.name}
            date={asteroid.close_approach_data[0].close_approach_date}
            diameter={asteroid.estimated_diameter.meters.estimated_diameter_max}
            velocity={
              asteroid.close_approach_data[0].relative_velocity
                .kilometers_per_hour
            }
            isHazardous={asteroid.is_potentially_hazardous_asteroid}
            isFavorite={asteroid.favorite}
            onClickFavorite={toggleFavorite}
          />
        ))}
    </Stack>
  );
}

export default AsteroidsList;
