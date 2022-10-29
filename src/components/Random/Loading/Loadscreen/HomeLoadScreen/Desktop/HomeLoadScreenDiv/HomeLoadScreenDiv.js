import React, { Fragment } from "react";
import { HomeLoadScreenImage } from "./HomeLoadScreenImage/HomeLoadScreenImage";
import { HomeLoadScreenText } from "./HomeLoadScreenText/HomeLoadScreenText";
import "./HomeLoadScreenDiv.css";
export const HomeLoadScreenDiv = () => {
  return (
    <Fragment>
      {" "}
      <div className="homediv fbgd">
        <HomeLoadScreenImage />
        <HomeLoadScreenText />
      </div>
    </Fragment>
  );
};
