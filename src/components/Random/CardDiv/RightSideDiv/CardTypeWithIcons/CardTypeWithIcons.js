import React, { Fragment } from "react";
import "./CardTypeWithIcons.css";
import SpellTrapIcon from "./SpellTrapIcon/SpellTrapIcon";
import RaceIcon from "./RaceIcon/RaceIcon";
import LevelIcon from "./LevelIcon/LevelIcon";
import AttributeIcon from "./AttributeIcon/AttributeIcon";
import PendIcon from "./PendIcon/PendIcon";
const CardTypeWithIcons = ({ cardData }) => {
  if (cardData.type === "Spell Card" || cardData.type === "Trap Card") {
    return (
      <div className="rightside-span">
        <SpellTrapIcon type={cardData.type} />
        <p className="card-attribute">{cardData.type}</p>
        <RaceIcon race={cardData.race} />
        <p className="card-level">{cardData.race}</p>
        {cardData.type === "Pendulum Effect Monster" ? (
          <Fragment>
            <PendIcon />
            <p className="card-level">{cardData.scale}</p>
          </Fragment>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="rightside-span">
        <AttributeIcon attribute={cardData.attribute} />
        <p className="card-attribute">{cardData.attribute}</p>
        <LevelIcon />
        <p className="card-level">{cardData.level}</p>
      </div>
    );
  }
};

export default CardTypeWithIcons;
