'use client';
import Banner from "@/components/1-banner";
import About from "@/components/2-about";
import Features from "@/components/4-features";
import Faqs from "@/components/5-faqs";
import Copyrights from "@/components/copyrights";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";
import Tag from "@/components/tag";
import Welcome from "@/components/welcome";

export default function Home() {
  return (

    <>
      <Banner id="top"/>
      <Tag>Bienvenido</Tag>
      <Welcome />
      <Tag id="about">Acerca</Tag>
      <About />
      <Tag id="price">Precios</Tag>
      <Pricing />
      <Features />
      <Tag id="faqs">Faqs</Tag>
      <Faqs />
      <Tag id="footer">Contacto</Tag>
      <Footer />
      {/* <Copyrights /> */}
    </>

  );
}
