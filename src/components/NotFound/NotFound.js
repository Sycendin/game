import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      {" "}
      <h1>404 - Not Found!</h1>
      <Link to="/game/">
        <button>Go Back Home</button>
      </Link>
      {/* <Link to="/">Go Home</Link> */}
    </Fragment>
  );
};

export default NotFound;
