import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AsteroidCardDetail from "../features/asteroid/components/AsteroidCardDetail";
import { useAsteroid } from "../features/asteroid/hooks";

function AsteroidDetail() {
  const { asteroidId } = useParams();
  const { asteroid, isAsteroidLoading, searchAsteroidAction } = useAsteroid();

  useEffect(() => {
    if (asteroidId) {
      searchAsteroidAction(asteroidId);
    }
  }, [asteroidId]);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Asteroid Detail
        </Typography>
        <AsteroidCardDetail
          asteroid={asteroid}
          isLoading={isAsteroidLoading}
          onClickFavorite={() => {}}
        />
      </Container>
    </Box>
  );
}

export default AsteroidDetail;
