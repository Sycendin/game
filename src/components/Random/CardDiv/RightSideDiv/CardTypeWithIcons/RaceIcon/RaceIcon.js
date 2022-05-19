import React, { Fragment } from "react";
import "./RaceIcon.css";
const RaceIcon = ({ race, display }) => {
  let cName = "";
  if (display === "search") {
    cName = "search-race-icon";
  } else {
    cName = "race-icon";
  }
  let icon = "";
  switch (race) {
    case "Counter":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264241209404/counter.webp";
      break;
    case "Continuous":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264643837962/continous.webp";
      break;
    case "Field":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264006316052/field.webp";
      break;
    case "Quick-Play":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904265545617448/quickplay.webp";
      break;
    case "Ritual":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970907315840630824/ritual.webp";
      break;
    case "Equip":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/976701738402852894/equip.webp";
      break;
    case "Normal":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264895508490/normal.webp";
      break;

    default:
      break;
  }
  return (
    <Fragment>
      <img className={cName} alt="race" height={64} width={64} src={icon}></img>
    </Fragment>
  );
};
export default RaceIcon;
