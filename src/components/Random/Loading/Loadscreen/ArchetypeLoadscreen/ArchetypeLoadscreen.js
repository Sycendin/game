import React from "react";
import { Fragment } from "react";
import { ArchetypeLoadDiv } from "./ArchetypeLoadDiv/ArchetypeLoadDiv";
import { ArchetypeLoadLetter } from "./ArchetypeLoadLetter/ArchetypeLoadLetter";
import "./ArchetypeLoadscreen.css";
export const ArchetypeLoadscreen = () => {
  return (
    <Fragment>
      <div className="loadscreen min-height fbg">
        {[...Array(10).keys()].map((element) => {
          return (
            <Fragment key={element}>
              <ArchetypeLoadLetter />
              <ArchetypeLoadDiv />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};
