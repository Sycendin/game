import React, { Fragment, useState, useEffect } from "react";
import ArchetypeFilterSearch from "./ArchetypeFilter/ArchetypeFilterSearch/ArchetypeFilterSearch";
import { ArchetypeLoadscreen } from "../components/Random/Loading/Loadscreen/ArchetypeLoadscreen/ArchetypeLoadscreen";
import { Link } from "react-router-dom";
import { debounce } from "../HelperFunctions/HelperFunctions";
import "./Archetypes.css";

const Archetypes = () => {
  const [aFilter, setAFilter] = useState(false);
  const [update, setUpdate] = useState("");
  const [page, setPage] = useState(0);
  const [archetypeData, setArchetypData] = useState([]);
  let aValue = "";
  let dataSlice = [0, 26];
  const change = (event) => {
    setPage([0, 26]);
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
    switch (event.target.innerText) {
      case "All":
        dataSlice = [0, 26];
        break;
      case "A-G":
        dataSlice = [0, 7];
        break;
      case "H-N":
        dataSlice = [7, 14];
        break;
      case "O-T":
        dataSlice = [14, 20];
        break;
      case "U-Z":
        dataSlice = [20, 26];
        break;
      default:
        break;
    }
    setPage(dataSlice);
  };
  useEffect(() => {
    // Get data for all archetypes
    const getArchetypes = async () => {
      const content = await fetch(
        `https://yu-game.herokuapp.com/archetypes/all`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await content.json();
      // Set data as state
      setArchetypData(data);
    };
    // Run fetch after everything renders
    getArchetypes();
  }, []);
  // If archetypeData has been fetched with data then render the archetypes
  if (archetypeData.length < 1) {
    return <ArchetypeLoadscreen />;
  }
  if (archetypeData.length > 1) {
    return (
      <Fragment>
        <div className="min-height">
          {/* Archetype filter */}
          <ArchetypeFilterSearch
            onchange={debounce(change, 250)}
            pageChange={pageChange}
          />
          {aFilter === false || update === "" ? (
            <div className="archetype-whole-div">
              {archetypeData.slice(page[0], page[1]).map((element, i) => {
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
                              to={`/game/archetypes/${element[2]}`}
                              // state={{ from: element[0] }}
                              style={{ textDecoration: "none" }}
                            >
                              <div className="each-archetype-div">
                                <div
                                  style={{
                                    backgroundImage: `url(${element[1]})`,
                                  }}
                                  alt="archetype-mascot"
                                  className="archetype-mascot"
                                  width={624}
                                  height={624}
                                ></div>
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
                {archetypeData.map((element, i) => {
                  return element.archetype.map((element, i) => {
                    aValue = document.getElementById("archetype-input").value;
                    let copy = element[0].slice();
                    return copy.toLowerCase().includes(aValue.toLowerCase()) ? (
                      <Fragment key={i}>
                        <Link
                          to={`/game/archetypes/${element[2]}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div className="each-archetype-div">
                            <div
                              style={{ backgroundImage: `url(${element[1]})` }}
                              alt="archetype-mascot"
                              className="archetype-mascot"
                              width={624}
                              height={624}
                            ></div>
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
        </div>
      </Fragment>
    );
  }
};

export default Archetypes;
