import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Button,
  IconButton,
} from "@mui/material";
// import { GitHub, LinkedIn } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
// import IconButton from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export default function Footer_2() {
  return (
    <footer style={{ backgroundColor: "#45526e", color: "white" }}>
      <Container
        maxWidth="lg"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              <Link href="/" color="inherit">
                Asset Alchemy
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to our Asset Alchemy platform! Our website offers robust
              tools for calculating and managing your organization's asset
              liability gap analysis efficiently. From risk assessment to
              strategic planning, our intuitive interface empowers you to make
              informed decisions and optimize financial performance. Streamline
              your ALM processes and navigate complex financial landscapes with
              ease, all on one unified platform.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <Typography variant="body1" paragraph>
              <Link href="#" color="inherit">
                Asset Caluclator
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <Link href="#" color="inherit">
                Liability Caluclator
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <Link href="#" color="inherit">
                BrandFlow
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <Link href="#" color="inherit">
                FinHealth Advisor
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Useful links
            </Typography>
            <Typography variant="body1" paragraph>
              <Link href="#" color="inherit">
                Your Account
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <Link href="#" color="inherit">
                Become a Sponser
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <Link href="#" color="inherit">
                Shipping Rates
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <Link href="#" color="inherit">
                Help
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>

            <IconButton
              aria-label="github"
              href="https://github.com/Soumik-Vardhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              aria-label="mail"
              href="mailto:soumikvarhan1922@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon />
            </IconButton>

            <Typography variant="body1" paragraph>
              <i className="fas fa-home mr-3"></i> Hyderabad, TS, India
            </Typography>
            <Typography variant="body1" paragraph>
              <i className="fas fa-envelope mr-3"></i>{" "}
              soumikvardhan1922@gmail.com
            </Typography>
            <Typography variant="body1" paragraph>
              <i className="fas fa-phone mr-3"></i>
            </Typography>
            <Typography variant="body1" paragraph>
              <i className="fas fa-print mr-3"></i> + 91 63xxxxxx10
            </Typography>
          </Grid>
        </Grid>
        <hr style={{ borderTop: "1px solid white" }} />
        <Typography variant="body2" style={{ marginTop: "1rem" }}>
          © 2024 assetalchemy.com
        </Typography>
        <div style={{ marginTop: "1rem" }}>
          <Button variant="outlined" color="inherit" href="#">
            <i className="fab fa-facebook-f"> </i>
          </Button>
          <Button variant="outlined" color="inherit" href="#">
            <i className="fab fa-twitter"></i>
          </Button>
          <Button variant="outlined" color="inherit" href="#">
            <i className="fab fa-google"></i>
          </Button>
          <Button variant="outlined" color="inherit" href="#">
            <i className="fab fa-instagram"></i>
          </Button>
        </div>
      </Container>
    </footer>
  );
}
