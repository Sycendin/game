const AttributeIcon = ({ attribute }) => {
  let icon = "";
  switch (attribute) {
    case "DARk":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903429876699176/dark.webp";
      break;
    case "LIGHT":
      icon =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903430098976798/light.webp";
      break;
    case "FIRE":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903429054599188/fire.webp";
      break;
    case "WATER":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903430677807124/water.webp";
      break;
    case "WIND":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903429297881088/wind.webp";
      break;
    case "EARTH":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903429541163009/earth.webp";
    case "DIVINE":
      day =
        "https://cdn.discordapp.com/attachments/958975018816131132/970903428836491334/divine.webp";
    default:
      break;
  }
  return (
    <Fragment>
      <img alt="attribute" height={64} width={64} src={icon}></img>
    </Fragment>
  );
};
export default AttributeIcon;
