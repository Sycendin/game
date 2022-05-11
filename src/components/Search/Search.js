import React, { Fragment, useState } from "react";
import "./Search.css";

import Searchbox from "./Searchbox.js/Searchbox";
import SearchImage from "./SearchImage/SearchImage";

const Search = () => {
  const [options, setOptions] = useState([]);
  const [cardImage, setCardImage] = useState("");

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
    setCardImage("");
    if (event.target.value === "") {
      setOptions([]);
    }
    if (event.target.value !== "") {
      fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${event.target.value.replace(
          " ",
          "%20"
        )}`
      )
        .then((res) => res.json())
        .then((result) => {
          setOptions(result.data.slice(0, 10));
        })
        .catch((error) => {
          setOptions([{ name: "No results" }]);
        });
    }
  }
  const newImage = (image) => {
    setCardImage(image);
    setOptions([]);
  };
  return (
    <Fragment>
      <h1>Search a card</h1>

      <Searchbox
        data={options}
        onInputChange={debounce(onInputChange, 250)}
        newImage={newImage}
      />
      <SearchImage cardImage={cardImage} />
    </Fragment>
  );
};
export default Search;
