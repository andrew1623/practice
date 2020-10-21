import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <ul>
          <li>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Docs
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components"
              target="_blank"
              rel="noopener noreferrer"
            >
              React-TS Cheatsheet
            </a>
          </li>
        </ul>
      </body>
    </div>
  );
}

export default App;
