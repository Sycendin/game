import React, { Fragment, useState } from "react";
import { HomeScreenMobile } from "../../Random/Loading/Loadscreen/HomeLoadScreen/Mobile/HomeScreenMobile/HomeScreenMobile";
// import { getData } from "../Onboard/OnboardHelper";
import { data } from "../OnbordData/OnboardData";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./OnboardM.css";

const OnboardDataM = () => {
  const [select, setSelect] = useState(0);
  const [mOnboard, setMOnboard] = useState("");
  // Read data from markdown file after getting link
  const getMarkdown = (name, set) => {
    fetch(`https://yu-game.herokuapp.com/markdown/${name}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => set(res));
  };
  const changeSelect = (event) => {
    let button = parseInt(event.target.innerText);
    document.querySelectorAll(".select").forEach(function (button) {
      // Set all buttons to default color
      button.style.background = "rgb(67, 190, 67)";
    });
    event.target.style.background = "rgb(67, 240, 67)";
    setSelect(button - 1);
    getMarkdown(`onboard${select + 1}`, setMOnboard);
  };
  // Make requests for markdown data
  getMarkdown(`onboard${select + 1}`, setMOnboard);
  if (mOnboard.length < 1) {
    return <HomeScreenMobile />;
  } else if (mOnboard.length > 0) {
    return (
      <Fragment>
        <div className="onboard-title-div">
          <p className="onboard-div-title">Pages</p>
        </div>

        <div className="mobile-onboard">
          <div className="mobile-onboard-info">
            {/*  Markdown file data */}
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
  }
};
export default OnboardDataM;
