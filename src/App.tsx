import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExternalLink, ExternalLinkProps } from "./components/ExternalLink";

const Docs: ExternalLinkProps[] = [
  { url: "https://reactjs.org", text: "React Official Docs" },
  {
    url: "https://react-typescript-cheatsheet.netlify.app/docs/basic/setup",
    text: "React-TS Cheatsheet (Components)",
  },
  {
    url: "https://react-styleguidist.js.org/docs/documenting/",
    text: "React Styleguidist",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <aside>
          <h1>Helpful Documentation</h1>
          <ul id="DocsList" className="List-Container">
            {Docs.map(({ url, text }) => (
              <li className="List-Item">
                <ExternalLink url={url} text={text} />
              </li>
            ))}
          </ul>
        </aside>
      </body>
    </div>
  );
}

export default App;
