import React from "react";
import "./style/Projects.scss";
import { Element } from 'react-scroll'

import zest from './media/images/screenshots/zest.png'
import home1Coffee from './media/images/screenshots/home1Coffee.png'
import home1Globe from './media/images/screenshots/home1Globe.png'
import home1rit from './media/images/screenshots/home1rit.png'
import home1Tea from './media/images/screenshots/home1Tea.png'
import screen1 from './media/images/screenshots/screen1.PNG'
import screen5 from './media/images/screenshots/screen5.PNG'
import favorita1 from './media/images/screenshots/favorita1.png'
import favorita2 from './media/images/screenshots/favorita2.png'
import tes from './media/images/screenshots/tes.png'
import terrorism from './media/images/screenshots/terrorism.png'
import social from './media/images/screenshots/social.png'

export default function Projects() {
  return (
    // <Element id='example-destination' name='example-destination'>
    <div className="projects" name='projects'>
      <h1 className="title">Projects</h1>
      <p className="subtitle projects-title-description-style">
        In this section, you can find links to previews of my projects as well as their GitHub repositories. Some projects aren't available to preview because they aren't supported by GitHub Pages.
      </p>

      <div className="project-instances">
        <h2 className="title">Data Science</h2>
        <div className="project" id="social">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={social}
              alt="Social Media Project"
            />
          </div>
          <div className="content-container">
            <p className="project-type">University project</p>
            <p className="project-title">Social Media Impact Analysis</p>
            <p className="project-description">
              Analyzed social media campaign data for VitalityBoost Tech to identify engagement trends and optimize strategies using an interactive dashboard.
            </p>
            <div className="technologies">
              <p>PowerBI</p>
            </div>
            <div className="button-container">
              <p className="project-link button">
                <a href="https://app.powerbi.com/reportEmbed?reportId=9bb7b1fd-365a-41cb-919b-614b0eda18b1&autoAuth=true&ctid=1eb34f73-38dd-42db-98db-53b54e749d52&pageName=ReportSection">Preview</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="favorita1">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={favorita1}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">Personal project</p>
            <p className="project-title">Favorita - Sales Analysis</p>
            <p className="project-description">
              This project analyzes retail store sales data to identify patterns and trends across locations, examining how factors like promotions, holidays, and oil prices impact overall performance.
            </p>
            <div className="technologies">
              <p>Pyhton</p>
              <p>Pandas</p>
              <p>matplotlib</p>
              <p>sklearn</p>
            </div>
            <div className="button-container">
              <p className="project-link button">
                <a href="https://github.com/mateujcic/Store-Sales-DS/tree/analysis">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="favorita2">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={favorita2}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">Personal project</p>
            <p className="project-title">Favorita - Sales Forecasting</p>
            <p className="project-description">
              This project analyzes retail store sales data and develops predictive models to forecast future sales by leveraging historical patterns, and seasonal trends.
            </p>
            <div className="technologies">
              <p>Pyhton</p>
              <p>Pandas</p>
              <p>sklearn</p>
              <p>xgboost</p>
            </div>
            <div className="button-container">
              {/* <p className="project-link button">
                <a href="https://mateujcic.github.io/Zest/">Preview</a>
              </p> */}
              <p className="project-link button">
                <a href="https://github.com/mateujcic/Store-Sales-DS/tree/model-optimization">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="terrorism">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={terrorism}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">University project</p>
            <p className="project-title">Global Terrorism Analysis</p>
            <p className="project-description">
              This project analyzes global terrorism trends from 1970 to 2020, with a focus on attack frequency, geographic distribution, and casualty metrics.
            </p>
            <div className="technologies">
              <p>Pyhton</p>
              <p>Pandas</p>
              <p>matplotlib</p>
              <p>sklearn</p>
            </div>
            <div className="button-container">
              <p className="project-link button">
                <a href="https://github.com/mateujcic/global-terrorism-eda">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <h2 className="title">Web Development</h2>
        <div className="project" id="tes">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={tes}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">Work project</p>
            <p className="project-title">TES Energy</p>
            <p className="project-description">
              A website that allows users to browse company information, products, services, and contact.
            </p>
            <div className="technologies">
              <p>React.JS</p>
              <p>TypeScript</p>
              <p>SCSS</p>
            </div>
            <div className="button-container">
              {/* <p className="project-link button">
                <a href="https://mateujcic.github.io/Zest/">Preview</a>
              </p> */}
              <p className="project-link button">
                <a href="https://tesenergy.hr">Visit</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="zest">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={zest}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">Personal project</p>
            <p className="project-title">Zest</p>
            <p className="project-description">
              A website that allows user to create and edit their recipes. This is a personal project created with React, and it's still in development.
            </p>
            <div className="technologies">
              <p>React.JS</p>
            </div>
            <div className="button-container">
              {/* <p className="project-link button">
                <a href="https://mateujcic.github.io/Zest/">Preview</a>
              </p> */}
              <p className="project-link button">
                <a href="https://github.com/mateujcic/Web-App-Development/tree/main/zest">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="coffee">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={home1Coffee}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">School project</p>
            <p className="project-title">Coffee Express</p>
            <p className="project-description">
              A website which allows users to order coffee online. Its main feature is an interactive form where users can create their coffee order and modify it to their liking.
            </p>
            <div className="technologies">
              <p>Bootstrap</p>
              <p>JavaScript</p>
            </div>
            <div className="button-container">
              <p className="project-link button">
                <a href="https://mateujcic.github.io/Coffee/">Preview</a>
              </p>
              <p className="project-link button">
                <a href="https://github.com/mateujcic/Web-App-Development/tree/main/Project%201">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="generatv">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={screen1}
              alt="Globe.ly"
            />
            <img
              className="project-screenshot"
              src={screen5}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">School project</p>
            <p className="project-title">GeneraTV</p>
            <p className="project-description">
              An app whose goal is to help users decide on what show to watch. The app works by fetching TV show data from an IMDB API and presenting them to the user. The user can then like or dislike the TV show. The app may not always work becuase the API service has limited number of fecthes allowed.
            </p>
            <div className="technologies">
              <p>React Native</p>
            </div>
            <div className="button-container">
              <p className="project-link button">
                <a href="https://github.com/mateujcic/Web-App-Development/tree/main/generatv">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="globely">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={home1Globe}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">School project</p>
            <p className="project-title">Globe.ly</p>
            <p className="project-description">
              A school project whose goal was to bring awareness to pollution
              on Earth, espeacially oceans. The website contains information on
              how to help and where to donate.
            </p>
            <div className="technologies">
              <p>Bootstrap</p>
              <p>JavaScript</p>
            </div>
            <div className="button-container">
              <p className="project-link button">
                <a href="https://mateujcic.github.io/Globe.ly/">Preview</a>
              </p>
              <p className="project-link button">
                <a href="https://github.com/mateujcic/Web-App-Development/tree/main/Group">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="tea">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={home1Tea}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">School project</p>
            <p className="project-title">Tea Website</p>
            <p className="project-description">
              A website that contains information about tea. It was made in PHP, so it cannot be previewed at GitHub pages like the other projects since PHP is not supported.
            </p>
            <div className="technologies">
              <p>Bootstrap</p>
              <p>JavaScript</p>
              <p>PHP</p>
            </div>
            <div className="button-container">
              <p className="project-link button">
                <a href="https://github.com/mateujcic/Web-App-Development/tree/main/Individual">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <div className="project" id="rit">
          <div className="screenshot-container">
            <img
              className="project-screenshot"
              src={home1rit}
              alt="Globe.ly"
            />
          </div>
          <div className="content-container">
            <p className="project-type">School project</p>
            <p className="project-title">jQuery Project</p>
            <p className="project-description">
              The goal of this project was to use jQuery to consume a RESTful webservice and display the fetched data accordingly. This project is not available to preview becuase to fetch the data there needs to be a connection to RIT's network.
            </p>
            <div className="technologies">
              <p>Bootstrap</p>
              <p>JavaScript</p>
              <p>JQuery</p>

            </div>
            <div className="button-container">
              <p className="project-link button">
                <a href="https://github.com/mateujcic/Web-App-Development/tree/main/Project%202">GitHub</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
