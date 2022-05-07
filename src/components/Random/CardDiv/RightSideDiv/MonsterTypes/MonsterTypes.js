import React from "react";
import "./MonsterTypes.css";
const MonsterTypes = ({ cardData, typeArray }) => {
  if (cardData.type === "Spell Card" || cardData.type === "Trap Card") {
    return null;
  } else {
    return (
      <div className="type-div">
        <p className="type-text">
          [{cardData.race}/{typeArray[0]}
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
