import React, { Fragment } from "react";
import "./PendIcon.css";
const PendIcon = ({ display }) => {
  let icon =
    "https://cdn.discordapp.com/attachments/958975018816131132/972003833414823946/scale.webp";
  let cName = "";
  if (display === "search") {
    cName = "search-pend-icon";
  } else {
    cName = "pend-icon";
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
export default PendIcon;
