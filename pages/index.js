import Loadable from "react-loadable";

import About from "../components/2-about";
import Slider from "../components/3-slider";
import Projects from "../components/4-projects";
import Faqs from "../components/5-faqs";
import Footer from "../components/footer";
import Loading from "../components/loading";

const index = () => {
  const LoadableComponent = Loadable({
    loader: () => import("../components/1-banner"),
    loading: Loading,
  });
  return (
    <>
      <LoadableComponent />
      <About />
      <Slider />
      <Projects />
      <Faqs />
      <Footer />
    </>
  );
};

export default index;
