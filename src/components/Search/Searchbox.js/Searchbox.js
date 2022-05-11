import React, { Fragment } from "react";
import "./Searchbox.css";
import SearchList from "../SearchList/SearchList";
const Searchbox = ({ data, onInputChange, newImage }) => {
  return (
    <Fragment>
      <div className="search-div">
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          onChange={onInputChange}
        />
        <SearchList data={data} newImage={newImage} />
      </div>
    </Fragment>
  );
};
export default Searchbox;
