import React, { Fragment } from "react";
import "./ModalButton.css";

const ModalButton = ({
  toggle,
  current,
  setInitialModal,
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
  return (
    <Fragment>
      <div className={isActive ? "top-right" : "top-right-change"}>
        <div className={isActive ? "" : "change"} onClick={handleToggle}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </Fragment>
  );
};
export default ModalButton;
