import React, { Fragment } from "react";
import { data } from "./ArchetypeData";
import "./Archetypes.css";

const Archetypes = () => {
  return (
    <Fragment>
      <h1>Hi</h1>
      <div className="archetype-whole-div">
        {data.map((element, i) => {
          return (
            <div className="archetype-div" key={i}>
              <p className="archetype-letter">{element.letter}</p>
              {element.archetype.map((element, i) => {
                return (
                  <Fragment key={i}>
                    <p className="archetype-name">{element}</p>
                  </Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Archetypes;
