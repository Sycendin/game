import React, { Fragment } from "react";

import "./LevelFilter.css";
const LevelFilter = ({ values }) => {
  const levelChange = () => {
    const levelSelect = document.querySelector("#level").value;
    values.level = levelSelect;
  };
  return (
    <Fragment>
      <div className="filter-option-div">
        <label className="select-text" htmlFor="level">
          Level:
        </label>
        <select
          id="level"
          className="select-text filter-selector"
          onChange={() => levelChange()}
        >
          <option value="none">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
    </Fragment>
  );
};
export default LevelFilter;
