import React from 'react';
import { Metadata } from 'next';
import { ArMainLayoutProps } from './ArMainLayout.types';

import 'styles/globals.css';

export const ArMainLayoutMetadata: Metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.pngp',
    },
  },
};

export function ArMainLayout({ children, modal }: ArMainLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-neutral-800">
        <main className="w-screen min-h-screen pb-4 mt-[-4rem] pt-[8rem] ">{children}</main>
        {modal}
      </body>
    </html>
  );
}
