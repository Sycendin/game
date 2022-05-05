import React, { Fragment, useState, useEffect } from "react";
import "./CardDiv.css";
import AttributeIcon from "./AttributeIcon/AttributeIcon";
import LevelIcon from "./LevelIcon/LevelIcon";
import SpellTrapIcon from "./SpellTrapIcon/SpellTrapIcon";
import RaceIcon from "./RaceIcon/RaceIcon";
const CardDiv = ({ cardData }) => {
  const [load, setLoad] = useState(true);
  const [imageResult, setImageResult] = useState("");

  // Async function that checks if an image url is valid
  async function checkImage(url) {
    const res = await fetch(url);
    const buff = await res.blob();

    return buff.type.startsWith("image/");
  }
  useEffect(() => {
    // Run async function to check if full art is availiable and set imageResult state
    // to appropiate image url based on that
    // Then set load state to false
    checkImage(
      cardData.card_images[0].image_url.replace("pics", "pics_artgame")
    )
      .then((val) => {
        if (val === true) {
          setImageResult(
            cardData.card_images[0].image_url.replace("pics", "pics_artgame")
          );
        } else {
          setImageResult(cardData.card_images[0].image_url);
        }

        setLoad(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cardData.card_images]);

  // Make copy of type and split it to get first element to display
  let type = cardData.type.slice();
  let typeArray = type.split(" ");
  // Render when async function is done loading
  if (load === false) {
    return (
      <Fragment>
        <div className="card-div">
          <div className="card-img-div2">
            <img
              className="card-img"
              alt="card"
              width={624}
              height={624}
              src={imageResult}
            ></img>
          </div>
          <div className="rightside-div">
            <p className="card-name">{cardData.name}</p>
            <div className="rightside-title-div">
              {cardData.type === "Spell Card" ||
              cardData.type === "Trap Card" ? (
                <div className="rightside-span">
                  <p className="card-attribute">{cardData.type}</p>
                  <SpellTrapIcon type={cardData.type} />
                  <p className="card-level">{cardData.race}</p>
                  <RaceIcon race={cardData.race} />
                </div>
              ) : (
                <div className="rightside-span">
                  <p className="card-attribute">{cardData.attribute}</p>
                  <AttributeIcon attribute={cardData.attribute} />
                  <p className="card-level">{cardData.level}</p>
                  <LevelIcon />
                </div>
              )}
            </div>
            <div className="type-div">
              <p className="type-text">
                [{cardData.race}/{typeArray[0]}]
              </p>
            </div>

            <div className="effect-div">
              <p className="card-effect">{cardData.desc}</p>
            </div>
            {cardData.type === "Spell Card" ||
            cardData.type === "Trap Card" ? null : (
              <div className="stats-div">
                <p className="stats-text">ATK</p>
                <p className="stats-atk">/{cardData.atk}</p>{" "}
                <p className="stats-text">DEF</p>
                <p className="stats-def">/{cardData.def}</p>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
};

export default CardDiv;
