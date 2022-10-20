import React from "react";
import { Fragment } from "react";

export const ArchetypeLoadDiv = () => {
  return (
    <Fragment>
      <div className="innerload">
        {[1, 2, 3, 4].map(() => {
          return <div className="a-load fbg"></div>;
        })}
      </div>
    </Fragment>
  );
};
