import React, { Fragment } from "react";
import { HomeScreenMobileImg } from "./HomeScreenMobileImg/HomeScreenMobileImg";
import { HomeScreenMobileText } from "./HomeScreenMobileText/HomeScreenMobileText";
import { HomeScreenMobileButtons } from "./HomeScreenMobileButtons/HomeScreenMobileButtons";
import "./HomeScreenMobileDiv.css";

export const HomeScreenMobileDiv = () => {
  return (
    <Fragment>
      <div className="homedivm fbgd">
        <HomeScreenMobileImg />
        <HomeScreenMobileText />
        <HomeScreenMobileButtons />
      </div>
    </Fragment>
  );
};
