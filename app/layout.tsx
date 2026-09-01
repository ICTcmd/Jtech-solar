import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'JTech Solar-Pro | Residential Solar Solutions',
  description: 'High-end residential solar energy solutions. Discover how solar panels, battery storage, and smart inverters can power your home while saving money.',
  keywords: ['solar panels', 'residential solar', 'solar energy', 'battery storage', 'solar installation'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
