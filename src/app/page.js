'use client';
import Tag from "@/components/tag";

import Banner from "@/sections/banner";
import Welcome from "@/sections/welcome";
import About from "@/sections/about";
import Pricing from "@/sections/pricing";
import Enterprice from "@/sections/enterprice";
import Faqs from "@/sections/faqs";
import Footer from "@/sections/footer";
import ScrollToTop from "@/components/scrollToTop";


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
      <Enterprice />
      <Tag id="faqs">Faqs</Tag>
      <Faqs />
      <Tag id="footer">Contacto</Tag>
      <Footer />
      {/* <Copyrights /> */}
      <ScrollToTop />
    </>

  );
}
