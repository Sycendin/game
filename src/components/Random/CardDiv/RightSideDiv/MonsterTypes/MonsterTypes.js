import React from "react";
import "./MonsterTypes.css";
const MonsterTypes = ({ cardData, typeArray }) => {
  if (cardData.type === "Spell Card" || cardData.type === "Trap Card") {
    return null;
  } else {
    return (
      <div className="type-div">
        <p className="type-text">[{cardData.race}/</p>
        <p className="type-text">{typeArray[0]}</p>
        <p className="type-text">
          {cardData.type === "Fusion Monster" ||
          cardData.type === "XYZ Monster" ||
          cardData.type === "Synchro Monster" ||
          cardData.type === "Pendulum Effect Monster" ||
          cardData.type === "Link Monster"
            ? "/Effect"
            : null}
          ]
        </p>
      </div>
    );
  }
};

export default MonsterTypes;
