import React, { Fragment } from "react";
import "./LinkArrows.css";
const LinkArrows = ({ display, linkMarkers }) => {
  // Set the 3x3 grid of link arrows to black by default
  let firstRow = [
    "https://cdn.discordapp.com/attachments/958975018816131132/975251472327524352/LM-TopLeft2.webp",
    "https://cdn.discordapp.com/attachments/958975018816131132/975251472147181578/LM-Top2.webp",
    "https://cdn.discordapp.com/attachments/958975018816131132/975251471899721778/LM-TopRight2.webp",
  ];
  let secondRow = [
    "https://cdn.discordapp.com/attachments/958975018816131132/975251471694172220/LM-Left2.webp",
    "https://cdn.discordapp.com/attachments/958975018816131132/975254821739315220/space.webp",
    "https://cdn.discordapp.com/attachments/958975018816131132/975251509530996786/LM-Right2.webp",
  ];
  let thirdRow = [
    "https://cdn.discordapp.com/attachments/958975018816131132/975251509329682442/LM-BottomLeft2.webp",
    "https://cdn.discordapp.com/attachments/958975018816131132/975251508931207178/LM-Bottom2.webp",
    "https://cdn.discordapp.com/attachments/958975018816131132/975255096919203890/LM-BottomRight2.webp",
  ];
  // Set link markers from black to red if the card has those link arrows based on the linkmarkers value
  if (linkMarkers.includes("Top-Left")) {
    firstRow[0] =
      "https://cdn.discordapp.com/attachments/958975018816131132/975251430770376734/LM-TopLeft.webp";
  }
  if (linkMarkers.includes("Top")) {
    firstRow[1] =
      "https://cdn.discordapp.com/attachments/958975018816131132/975251430560645130/LM-Top.webp";
  }
  if (linkMarkers.includes("Top-Right")) {
    firstRow[2] =
      "https://cdn.discordapp.com/attachments/958975018816131132/975251430321553428/LM-TopRight.webp";
  }
  if (linkMarkers.includes("Left")) {
    secondRow[0] =
      "https://cdn.discordapp.com/attachments/958975018816131132/975251430120247346/LM-Left.webp";
  }
  if (linkMarkers.includes("Right")) {
    secondRow[2] =
      "https://cdn.discordapp.com/attachments/958975018816131132/975251473464184882/LM-Right.webp";
  }
  if (linkMarkers.includes("Bottom-Left")) {
    thirdRow[0] =
      "https://cdn.discordapp.com/attachments/958975018816131132/975251473178980392/LM-BottomLeft.webp";
  }
  if (linkMarkers.includes("Bottom")) {
    thirdRow[1] =
      "https://cdn.discordapp.com/attachments/958975018816131132/975251472956657704/LM-Bottom.webp";
  }
  if (linkMarkers.includes("Bottom-Right")) {
    thirdRow[2] =
      "https://cdn.discordapp.com/attachments/958975018816131132/975251472558219274/LM-BottomRight.webp";
  }

  let cName = "";
  if (display === "search") {
    cName = "search-linkarrows-icon";
  } else {
    cName = "linkarrows-icon";
  }
  // Return link arrows as a 3x3 grid of images
  return (
    <Fragment>
      {" "}
      <div className="link-icon">
        <div className="link-row">
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={firstRow[0]}
          ></img>
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={firstRow[1]}
          ></img>
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={firstRow[2]}
          ></img>
        </div>
        <div className="link-row">
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={secondRow[0]}
          ></img>
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={secondRow[1]}
          ></img>
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={secondRow[2]}
          ></img>
        </div>
        <div className="link-row">
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={thirdRow[0]}
          ></img>
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={thirdRow[1]}
          ></img>
          <img
            className={cName}
            alt="linkrating"
            height={64}
            width={64}
            src={thirdRow[2]}
          ></img>
        </div>
      </div>
    </Fragment>
  );
};
export default LinkArrows;
