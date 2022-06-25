import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import ModalContent from "../ModalContent/ModalContent";
const Modal = ({ open, initialModal }) => {
  return ReactDOM.createPortal(
    <Fragment>
      <div
        className={
          initialModal
            ? "modal-style-intial"
            : open
            ? "modal_styles"
            : "modal_styles-change"
        }
      >
        {open ? <ModalContent /> : null}
      </div>
    </Fragment>,
    document.getElementById("nav")
  );
};
export default Modal;
