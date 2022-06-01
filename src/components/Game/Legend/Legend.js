import React, { Fragment } from "react";
import "./Legend.css";
const Legend = () => {
  return (
    <Fragment>
      <h1>Legend</h1>
      <div className="legend-div">
        <div className={"inner-legend-high"}>
          <p className={"legend-text"}>Higher than main card</p>
          <img
            alt="arrow"
            className={`legend-img`}
            src={
              "https://cdn.discordapp.com/attachments/958975018816131132/978144886874329118/uparrow.webp"
            }
          ></img>
        </div>
        <div className={"inner-legend-low"}>
          <p className={"legend-text"}>Lower than main card</p>
          <img
            alt="arrow"
            className={`legend-img`}
            src={
              "https://cdn.discordapp.com/attachments/958975018816131132/978144887138574396/downarrow.webp"
            }
          ></img>
        </div>
        <div className={"inner-legend-equal"}>
          <p className={"legend-text"}>Equal/Same as main card</p>
          <img
            alt="arrow"
            className={`legend-img`}
            src={
              "https://cdn.discordapp.com/attachments/958975018816131132/978512440943845376/equals.webp"
            }
          ></img>
        </div>
        <div className={"inner-legend-wrong"}>
          <p className={"legend-text"}>Not equal/same as main card</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Legend;
