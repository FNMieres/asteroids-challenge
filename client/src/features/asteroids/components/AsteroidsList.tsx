import Stack from "@mui/material/Stack";
import { AsteroidElement } from "../../../types";
import AsteroidCard from "../../asteroid/components/AsteroidCard";

interface AsteroidsListProps {
  asteroids: AsteroidElement[] | null;
}

function AsteroidsList({ asteroids }: AsteroidsListProps) {
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
            onClickFavorite={() => {}}
          />
        ))}
    </Stack>
  );
}

export default AsteroidsList;
