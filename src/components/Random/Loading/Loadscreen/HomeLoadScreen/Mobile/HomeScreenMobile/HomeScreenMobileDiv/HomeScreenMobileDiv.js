import React, { Fragment } from "react";
import { HomeLoadScreenImage } from "../../../Desktop/HomeLoadScreenDiv/HomeScreenImage/HomeScreenImage";
import { HomeScreenMobileText } from "./HomeScreenMobileText/HomeScreenMobileText";
import { HomeScreenMobileButtons } from "./HomeScreenMobileButtons/HomeScreenMobileButtons";
import "./HomeScreenMobileDiv.css";

export const HomeScreenMobileDiv = () => {
  return (
    <Fragment>
      <HomeLoadScreenImage />
      <HomeScreenMobileText />
      <HomeScreenMobileButtons />
    </Fragment>
  );
};
