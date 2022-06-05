import React, { Fragment } from "react";
import "./MonsterType.css";
const MonsterType = ({ monsterType, display }) => {
  let icon = "";
  let cName = "";
  if (display === "search") {
    cName = "search-monstertype-icon";
  } else {
    cName = "monstertype-icon";
  }
  switch (monsterType) {
    case "Spellcaster":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640674466672651/spellcaster.webp";
      break;
    case "Dragon":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640674231803914/dragon.webp";
      break;
    case "Zombie":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640674043039764/zombie.webp";
      break;
    case "Warrior":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640632162918440/warrior.webp";
      break;
    case "Beast":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640631940632586/beast.webp";
      break;
    case "Beast-Warrior":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640631672176720/beast-warrior.webp";
      break;
    case "Machine":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640631437299733/machine.webp";
      break;
    case "Winged Beast":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640631173079050/winged-beast.webp";
      break;
    case "Fiend":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640630879473674/fiend.webp";
      break;
    case "Fairy":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640630632001546/fairy.webp";
      break;
    case "Insect":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640630376169532/insect.webp";
      break;
    case "Dinosaur":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640580199702578/dinosaur.webp";
      break;
    case "Reptile":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640579906084874/reptile.webp";
      break;
    case "Fish":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640579675410492/fish.webp";
      break;
    case "Sea-Serpent":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640579495034940/sea-serpent.webp";
      break;
    case "Aqua":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640579293712414/aqua.webp";
      break;
    case "Pyro":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640578974965790/pyro.webp";
      break;
    case "Thunder":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640578731692042/thunder.webp";
      break;
    case "Rock":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640578417127424/rock.webp";
      break;
    case "Plant":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640559723085834/plant.webp";
      break;
    case "Psychic":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640559534354442/psychic.webp";
      break;
    case "Wyrm":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640533680656395/wyrm.webp";
      break;
    case "Cyberse":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640533357711360/cyberse.webp";
      break;
    case "Divine-Beast":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/975640533101854740/divine-beast.webp";
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <img
        className={cName}
        alt="monster-type"
        height={64}
        width={64}
        src={icon}
      ></img>
    </Fragment>
  );
};
export default MonsterType;
