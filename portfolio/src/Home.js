import React from "react";
import "./style/Home.scss";
import Projects from "./Projects";
import MiniContact from "./MiniContact";

function Home() {
  return (
    <div className="container">
      <div className="header-container">
        <div className="header">
          <div className="title">
            <h1 className="title-style">Hi, my name is Mate</h1>
            <p className="title-description-style">On this website you can find some of my projects</p>
          </div>
          <div className="subtitle">
            <p className="subtitle-style">
              On this website you can find some of my projects. These projects
              were all created by me either for a school project or in my free
              time.
            </p>
          </div>
        </div>
      </div>
      <MiniContact/>
      <Projects/>
    </div>
  );
}
export default Home;
