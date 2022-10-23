import React, { Fragment } from "react";
import { HomeLoadScreenDiv } from "./HomeLoadScreenDiv/HomeLoadScreenDiv";
import "./HomeLoadScreen.css";
export const HomeLoadScreen = () => {
  return (
    <Fragment>
      <div className="loadscreen min-height fbg">
        <HomeLoadScreenDiv />
      </div>
    </Fragment>
  );
};
