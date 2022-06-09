import React, { Fragment, useEffect, useState } from "react";
import Loading from "../Random/Loading/Loading";
import Searchbox from "../Search/Searchbox/Searchbox";
import SelectedDiv from "./SelectedDiv/SelectedDiv";
import Modal from "../Modal/Modal";
import Legend from "./Legend/Legend";
import Filter from "../Filter/Filter";
import { ToastContainer, toast } from "react-toastify";
import "./Game.css";
import "react-toastify/dist/ReactToastify.css";
const Game = () => {
  const [pick, setPick] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [options, setOptions] = useState([]);
  const [card, setCard] = useState(0);
  const [archetypeSearch, setArchetypeSearch] = useState(false);
  const [searchButtonClass, setSearchButtonClass] =
    useState("archetype-button");
  const [isOpen, setIsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState({});
  const [modalExit, setModalExit] = useState(0);
  const [gameReset, setGameReset] = useState(0);
  const [filterValue, setFilterValue] = useState({});
  let searchUrl = "";

  // Toast message that will be played when the reset button is clicked
  const notify = () =>
    toast.info("Game has been reset!", { autoClose: 2000, pauseOnHover: true });

  // Debounce function that limits the amount of function runs per second
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
    let filterUrl = "";
    Object.entries(filterValue).forEach(([key, val]) => {
      filterUrl = filterUrl + `&${key}=${val}`;
    });
    console.log(filterUrl);
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
        searchUrl =
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&type=fusion%20monster&fname=${event.target.value.replace(
            " ",
            "%20"
          )}` + filterUrl;
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

  // Reset game by resetting picks, reset modal and re-render using gameReset state
  // Alert user that the game as been reset with notify function that displays toast message
  const resetGame = () => {
    setPick([]);
    setModalExit(0);
    setGameReset(gameReset + 1);
    // Remove the animation from reset button and clear searchbox
    document.getElementById("reset").classList.remove("finish");
    document.getElementById("text-input").value = "";
    notify();
  };

  useEffect(() => {
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

        // Catch errors
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
    // Check if modal is closed and picked card matches main card then open "you win" modal
    if (pick.length > 0 && modalExit === 0) {
      if (card.name === pick[0].name) {
        setModalExit(1);
        setIsOpen(true);
        // Add animation to reset button to get user to click it to reset the game
        document.getElementById("reset").classList.add("finish");
      }
    }
    return (
      <Fragment>
        <button onClick={() => setFilterOpen(true)}>Filter</button>
        <Legend />
        <Searchbox
          setPick={setPick}
          pick={pick}
          data={options}
          // Call debounce function with inputchange so that it doesn't run more than 4 times a second
          onInputChange={debounce(onInputChange, 250)}
          setOptions={setOptions}
        />{" "}
        {/* Display the user selections only if they have picked at least one card */}
        {pick.length !== 0 ? <SelectedDiv list={pick} mainCard={card} /> : null}
        <button
          id={"reset"}
          className="button-reset"
          onClick={() => resetGame()}
        >
          Reset
        </button>
        <Modal
          exitFunc={setModalExit}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          card={card}
          numGuesses={pick.length}
        ></Modal>
        <Filter
          filterOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
          setFilter={setFilter}
          setFilterValue={setFilterValue}
        ></Filter>
        <ToastContainer newestOnTop={true} />
      </Fragment>
    );
  }
};

export default Game;
