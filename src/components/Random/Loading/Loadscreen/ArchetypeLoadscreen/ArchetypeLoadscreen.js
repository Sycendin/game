import React from "react";
import { Fragment } from "react";
import { ArchetypeLoadDiv } from "./ArchetypeLoadDiv/ArchetypeLoadDiv";
import "./ArchetypeLoadscreen.css";
export const ArchetypeLoadscreen = () => {
  return (
    <Fragment>
      <div className="loadscreen min-height">
        <ArchetypeLoadDiv />
      </div>
    </Fragment>
  );
};
