import React, { Fragment } from "react";
import "./CardDiv.css";
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
          <img
            className="card-img"
            alt="card"
            width={624}
            height={624}
            src={result}
          ></img>
          <div className="rightside-div">
            <div className="rightside-title-div">
              <p className="card-name">{cardData.name}</p>
              <span className="rightside-span">
                <p className="card-attribute">{cardData.attribute}</p>
                <p className="card-level">{cardData.level}</p>
              </span>
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
