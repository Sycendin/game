import React, { Fragment } from "react";
import "./TunerIcon.css";
const TunerIcon = ({ display }) => {
  let icon =
    "https://cdn.discordapp.com/attachments/958975018816131132/975650301992390696/tuner.webp";
  let cName = "";
  if (display === "search") {
    cName = "search-tuner-icon";
  } else {
    cName = "tuner-icon";
  }

  return (
    <Fragment>
      <img
        className={cName}
        alt="tuner-icon"
        height={64}
        width={64}
        src={icon}
      ></img>
    </Fragment>
  );
};
export default TunerIcon;
