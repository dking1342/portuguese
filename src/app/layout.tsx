import './globals.sass';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Language Lessons',
  description: 'Portuguese Language Lessons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
