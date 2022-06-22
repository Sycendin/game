import React, { Fragment } from "react";
import { data } from "./ArchetypeData";
import { Link } from "react-router-dom";
import "./Archetypes.css";

const Archetypes = () => {
  return (
    <Fragment>
      <h1>All Archetypes</h1>
      <div className="archetype-whole-div">
        {data.map((element, i) => {
          return (
            <Fragment key={i}>
              <p className="archetype-letter">{element.letter}</p>

              <div className="archetype-div" key={i}>
                {element.archetype.map((element, i) => {
                  return (
                    <Fragment key={i}>
                      <Link
                        to={`/game/archetypes/${element[0]}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="each-archetype-div">
                          <img
                            alt="archetype-mascot"
                            className="archetype-mascot"
                            src={element[1]}
                            width={624}
                            height={624}
                          ></img>
                          <div className="archetype-content">
                            {/* {element[0].split(" ").map((e, i) => {
                              return <p className="archetype-name">{e}</p>;
                            })} */}
                            <p className="archetype-name">{element[0]}</p>
                          </div>
                        </div>
                      </Link>
                    </Fragment>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Archetypes;
