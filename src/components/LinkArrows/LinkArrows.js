import React, { Fragment } from "react";
import "./LinkArrows.css";
const LinkArrows = ({ display }) => {
  let icon =
    "https://cdn.discordapp.com/attachments/958975018816131132/974890797637959690/linkarrows.png";

  let cName = "";
  if (display === "search") {
    cName = "search-linkarrows-icon";
  } else {
    cName = "linkarrows-icon";
  }

  return (
    <Fragment>
      {" "}
      <img
        className={cName}
        alt="linkrating"
        height={64}
        width={64}
        src={icon}
      ></img>
    </Fragment>
  );
};
export default LinkArrows;
