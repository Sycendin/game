import React, { Fragment, useState, useEffect } from "react";
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
  const [inCard, setInCard] = useState(false);
  const [bigCard, setBigCard] = useState("");
  const [mouseX, setMouseX] = useState();
  const [mouseY, setMouseY] = useState();
  let screenSize = window.screen.width;
  let space = 0;
  if (screenSize <= 800) {
    space = 50;
  } else {
    space = 100;
  }
  useEffect(() => {
    const update = (e) => {
      console.log(e);
      if (e.x) {
        setMouseX(e.x);
        setMouseY(e.y);
      } else {
        setMouseX(e.touches[0].clientX);
        setMouseY(e.touches[0].clientY);
      }
    };
    window.addEventListener("mousemove", update, 50);
    window.addEventListener("touchmove", update, 50);
    return () => {
      window.removeEventListener("mousemove", update, 50);
      window.removeEventListener("touchmove", update, 50);
    };
  }, [setMouseX, setMouseY]);
  console.log(mouseX, mouseY);
  let pos = [];
  const closeModal = () => {
    onClose();
    setInCard(false);
  };
  //
  const imgSet = (position) => {
    setBigCard(pos[position]);
    if (inCard === true) {
      setInCard(false);
    } else {
      setInCard(true);
    }
  };
  // On click of div, add it to pick state and clear pick options and close modal
  const playerChoice = (option) => {
    setPick([option, ...pick]);
    setOptions([]);
    setInCard(false);
    onClose();
  };
  // If on search page set the selected card as the searchImage and close modal
  const cardSet = (card) => {
    clickCard(card);
    setInCard(false);
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
                pos.push(option.card_images[0].image_url);
                return (
                  <Fragment key={i}>
                    <img
                      key={i}
                      className="card-show-img"
                      alt="card"
                      height={614}
                      width={420}
                      src={option.card_images[0].image_url}
                      onMouseEnter={() => imgSet(i)}
                      onMouseLeave={() => imgSet(i)}
                      onTouchMove={() => imgSet(i)}
                      onTouchEnd={() => setInCard(false)}
                      onClick={() => {
                        setPick
                          ? playerChoice(option)
                          : cardSet(option.card_images[0].image_url);
                      }}
                    />
                    {inCard ? (
                      <img
                        key={i + 10}
                        style={{
                          top: mouseY - mouseY / 2,
                          left: mouseX + space,
                        }}
                        className="card-show-big-img"
                        alt="card"
                        height={614}
                        width={420}
                        src={bigCard}
                      ></img>
                    ) : null}
                  </Fragment>
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
