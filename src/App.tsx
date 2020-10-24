import * as React from "react";
import logo from "./static/logo.svg";
import "./App.scss";
import {Docs} from './components/Docs';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Docs />
      </body>
    </div>
  );
}

export default App;
