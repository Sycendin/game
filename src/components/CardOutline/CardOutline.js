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
    case "Tuner Monster":
    case "Flip Effect Monster":
    case "Gemini Effect Monster":
    case "Spirit Effect Monster":
    case "Union Effect Monster":
    case "Toon Effect Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640333494939698/effect.webp";
      break;
    case "Normal Monster":
    case "Normal Tuner Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640453867245598/normalcard.webp";
      break;
    case "Token Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640454534168626/token.webp";
      break;
    case "Spell Card":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640489346859128/spellcard.webp";
      break;
    case "Trap Card":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640489535610920/trapcard.webp";
      break;
    case "Ritual Effect Monster":
    case "Ritual Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640454089564170/ritualcard.webp";
      break;
    case "Fusion Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640454299275314/fusion.webp";
      break;
    case "Synchro Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640332647694366/synchro.webp";
      break;
    case "XYZ Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640332890943548/xyz.webp";
      break;
    case "Pendulum Effect Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640454764851211/pendeffect.webp";
      break;
    case "Pendulum Normal Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640333222297640/pendnormal.webp";
      break;
    case "Fusion Pendulum Effect Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640454991331378/pendfusion.webp";
      break;
    case "Synchro Pendulum Effect Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640455196856330/pendsynchro.webp";
      break;
    case "XYZ Pendulum Effect Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640455419133992/penxyz.webp";
      break;
    case "Link Monster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640489124573184/link.webp";
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
