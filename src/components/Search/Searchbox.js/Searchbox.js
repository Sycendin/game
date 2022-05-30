import React, { Fragment } from "react";
import "./Searchbox.css";
import SearchList from "../SearchList/SearchList";
const Searchbox = ({
  data,
  onInputChange,
  clickCard,
  pick,
  setPick,
  setOptions,
}) => {
  const resetText = () => {
    document.getElementById("text-input").value = "";
    setOptions([]);
  };
  return (
    <Fragment>
      <div className="search-div">
        <div className="searchbar">
          <input
            id="text-input"
            type="text"
            className="search-box"
            placeholder="Search"
            onChange={onInputChange}
          />
          <button className="button-clear" onClick={() => resetText()}>
            Clear
          </button>
        </div>
        <SearchList
          data={data}
          clickCard={clickCard}
          setPick={setPick}
          pick={pick}
          setOptions={setOptions}
        />
      </div>
    </Fragment>
  );
};
export default Searchbox;
