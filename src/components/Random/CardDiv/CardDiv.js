import React, { Fragment } from "react";
import "./CardDiv.css";
import AttributeIcon from "./AttributeIcon/AttributeIcon";
import LevelIcon from "./LevelIcon/LevelIcon";
// import RaceIcon from "./RaceIcon/RaceIcon";
const CardDiv = ({ cardData }) => {
  let result = cardData.card_images[0].image_url.replace(
    "pics",
    "pics_artgame"
  );
  // width={421}
  // height={614}
  if ((cardData.type = "Effect Monster")) {
    return (
      <Fragment>
        <div className="card-div">
          <div className="card-img-div2">
            <img
              className="card-img"
              alt="card"
              width={624}
              height={624}
              src={result}
            ></img>
          </div>
          <div className="rightside-div">
            <div className="rightside-title-div">
              <p className="card-name">{cardData.name}</p>
              <div className="rightside-span">
                <p className="card-attribute">{cardData.attribute}</p>
                <AttributeIcon attribute={cardData.attribute} />
                <p className="card-level">{cardData.level}</p>
                <LevelIcon />
              </div>
            </div>
            <div className="effect-div">
              <p className="card-effect">{cardData.desc}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};
export default CardDiv;
