import React from "react";
import { Fragment } from "react";

export const ArchetypeLoadDiv = () => {
  return (
    <Fragment>
      <div className="innerload">
        {[...Array(4).keys()].map((element) => {
          return <div key={element} className="a-load fbgd"></div>;
        })}
      </div>
    </Fragment>
  );
};
