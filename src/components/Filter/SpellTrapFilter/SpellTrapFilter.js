import React, { Fragment } from "react";

import "./SpellTrapFilter.css";
const SpellTrapFilter = ({ values }) => {
  const spellTrapChange = () => {
    const spellTrapSelect = document.querySelector("#spell-trap").value;
    values.type = spellTrapSelect;
  };
  return (
    <Fragment>
      <div className="filter-option-div">
        <label className="select-text" htmlFor="spell-trap">
          Spell/Traps:
        </label>
        <select
          id="spell-trap"
          className="select-text filter-selector"
          onChange={() => spellTrapChange()}
        >
          <option value="none">None</option>
          <option value="Spell">Spell</option>
          <option value="Trap">Trap</option>
        </select>
      </div>
    </Fragment>
  );
};
export default SpellTrapFilter;
