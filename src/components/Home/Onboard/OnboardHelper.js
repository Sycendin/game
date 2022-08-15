// Get link for markdown file
export const getData = async (onboard) => {
  const rawResponse = await fetch(
    `https://yu-game.herokuapp.com/markdown/${onboard}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const content = await rawResponse.json();
  return content[0].link;
};
