import React, { Fragment } from "react";
import AttributeIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/AttributeIcon/AttributeIcon";
import LevelIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/LevelIcon/LevelIcon";
import MonsterType from "../../../MonsterType/MonsterType";

import "./SelectedChecks.css";
const SelectedChecks = ({ item, mainCard }) => {
  let atkDifference = "correct";
  let defDifference = "correct";
  let levelDifference = "correct";
  let raceDifference = "correct";
  let attributeDifference = "correct";

  let atkArrow =
    "https://cdn.discordapp.com/attachments/958975018816131132/978512440943845376/equals.webp";
  let defArrow =
    "https://cdn.discordapp.com/attachments/958975018816131132/978512440943845376/equals.webp";
  let levelArrow =
    "https://cdn.discordapp.com/attachments/958975018816131132/978512440943845376/equals.webp";
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
  if (item.level > mainCard.level) {
    levelDifference = "higher";
    levelArrow =
      "https://cdn.discordapp.com/attachments/958975018816131132/978144886874329118/uparrow.webp";
  } else if (item.level < mainCard.level) {
    levelDifference = "lower";
    levelArrow =
      "https://cdn.discordapp.com/attachments/958975018816131132/978144887138574396/downarrow.webp";
  }
  if (item.race !== mainCard.race) {
    raceDifference = "wrong";
  }
  if (item.attribute !== mainCard.attribute) {
    attributeDifference = "wrong";
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
        <div className={`selected-checks-stats-div-${levelDifference}`}>
          <LevelIcon level={item.level} display={"search"} />
          <p className={`selected-checks-text`}>{item.level}</p>
          <img alt="arrow" className={`arrow`} src={levelArrow}></img>
        </div>
        {/* </div> */}
        {/* <div className="selected-checks-bot-row"> */}
        <div className={`selected-checks-stats-div-${raceDifference}`}>
          <MonsterType monsterType={item.race} display={"search"} />
          <p className={`selected-checks-text`}>{item.race}</p>
        </div>
        <div className={`selected-checks-stats-div-${attributeDifference}`}>
          <AttributeIcon attribute={item.attribute} display={"search"} />
          <p className={`selected-checks-text`}>{item.attribute}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default SelectedChecks;
