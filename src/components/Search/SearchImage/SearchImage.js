import React, { Fragment } from "react";
import "./SearchImage.css";

const SearchImage = ({ cardImage }) => {
  return (
    <Fragment>
      {cardImage !== "" ? (
        <img
          className="search-image"
          src={cardImage}
          height={614}
          width={421}
          alt="cardimage"
        />
      ) : null}
    </Fragment>
  );
};
export default SearchImage;
