import React, { Fragment } from "react";
import "./CardDiv.css";
const CardDiv = ({ cardData }) => {
  let result = cardData.card_images[0].image_url.replace(
    "pics",
    "pics_artgame"
  );

  return (
    <Fragment>
      <div className="card-div">
        <img
          className="card-img"
          alt="card"
          width={421}
          height={614}
          src={result}
        ></img>
        <div className="rightside-div">
          <p className="card-name">{cardData.name}</p>
          <p className="card-attribute">{cardData.attribute}</p>
          <div className="effect-div">
            <p className="card-effect">{cardData.desc}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CardDiv;
