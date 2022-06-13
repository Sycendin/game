import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AttributeFilter from "./AttributeFilter/AttributeFilter";
import TypeFilter from "./TypeFilter/TypeFilter";
import MonsterTypeFilter from "./MonsterTypeFilter/MonsterTypeFilter";
import LevelFilter from "./LevelFilter/LevelFilter";
import "./Filter.css";

const Filter = ({
  filterOpen,
  onClose,
  filterSet,
  setFilterValue,
  setOptions,
}) => {
  // Get end of current url
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 1];

  let values = {};
  const closeModal = (apply) => {
    if (apply) {
      filterSet(values, setFilterValue, setOptions);
      onClose();
    } else {
      onClose();
    }
  };
  const resetFilterAttribute = () => {
    // Reset the selects to the default first value and reset the current filters object
    const attributeReset = document.querySelector("#attribute");
    const typeReset = document.querySelector("#type");
    const levelReset = document.querySelector("#level");
    const monsterTypeReset = document.querySelector("#monstertype");
    attributeReset.selectedIndex = 0;
    typeReset.selectedIndex = 0;
    levelReset.selectedIndex = 0;
    if (monsterTypeReset) {
      monsterTypeReset.selectedIndex = 0;
    }
    filterSet({}, setFilterValue, setOptions);
  };
  if (!filterOpen) return null;
  // Render Modal if open state is true
  else {
    return ReactDOM.createPortal(
      <Fragment>
        <div className="modal-styles">
          <div className="filter-div">
            <div className="filter-options">
              <AttributeFilter values={values} />
              <TypeFilter values={values} />
              <LevelFilter values={values} />
              {currentUrlEnd === "search" ? (
                <MonsterTypeFilter values={values} />
              ) : null}
            </div>
            <div className="filter-buttons">
              <button className="filter-apply" onClick={() => closeModal(true)}>
                Apply Filter
              </button>
              <button
                className="filter-reset"
                onClick={() => resetFilterAttribute()}
              >
                Reset Filter
              </button>
              <button className="filter-exit" onClick={() => closeModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Fragment>,
      document.getElementById("filter")
    );
  }
};

export default Filter;
