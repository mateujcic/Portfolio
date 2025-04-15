import React from 'react'
import "./style/ProjectsMobile.scss";

export default function ProjectsMobile() {
    return (
        <div className="projects">
          <h1 className="title">Projects</h1>
          <p className="subtitle title-description-style">
            Ypu can find screenshots or live previrews
          </p>
          
            
            <div className="project-instances">
            <div className="project">
              <p className="project-title">Globe.ly</p>
              <img
                className="project-screenshot"
                src={require(`./media/images/screenshots/home1.png`).default}
                alt="Globe.ly"
              />
              <p className="project-link"><a href="https://mateujcic.github.io/Globe.ly/">Link</a></p>
            </div>
            <div className="project">
              <a href="https://mateujcic.github.io/Globe.ly/">OK</a>
            </div>
            <div className="project">
              <a href="https://mateujcic.github.io/Globe.ly/">OK</a>
            </div>
            <div className="project">
              <a href="https://mateujcic.github.io/Globe.ly/">OK</a>
            </div>
            <div className="project">
              <a href="https://mateujcic.github.io/Globe.ly/">OK</a>
            </div>
          </div>
        </div>
      );
}
