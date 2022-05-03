import React, { Fragment } from "react";

const RaceIcon = ({ race }) => {
  let icon = "";
  switch (race) {
    case "Counter":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264241209404/counter.webp";
      break;
    case "Continous":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264643837962/continous.webp";
      break;
    case "Field":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264006316052/field.webp";
      break;
    case "Quickplay":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904265545617448/quickplay.webp";
      break;
    case "Ritual":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970907315840630824/ritual.webp";
      break;
    case "Normal":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264895508490/normal.webp";

    default:
      break;
  }
  return (
    <Fragment>
      <img alt="race" height={64} width={64} src={icon}></img>
    </Fragment>
  );
};
export default RaceIcon;
