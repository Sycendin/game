import React, { Fragment, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import ArchetypeCard from "./ExtraArchetypes/ArchetypeCard";
import Loading from "../../components/Random/Loading/Loading";
import Disqus from "disqus-react";
import "./ArchetypeDisplay.css";
const ArchetypeDisplay = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [archetypeFetch, setArchetypeFetch] = useState([]);
  const [doesexist, setDoesExist] = useState(null);
  const [extraArchetype, setExtraArchetype] = useState([]);

  // const location = useLocation();
  // const from = location.state;
  // console.log(from);
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 1];
  const archetypeName = currentUrlEnd.replaceAll("%20", " ");
  // Configure the disqus to current page
  const disqusShortname = "yugiohgame";
  const disqusConfig = {
    url: window.location.href,
    identifier: archetypeName,
    title: `${archetypeName} Page`,
  };
  useEffect(() => {
    let other = ["Evil★Twin", "Live☆Twin", "Live Twin"];
    // check if url exists in server
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
            .then(() => {
              if (currentUrlEnd === "Evil%20Twin") {
                other.forEach((element, i) => {
                  fetch(
                    `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${other[i]}`
                  )
                    .then((res) => res.json())
                    .then((result) => {
                      let newstate = [];
                      if (currentUrlEnd === "Eslint") {
                        console.log(newstate);
                      }
                      newstate = [...extraArchetype];
                      setExtraArchetype((newstate) => [
                        ...newstate.concat(result.data),
                      ]);
                    });
                });
              }
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
          {/* Extra render for other Evil Twin cards */}
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
