import Loadable from "react-loadable";

import About from "../components/2-about";
import Slider from "../components/3-slider";
import Features from "../components/4-features";
import Faqs from "../components/5-faqs";
import Footer from "../components/footer";
import Tag from "../components/tag";

const LoadableComponent = Loadable({
  loader: () => import("../components/1-banner"),
  loading() {
    return <div>Loading...</div>;
  },
});

const index = () => {
  return (
    <>
      <LoadableComponent />
      <Slider />
      <Tag>Welcome</Tag>
      <About />
      <Tag>Features</Tag>
      <Features />
      <Tag>Faqs</Tag>
      <Faqs />
      <Tag>Good Bye</Tag>
      <Footer />
    </>
  );
};

export default index;
