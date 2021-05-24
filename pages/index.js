import React from "react";
import Banner from "../components/1-banner";
import About from "../components/2-about";
import Slider from "../components/3-slider";
import Projects from "../components/4-projects";
import Faqs from "../components/5-faqs";
import Footer from "../components/footer";

const index = () => {
  return (
    <>
      <Banner />
      <About />
      <Slider />
      <Projects />
      <Faqs />
      <Footer />
    </>
  );
};

export default index;
