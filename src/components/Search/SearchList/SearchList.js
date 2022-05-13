import React, { Fragment } from "react";
import "./SearchList.css";
import SearchListDisplay from "./SearchListDisplay/SearchListDisplay";
const SearchList = ({ data, newImage }) => {
  return (
    <Fragment>
      <ul className="search-list">
        {data.map((option, i) => {
          return (
            <div style={{ display: "flex" }}>
              <p
                className="search-list-text"
                key={i}
                onClick={() => newImage(option.card_images[0].image_url)}
              >
                {option.name}
              </p>
              <SearchListDisplay version={option.type} data={option} />
            </div>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default SearchList;
