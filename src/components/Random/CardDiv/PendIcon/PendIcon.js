import React, { Fragment } from "react";
import "./PendIcon.css";
const PendIcon = () => {
  let icon =
    "https://cdn.discordapp.com/attachments/958975018816131132/972003833414823946/scale.webp";
  return (
    <Fragment>
      {" "}
      <img
        className="pend-icon"
        alt="level"
        height={64}
        width={64}
        src={icon}
      ></img>
    </Fragment>
  );
};
export default PendIcon;
