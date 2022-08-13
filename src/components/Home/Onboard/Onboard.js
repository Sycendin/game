import React, { Fragment, useEffect, useState } from "react";
import { data } from "../OnbordData/OnboardData";
import { getData } from "./OnboardHelper";
import ReactMarkdown from "react-markdown";
import "./Onboard.css";
const Onboard = () => {
  const [onboard1, setOnboard1] = useState("");
  const [onboard2, setOnboard2] = useState("");
  const [onboard3, setOnboard3] = useState("");
  const [onboard4, setOnboard4] = useState("");
  const [onboard5, setOnboard5] = useState("");

  // Check to see which markdown file data needs to be
  // displayed
  const whichMarkdown = (i) => {
    switch (i) {
      case 0:
        return onboard1;
      case 1:
        return onboard2;
      case 2:
        return onboard3;
      case 3:
        return onboard4;
      case 4:
        return onboard5;
      default:
        break;
    }
  };
  useEffect(() => {
    // Read data from markdown file after getting link
    const getOnboard = async (setOnboardFunc, onboardName) => {
      const fetchData = await getData(onboardName);
      const getdata = await fetch(fetchData);
      setOnboardFunc(await getdata.text());
    };

    // Make requests for markdown data
    getOnboard(setOnboard1, "onboard1");
    getOnboard(setOnboard2, "onboard2");
    getOnboard(setOnboard3, "onboard3");
    getOnboard(setOnboard4, "onboard4");
    getOnboard(setOnboard5, "onboard5");
  }, []);

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
              {/* Markdown file data */}
              <ReactMarkdown
                className="mark-test"
                children={whichMarkdown(i)}
              />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default Onboard;
