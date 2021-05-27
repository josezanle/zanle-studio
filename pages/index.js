import Banner from "../components/1-banner";

import Loadable from "react-loadable";

import About from "../components/2-about";
import Slider from "../components/3-slider";
import Projects from "../components/4-projects";
import Faqs from "../components/5-faqs";
import Footer from "../components/footer";
import Loading from "../components/loading";

const LoadableComponent = Loadable({
  loader: () => import("../components/1-banner"),
  loading: Loading,
});

// const LoadableComponent2 = Loadable({
//   loader: () => import("../components/2-about"),
//   loading: Loading,
// });
// const LoadableComponent3 = Loadable({
//   loader: () => import("../components/3-slider"),
//   loading: Loading,
// });
// const LoadableComponent4 = Loadable({
//   loader: () => import("../components/4-projects"),
//   loading: Loading,
// });
// const LoadableComponent5 = Loadable({
//   loader: () => import("../components/5-faqs"),
//   loading: Loading,
// });
// const LoadableComponent6 = Loadable({
//   loader: () => import("../components/footer"),
//   loading: Loading,
// });

const index = () => {
  return (
    <>
      <LoadableComponent />
      {/* <LoadableComponent2 />
      <LoadableComponent3 />
      <LoadableComponent4 />
      <LoadableComponent5 />
      <LoadableComponent6 /> */}

      <About />
      <Slider />
      <Projects />
      <Faqs />
      <Footer />
    </>
  );
};

export default index;
