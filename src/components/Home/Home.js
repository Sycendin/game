import React, { Fragment } from "react";
import Onboard from "./Onboard/Onboard";
import OnboardM from "./OnboardM/OnboardM";

import Disqus from "disqus-react";
import "./Home.css";

const Home = ({ width }) => {
  const disqusShortname = "yugiohgame";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "homepage",
    title: "Home page",
  };

  return (
    <Fragment>
      {width <= 600 ? <OnboardM /> : <Onboard />}
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Fragment>
  );
};

export default Home;
