import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AsteroidSearchForm from "../features/asteroids/components/AsteroidSearchForm";
import { useAsteroids } from "../features/asteroids/hooks";
import AsteroidsList from "../features/asteroids/components/AsteroidsList";

function SearchAsteroids() {
  const { asteroids, isAsteroidsLoading, searchAsteroidsAction } =
    useAsteroids();
  const [sort, setSort] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const sortedAsteroids =
    sort && asteroids
      ? asteroids.toSorted((a, b) => (a.name > b.name ? 1 : -1))
      : asteroids;

  const favoritesAsteroids =
    showFavorites && sortedAsteroids
      ? sortedAsteroids.filter((asteroid) => asteroid.favorite)
      : sortedAsteroids;

  const handleSortAsteroids = () => {
    setSort(!sort);
  };

  const handleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

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
          Asteroids Searcher
        </Typography>
        <Box
          sx={{
            my: 4,
            textAlign: "center",
          }}
        >
          <Button
            aria-label="sort asteroids by name"
            onClick={handleSortAsteroids}
            variant="contained"
            sx={{ mx: 2 }}
          >
            {sort ? "Revert sort by name" : "Sort by name"}
          </Button>
          <Button
            aria-label="toggle favorites"
            onClick={handleShowFavorites}
            variant="contained"
            sx={{ mx: 2 }}
          >
            {showFavorites ? "Show all" : "Show favorites"}
          </Button>
          <AsteroidSearchForm
            isLoading={isAsteroidsLoading}
            onClickSearch={searchAsteroidsAction}
          />
        </Box>
        <AsteroidsList asteroids={favoritesAsteroids} />
      </Container>
    </Box>
  );
}

export default SearchAsteroids;
