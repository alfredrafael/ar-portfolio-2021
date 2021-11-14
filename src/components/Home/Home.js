import React from "react";
import HeroBanner from "../2HeroBanner";
import About from "../4About";
import WebDevIcons from "../3WebDevIcons";
import Services from "../5DServices";
import Projects from "../6Projects";

import "./home.css";
import $ from "jquery";

const Home = () => {
  return (
    <React.Fragment id="home">
      <HeroBanner />
      <WebDevIcons />
      <About />
      <Services />
      <Projects />
    </React.Fragment>
  );
};

export default Home;
