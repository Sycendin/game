import React, { Fragment } from "react";

import "./AttributeFilter.css";
const AttributeFilter = ({ values }) => {
  const attributeChange = () => {
    const attributeSelect = document.querySelector("#attribute").value;
    values.attribute = attributeSelect;
  };
  return (
    <Fragment>
      <p className="select-text">Attribute:</p>
      <select
        id="attribute"
        className="select-text"
        onChange={() => attributeChange()}
      >
        <option value="none">None</option>
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
