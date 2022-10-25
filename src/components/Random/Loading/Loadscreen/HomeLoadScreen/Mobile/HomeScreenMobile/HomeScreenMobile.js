import React, { Fragment } from "react";
import { HomeScreenMobileDiv } from "./HomeScreenMobileDiv/HomeScreenMobileDiv";
import "./HomeScreenMobile.css";

export const HomeScreenMobile = () => {
  return (
    <Fragment>
      <div className="mhome fbg">
        <HomeScreenMobileDiv />
      </div>
    </Fragment>
  );
};
