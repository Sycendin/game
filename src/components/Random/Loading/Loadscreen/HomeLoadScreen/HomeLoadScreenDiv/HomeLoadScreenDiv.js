import React, { Fragment } from "react";
import { HomeLoadScreenImage } from "./HomeScreenImage/HomeScreenImage";
import { HomeLoadScreenText } from "./HomeScreenText/HomeScreenText";
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
