import React from "react";
import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
