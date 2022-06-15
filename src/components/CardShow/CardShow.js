import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./CardShow.css";

const CardShow = ({
  data,
  clickCard,
  setPick,
  pick,
  setOptions,
  open,
  onClose,
}) => {
  const closeModal = () => {
    onClose();
  };
  // On click of div, add it to pick state and clear pick options
  const playerChoice = (option) => {
    setPick([option, ...pick]);
    setOptions([]);
    onClose();
  };
  const cardSet = (card) => {
    clickCard(card);
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
            <div className="card-show-div">
              {data.map((option, i) => {
                return (
                  <img
                    key={i}
                    className="card-show-img"
                    alt="card"
                    height={614}
                    width={420}
                    src={option.card_images[0].image_url}
                    onClick={() => {
                      setPick
                        ? playerChoice(option)
                        : cardSet(option.card_images[0].image_url);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>,
      document.getElementById("cardshow")
    );
  }
};

export default CardShow;
