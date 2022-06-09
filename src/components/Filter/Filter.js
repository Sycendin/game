import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import AttributeFilter from "./AttributeFilter/AttributeFilter";
import TypeFilter from "./TypeFilter/TypeFilter";
import "./Filter.css";

const Filter = ({ filterOpen, onClose, setFilterValue }) => {
  const closeModal = () => {
    setFilterValue(values);
    onClose();
  };
  let values = {};

  if (!filterOpen) return null;
  // Render Modal if open state is true
  else {
    return ReactDOM.createPortal(
      <Fragment>
        <div className="modal-styles">
          <div className="filter-div">
            <AttributeFilter values={values} />
            <TypeFilter values={values} />
            <br></br>
            <button onClick={() => closeModal(false)}>Apply Filter</button>
          </div>
        </div>
      </Fragment>,
      document.getElementById("filter")
    );
  }
};

export default Filter;
