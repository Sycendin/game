import React from "react";
import "./CardStats.css";
const CardStats = ({ cardData }) => {
  if (cardData.type === "Spell Card" || cardData.type === "Trap Card") {
    return null;
  } else {
    return (
      <div className="stats-div">
        <p className="stats-text">ATK</p>
        <p className="stats-atk">/{cardData.atk}</p>{" "}
        {cardData.type !== "Link Monster" ? (
          <div className="stats-rating">
            <p className="stats-text">DEF</p>
            <p className="stats-def">/{cardData.def}</p>{" "}
          </div>
        ) : (
          <div className="stats-rating">
            <p className="stats-text">Link</p>
            <p className="stats-def">/{cardData.linkval}</p>{" "}
          </div>
        )}
      </div>
    );
  }
};

export default CardStats;
