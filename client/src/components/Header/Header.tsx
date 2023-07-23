import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <RocketLaunchIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Asteroids Viewer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
