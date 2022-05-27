import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ open, onClose, card, exitFunc }) => {
  const closeModal = () => {
    // exitFunc(0);
    onClose();
  };
  // Don't display Modal if open state is not true
  if (!open) return null;
  // Render Modal if open state is true
  return ReactDOM.createPortal(
    <Fragment>
      <div className="modal-styles">
        <div className="modal-card-div">
          <p className="modal-text">You guessed it!</p>
          <img alt="main-card" src={card.card_images[0].image_url}></img>

          <button className="modal-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
};

export default Modal;
