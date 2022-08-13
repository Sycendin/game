import React, { Fragment, useState } from "react";
import { getData } from "../Onboard/OnboardHelper";
import { data } from "../OnbordData/OnboardData";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./OnboardM.css";

const OnboardDataM = () => {
  const [select, setSelect] = useState(0);
  const [mOnboard, setMOnboard] = useState("");
  // Read data from markdown file after getting link
  const getOnboard = async (setOnboardFunc, onboardName) => {
    const fetchData = await getData(onboardName);
    const getdata = await fetch(fetchData);
    setOnboardFunc(await getdata.text());
  };
  const changeSelect = (event) => {
    let button = parseInt(event.target.innerText);
    document.querySelectorAll(".select").forEach(function (button) {
      // Set all buttons to default color
      button.style.background = "rgb(67, 190, 67)";
    });
    event.target.style.background = "rgb(67, 240, 67)";
    setSelect(button - 1);
    getOnboard(setMOnboard, `onboard${select + 1}`);
  };
  // Make requests for markdown data
  getOnboard(setMOnboard, `onboard${select + 1}`);

  return (
    <Fragment>
      <div className="onboard-title-div">
        <p className="onboard-div-title">Pages</p>
      </div>

      <div className="mobile-onboard">
        <div className="mobile-onboard-info">
          <ReactMarkdown className="mark-test" children={mOnboard} />

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
