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
        <p className="onboard-title">Other Projects</p>
      </div>

      <div className="mobile-onboard">
        <div className="mobile-onboard-info">
          <p className="mobile-onboard-title">{data[select].title}</p>
          <p className="mobile-onboard-text">{data[select].text}</p>
          {/* <div className="mobile-onboard-button-div">
        <button
          disabled
          // className="mobile-projects-button-grey"'
          className="mobile-projects-button"
          onClick={() => window.open(`${data[select].links[0]}`, "_blank")}
        >
          See Live
        </button>
        <button
          className="mobile-projects-button"
          onClick={() => window.open(`${data[select].links[1]}`, "_blank")}
        >
          Source Code
        </button>
      </div> */}
        </div>
        {/* <div className="mobile-onboard-img-div">
      <img
        alt="secret message"
        width={512}
        height={512}
        className="mobile-onboard-img"
        src={data[select].image}
      ></img>
    </div> */}
        <div className="select-button-div">
          {data.map((element, i) => {
            return (
              <button className="select-button select" onClick={changeSelect}>
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
