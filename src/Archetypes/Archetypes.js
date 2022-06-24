import React, { Fragment, useState } from "react";
import { data } from "./ArchetypeData";
import { Link } from "react-router-dom";
import { debounce } from "../HelperFunctions/HelperFunctions";
import "./Archetypes.css";

const Archetypes = () => {
  const [aFilter, setAFilter] = useState(false);
  const [update, setUpdate] = useState("");
  const [page, setPage] = useState(0);
  let aValue = "";
  const change = (event) => {
    setAFilter(true);
    setUpdate(event.target.value);
  };
  const pageChange = (event) => {
    // Get all page buttons and set their color to default
    document.querySelectorAll(".page").forEach(function (button) {
      button.style.backgroundColor = "rgb(20, 163, 20)";
    });
    // Change pressed button's background color to indicate that is pressed
    event.target.style.backgroundColor = "rgb(97, 214, 97)";
    setPage(event.target.value);
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
            onChange={debounce(change, 250)}
          />
        </div>
        <div className="page-div">
          <button className="page-button page" onClick={pageChange}>
            All
          </button>
          <button className="page-button page" onClick={pageChange}>
            1
          </button>
          <button className="page-button page" onClick={pageChange}>
            2
          </button>
          <button className="page-button page" onClick={pageChange}>
            3
          </button>
          <button className="page-button page" onClick={pageChange}>
            4
          </button>
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
                          // state={{ from: element[0] }}
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
