import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { AsteroidElement } from "../../../types";

interface AsteroidCardDetailProps {
  asteroid: AsteroidElement | null;
  isLoading: boolean;
  onClickFavorite: () => void;
}

function AsteroidCardDetail({
  asteroid,
  isLoading,
  onClickFavorite,
}: AsteroidCardDetailProps) {
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    asteroid && (
      <Card sx={{ borderRadius: 2 }}>
        <CardHeader
          title={asteroid.name}
          titleTypographyProps={{ align: "center" }}
          action={
            <IconButton aria-label="add to favorites" onClick={onClickFavorite}>
              <FavoriteIcon
                color={asteroid.favorite ? "secondary" : "inherit"}
              />
            </IconButton>
          }
          subheaderTypographyProps={{
            align: "center",
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Typography variant="h5" align="center">
            General Information
          </Typography>
          <Typography variant="body1" align="center">
            Date: {asteroid.close_approach_data[0].close_approach_date}
          </Typography>
          <Typography variant="body1" align="center">
            Estimated diameter:{" "}
            {asteroid.estimated_diameter.meters.estimated_diameter_max} meters
          </Typography>
          <Typography variant="body1" align="center">
            Estimated speed:{" "}
            {
              asteroid.close_approach_data[0].relative_velocity
                .kilometers_per_hour
            }{" "}
            KM/H
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color={
              asteroid.is_potentially_hazardous_asteroid ? "red" : "inherit"
            }
          >
            {asteroid.is_potentially_hazardous_asteroid
              ? "Is potentially hazardous"
              : "Is not potentially hazardous"}
          </Typography>

          <Typography variant="h5" align="center" mt={2}>
            Orbital Information
          </Typography>
          <Typography variant="body1" align="center">
            Orbit determination date:{" "}
            {asteroid.orbital_data?.orbit_determination_date}
          </Typography>
          <Typography variant="body1" align="center">
            First observation date:{" "}
            {asteroid.orbital_data?.first_observation_date}
          </Typography>
          <Typography variant="body1" align="center">
            Last observation date:{" "}
            {asteroid.orbital_data?.last_observation_date}
          </Typography>
          <Typography variant="body1" align="center">
            Data arc in days: {asteroid.orbital_data?.data_arc_in_days}
          </Typography>
          <Typography variant="body1" align="center">
            Observations used: {asteroid.orbital_data?.observations_used}
          </Typography>
          <Typography variant="body1" align="center">
            Orbit uncertainty: {asteroid.orbital_data?.orbit_uncertainty}
          </Typography>
          <Typography variant="body1" align="center">
            Minimum orbit intersection:{" "}
            {asteroid.orbital_data?.minimum_orbit_intersection}
          </Typography>
          <Typography variant="body1" align="center">
            Jupiter Tisserand invariant:{" "}
            {asteroid.orbital_data?.jupiter_tisserand_invariant}
          </Typography>
          <Typography variant="body1" align="center">
            Epoch osculation: {asteroid.orbital_data?.epoch_osculation}
          </Typography>
          <Typography variant="body1" align="center">
            Eccentricity: {asteroid.orbital_data?.eccentricity}
          </Typography>
          <Typography variant="body1" align="center">
            Semi-major axis: {asteroid.orbital_data?.semi_major_axis}
          </Typography>
          <Typography variant="body1" align="center">
            Inclination: {asteroid.orbital_data?.inclination}
          </Typography>
          <Typography variant="body1" align="center">
            Ascending node longitude:{" "}
            {asteroid.orbital_data?.ascending_node_longitude}
          </Typography>
          <Typography variant="body1" align="center">
            Orbital period: {asteroid.orbital_data?.orbital_period}
          </Typography>
          <Typography variant="body1" align="center">
            Perihelion distance: {asteroid.orbital_data?.perihelion_distance}
          </Typography>
          <Typography variant="body1" align="center">
            Perihelion argument: {asteroid.orbital_data?.perihelion_argument}
          </Typography>
          <Typography variant="body1" align="center">
            Aphelion distance: {asteroid.orbital_data?.aphelion_distance}
          </Typography>
          <Typography variant="body1" align="center">
            Perihelion time: {asteroid.orbital_data?.perihelion_time}
          </Typography>
          <Typography variant="body1" align="center">
            Mean anomaly: {asteroid.orbital_data?.mean_anomaly}
          </Typography>
          <Typography variant="body1" align="center">
            Mean motion: {asteroid.orbital_data?.mean_motion}
          </Typography>
          <Typography variant="body1" align="center">
            Equinox: {asteroid.orbital_data?.equinox}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button href="/">Go to Homepage</Button>
        </CardActions>
      </Card>
    )
  );
}

export default AsteroidCardDetail;
