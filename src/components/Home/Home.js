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
      {/* Render mobile oboard is width is less than 600
      otherwise render regular onboard */}
      {width <= 600 ? <OnboardM /> : <Onboard />}
      {/* Render disqus comments */}
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Fragment>
  );
};

export default Home;
