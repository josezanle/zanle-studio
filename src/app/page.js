'use client';

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
    <body>
      <Banner />
      <Welcome />
      <About />
      <Pricing />
      <Enterprice />
      <Faqs />
      <Footer />
      <ScrollToTop />
      <Copyrights />
    </body>

  );
}
