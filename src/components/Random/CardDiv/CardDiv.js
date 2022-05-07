import React, { Fragment, useState, useEffect } from "react";
import "./CardDiv.css";
import LeftSideDiv from "./LeftSideDiv/LeftSideDiv";
import RightSideDiv from "./RightSideDiv/RightSideDiv";
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
          <LeftSideDiv imageResult={imageResult} />
          <div className="rightside-div">
            <RightSideDiv cardData={cardData} typeArray={typeArray} />
          </div>
        </div>
      </Fragment>
    );
  }
};

export default CardDiv;
