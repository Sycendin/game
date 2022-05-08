import React, { Fragment } from "react";
import "./RandomButton.css";
const RandomButton = () => {
  return (
    <Fragment>
      <div className="random-button-div">
        <button className="random-button">New Card</button>
      </div>
    </Fragment>
  );
};

export default RandomButton;
