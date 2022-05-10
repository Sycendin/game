import React, { Fragment, useState } from "react";
import "./Search.css";
import test from "../../TestData";
import Searchbox from "./Searchbox.js/Searchbox";
const Search = () => {
  const [options, setOptions] = useState([]);
  const [cardImage, setCardImage] = useState("");

  const onInputChange = (event) => {
    setCardImage("");

    setOptions(
      test.data.filter((option) =>
        option.name.toLowerCase().includes(event.target.value)
      )
    );
  };
  const newImage = (image) => {
    setCardImage(image);
  };
  return (
    <Fragment>
      <h1>Search a card.</h1>
      <Searchbox
        data={options}
        onInputChange={onInputChange}
        newImage={newImage}
      />
      {cardImage !== "" ? (
        <img src={cardImage} height={614} width={421} alt="cardimage" />
      ) : null}
    </Fragment>
  );
};
export default Search;
