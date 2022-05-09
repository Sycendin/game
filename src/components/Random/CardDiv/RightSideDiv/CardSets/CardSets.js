import React, { Fragment } from "react";
import "./CardSets.css";
import CardSetsData from "./CardSetsData/CardSetsData";
const CardSets = ({ cardData }) => {
  return (
    <Fragment>
      <p className="sets-title">Sets:</p>
      <div className="sets-div">
        {cardData.card_sets.map((set, i) => {
          return <CardSetsData key={i} set={set} />;
        })}
      </div>
    </Fragment>
  );
};
export default CardSets;
