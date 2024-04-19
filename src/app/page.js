'use client';
import { useEffect, useState } from "react";

import Banner from "@/sections/banner";
import Welcome from "@/sections/welcome";
import About from "@/sections/about";
import Pricing from "@/sections/pricing";
import Enterprice from "@/sections/enterprice";
import Faqs from "@/sections/faqs";
import Footer from "@/sections/footer";
import ScrollToTop from "@/components/scrollToTop";
import Copyrights from "@/sections/copyrights";

const Body = () => {
  return (
    <div className="body">
      <Banner />
      <Welcome />
      <About />
      <Pricing />
      <Enterprice />
      <Faqs />
      <Footer />
      <ScrollToTop />
      <Copyrights />
    </div>
  )
}

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? <Body /> : null
}

