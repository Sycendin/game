import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ width }) => {
  return (
    <Fragment>
      <div className="nav-div">
        {width > 600 ? (
          <Fragment>
            <Link
              to={`/game/archetypes/game`}
              style={{ textDecoration: "none" }}
            >
              <p className="nav-text">Game</p>
            </Link>
            <Link
              to={`/game/archetypes/search`}
              style={{ textDecoration: "none" }}
            >
              <p className="nav-text">Search</p>
            </Link>
            <Link
              to={`/game/archetypes/random`}
              style={{ textDecoration: "none" }}
            >
              <p className="nav-text">Random Card</p>
            </Link>
            <Link
              to={`/game/archetypes/archetypes`}
              style={{ textDecoration: "none" }}
            >
              <p className="nav-text">All Archetypes</p>
            </Link>
          </Fragment>
        ) : null}
      </div>
    </Fragment>
  );
};
export default Navigation;
