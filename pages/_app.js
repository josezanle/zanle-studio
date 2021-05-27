import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Head>
        <title>webuildwebz</title>
        <meta
          name="description"
          content="Este es el sitio rediseñado de WeBuildWebz"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icons/gem.svg" />
        <link rel="Canonical" href="https://wbw-redesign.vercel.app/" />

        {/* og */}
        <meta property="og:title" content="WeBuilDwebz Redesign" />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content="/images/banner.jpg" />
        <meta property="og:url" content="https://wbw-redesign.vercel.app/" />
        <meta property="og:site_name" content="AddThis Blog" />
      </Head>
    </>
  );
}

export default MyApp;
