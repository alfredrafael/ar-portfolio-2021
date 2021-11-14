import React from "react";
import HeroSlider from "../HeroSlider";
import WebDevIcons from "../WebDevIcons";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";
import "./CssHome.css";
import $ from "jquery";
import DServices from "../DServices";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSlider />
      <WebDevIcons />
      <About />
      <DServices />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
