import React, { Fragment } from "react";
import { HomeLoadScreenDiv } from "./HomeLoadScreenDiv/HomeLoadScreenDiv";
import "./HomeLoadScreen.css";
export const HomeLoadScreen = () => {
  return (
    <Fragment>
      <div className="loadscreen min-height fbg">
        {[...Array(3).keys()].map((element) => {
          return (
            <Fragment key={element}>
              <HomeLoadScreenDiv />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};
