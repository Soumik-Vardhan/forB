//
import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ResultObject } from "../ResultContext";
import Navbar from "../structure/Navbar";
import Footer_2 from "../structure/Footer_2";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system"; // Import styled from @mui/system

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    paddingTop: theme.spacing(8),
  },
  heading: {
    marginBottom: theme.spacing(4),
    color: "#FF6F61",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  card: {
    maxWidth: 300,
    margin: theme.spacing(2),
    borderRadius: theme.spacing(1),
    cursor: "pointer",
    backgroundColor: "#000",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
});

const StyledResults = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background,
  minHeight: "100vh",
  paddingTop: theme.spacing(8),
}));

const Results = () => {
  const { resultObj } = useContext(ResultObject);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <StyledResults>
        <Container sx={{ backgroundColor: "#4e4e4c", width: "100vw" }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              marginBottom: 4,
              color: "#FF6F61",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Detailed Analysis
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {Object.keys(resultObj).map((index) => (
              <Grid item xs={6} key={index}>
                <Card
                  className={styles.card}
                  sx={{
                    backgroundColor: "#d8c8e0",
                    borderRadius: "2rem",
                    padding: "1rem",
                  }}
                  onClick={handleOpen}
                >
                  <CardContent sx={{ padding: "2rem" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {index}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      fontWeight="bold"
                      size="large"
                    >
                      {resultObj[index]}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Importance of the {index} Caluclation
                    </Typography>
                    <Button variant="contained" color="secondary">
                      Contact the Advisor
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={styles.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={styles.modalContent}>
                <Typography
                  variant="h6"
                  id="transition-modal-title"
                  gutterBottom
                >
                  Modal Title
                </Typography>
                <Typography variant="body1" id="transition-modal-description">
                  Modal Content
                </Typography>
              </div>
            </Fade>
          </Modal>
        </Container>
      </StyledResults>
      <Footer_2 />
    </>
  );
};

export default Results;
