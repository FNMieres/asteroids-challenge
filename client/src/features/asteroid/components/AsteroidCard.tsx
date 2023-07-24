import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface AsteroidCardProps {
  id: string;
  name: string;
  date: string;
  diameter: number;
  velocity: string;
  isHazardous: boolean;
  isFavorite: boolean;
  onClickFavorite: (id: string) => void;
}

function AsteroidCard({
  id,
  name,
  date,
  diameter,
  velocity,
  isHazardous,
  isFavorite,
  onClickFavorite,
}: AsteroidCardProps) {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardHeader
        title={name}
        titleTypographyProps={{ align: "center" }}
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={() => onClickFavorite(id)}
          >
            <FavoriteIcon color={isFavorite ? "secondary" : "inherit"} />
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
        <Box sx={{ listStyleType: "none" }}>
          <Typography component="li" variant="subtitle1" align="center">
            Date: {date}
          </Typography>
          <Typography component="li" variant="subtitle1" align="center">
            Estimated diameter: {diameter} meters
          </Typography>
          <Typography component="li" variant="subtitle1" align="center">
            Estimated speed: {velocity} KM/H
          </Typography>
          <Typography
            component="li"
            variant="subtitle1"
            align="center"
            color={isHazardous ? "red" : "inherit"}
          >
            {isHazardous
              ? "Is potentially hazardous"
              : "Is not potentially hazardous"}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button href={`asteroids/${id}`}>View more details</Button>
      </CardActions>
    </Card>
  );
}

export default AsteroidCard;
