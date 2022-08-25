export const check = (archetypeName, extraArchetype, setExtraArchetype) => {
  let newstate = [];
  fetch(`https://yu-game.herokuapp.com/combined/${archetypeName}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .then((extra) => {
      if (extra.length >= 1) {
        extra.forEach((element, i) => {
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
