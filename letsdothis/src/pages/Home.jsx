import React from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import currentBackground from "../assets/background_recent.jpg";
import "../styles/home.css";
import Footer_2 from "../structure/Footer_2";
import money_coins from "../assets/money_coins.jpg";
// import newCurrent from "../../assets/asset_liability";
import Footer from "../structure/Footer";
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const fullDescription = `Welcome to our Asset Alchemy platform! Our website offers robust tools for calculating and managing your organization's asset liability gap analysis efficiently. From risk assessment to strategic planning, our intuitive interface empowers you to make informed decisions and optimize financial performance. Streamline your ALM processes and navigate complex financial landscapes with ease, all on one unified platform.`;

  const shortDescription = `Welcome to Asset Alchemy!`;
  const shortDescription_2 = `Your one stop for finBrand analysis`;
  return (
    <>
      <Container fluid>
        <img
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            filter: "brightness(1.6em)",
            position: "absolute",
            zIndex: "-1",
            top: "0rem",
          }}
          className="bg-image"
          // src="https://images.unsplash.com/photo-1669951584309-492ed24d274f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
          src={money_coins}
          alt="Bacground"
        />
        <Row>
          <Col>
            <nav className="navbar navbar-expand-lg navbar-white">
              <div className="container">
                <a className="navbar-brand" href="#">
                  Asset Alchemy
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/navbar">
                        Navbar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Container className="mt-5">
              <Row>
                <Col style={{ paddingTop: "11rem" }}>
                  <h3 className="glow custom-font">Who are we?</h3>
                  <p>{shortDescription}</p>
                  <p>{shortDescription_2}</p>
                  <div className="d-flex justify-content-start align-items-start">
                    <Button
                      as={Link}
                      to="/login"
                      variant="light"
                      style={{ marginRight: "2rem" }}
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={handleShowModal}
                      variant="secondary"
                      style={{}}
                    >
                      Learn More
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Full Description</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-font">{fullDescription}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Container fluid>
        <Row style={{ paddingTop: "16.5rem", width: "100vw" }}>
          <Col>
            <Footer_2 />
          </Col>
        </Row>
      </Container>
    </>
    // <Container
    //   fluid
    //   style={{
    //     height: "100vh",
    //     backgroundImage: `url(${currentBackground})`,
    //     backgroundSize: "cover",
    //     alignContent: "center",
    //   }}
    // >
    //   <Row className="h-100" style={{}}>
    //     <Col className="d-flex justify-content-center align-items-center">
    //       <Container>
    //         <h3
    //           style={{
    //             alignContent: "center",
    //             paddingLeft: "28rem",
    //             fontSize: "7rem",
    //             color: "#2B2E63",
    //           }}
    //         >
    //           {/* BH-Hub */}𝓐𝓼𝓼𝓮𝓽 𝓐𝓵𝓬𝓱𝓮𝓶𝔂
    //         </h3>
    //         <p style={{ fontSize: "25px", color: "#2B2E63" }}>
    //           Welcome to our Asset Alchemy platform! Our website offers robust
    //           tools for calculating and managing your organization's asset
    //           liability gap analysis efficiently. From risk assessment to
    //           strategic planning, our intuitive interface empowers you to make
    //           informed decisions and optimize financial performance. Streamline
    //           your ALM processes and navigate complex financial landscapes with
    //           ease, all on one unified platform.
    //         </p>
    //         <div
    //           className="d-flex justify-content-start align-items-start"
    //           style={{ gap: "1rem" }}
    //         >
    //           <Button as={Link} to="/login" variant="primary">
    //             Sign In
    //           </Button>
    //           {/* <Button as={Link} to="/SignUp" variant="primary">
    //             New Here?
    //           </Button> */}
    //         </div>
    //       </Container>
    //     </Col>
    //     <Col className="d-flex justify-content-center align-items-center">
    //       <img className="w-50" src="home-img.svg" alt="interview-icon" />
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Home;
