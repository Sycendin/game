import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import ModalContent from "../ModalContent/ModalContent";
const Modal = ({
  open,
  initialModal,
  toggle,
  setInitialModal,
  current,
  isActive,
  setActive,
}) => {
  const handleToggle = () => {
    setInitialModal(false);
    setActive(!isActive);
    if (current === false) {
      toggle(true);
    } else {
      toggle(false);
      setTimeout(function () {
        setInitialModal(true);
      }, 250);
    }
  };
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
        {open ? <ModalContent handleToggle={handleToggle} /> : null}
      </div>
    </Fragment>,
    document.getElementById("nav")
  );
};
export default Modal;
