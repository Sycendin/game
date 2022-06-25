import React, { Fragment } from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-div">
        <p className="nav-text">Game</p>
        <p className="nav-text">Search</p>
        <p className="nav-text">Random</p>
        <p className="nav-text">Archetype</p>
      </div>
    </Fragment>
  );
};
export default Navigation;
