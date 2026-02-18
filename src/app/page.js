'use client';
import { useEffect, useState } from "react";

import Banner from "@/sections/banner";
import Welcome from "@/sections/welcome";
import About from "@/sections/about";
import Pricing from "@/sections/pricing";
import Faqs from "@/sections/faqs";
import Footer from "@/sections/footer";
import ScrollToTop from "@/components/scrollToTop";

// docker compose -f docker-compose-dev.yml up --build

const Body = () => {
  return (
    <div className="body">
      <Banner />
      <Welcome />
      <About />
      <Pricing />
      <Faqs />
      <Footer />
      <ScrollToTop />
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

