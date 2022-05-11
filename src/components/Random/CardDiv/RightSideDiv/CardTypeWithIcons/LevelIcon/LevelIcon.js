import React, { Fragment } from "react";
import "./LevelIcon.css";
const LevelIcon = () => {
  let icon =
    "https://cdn.discordapp.com/attachments/958975018816131132/970903430396784751/level.webp";
  return (
    <Fragment>
      {" "}
      <img
        className="level-icon"
        alt="level"
        height={64}
        width={64}
        src={icon}
      ></img>
    </Fragment>
  );
};
export default LevelIcon;