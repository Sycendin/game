import React, { Fragment } from "react";
import "./CardSetsData.css";

const CardSetsData = ({ set }) => {
  return (
    <Fragment>
      <p className="sets-text">{set.set_name}</p>
    </Fragment>
  );
};
export default CardSetsData;
