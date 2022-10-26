import React, { Fragment } from "react";
import { HomeLoadScreenImage } from "../../../Desktop/HomeLoadScreenDiv/HomeScreenImage/HomeScreenImage";
import { HomeScreenMobileText } from "./HomeScreenMobileText/HomeScreenMobileText";
import { HomeScreenMobileButtons } from "./HomeScreenMobileButtons/HomeScreenMobileButtons";
import "./HomeScreenMobileDiv.css";

export const HomeScreenMobileDiv = () => {
  return (
    <Fragment>
      <div className="homedivm fbgd">
        <HomeLoadScreenImage />
        <HomeScreenMobileText />
        <HomeScreenMobileButtons />
      </div>
    </Fragment>
  );
};
