import React, { Fragment } from "react";
import "./AttributeIcon.css";
const AttributeIcon = ({ attribute }) => {
  let icon = "";
  switch (attribute) {
    case "DARk":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903429876699176/dark.webp";
      break;
    case "LIGHT":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903430098976798/light.webp";
      break;
    case "FIRE":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903429054599188/fire.webp";
      break;
    case "WATER":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903430677807124/water.webp";
      break;
    case "WIND":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903429297881088/wind.webp";
      break;
    case "EARTH":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903429541163009/earth.webp";
      break;
    case "DIVINE":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903428836491334/divine.webp";
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <img
        className="attribute-icon"
        alt="attribute"
        height={64}
        width={64}
        src={icon}
      ></img>
    </Fragment>
  );
};
export default AttributeIcon;
