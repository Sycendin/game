import React, { Fragment } from "react";
import { data } from "../OnbordData/OnboardData";
import "./Onboard.css";
const Onboard = () => {
  return (
    <Fragment>
      <div className="onboard-title-div">
        <p className="onboard-div-title">Pages</p>
      </div>
      {data.map((element, i) => {
        return (
          <div key={i} className="onboard">
            <div className="onboard-info">
              <img
                alt={element.title}
                width={1280}
                height={720}
                className="onboard-img"
                src={data[i].image}
              ></img>
              <p className="onboard-title">{data[i].title}</p>
              {console.log(data[i].text.split("#break"))}
              <div className="onboard-text-div">
                {data[i].text.split("#break").map((line, i) => {
                  return <p className="onboard-text">{line}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default Onboard;
