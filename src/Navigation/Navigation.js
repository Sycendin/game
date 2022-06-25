import React, { Fragment } from "react";
import "./Navigation.css";

const Navigation = ({ width }) => {
  return (
    <Fragment>
      <div className="nav-div">
        {width > 600 ? (
          <Fragment>
            <p className="nav-text">Game</p>
            <p className="nav-text">Search</p>
            <p className="nav-text">Random Card</p>
            <p className="nav-text">All Archetypes</p>
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  );
};
export default Navigation;
