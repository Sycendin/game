import React, { Fragment } from "react";
import "./CardTypeWithIcons.css";
import SpellTrapIcon from "../../SpellTrapIcon/SpellTrapIcon";
import RaceIcon from "../../RaceIcon/RaceIcon";
import LevelIcon from "../../LevelIcon/LevelIcon";
import AttributeIcon from "../../AttributeIcon/AttributeIcon";
import PendIcon from "../../PendIcon/PendIcon";
const CardTypeWithIcons = ({ cardData }) => {
  if (cardData.type === "Spell Card" || cardData.type === "Trap Card") {
    return (
      <div className="rightside-span">
        <p className="card-attribute">{cardData.type}</p>
        <SpellTrapIcon type={cardData.type} />
        <p className="card-level">{cardData.race}</p>
        <RaceIcon race={cardData.race} />
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
        <p className="card-attribute">{cardData.attribute}</p>
        <AttributeIcon attribute={cardData.attribute} />
        <p className="card-level">{cardData.level}</p>
        <LevelIcon />
      </div>
    );
  }
};

export default CardTypeWithIcons;
