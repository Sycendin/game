import React, { Fragment } from "react";

import "./SpellTrapRace.css";
const SpellTrapRace = ({ values }) => {
  const spellTrapChange = () => {
    const spellTrapRaceSelect =
      document.querySelector("#spell-trap-race").value;
    values.race = spellTrapRaceSelect;
  };
  return (
    <Fragment>
      <div className="filter-option-div">
        <label className="select-text" htmlFor="spell-trap-race">
          Spell/Trap Type:
        </label>
        <select
          id="spell-trap-race"
          className="select-text filter-selector"
          onChange={() => spellTrapChange()}
        >
          <option value="none">None</option>
          <option value="Normal">Normal</option>
          <option value="Equip">Equip</option>
          <option value="Quick-Play">Quick-Play</option>
          <option value="Continuous">Continuous</option>
          <option value="Field">Field</option>
          <option value="Ritual">Rituals</option>
          <option value="Continuous">Continuous</option>
          <option value="Counter">Counter</option>
        </select>
      </div>
    </Fragment>
  );
};
export default SpellTrapRace;
