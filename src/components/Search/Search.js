import React, { Fragment, useState } from "react";
import "./Search.css";
import Searchbox from "./Searchbox.js/Searchbox";
import SearchImage from "./SearchImage/SearchImage";

const Search = () => {
  const [options, setOptions] = useState([]);
  const [cardImage, setCardImage] = useState("");
  const [archetypeSearch, setArchetypeSearch] = useState(false);
  const [searchButtonClass, setSearchButtonClass] =
    useState("archetype-button");

  let searchUrl = "";
  // Debounce function that limits the amount of times a function will be able to run
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
        searchUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${event.target.value.replace(
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

  // If search by archetype button is pressed then change class of it's button to show it is pressed/unpressed
  // Then set the state for it appropiately
  const changeArchetypeSearch = () => {
    if (archetypeSearch === false) {
      setSearchButtonClass("archetype-button-pressed");
      setArchetypeSearch(true);
    } else {
      setSearchButtonClass("archetype-button");
      setArchetypeSearch(false);
    }
  };
  // Set store card image to state and clear searchlist
  const clickCard = (image) => {
    if (image) {
      setCardImage(image);
    }
    setOptions([]);
  };

  return (
    <Fragment>
      <h1>Search a card</h1>
      <button
        className={searchButtonClass}
        onClick={() => changeArchetypeSearch()}
      >
        Search by Archetype
      </button>
      <Searchbox
        data={options}
        // Call debounce function with inputchange so that it doesn't run more than 4 times a second
        onInputChange={debounce(onInputChange, 250)}
        clickCard={clickCard}
      />
      <SearchImage cardImage={cardImage} />
    </Fragment>
  );
};
export default Search;
