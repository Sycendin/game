import React, { Fragment, useState } from "react";
import { data } from "./ArchetypeData";
import { Link } from "react-router-dom";
import "./Archetypes.css";

const Archetypes = () => {
  let aValue = "";
  const [aFilter, setAFilter] = useState(false);
  const [update, setUpdate] = useState("");
  const change = (event) => {
    setAFilter(true);
    setUpdate(event.target.value);
  };

  return (
    <Fragment>
      <h1>All Archetypes</h1>
      <div className="archetype-search-div">
        <div className="searchbar">
          <input
            id="archetype-input"
            type="text"
            className="search-box"
            placeholder="Search"
            onChange={change}
          />
        </div>
      </div>
      {aFilter === false || update === "" ? (
        <div className="archetype-whole-div">
          {data.map((element, i) => {
            return (
              <Fragment key={i}>
                <div className="archetype-letter-div">
                  <p className="archetype-letter">{element.letter}</p>
                </div>
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
      ) : (
        <div className="archetype-whole-div">
          <div className="archetype-div">
            {data.map((element, i) => {
              return element.archetype.map((element, i) => {
                aValue = document.getElementById("archetype-input").value;
                let copy = element[0].slice();
                return copy.toLowerCase().includes(aValue) ? (
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
                          <p className="archetype-name">{element[0]}</p>
                        </div>
                      </div>
                    </Link>
                  </Fragment>
                ) : null;
              });
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Archetypes;
