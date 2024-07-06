import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import About from "../pages/About";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Link,
  ListItem,
  List,
  ListItemText,
  Drawer,
  Button,
  IconButton,
} from "@mui/material";
import { ThemeProvider } from "react-bootstrap";
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#000" }}
          >
            Asset Alchemy
          </Typography>
          {/* Display menu icon for smaller screen sizes */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Display navigation links for larger screen sizes */}
          <Button
            color="inherit"
            // component={RouterLink}
            // to="/"
            sx={{ display: { xs: "none", sm: "block", color: "#000" } }}
          >
            <Link
              href="/"
              sx={{
                color: "#000",
                textDecoration: "none", // Remove underline
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              Home
            </Link>
          </Button>
          <Button
            color="inherit"
            sx={{ display: { xs: "none", sm: "block", color: "#000" } }}
          >
            <Link
              href="/features"
              sx={{
                color: "#000",
                textDecoration: "none", // Remove underline
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              Features
            </Link>
          </Button>
          <Button
            color="inherit"
            // component={RouterLink}
            // to="/about"
            sx={{ display: { xs: "none", sm: "block", color: "#000" } }}
          >
            <Link
              href="/about"
              sx={{
                color: "#000",
                textDecoration: "none", // Remove underline
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              About
            </Link>
          </Button>
          <Button
            color="inherit"
            // component={RouterLink}
            // to="/about"
            sx={{ display: { xs: "none", sm: "block", color: "#000" } }}
          >
            <Link
              href="/profile"
              sx={{
                color: "#000",
                textDecoration: "none", // Remove underline
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              Profile
            </Link>
          </Button>
        </Toolbar>
        {/* Drawer for displaying navigation links in smaller screen sizes */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250 }} onClick={toggleDrawer}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Features" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </ThemeProvider>
  );
}
