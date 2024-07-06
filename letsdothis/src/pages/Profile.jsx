import React from "react";
import { Grid, Avatar, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import man_av from "../assets/man_avatar.jpg";
import Navbar from "../structure/Navbar";

// import GitHubIcon from "@mui/icons-material/GitHub";

import Footer_2 from "../structure/Footer_2";
// import GitHub from "@mui/icons-material/GitHub";

// Styled component for the stacked items
const StackedItem = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const Profile = () => {
  return (
    <>
      {/* <GitHubIcon />
       */}
      <Navbar />
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        backgroundColor="	#b0b0b0"
      >
        <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
          {/* Profile Picture */}
          <Avatar
            alt="User Profile Picture"
            src={man_av}
            sx={{
              width: 150,
              height: 150,
              marginBottom: 2,
            }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          {/* Stacked Items */}
          <StackedItem component={Button} fullWidth>
            Profile Settings
          </StackedItem>
          <StackedItem component={Button} fullWidth>
            Account Settings
          </StackedItem>
          <StackedItem component={Button} fullWidth>
            View Billing
          </StackedItem>
          <StackedItem component={Button} fullWidth>
            Advertise
          </StackedItem>
          <StackedItem component={Button} fullWidth>
            Log out
          </StackedItem>
        </Grid>
      </Grid>
      <Footer_2 />
    </>
  );
};

export default Profile;
