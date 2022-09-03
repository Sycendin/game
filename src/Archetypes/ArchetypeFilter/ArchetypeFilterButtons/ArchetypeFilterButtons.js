import React, { Fragment } from "react";

const ArchetypeFilterButtons = ({ pageChange }) => {
  return (
    <Fragment>
      <div className="page-div">
        <button className="page-button page" onClick={pageChange}>
          All
        </button>
        <button className="page-button page" onClick={pageChange}>
          A-G
        </button>
        <button className="page-button page" onClick={pageChange}>
          H-N
        </button>
        <button className="page-button page" onClick={pageChange}>
          O-T
        </button>
        <button className="page-button page" onClick={pageChange}>
          U-Z
        </button>
      </div>
    </Fragment>
  );
};
export default ArchetypeFilterButtons;
