import * as React from "react";

export type ExternalLinkProps = {
  url: string;
  text?: string;
};

export const ExternalLink: React.FunctionComponent<ExternalLinkProps> = ({
  url,
  text,
  children,
}) => {
  return (
    <a className="Link" href={url} target="_blank" rel="noopener noreferrer">
      {text}
      {children}
    </a>
  );
};
