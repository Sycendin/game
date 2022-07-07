import React, { Fragment, useState, useEffect } from "react";
import Disqus from "disqus-react";
import "./Home.css";
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const disqusShortname = "yugiohgame";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "homepage",
    title: "Home page",
  };
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon")
    fetch("https://db.ygoprodeck.com/api/v7/randomcard.php")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCards(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // return <img src={items.data[0].card_images[0].image_url}></img>;
    return (
      <Fragment>
        <img
          className="home-img"
          alt="card"
          src={cards.card_images[0].image_url}
        ></img>
        <br />
        <div className="square"></div>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Fragment>
    );
  }
};

export default Home;
