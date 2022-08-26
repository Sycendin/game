import React, { Fragment, useState, useEffect } from "react";
import ArchetypeCard from "./ArchetypeCard/ArchetypeCard";
import Loading from "../../components/Random/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";
import { combinedCheck } from "./CombinedArchetypes/CombinedArchetypes";
import Disqus from "disqus-react";
import "./ArchetypeDisplay.css";
const ArchetypeDisplay = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [archetypeFetch, setArchetypeFetch] = useState([]);
  const [doesexist, setDoesExist] = useState(null);
  const [extraArchetype, setExtraArchetype] = useState([]);

  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 1];
  // Replace spaces in archetype name
  const archetypeName = currentUrlEnd.replaceAll("%20", " ");
  // Configure the disqus to current page
  const disqusShortname = "yugiohgame";
  const disqusConfig = {
    url: window.location.href,
    identifier: archetypeName,
    title: `${archetypeName} Page`,
  };
  useEffect(() => {
    // check if url exists in heroku server
    fetch(`https://yu-game.herokuapp.com/urlcheck/${currentUrlEnd}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "Does not exist") {
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
            )
            // Check for other parts of the archetype
            .then(() => {
              combinedCheck(currentUrlEnd, extraArchetype, setExtraArchetype);
            });
        }
      });
    //eslint-disable-next-line
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
          {/* Render archetype cards */}
          {archetypeFetch.data.map((cardInfo, i) => {
            return (
              <Fragment key={i}>
                <ArchetypeCard
                  srcImage={cardInfo.card_images[0].image_url}
                  cardName={cardInfo.name}
                  i={i}
                />
              </Fragment>
            );
          })}
          {/* Extra render for extre archetype cards */}
          {extraArchetype.length >= 1
            ? extraArchetype.map((cardInfo, i) => {
                return (
                  <Fragment key={i}>
                    <ArchetypeCard
                      srcImage={cardInfo.card_images[0].image_url}
                      cardName={cardInfo.name}
                      i={i}
                    />
                  </Fragment>
                );
              })
            : null}
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
