'use client';
import Banner from "@/components/1-banner";
import About from "@/components/2-about";
import Slider from "@/components/3-slider";
import Features from "@/components/4-features";
import Faqs from "@/components/5-faqs";
import Footer from "@/components/footer";
import Tag from "@/components/tag";

export default function Home() {
  return (

    <>
      {/* <LoadableComponent /> */}
      <Banner />
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
}
