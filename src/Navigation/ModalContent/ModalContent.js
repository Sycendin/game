import React, { Fragment } from "react";
import "./ModalContent.css";

const ModalContent = () => {
  return (
    <Fragment>
      <div className="modal-div">
        <p
          className="modal-game modal-content-text"
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/news", "_blank")
          }
        >
          Game
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/tickets", "_blank")
          }
          className="modal-search modal-content-text"
        >
          Search
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="modal-random-card modal-content-text"
        >
          Random Card
        </p>
        <p
          onClick={() =>
            window.open("https://www.mlb.com/bluejays/schedule", "_blank")
          }
          className="modal-all-archetypes modal-content-text"
        >
          All Archetypes
        </p>
      </div>
      <br />
    </Fragment>
  );
};
export default ModalContent;
