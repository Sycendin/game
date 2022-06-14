import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./CardShow.css";

const CardShow = ({ open, onClose }) => {
  const closeModal = () => {
    onClose();
  };
  // Don't display Modal if open state is not true
  if (!open) return null;
  // Render Modal if open state is true
  else {
    return ReactDOM.createPortal(
      <Fragment>
        <div className="modal-styles">
          <div className="modal-card-div">
            {/* Play confetti when modal opens */}
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
          </div>
        </div>
      </Fragment>,
      document.getElementById("cardshow")
    );
  }
};

export default CardShow;
