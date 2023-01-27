// Get link for markdown file
export const getData = async (onboard) => {
  const rawResponse = await fetch(
    `https://gserver.onrender.com/markdown/${onboard}`,
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

export const getOnboard2 = async (onboard) => {
  const rawResponse = await fetch(`http://localhost:3002/data/${onboard}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const content = await rawResponse.json();
  console.log(content);
  return content;
};
