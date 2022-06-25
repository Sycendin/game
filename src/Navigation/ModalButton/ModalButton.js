import React, { Fragment, useState } from "react";
import "./ModalButton.css";

const ModalButton = ({ toggle, current, setInitialModal }) => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setInitialModal(false);
    setActive(!isActive);
    if (current === false) {
      toggle(true);
    } else {
      toggle(false);
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
