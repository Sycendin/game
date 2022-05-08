import React, { Fragment } from "react";
import "./RandomButton.css";
const RandomButton = ({ newCard, setNewCard }) => {
  return (
    <Fragment>
      <div className="random-button-div">
        <button
          onClick={() => setNewCard(newCard + 1)}
          className="random-button"
        >
          New Card
        </button>
      </div>
    </Fragment>
  );
};

export default RandomButton;
