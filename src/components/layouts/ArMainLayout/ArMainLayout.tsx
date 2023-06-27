import React from 'react';
import { ArAppContextProvider } from 'contexts/ArAppContext';
import { Metadata } from 'next';
import { ArHeader } from 'components/organisms/ArHeader';
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
      url: '/apple-touch-icon.png',
    },
  },
};

export function ArMainLayout({ children }: ArMainLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-neutral-800">
        <ArAppContextProvider
          initialState={{
            count: 0,
          }}
        >
          <ArHeader />
          <main className="w-3/5 mx-auto">{children}</main>
        </ArAppContextProvider>
      </body>
    </html>
  );
}
