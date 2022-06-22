import React, { Fragment, useState, useEffect } from "react";
import "./ArchetypeDisplay.css";
import NotFound from "../../components/NotFound/NotFound";
import { urls } from "../ArchetypeData";
import { foundPath } from "../../HelperFunctions/HelperFunctions";
import Loading from "../../components/Random/Loading/Loading";
const ArchetypeDisplay = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [archetypeFetch, setArchetypeFetch] = useState([]);
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 1];
  let pathExists = foundPath(urls, currentUrlEnd);

  useEffect(() => {
    let searchUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${currentUrlEnd}`;
    fetch(searchUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArchetypeFetch(result);
        },
        // Catch errors
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [currentUrlEnd]);
  if (pathExists === false) {
    return <NotFound />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading-div">
        <p className="loading-text">Loading... </p>
        <Loading />
      </div>
    );
  } else {
    return (
      <Fragment>
        <p className="archetype-fetch-text">Click for more info</p>
        <div className="archetype-fetch-div">
          {archetypeFetch.data.map((cardInfo, i) => {
            return (
              <img
                key={i}
                className="archetype-fetch-img"
                alt="main-card"
                height={614}
                width={420}
                src={cardInfo.card_images[0].image_url}
                onClick={() =>
                  window.open(
                    `https://db.ygoprodeck.com/card/?search=${cardInfo.name}}`,
                    "_blank"
                  )
                }
              ></img>
            );
          })}
        </div>
      </Fragment>
    );
  }
};

export default ArchetypeDisplay;
