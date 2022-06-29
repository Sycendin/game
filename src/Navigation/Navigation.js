import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ width }) => {
  return (
    <Fragment>
      <div className="nav-div">
        {width > 600 ? (
          <Fragment>
            <Link to={`/game/game`} style={{ textDecoration: "none" }}>
              <p className="nav-text">Game</p>
            </Link>
            <Link to={`/game/search`} style={{ textDecoration: "none" }}>
              <p className="nav-text">Search</p>
            </Link>
            <Link to={`/game/random`} style={{ textDecoration: "none" }}>
              <p className="nav-text">Random Card</p>
            </Link>
            <Link to={`/game/archetypes`} style={{ textDecoration: "none" }}>
              <p className="nav-text">All Archetypes</p>
            </Link>
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  );
};
export default Navigation;
