import logo from "./logo.svg";
import React from "react";
import "./App.scss";

function Home() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corporis omnis ut totam rem corrupti magni magnam mollitia, accusamus dolore ab debitis soluta dignissimos. Amet expedita aliquam labore tenetur iure eligendi, praesentium, incidunt at, quidem quos illum recusandae quia sed aliquid est officiis qui vitae. Eaque quaerat modi explicabo illum necessitatibus ipsa voluptas tempore repellendus facilis debitis, sint blanditiis saepe fugit! Aliquid totam esse ratione similique in consectetur rerum eligendi amet nam fugit voluptate est autem quasi nemo laborum eveniet ad repellendus libero laudantium tempora facilis vero, impedit non. Suscipit, fugiat repellat tempora veniam facere maiores omnis labore eveniet sed.</h1>
        </header>
      </div>
    </React.Fragment>
  );
}
export default Home;
