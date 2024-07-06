import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Dashbord from "./pages/Dashbord";
import Navbar from "./structure/Navbar";
import Register from "./pages/Register";
import Features from "./pages/Features";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import { ResultProvider } from "./ResultContext";
function App() {
  return (
    <ResultProvider>
      <Router>
        <>
          {/* Your main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/register" element={<Register />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/features" element={<Features />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/results" element={<Results />} />

            {/* Add other routes as needed */}
          </Routes>

          {/* Navigation or other components */}
          {/* <Link to="/login">Log in</Link> */}
        </>
      </Router>
    </ResultProvider>
  );
}

export default App;
