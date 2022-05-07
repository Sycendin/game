import React, { Fragment } from "react";
import "./CardName.css";
const CardName = ({ cardData }) => {
  return (
    <Fragment>
      <p className="card-name">{cardData.name}</p>
    </Fragment>
  );
};

export default CardName;
