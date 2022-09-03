import React, { Fragment } from "react";
const ArchetypeFilterSearch = ({ onchange, pageChange }) => {
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
            onChange={onchange}
          />
          <ArchetypeFilterButtons pageChange={pageChange} />
        </div>
      </div>
    </Fragment>
  );
};
export default ArchetypeFilterSearch;
