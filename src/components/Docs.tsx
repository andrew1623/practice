import * as React from "react";
import { Link } from "./Link";
import { Card } from "./Card";

type DocsProps = {
  url: string;
  text: string;
};

const docsList: DocsProps[] = [
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

export const Docs: React.FC = ({ children }) => {
  return (
    <Card>
      <h3>React Docs</h3>
      <ul>
        {docsList.map(({ url, text }) => (
          <li>
            <Link url={url} text={text} />
          </li>
        ))}
      </ul>
    </Card>
  );
};
