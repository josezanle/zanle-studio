import { Catamaran } from 'next/font/google'
import '../styles/globals.css';

const catamaran = Catamaran({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Zanle Studio',
    template: '%s | Zanle Studio',
  },
  description: 'Zanle Studio — Agencia de desarrollo web y apps Android en LATAM. Sitios modernos, rápidos y a medida para empresas de Argentina, Perú y toda Latinoamérica.',
  keywords: [
    'agencia desarrollo web',
    'desarrollo web argentina',
    'desarrollo web peru',
    'apps android latam',
    'diseño web profesional',
    'zanle studio',
    'desarrollo software latam',
  ],
  authors: [{ name: 'Zanle Studio', url: 'https://www.zanle-studio.com/' }],
  creator: 'Zanle Studio',
  metadataBase: new URL('https://www.zanle-studio.com/'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Zanle Studio — Agencia de desarrollo web en LATAM',
    description: 'Desarrollamos sitios web, apps Android y soluciones a medida para empresas de Argentina, Perú y toda Latinoamérica.',
    url: 'https://zanle.studio/',
    siteName: 'Zanle Studio',
    type: 'website',
    locale: 'es_AR',
    images: [
      {
        url: 'https://res.cloudinary.com/dubv6xkxf/image/upload/v1710119832/l1rf6z3z5zytvhdqnuen.png',
        width: 1200,
        height: 630,
        alt: 'Zanle Studio — Agencia de desarrollo web en LATAM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zanle Studio — Agencia de desarrollo web en LATAM',
    description: 'Desarrollamos sitios web, apps Android y soluciones a medida para empresas de toda Latinoamérica.',
    site: '@zanlestudio',
    creator: '@zanlestudio',
    images: ['https://res.cloudinary.com/dubv6xkxf/image/upload/v1710119832/l1rf6z3z5zytvhdqnuen.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={catamaran.className}>{children}</body>
    </html>
  );
}