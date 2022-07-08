import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ModalContent.css";

const ModalContent = ({ handleToggle }) => {
  return (
    <Fragment>
      <div className="modal-div">
        <Link to={`/game/game`} style={{ textDecoration: "none" }}>
          <p
            className="modal-game modal-content-text"
            onClick={() => handleToggle()}
          >
            Game
          </p>
        </Link>
        <Link to={`/game/search`} style={{ textDecoration: "none" }}>
          <p
            onClick={() => handleToggle()}
            className="modal-search modal-content-text"
          >
            Search
          </p>
        </Link>
        <Link to={`/game/random`} style={{ textDecoration: "none" }}>
          <p
            onClick={() => handleToggle()}
            className="modal-random-card modal-content-text"
          >
            Random Card
          </p>
        </Link>
        <Link to={`/game/archetypes`} style={{ textDecoration: "none" }}>
          <p
            onClick={() => handleToggle()}
            className="modal-all-archetypes modal-content-text"
          >
            All Archetypes
          </p>
        </Link>
      </div>
      <br />
    </Fragment>
  );
};
export default ModalContent;
