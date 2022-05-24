import React, { Fragment } from "react";
import "./SelectedDiv.css";
import SelectedChecks from "./SelectedChecks/SelectedChecks";
const SelectedDiv = ({ list, mainCard }) => {
  let border = "";
  return (
    <Fragment>
      {list.map((guess, i) => {
        let next = list[i + 1];

        if (!next) {
          border = "";
        } else {
          border = "1px solid black";
        }
        return (
          <div
            style={{
              borderBottom: border,
            }}
            key={i}
            className="selected-div"
          >
            <p className="selected-div-text">{guess.name}</p>
            <SelectedChecks item={guess} mainCard={mainCard} />
          </div>
        );
      })}
    </Fragment>
  );
};
export default SelectedDiv;
