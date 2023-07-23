import Stack from "@mui/material/Stack";
import { NearEarthObject } from "../../../types";
import AsteroidCard from "./AsteroidCard";

interface AsteroidsListProps {
  asteroids: NearEarthObject[] | null;
}

function AsteroidsList({ asteroids }: AsteroidsListProps) {
  return (
    <Stack spacing={4}>
      {asteroids &&
        asteroids.map((asteroid) => (
          <AsteroidCard
            key={asteroid.id}
            name={asteroid.name}
            date={asteroid.close_approach_data[0].close_approach_date}
            diameter={
              asteroid.estimated_diameter.kilometers.estimated_diameter_max
            }
            velocity={
              asteroid.close_approach_data[0].relative_velocity
                .kilometers_per_hour
            }
            isHazardous={asteroid.is_potentially_hazardous_asteroid}
            onClickFavorite={() => {}}
            onClickViewMoreDetails={() => {}}
          />
        ))}
    </Stack>
  );
}

export default AsteroidsList;
