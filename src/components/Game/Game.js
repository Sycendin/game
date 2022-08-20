import React, { Fragment, useEffect, useState } from "react";
import Loading from "../Random/Loading/Loading";
import Searchbox from "../Search/Searchbox/Searchbox";
import SelectedDiv from "./SelectedDiv/SelectedDiv";
import Modal from "../Modal/Modal";
import Legend from "./Legend/Legend";
import Filter from "../Filter/Filter";
import FilterButtons from "../Filter/FilterButtons/FilterButtons";
import {
  notify,
  debounce,
  filterSet,
} from "../../HelperFunctions/HelperFunctions";
import { ToastContainer } from "react-toastify";
import "./Game.css";
import "react-toastify/dist/ReactToastify.css";
const Game = () => {
  const [pick, setPick] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [options, setOptions] = useState([]);
  const [card, setCard] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [modalExit, setModalExit] = useState(0);
  const [gameReset, setGameReset] = useState(0);
  const [filterValue, setFilterValue] = useState({});
  let searchUrl = "";

  function onInputChange(event) {
    let filterUrl = "";
    // Go through the filter and prepare the additional parameters in the url
    Object.entries(filterValue).forEach(([key, val]) => {
      filterUrl = filterUrl + `&${key}=${val}`;
    });
    console.log(filterUrl);
    //  Show no searchlist on empty input
    if ((event.target.value === "") & (filterUrl !== "")) {
      searchUrl =
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&type=fusion%20monster` +
        filterUrl;
    } else {
      if (event.target.value === "") {
        setOptions([]);
      }
      if (event.target.value !== "") {
        // Change URL that will be sent to API depending on whether the archetype button is pressed

        searchUrl =
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&type=fusion%20monster&fname=${event.target.value.replace(
            " ",
            "%20"
          )}` + filterUrl;
      }
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

  // Reset game by resetting picks, reset modal and re-render using gameReset state
  // Alert user that the game as been reset with notify function that displays toast message
  const resetGame = () => {
    setPick([]);
    setModalExit(0);
    setGameReset(gameReset + 1);
    setFilterValue({});
    // Remove the animation from reset button and clear searchbox
    document.getElementById("reset").classList.remove("finish");
    document.getElementById("text-input").value = "";
    notify("reset");
  };

  useEffect(() => {
    fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&type=fusion%20monster"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          // setCards(result);
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
        <div className="min-height">
          <FilterButtons
            setFilterOpen={setFilterOpen}
            filterSet={filterSet}
            setFilterValue={setFilterValue}
            setOptions={setOptions}
          />
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
          {pick.length !== 0 ? (
            <SelectedDiv list={pick} mainCard={card} />
          ) : null}
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
            filterSet={filterSet}
            setFilterValue={setFilterValue}
            setOptions={setOptions}
          ></Filter>
        </div>
        <ToastContainer newestOnTop={true} />
      </Fragment>
    );
  }
};

export default Game;
