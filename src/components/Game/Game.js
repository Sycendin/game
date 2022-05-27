import React, { Fragment, useEffect, useState } from "react";
import Loading from "../Random/Loading/Loading";
import Searchbox from "../Search/Searchbox.js/Searchbox";
import SelectedDiv from "./SelectedDiv/SelectedDiv";
import Modal from "../Modal/Modal";
import "./Game.css";
const Game = ({ open }) => {
  const [pick, setPick] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [options, setOptions] = useState([]);
  const [cardImage, setCardImage] = useState("");
  const [card, setCard] = useState(0);
  const [archetypeSearch, setArchetypeSearch] = useState(false);
  const [searchButtonClass, setSearchButtonClass] =
    useState("archetype-button");
  const [isOpen, setIsOpen] = useState(false);
  const [modalExit, setModalExit] = useState(0);
  const [gameReset, setGameReset] = useState(0);
  let searchUrl = "";

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  function onInputChange(event) {
    // Clear card image on input change of searchbar
    setCardImage("");
    //  Show no searchlist on empty input
    if (event.target.value === "") {
      setOptions([]);
    }
    if (event.target.value !== "") {
      // Change URL that will be sent to API depending on whether the archetype button is pressed
      if (archetypeSearch === true) {
        searchUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${event.target.value.replace(
          " ",
          "%20"
        )}`;
      } else {
        searchUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&type=fusion%20monster&fname=${event.target.value.replace(
          " ",
          "%20"
        )}`;
      }
      // Call API and set information from it, if no results then set that to be displayed instead

      fetch(searchUrl)
        .then((res) => res.json())
        .then((result) => {
          setOptions(result.data.slice(0, 10));
        })
        .catch((error) => {
          setOptions([{ name: "No results" }]);
        });
    }
  }

  // Set store card image to state and clear searchlist
  const newImage = (image) => {
    setCardImage(image);
    setOptions([]);
  };

  //
  const resetGame = () => {
    setPick([]);
    setGameReset(gameReset + 1);
  };
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon")
    fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&type=fusion%20monster"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCards(result);
          setCard(result.data[Math.floor(Math.random() * result.data.length)]);
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [gameReset]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading-div">
        <p className="loading-text">Loading... </p>
        <Loading />
      </div>
    );
  } else {
    console.log(card.name);
    if (pick.length > 0 && modalExit === 0) {
      if (card.name === pick[pick.length - 1].name) {
        setModalExit(1);
        setIsOpen(true);
      }
    }
    return (
      <Fragment>
        <Searchbox
          setPick={setPick}
          pick={pick}
          data={options}
          // Call debounce function with inputchange so that it doesn't run more than 4 times a second
          onInputChange={debounce(onInputChange, 250)}
          newImage={newImage}
        />{" "}
        {pick.length !== 0 ? (
          // <img alt="card" src={pick[0].card_images[0].image_url}></img>
          <SelectedDiv list={pick} mainCard={card} />
        ) : null}
        <button onClick={() => resetGame()}>Reset</button>
        <Modal
          exitFunc={setModalExit}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          card={card}
        ></Modal>
      </Fragment>
    );
  }
};

export default Game;
