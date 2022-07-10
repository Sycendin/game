import React, { Fragment } from "react";
import { data } from "../OnbordData/OnboardData";
import "./Onboard.css";
const Onboard = () => {
  return (
    <Fragment>
      <div className="onboard-title-div">
        <p className="onboard-title">Other Projects</p>
      </div>
      {data.map((element, i) => {
        return (
          <div className="onboard">
            <div className="onboard-info">
              <p className="onboard-title">{data[i].title}</p>
              <p className="onboard-text">{data[i].text}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default Onboard;
