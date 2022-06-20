import React, { Fragment } from "react";
import "./ArchetypeDisplay.css";
import NotFound from "../../components/NotFound/NotFound";
import { urls } from "../ArchetypeData";
import { foundPath } from "../../HelperFunctions/HelperFunctions";
const ArchetypeDisplay = () => {
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 1];
  let pathExists = foundPath(urls, currentUrlEnd);
  if (pathExists === false) {
    return <NotFound />;
  } else {
    return (
      <Fragment>
        <h1>Hello</h1>
      </Fragment>
    );
  }
};

export default ArchetypeDisplay;
