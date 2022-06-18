import React, { Fragment } from "react";
import { data } from "./ArchetypeData";
import "./Archetypes.css";

const Archetypes = () => {
  return (
    <Fragment>
      <h1>Hi</h1>
      {data.map((element, i) => {
        return (
          <Fragment key={i}>
            <p>{element.letter}</p>
            {element.archetype.map((element, i) => {
              return (
                <Fragment key={i}>
                  <p>{element}</p>
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Archetypes;
