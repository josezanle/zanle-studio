import { Inter } from "next/font/google";
import "../styles/globals.css";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zanle Group",
  description: "Consultora de desarrollo de software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Zanle group site"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icons/gem.svg" />
        <link rel="Canonical" href="https://wbw-redesign.vercel.app/" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&display=swap" rel="stylesheet" />

        {/* og */}
        <meta property="og:title" content="Zanle Group" />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content="/images/banner.jpg" />
        <meta property="og:url" content="https://wbw-redesign.vercel.app/" />
        <meta property="og:site_name" content="zanle-group" />
      </Head>


      <body className={inter.className}>{children}</body>
    </html>
  );
}
