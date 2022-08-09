import React, { Fragment, useEffect, useState } from "react";
import Onboard from "./Onboard/Onboard";
import OnboardM from "./OnboardM/OnboardM";
import ReactMarkdown from "react-markdown";
import TermsOfUse from "../test.md";
import Disqus from "disqus-react";
import "./Home.css";

const Home = ({ width }) => {
  const [tosText, setTosText] = useState("");
  const disqusShortname = "yugiohgame";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "homepage",
    title: "Home page",
  };
  useEffect(() => {
    fetch(TermsOfUse)
      .then((res) => res.text())
      .then((text) => setTosText(text));
  });
  return (
    <Fragment>
      <div>
        <ReactMarkdown children={tosText} />
      </div>
      {width <= 600 ? <OnboardM /> : <Onboard />}

      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Fragment>
  );
};

export default Home;
