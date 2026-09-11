import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const hack = localFont({
  src: '../public/fonts/HackNerdFont-Regular.ttf',
  variable: '--font-hack',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'X Linux — Documentation',
  description:
    'Documentation portal for X Linux: distro, WSL, provisioning, packaging and the package repository.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hack.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
