import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Dashbord from "./Dashbord";
import { useState } from "react";
// import { Redirect } from "react-router-dom";
import axios from "axios";
import Footer_2 from "../structure/Footer_2";
import { jwtDecode } from "jwt-decode";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import m_logo from "../assets/logo.png";

const LogoImage = styled("img")({
  width: "10px",
  marginBottom: "theme.spacing(2)",
});

const BackgroundContainer = styled("div")({
  height: "100vh",
  backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StyledContainer = styled(Container)({
  backgroundColor: "rgba(196, 168, 168, 0.45)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(11.5px)",
  WebkitBackdropFilter: "blur(11.5px)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  padding: "20px",
});
// const StyledContainer = styled(Container)({
//   backgroundColor: "rgba(255, 255, 255, 0.8)",
//   backdropFilter: "blur(10px)",
//   borderRadius: "10px",
//   padding: "20px",
// });
const Register = () => {
  return (
    <BackgroundContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledContainer>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Grid item xs={12} align="center">
              <LogoImage
                src={m_logo}
                style={{ width: "10rem", height: "10rem" }}
                alt="Logo"
              />
            </Grid>
            <Typography
              component="h1"
              variant="h5"
              style={{ fontSize: "3rem", fontFamily: "pacifico" }}
            >
              Let's Begin
            </Typography>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="profession"
                label="profession"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="checkpassword"
                label="re-type Password"
                type="password"
                id="password000"
                autoComplete="current-password"
                // onChange={(e) => setPassword(e.target.value)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2" color="#000">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="#" variant="body2" color="#000">
                    {"Already a user? Log in "}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </StyledContainer>
      </Container>
    </BackgroundContainer>
  );
};
export default Register;
