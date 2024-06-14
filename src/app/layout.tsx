import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import * as React from 'react';
import { ReactNode } from 'react';

import '@/styles/globals.css';
import '@/styles/grid.css';

import { cn } from '@/lib/utils';

import { Toaster } from '@/components/ui/toaster';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@artemshchirov',
  },
  // authors: [
  //   {
  //     name: 'Artem Shchirov',
  //     url: 'https://github.com/artemshchirov',
  //   },
  // ],
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen bg-page dark:bg-page-dark font-sans antialiased',
          fontSans.variable,
        )}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
