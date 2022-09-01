import React, { Fragment, useState, useEffect } from "react";
import "./Random.css";
import CardDiv from "./CardDiv/CardDiv";
import Loading from "./Loading/Loading";
import RandomButton from "./RandomButton/RandomButton";
const Random = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState(0);
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
  }, [newCard]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="min-height">
        <div className="loading-div">
          <p className="loading-text">Loading... </p>
          <Loading />
        </div>
      </div>
    );
  } else {
    return (
      <Fragment>
        <div className="min-height">
          <RandomButton
            // offset={targetRef.current.childNodes[0].offsetTop}
            newCard={newCard}
            setNewCard={setNewCard}
          />
          <CardDiv cardData={cards} />
        </div>
      </Fragment>
    );
  }
};
export default Random;
