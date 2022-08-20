import React, { Fragment, useState } from "react";

import Searchbox from "./Searchbox/Searchbox";
import SearchImage from "./SearchImage/SearchImage";
import FilterButtons from "../Filter/FilterButtons/FilterButtons";
import Filter from "../Filter/Filter";
import { debounce, filterSet } from "../../HelperFunctions/HelperFunctions";
import { ToastContainer } from "react-toastify";
import "./Search.css";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [options, setOptions] = useState([]);
  const [cardImage, setCardImage] = useState("");
  const [archetypeSearch, setArchetypeSearch] = useState(false);
  const [searchButtonClass, setSearchButtonClass] =
    useState("archetype-button");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterValue, setFilterValue] = useState({});
  let searchUrl = "";
  // Debounce function that limits the amount of times a function will be able to run

  function onInputChange(event) {
    setCardImage("");
    let filterUrl = "";
    // Go through the filter and prepare the additional parameters in the url
    Object.entries(filterValue).forEach(([key, val]) => {
      filterUrl = filterUrl + `&${key}=${val}`;
    });
    console.log(filterUrl);
    // console.log(filterUrl);
    if ((event.target.value === "") & (filterUrl !== "")) {
      searchUrl =
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg` + filterUrl;
    } else {
      // Clear card image on input change of searchbar

      //  Show no searchlist on empty input
      if (event.target.value === "") {
        setOptions([]);
      }
      if (event.target.value !== "") {
        // Change URL that will be sent to API depending on whether the archetype button is pressed
        if (archetypeSearch === true) {
          searchUrl =
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${event.target.value.replace(
              " ",
              "%20"
            )}` + filterUrl;
        } else {
          searchUrl =
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${event.target.value.replace(
              " ",
              "%20"
            )}` + filterUrl;
        }
        // Call API and set information from it, if no results then set that to be displayed instead
      }
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
      <div className="min-height">
        <h1>Search a card</h1>
        <FilterButtons
          setFilterOpen={setFilterOpen}
          filterSet={filterSet}
          setFilterValue={setFilterValue}
          setOptions={setOptions}
        />
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
};
export default Search;
