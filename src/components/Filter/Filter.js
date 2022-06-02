import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Filter.css";
const Filter = ({ filterOpen, onClose, setFilter }) => {
  const closeModal = () => {
    onClose();
  };

  if (!filterOpen) return null;
  // Render Modal if open state is true
  else {
    return ReactDOM.createPortal(
      <Fragment>
        <div className="modal-styles">
          <div className="filter-div">
            <button onClick={() => closeModal(false)}>Close Filter</button>
          </div>
        </div>
      </Fragment>,
      document.getElementById("filter")
    );
  }
};

export default Filter;
