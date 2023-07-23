import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AsteroidSearchForm from "../features/asteroids/components/AsteroidSearchForm";
import { useAsteroids } from "../features/asteroids/hooks";
import AsteroidsList from "../features/asteroids/components/AsteroidsList";

function SearchAsteroids() {
  const { asteroids, searchAsteroidsAction } = useAsteroids();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
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
          }}
        >
          <AsteroidSearchForm onClickSearch={searchAsteroidsAction} />
        </Box>
        <AsteroidsList asteroids={asteroids} />
      </Container>
    </Box>
  );
}

export default SearchAsteroids;
