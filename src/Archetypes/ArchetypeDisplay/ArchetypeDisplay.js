import React, { Fragment, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import { urls } from "../ArchetypeData";
import { foundPath } from "../../HelperFunctions/HelperFunctions";
import Loading from "../../components/Random/Loading/Loading";
import Disqus from "disqus-react";
import "./ArchetypeDisplay.css";
const ArchetypeDisplay = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [archetypeFetch, setArchetypeFetch] = useState([]);
  const [doesexist, setDoesExist] = useState(null);
  // const location = useLocation();
  // const from = location.state;
  // console.log(from);
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 1];
  let pathExists = foundPath(urls, currentUrlEnd);
  const archetypeName = currentUrlEnd.replaceAll("%20", " ");
  // Configure the disqus to current page
  const disqusShortname = "yugiohgame";
  const disqusConfig = {
    url: window.location.href,
    identifier: archetypeName,
    title: `${archetypeName} Page`,
  };
  useEffect(() => {
    // check if url exists in server
    fetch("http://localhost:3002/urlcheck", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        url: currentUrlEnd,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "Does not exist") {
          console.log(data);
          setDoesExist(false);
          setIsLoaded(true);
        } else {
          setDoesExist(true);
          // If it does then make API request
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
        }
      });
  }, [currentUrlEnd]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading-div">
        <p className="loading-text">Loading... </p>
        <Loading />
      </div>
    );
  } else if (doesexist === false) {
    return <NotFound />;
  } else if (doesexist === true) {
    return (
      <Fragment>
        <div className="archetype-fetch-span">
          <p className="archetype-fetch-text">{archetypeName}</p>
          <p className="archetype-fetch-text2">Click for more info</p>
        </div>
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
                    `https://db.ygoprodeck.com/card/?search=${cardInfo.name}`,
                    "_blank"
                  )
                }
              ></img>
            );
          })}
        </div>
        {/* Add disqus to page */}
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Fragment>
    );
  }
};

export default ArchetypeDisplay;
