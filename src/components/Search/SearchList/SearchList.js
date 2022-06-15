import React, { Fragment } from "react";
import "./SearchList.css";
import SearchListDisplay from "./SearchListDisplay/SearchListDisplay";
const SearchList = ({ data, clickCard, setPick, pick, setOptions }) => {
  let border = "";
  // On click of div, add it to pick state and clear pick options
  const playerChoice = (option) => {
    setPick([option, ...pick]);
    setOptions([]);
  };
  return (
    <Fragment>
      <ul className="search-list" style={{ top: 50 }}>
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
              onClick={() => {
                setPick
                  ? playerChoice(option)
                  : clickCard(option.card_images[0].image_url);
              }}
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
