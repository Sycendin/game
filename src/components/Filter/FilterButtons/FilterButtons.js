import React, { Fragment } from "react";

import "./FilterButtons.css";
const FilterButtons = ({
  setFilterOpen,
  filterSet,
  setFilterValue,
  setOptions,
}) => {
  return (
    <Fragment>
      <div className="filter-buttons-div">
        <button className="button-reset" onClick={() => setFilterOpen(true)}>
          Filter
        </button>
        <button
          className="button-filter-clear"
          onClick={() => filterSet({}, setFilterValue, setOptions)}
        >
          Clear Filter
        </button>
      </div>
    </Fragment>
  );
};
export default FilterButtons;
