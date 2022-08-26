export const combinedCheck = (
  archetypeName,
  extraArchetype,
  setExtraArchetype
) => {
  let newstate = [];
  // Fetch from server using url
  fetch(`https://yu-game.herokuapp.com/combined/${archetypeName}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((extra) => {
      // If there is other parts of the archetype then use API
      // to get those cards
      if (extra.length >= 1) {
        extra.forEach((element) => {
          fetch(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${element}`
          )
            .then((res) => res.json())
            .then((result) => {
              newstate.splice(0, newstate.length);
              newstate = [...extraArchetype];
              setExtraArchetype((newstate) => [
                ...newstate.concat(result.data),
              ]);
            });
        });
      }
    });

  // return result.values;
};
