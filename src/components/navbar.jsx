import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { countFavorites } = useSelector((state) => state.getMovies);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        bgcolor: " #1A161F",
        color: "white",
        height: "100vh",
      }}
    >
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemText primary="Home" sx={{ color: "white" }} />
        </ListItem>
        <ListItem button component={Link} to="favorites">
          <ListItemText
            primary={`Favorites (${countFavorites})`}
            sx={{ color: "white" }}
          />
          <FavoriteIcon color="error" />
        </ListItem>
        <ListItem button component={Link} to="profile">
          <ListItemText primary="Profile" sx={{ color: "white" }} />
        </ListItem>
        <ListItem button component={Link} to="about">
          <ListItemText primary="About Us" sx={{ color: "white" }} />
        </ListItem>
        <ListItem button component={Link} to="contactUs">
          <ListItemText primary="Contact Us" sx={{ color: "white" }} />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Logout" sx={{ color: "white" }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", px: 2, boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/myMovieApp/home"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Movie App 🍿
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit"  component={Link} to="favorites">
              Favorites ({countFavorites}) <FavoriteIcon sx={{ ml: 0.5 }} />
            </Button>
            <Button color="inherit" component={Link} to="profile">
              profile
            </Button>
            <Button color="inherit" component={Link} to="about">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="contactUs">
              Contact Us
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
