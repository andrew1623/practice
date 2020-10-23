import * as React from "react";
import logo from "./static/logo.svg";
import "./App.css";
import DocsList from "./components/DocsList/DocsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div>
          <h1>Helpful Documentation</h1>
          <DocsList />
        </div>
      </body>
    </div>
  );
}

export default App;
