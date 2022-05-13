import React, { Fragment } from "react";
import "./SpellTrapIcon.css";
const SpellTrapIcon = ({ type, display }) => {
  let icon = "";
  let cName = "";
  if (display === "search") {
    cName = "search-spell-trap-icon";
  } else {
    cName = "spell-trap-icon";
  }
  switch (type) {
    case "Spell Card":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904265319145493/spell.webp";
      break;
    case "Trap Card":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970904264446713866/trap.webp";
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <img className={cName} alt="type" height={64} width={64} src={icon}></img>
    </Fragment>
  );
};
export default SpellTrapIcon;
