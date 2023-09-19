//Navigation Bar component
//import React from 'react' and Material-UI
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static" color="grey" sx={{ bgcolor: "grey.300" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            DevLink Marketplace
          </Link>
        </Typography>
        <Button link to="/job-form" color="inherit" sx={{ ml: 9 }}>
          <Link to="/job-form" style={{ textDecoration: "none" }}>
            Jobs
          </Link>
        </Button>
        <Button link to="/login" color="inherit" sx={{ ml: 9 }}>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              pt: 2,
            }}
          >
            Login
          </Link>
        </Button>
        <Button link to="/register" color="inherit" sx={{ ml: 9 }}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

//export the NavBar component
export default NavBar;
