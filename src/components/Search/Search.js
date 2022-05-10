import React, { Fragment } from "react";
import "./Search.css";
import test from "../../TestData";
import Searchbox from "./Searchbox.js/Searchbox";
const Search = () => {
  const onInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Fragment>
      <h1>Search a card.</h1>
      <Searchbox data={test.data} onInputChange={onInputChange} />
    </Fragment>
  );
};
export default Search;
