import * as React from "react";
import "./Link.scss";

type LinkProps = {
  url: string;
  text?: string;
};

export const Link: React.FC<LinkProps> = ({ url, text, children }) => (
  <a className="Link" href={url} target="_blank" rel="noopener noreferrer">
    {text}
    {children}
  </a>
);
