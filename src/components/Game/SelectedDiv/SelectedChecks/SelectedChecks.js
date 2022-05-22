import React, { Fragment } from "react";
import "./SelectedChecks.css";
const SelectedChecks = ({ item, mainCard }) => {
  console.log(item.atk);
  let atkDifference = "correct";
  let defDifference = "correct";
  if (item.atk > mainCard.atk) {
    atkDifference = "higher";
  } else if (item.atk < mainCard.atk) {
    atkDifference = "lower";
  }
  if (item.def > mainCard.def) {
    defDifference = "higher";
  } else if (item.def < mainCard.def) {
    defDifference = "lower";
  }
  return (
    <Fragment>
      <div className="selected-checks-div">
        <p className="selected-checks-text">Atk:</p>
        <p className={`selected-checks-text-${atkDifference}`}>{item.atk}</p>
        <p className="selected-checks-text">Def:</p>
        <p className={`selected-checks-text-${defDifference}`}>{item.def}</p>
      </div>
    </Fragment>
  );
};
export default SelectedChecks;
