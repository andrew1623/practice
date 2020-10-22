import * as React from "react";

export type LinkProps = {
  url: string;
  text?: string;
};

export const Link = (link: LinkProps) => {
  return (
    <li>
      <a
        className="Link"
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.text}
      </a>
    </li>
  );
};
