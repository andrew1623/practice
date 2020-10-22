import * as React from "react";

import { Link, LinkProps } from "../Link";

const docs: LinkProps[] = [
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

export default function DocsList() {
  return <ul>{docs.map((link) => Link(link))}</ul>;
}
