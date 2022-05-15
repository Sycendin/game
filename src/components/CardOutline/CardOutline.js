import React, { Fragment } from "react";
import "./CardOutline.css";
const CardOutline = ({ outline, display }) => {
  let icon = "";
  let cName = "";
  if (display === "search") {
    cName = "search-outline-icon";
  } else {
    cName = "outline-icon";
  }
  switch (outline) {
    case "Effect Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890712988528700/effect.png";
      break;
    case "Normal Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890750867304449/normal.png";
      break;
    case "Token Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890749931962378/token.png";
      break;
    case "Spell Card":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890798174859315/spell.png";
      break;
    case "Trap Card":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890797885456444/trap.png";
      break;
    case "Ritual":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890750548529192/ritual.png";
      break;
    case "Fusion Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890750212997150/fusion.png";
      break;
    case "Synchro Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890714037116928/synchro.png";
      break;
    case "XYZ Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890713605087252/xyz.png";
      break;
    case "Pendulum Effect Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890749353160754/pendeffect.png";
      break;
    case "Pendulum Normal Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890713311506452/pendnormal.png";
      break;
    case "Pendulum Fusion Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890749114060830/pendfusion.png";
      break;
    case "Pendulum Synchro Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890748895977502/pendsynchro.png";
      break;
    case "Pendulum XYZ Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890748665266206/penxyz.png";
      break;
    case "Link Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/974890798413905960/link.png";
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <img
        className={cName}
        alt="outline"
        height={64}
        width={64}
        src={icon}
      ></img>
    </Fragment>
  );
};
export default CardOutline;
