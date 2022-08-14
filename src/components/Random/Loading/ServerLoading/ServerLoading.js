import React, { Fragment } from "react";
import Loading from "../Loading";
const ServerLoading = () => {
  return (
    <Fragment>
      <h1>Waiting for server...</h1>
      <Loading />
    </Fragment>
  );
};

export default ServerLoading;
