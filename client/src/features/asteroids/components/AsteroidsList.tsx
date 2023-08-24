import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AsteroidElement } from "../../../types";
import AsteroidCard from "../../asteroid/components/AsteroidCard";
import { useAppDispatch } from "../../../app/hooks";
import {
  addAsteroidToFavorites,
  removeAsteroidFromFavorites,
} from "../../asteroid/asteroidSlice";

const itemsPerPage = 5;

interface AsteroidsListProps {
  asteroids: AsteroidElement[] | null;
}

function AsteroidsList({ asteroids }: AsteroidsListProps) {
  const dispatch = useAppDispatch();

  const [visibleAsteroids, setVisibleAsteroids] = useState(
    asteroids?.slice(0, itemsPerPage) || [],
  );

  useEffect(() => {
    setVisibleAsteroids(asteroids?.slice(0, itemsPerPage) || []);
  }, [asteroids]);

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

  const handleSeeMore = () => {
    const nextIndex = visibleAsteroids.length + itemsPerPage;
    const nextAsteroids = asteroids?.slice(0, nextIndex) || [];
    setVisibleAsteroids(nextAsteroids);
  };

  return (
    <Stack spacing={4}>
      {asteroids && (
        <>
          {visibleAsteroids.map((asteroid) => (
            <AsteroidCard
              key={asteroid.id}
              id={asteroid.id}
              name={asteroid.name}
              date={asteroid.close_approach_data[0].close_approach_date}
              diameter={
                asteroid.estimated_diameter.meters.estimated_diameter_max
              }
              velocity={
                asteroid.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              }
              isHazardous={asteroid.is_potentially_hazardous_asteroid}
              isFavorite={asteroid.favorite}
              onClickFavorite={toggleFavorite}
            />
          ))}
          {asteroids && visibleAsteroids.length < asteroids.length && (
            <Button variant="contained" onClick={handleSeeMore}>
              See More
            </Button>
          )}
        </>
      )}
    </Stack>
  );
}

export default AsteroidsList;
