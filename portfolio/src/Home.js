import React from "react";
import "./style/Home.scss";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="container" name="home">
      {/* <MiniContact /> */}
      <div className="header-container">
        <div className="header">
          <div className="title">
            <h1 className="title-style">Hi, my name is Mate</h1>
            <p className="title-description-style">
            Welcome to my portfolio website! Here you can find some of my projects, contact info, and my resume.
            </p>
          </div>
          <div className="subtitle">
            <p className="subtitle-style">
            I'm currently pursuing a master's degree in Data Science, building on a bachelor's in Information Technology.            </p>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <Projects />
      </div>
      <div className="contact-container">
        <Contact />
      </div>
    </div>
  );
}
export default Home;
