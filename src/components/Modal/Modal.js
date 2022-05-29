import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";
import "./Modal.css";

const Modal = ({ open, onClose, card, exitFunc }) => {
  const closeModal = () => {
    onClose();
  };
  // Create audio that will play on sucessful guess
  let victory = new Audio(
    "https://cdn.discordapp.com/attachments/958975018816131132/980320540608835634/win.mp3"
  );
  // Don't display Modal if open state is not true
  if (!open) return null;
  // Render Modal if open state is true
  else {
    victory.play();
    return ReactDOM.createPortal(
      <Fragment>
        <div className="modal-styles">
          <div className="modal-card-div">
            {/* Play confetti when modal opens */}
            <Confetti />
            <div className="modal-close-div">
              <img
                alt="x-button"
                src={
                  "https://cdn.discordapp.com/attachments/958975018816131132/979975817805324338/x.webp"
                }
                className="modal-button"
                onClick={closeModal}
              ></img>
            </div>
            <p className="modal-text">You guessed it!</p>
            <img alt="main-card" src={card.card_images[0].image_url}></img>
          </div>
        </div>
      </Fragment>,
      document.getElementById("portal")
    );
  }
};

export default Modal;
