import React, { Fragment } from "react";
import "./LeftSideDiv.css";
import CardArtwork from "./CardArtwork/CardArtwork";
const LeftSideDiv = ({ imageResult }) => {
  return (
    <Fragment>
      <div className="card-img-div">
        <CardArtwork imageResult={imageResult} />
      </div>
    </Fragment>
  );
};

export default LeftSideDiv;
