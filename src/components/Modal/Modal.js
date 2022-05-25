import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ open, onClose }) => {
  // Don't display Modal if open state is not true
  if (!open) return null;
  // Render Modal if open state is true
  return ReactDOM.createPortal(
    <Fragment>
      <div className="modal-styles">
        <button className="modal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default Modal;
