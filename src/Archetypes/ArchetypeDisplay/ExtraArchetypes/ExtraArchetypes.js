import React, { Fragment } from "react";

const ExtraArchetypes = ({ srcImage, cardName, i }) => {
  return (
    <Fragment>
      <img
        key={i}
        className="archetype-fetch-img"
        alt="main-card"
        height={614}
        width={420}
        src={srcImage}
        onClick={() =>
          window.open(
            `https://db.ygoprodeck.com/card/?search=${cardName}`,
            "_blank"
          )
        }
      ></img>
    </Fragment>
  );
};

export default ExtraArchetypes;
