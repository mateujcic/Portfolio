import React from "react";
import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="projects" element={<Projects />}  />
      </Routes>
    </Router>
  );
}

export default App;
