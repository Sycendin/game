import React, { Fragment } from "react";
import "./SelectedChecks.css";
const SelectedChecks = ({ item, mainCard }) => {
  console.log(item.atk);
  let atkDifference = "correct";
  let defDifference = "correct";
  let atkArrow = "";
  let defArrow = "";
  if (item.atk > mainCard.atk) {
    atkDifference = "higher";
    atkArrow =
      "https://cdn.discordapp.com/attachments/958975018816131132/978144886874329118/uparrow.webp";
  } else if (item.atk < mainCard.atk) {
    atkDifference = "lower";
    atkArrow =
      "https://cdn.discordapp.com/attachments/958975018816131132/978144887138574396/downarrow.webp";
  }
  if (item.def > mainCard.def) {
    defDifference = "higher";
    defArrow =
      "https://cdn.discordapp.com/attachments/958975018816131132/978144886874329118/uparrow.webp";
  } else if (item.def < mainCard.def) {
    defDifference = "lower";
    defArrow =
      "https://cdn.discordapp.com/attachments/958975018816131132/978144887138574396/downarrow.webp";
  }
  return (
    <Fragment>
      <div className="selected-checks-div">
        <p className="selected-checks-text-atk">Atk:</p>
        <div className={`selected-checks-stats-div-${atkDifference}`}>
          <p className={`selected-checks-text`}>{item.atk}</p>
          <img alt="arrow" className={`arrow`} src={atkArrow}></img>
        </div>
        <p className="selected-checks-text-def">Def:</p>
        <div className={`selected-checks-stats-div-${defDifference}`}>
          <p className={`selected-checks-text`}>{item.def}</p>
          <img alt="arrow" className={`arrow`} src={defArrow}></img>
        </div>
      </div>
    </Fragment>
  );
};
export default SelectedChecks;
