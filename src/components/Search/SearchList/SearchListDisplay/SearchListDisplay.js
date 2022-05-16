import React, { Fragment } from "react";
import "./SearchListDisplay.css";
import AttributeIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/AttributeIcon/AttributeIcon";
import LevelIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/LevelIcon/LevelIcon";
import PendIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/PendIcon/PendIcon";
import RaceIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/RaceIcon/RaceIcon";
import SpellTrapIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/SpellTrapIcon/SpellTrapIcon";
import CardOutline from "../../../CardOutline/CardOutline";
import LinkArrows from "../../../LinkArrows/LinkArrows";
import TunerIcon from "../../../TunerIcon/TunerIcon";
import MonsterType from "../../../MonsterType/MonsterType";
const SearchListDisplay = ({ version, data }) => {
  let type = data.type.slice();
  let typeArray = type.split(" ");
  if (version === "Spell Card" || version === "Trap Card") {
    return (
      <Fragment>
        <div className="search-display-div">
          <SpellTrapIcon type={data.type} display={"search"} />
          {data.type}
          <RaceIcon race={data.race} display={"search"} />
          {data.race}
          <CardOutline display={"search"} outline={data.type} />
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="search-display-div">
          <AttributeIcon attribute={data.attribute} display={"search"} />
          {data.attribute}
          {data.type === "Link Monster" ? (
            <Fragment>
              <LinkArrows linkMarkers={data.linkmarkers} display={"search"} />
              <p> -{data.linkval}</p>
            </Fragment>
          ) : (
            <LevelIcon type={data.type} display={"search"} />
          )}
          {data.level}
          {typeArray.includes("Pendulum") ? (
            <Fragment>
              <PendIcon display={"search"} />
              {data.scale}
            </Fragment>
          ) : null}
          {typeArray.includes("Tuner") ? (
            <TunerIcon display={"search"} />
          ) : null}
          <MonsterType monsterType={data.race} display={"search"} />
          <CardOutline display={"search"} outline={data.type} />
        </div>
      </Fragment>
    );
  }
};
export default SearchListDisplay;
