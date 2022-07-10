import React, { Fragment, useState } from "react";
import { data } from "../OnbordData/OnboardData";
import "./OnboardM.css";

const OnboardDataM = () => {
  const [select, setSelect] = useState(0);

  const changeSelect = (event) => {
    let button = parseInt(event.target.innerText);
    document.querySelectorAll(".select").forEach(function (button) {
      // Set all buttons to default color
      button.style.background = "rgb(67, 190, 67)";
    });
    event.target.style.background = "rgb(67, 240, 67)";
    setSelect(button - 1);
  };
  return (
    <Fragment>
      <div className="onboard-title-div">
        <p className="onboard-div-title">Pages</p>
      </div>

      <div className="mobile-onboard">
        <div className="mobile-onboard-info">
          <p className="mobile-onboard-title">{data[select].title}</p>

          <div className="mobile-onboard-text-div">
            {data[select].text.split("#break").map((line, i) => {
              return <p className="mobile-onboard-text">{line}</p>;
            })}
          </div>
          <img
            alt={data[select].title}
            width={1280}
            height={720}
            className="mobile-onboard-img"
            src={data[select].image}
          ></img>
        </div>
        <div className="select-button-div">
          {data.map((element, i) => {
            return (
              <button
                key={i}
                className="select-button select"
                onClick={changeSelect}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default OnboardDataM;
