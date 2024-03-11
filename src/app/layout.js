import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zanle Studio',
  description: 'Consultora de desarrollo de software',
  og: {
    title: 'Zanle Studio',
    type: 'blog',
    image: 'https://res.cloudinary.com/dubv6xkxf/image/upload/v1710119832/l1rf6z3z5zytvhdqnuen.png',
    url: 'https://zanle-studio.vercel.app/',
    site_name: 'Zanle Studio',
    description: 'Somos una agencia de desarrollo de software, páginas web y aplicaciones Android',
    see_also: 'https://wa.me/+51925822952',
    phone_number: '+51925822952',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
