import React, { Fragment } from "react";
import "./SearchListDisplay.css";
import AttributeIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/AttributeIcon/AttributeIcon";
import LevelIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/LevelIcon/LevelIcon";
import PendIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/PendIcon/PendIcon";
import RaceIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/RaceIcon/RaceIcon";
import SpellTrapIcon from "../../../Random/CardDiv/RightSideDiv/CardTypeWithIcons/SpellTrapIcon/SpellTrapIcon";
import LinkArrows from "../../../LinkArrows/LinkArrows";
const SearchListDisplay = ({ version, data }) => {
  if (version === "Spell Card" || version === "Trap Card") {
    return (
      <Fragment>
        <div className="search-display-div">
          <SpellTrapIcon type={data.type} display={"search"} />
          {data.type}
          <RaceIcon race={data.race} display={"search"} />
          {data.race}
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
              <LinkArrows display={"search"} linkMarkers={data.linkmarkers} />
              <p> -{data.linkval}</p>
            </Fragment>
          ) : (
            <LevelIcon display={"search"} type={data.type} />
          )}
          {data.level}
          {data.type === "Pendulum Effect Monster" ? (
            <Fragment>
              <PendIcon display={"search"} />
              {data.scale}
            </Fragment>
          ) : null}
        </div>
      </Fragment>
    );
  }
};
export default SearchListDisplay;
