import React, { Fragment } from "react";
import "./LevelIcon.css";
const LevelIcon = ({ display, type }) => {
  let icon = "";
  if (type === "XYZ Monster") {
    icon =
      "https://cdn.discordapp.com/attachments/958975018816131132/974884014357897226/rank.webp";
  } else {
    icon =
      "https://cdn.discordapp.com/attachments/958975018816131132/970903430396784751/level.webp";
  }
  let cName = "";
  if (display === "search") {
    cName = "search-level-icon";
  } else {
    cName = "level-icon";
  }

  return (
    <Fragment>
      {" "}
      <img
        className={cName}
        alt="level"
        height={64}
        width={64}
        src={icon}
      ></img>
    </Fragment>
  );
};
export default LevelIcon;
