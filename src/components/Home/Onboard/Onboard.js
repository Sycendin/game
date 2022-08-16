import React, { Fragment, useEffect, useState } from "react";
import ServerLoading from "../../Random/Loading/ServerLoading/ServerLoading";
import { data } from "../OnbordData/OnboardData";
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
    // Read data from markdown file after getting links

    const getMarkdown = (name, set) => {
      console.log(`https://yu-game.herokuapp.com/markdown/${name}`);
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

    getMarkdown("onboard1", setOnboard1);
    getMarkdown("onboard2", setOnboard2);
    getMarkdown("onboard3", setOnboard3);
    getMarkdown("onboard4", setOnboard4);
    getMarkdown("onboard5", setOnboard5);
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
              {onboard1 === "" ? (
                <ServerLoading />
              ) : (
                /* Markdown file data */
                <ReactMarkdown
                  className="mark-test"
                  children={whichMarkdown(i)}
                />
              )}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
export default Onboard;
