import "../styles/globals.css";
import Head from "next/head";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <NextSeo
        title="WeBuilWebz"
        description="Ayudamos a mujeres emprendedoras que buscan pasar su negocio al mundo DIGITAL."
        canonical="https://wbw-redesign.vercel.app/"
        openGraph={{
          url: "https://wbw-redesign.vercel.app/",
          title: "WeBuildWebz",
          description:
            "Ayudamos a mujeres emprendedoras que buscan pasar su negocio al mundo DIGITAL.",
          site_name: "WeBuildWebz",
          images: [
            {
              url: "icons/gem.svg",
              width: 551,
              height: 344,
              alt: "Imagen 1",
            },
            {
              url: "icons/gem.svg",
              width: 96,
              height: 96,
              alt: "Imagen 2",
            },
          ],
        }}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap"
        />
        <link rel="icon" href="/icons/gem.svg" />
        <link rel="Canonical" Href="https://www.webuildwebz.com" />
      </Head>
    </>
  );
}

export default MyApp;
