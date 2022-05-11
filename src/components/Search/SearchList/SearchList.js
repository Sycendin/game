import React, { Fragment } from "react";
import "./SearchList.css";

const SearchList = ({ data, newImage }) => {
  return (
    <Fragment>
      <ul className="search-list">
        {data.map((option, i) => {
          return (
            <p
              className="search-list-text"
              key={i}
              onClick={() => newImage(option.card_images[0].image_url)}
            >
              {option.name}
            </p>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default SearchList;
