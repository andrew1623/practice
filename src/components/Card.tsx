import React, { FC } from "react";
import "./Card.scss";

type CardProps = {
  rows?: number;
  col?: number;
};

export const Card: FC = ({ children }) => (
  <div className="Card-Container">
    <div className="Card-Content">{children}</div>
  </div>
);
