import React, { Fragment } from "react";

import "./MonsterTypeFilter.css";
const MonsterTypeFilter = ({ values }) => {
  const attributeChange = () => {
    const attributeSelect = document.querySelector("#monstertype").value;
    values.type = attributeSelect;
  };
  return (
    <Fragment>
      <label class="select-text" htmlFor="monstertype">
        MonsterType:
      </label>
      <select
        id="monstertype"
        className="select-text"
        onChange={() => attributeChange()}
      >
        <option value="none">None</option>
        <option value="Fusion Monster">Fusion</option>
        <option value="XYZ Monster">XYZ</option>
        <option value="Synchro Monster, Synchro Tuner Monster, Synchro Pendulum Effect Monster">
          Synchro
        </option>
        <option value="Pendulum Effect Monster, Pendulum Normal Monster, Pendulum Tuner Effect Monster, Pendulum Flip Effect Monster, Pendulum Fusion Monster">
          Pendulum
        </option>
        <option value="Link Monster">Link</option>
        <option value="Ritual Effect Monster, Ritual Monster">Ritual</option>
        <option value="Toon Monster">Toon</option>
        <option value="Flip Effect Monster, Flip Tuner Effect Monster, Flip Monster">
          Flip
        </option>
        <option value="Union Effect Monster">Union</option>
        <option value="Gemini Monster">Gemini</option>
        <option value="Spirit Monster">Spirit</option>
        <option value="Tuner Monster">Tuner</option>
        <option value="Normal Monster">Normal</option>
      </select>
    </Fragment>
  );
};
export default MonsterTypeFilter;
