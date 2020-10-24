import * as React from 'react';
import { Link } from "./Link";

type DocsProps = {
  url: string;
  text: string;
}

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

export const Docs: React.FC  = ({ children}) => {
  return (
    <ul>
      {docsList.map(({ url, text }) => (
        <Link url={url}>
          <li>
            {text}
          </li>
        </Link>
      ))}
    </ul>
  )
} 