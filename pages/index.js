import React from "react";
import Banner from "../components/1-banner";
import About from "../components/2-about";
import Slider from "../components/3-slider";
import Footer from "../components/footer";

const index = () => {
  return (
    <>
      <Banner />;
      <About />
      <Slider />
      <Footer />
    </>
  );
};

export default index;
