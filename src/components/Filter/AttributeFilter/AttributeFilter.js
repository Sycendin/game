import React, { Fragment } from "react";

import "./AttributeFilter.css";
const AttributeFilter = () => {
  return (
    <Fragment>
      <select id="framework" multiple>
        <option disabled selected value>
          {" "}
          -- select an option --{" "}
        </option>
        <option value="DARK">DARK</option>
        <option value="LIGHT">LIGHT</option>
        <option value="WIND">WIND</option>
        <option value="FIRE">FIRE</option>
        <option value="WATER">WATER</option>
        <option value="EARTH">EARTH</option>
      </select>
    </Fragment>
  );
};
export default AttributeFilter;
