import React, { Fragment } from "react";
import "./Searchbox.css";

const Searchbox = ({ data, onInputChange, newImage }) => {
  return (
    <Fragment>
      <div className="search-div">
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          onChange={onInputChange}
        />
        <ul className="search-list">
          {data.map((option, i) => {
            return (
              <p
                key={i}
                onClick={() => newImage(option.card_images[0].image_url)}
              >
                {option.name}
              </p>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
export default Searchbox;
