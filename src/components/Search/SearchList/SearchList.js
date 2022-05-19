import React, { Fragment } from "react";
import "./SearchList.css";
import SearchListDisplay from "./SearchListDisplay/SearchListDisplay";
const SearchList = ({ data, newImage }) => {
  let border = "";
  return (
    <Fragment>
      <ul className="search-list">
        {data.map((option, i) => {
          // Check if there is another entry for list, if not don't make a bottom border
          let next = data[i + 1];
          if (!next) {
            border = "";
          } else {
            border = "1px solid black";
          }
          return (
            <div
              className="searchlist-div"
              key={i}
              style={{
                display: "flex",

                borderBottom: border,
              }}
              onClick={() => newImage(option.card_images[0].image_url)}
            >
              <p className="search-list-text" key={i}>
                {option.name}
              </p>
              {option.name === "No results" ? null : (
                <SearchListDisplay version={option.type} data={option} />
              )}
            </div>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default SearchList;
