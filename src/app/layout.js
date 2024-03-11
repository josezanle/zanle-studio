import { Inter } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zanle Studio",
  description: "Consultora de desarrollo de software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Zanle Studio" />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content="https://res.cloudinary.com/dubv6xkxf/image/upload/v1710119832/l1rf6z3z5zytvhdqnuen.png" />
        <meta property="og:url" content="https://zanle-studio.vercel.app/" />
        <meta property="og:site_name" content="Zanle-Studio" />

        {/* Metaetiquetas específicas para WhatsApp */}
        <meta property="og:description" content="Somos una agencia de desarrollo de software, paginas web y aplicaciones android" />
        <meta property="og:see_also" content="https://wa.me/+51925822952" />
        <meta property="og:phone_number" content="+51925822952" />

      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


