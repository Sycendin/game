import React, { Fragment } from "react";
import "./SelectedDiv.css";
import SelectedChecks from "./SelectedChecks/SelectedChecks";
const SelectedDiv = ({ list, mainCard }) => {
  return (
    <Fragment>
      {list.map((guess, i) => {
        return (
          <div key={i} className="selected-div">
            <p className="selected-div-text">{guess.name}</p>
            <SelectedChecks item={guess} mainCard={mainCard} />
          </div>
        );
      })}
    </Fragment>
  );
};
export default SelectedDiv;
