import React, { Fragment } from "react";

import "./TypeFilter.css";
const TypeFilter = ({ values }) => {
  const attributeChange = () => {
    const typeSelect = document.querySelector("#type").value;
    values.race = typeSelect;
  };
  return (
    <Fragment>
      <p className="select-text">Type:</p>
      <select
        id="type"
        className="select-text"
        onChange={() => attributeChange()}
      >
        <option value="none">None</option>
        <option value="Warrior">Warrior</option>
        <option value="Aqua">Aqua</option>
        <option value="Beast">Beast</option>
        <option value="Beast-Warrior">Beast-Warrior</option>
        <option value="Cyberse">Cyberse</option>
        <option value="Dinosaur">Dinosaur</option>
        <option value="Divine-Beast">Divine-Beast</option>
        <option value="Dragon">Dragon</option>
        <option value="Fairy">Fairy</option>
        <option value="Fiend">Fiend</option>
        <option value="Fish">Fish</option>
        <option value="Insect">Insect</option>
        <option value="Machine">Machine</option>
        <option value="Plant">Plant</option>
        <option value="Psychic">Psychic</option>
        <option value="Pyro">Pyro</option>
        <option value="Reptile">Reptile</option>
        <option value="Rock">Rock</option>
        <option value="Sea Serpent">Sea Serpent</option>
        <option value="Thunder">Thunder</option>
        <option value="Winged Beast">Winged Beast</option>
        <option value="Wyrm">Wyrm</option>
        <option value="Zombie">Zombie</option>
      </select>
    </Fragment>
  );
};
export default TypeFilter;
