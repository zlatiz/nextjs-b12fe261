import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Welcome to John Keane Studios',
  description: 'John Keane Studios'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
