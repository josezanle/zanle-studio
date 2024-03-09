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
import Copyrights from "@/sections/copyrights";


export default function Home() {
  return (
    <>
      <Banner id="top"/>
      <Tag borderColor="#34dd9a" fontColor="#34dd9a">Bienvenido</Tag>
      <Welcome />
      <Tag id="about" borderColor="#2cb3ff" fontColor="#2cb3ff">Acerca</Tag>
      <About />
      <Tag id="price" borderColor="#ff445a" fontColor="#ff445a">Precios</Tag>
      <Pricing />
      <Enterprice />
      <Tag id="faqs" borderColor="#005de9" fontColor="#005de9">Faqs</Tag>
      <Faqs />
      <Tag id="footer" borderColor="#ffcd1d" fontColor="#ffcd1d">Contacto</Tag>
      <Footer />
      <ScrollToTop />
      <Copyrights />
    </>

  );
}
