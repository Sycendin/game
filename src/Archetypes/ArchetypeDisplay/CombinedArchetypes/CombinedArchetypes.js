let combined = [
  { name: "Evil%20Twin", values: ["Evil★Twin", "Live☆Twin", "Live Twin"] },
];
export const check = (archetypeName) => {
  let check = [];

  let result = combined.find((item) => item.name === archetypeName);

  // combined.forEach((element, i) => {
  //   console.log(element);
  //   if (archetypeName in element) {
  //     check = combined[i].archetypeName;
  //     console.log(check);
  //   }
  // });

  return result.values;
};
