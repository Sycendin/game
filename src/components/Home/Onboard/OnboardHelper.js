// Get link for markdown file
export const getData = async (onboard) => {
  const rawResponse = await fetch("https://yu-game.herokuapp.com/markdown", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mdname: onboard,
    }),
  });
  const content = await rawResponse.json();
  return content[0].link;
};
