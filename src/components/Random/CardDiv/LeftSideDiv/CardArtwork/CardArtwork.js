import React, { Fragment } from "react";
import "./CardArtwork.css";
const CardArtwork = ({ imageResult }) => {
  return (
    <Fragment>
      <img
        className="card-img"
        alt="card"
        width={624}
        height={624}
        src={imageResult}
      ></img>
    </Fragment>
  );
};

export default CardArtwork;
