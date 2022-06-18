import React, { Fragment } from "react";
import "./ArchetypeDisplay.css";
import NotFound from "../../components/NotFound/NotFound";
import { data } from "../ArchetypeData";
import { foundPath } from "../../HelperFunctions/HelperFunctions";
const ArchetypeDisplay = () => {
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 1];
  let pathExists = foundPath(data, currentUrlEnd);
  if (pathExists === false) {
    return <NotFound />;
  } else {
    return <Fragment></Fragment>;
  }
};

export default ArchetypeDisplay;
