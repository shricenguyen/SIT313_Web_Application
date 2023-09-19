//import react , material ui components and logos
import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        background: "#b0bec5",
        py: 2,
      }}
    >
      <Container sx={{ paddingBottom: "2rem" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6">For Dev</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>How it works</li>
                <li>How to create a profile</li>
                <li>Find jobs</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6">For Clients</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>How it works</li>
                <li>How to post a job</li>
                <li>Find a dev</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6">Stay Connected</Typography>
            <Box>
              <FacebookIcon fontSize="large" sx={{ marginRight: "1rem" }} />
              <TwitterIcon fontSize="large" sx={{ margin: "0 1rem" }} />
              <InstagramIcon fontSize="large" sx={{ margin: "0 1rem" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box justifyContent="center" display="flex" mt={2} textAlign="center">
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6">DEVLink</Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <p style={{ marginRight: "3rem" }}>Privacy Policy</p>
              <p style={{ marginRight: "3rem" }}>Terms of Service</p>
              <p>Code of Conduct</p>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
