import React, { Fragment } from "react";
import "./RightSideDiv.css";
import CardName from "./CardName/CardName";
import CardTypeWithIcons from "./CardTypeWithIcons/CardTypeWithIcons";
import MonsterTypes from "./MonsterTypes/MonsterTypes";
import EffectText from "./EffectText/EffectText";
import CardStats from "./CardStats/CardStats";
import CardSets from "./CardSets/CardSets";
const RightSideDiv = ({ cardData, typeArray }) => {
  return (
    <Fragment>
      <CardName cardData={cardData} />
      <CardTypeWithIcons cardData={cardData} />
      <MonsterTypes cardData={cardData} typeArray={typeArray} />
      <EffectText cardData={cardData} />
      <CardStats cardData={cardData} />
      <CardSets cardData={cardData} />
    </Fragment>
  );
};

export default RightSideDiv;
