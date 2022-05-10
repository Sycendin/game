import React, { Fragment } from "react";
import "./Searchbox.css";

const Searchbox = ({ data, onInputChange }) => {
  // console.log(data);
  return (
    <Fragment>
      <div className="search-div">
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          onChange={onInputChange}
        />
        <ul className="search-list">
          {data.map((option, i) => {
            return <p key={i}>{option.name}</p>;
          })}
        </ul>
      </div>
    </Fragment>
  );
};
export default Searchbox;
