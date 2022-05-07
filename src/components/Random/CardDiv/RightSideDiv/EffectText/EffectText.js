import React, { Fragment } from "react";
import "./EffectText.css";
const EffectText = ({ cardData }) => {
  return (
    <Fragment>
      <div className="effect-div">
        <p className="card-effect">{cardData.desc}</p>
      </div>
    </Fragment>
  );
};

export default EffectText;
