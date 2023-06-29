import { Metadata } from 'next';
/* import React from 'react';
import Link from 'next/link'; */

export const ArHomePageMetadata: Metadata = {
  title: 'Homepage',
};

export function ArHomePage() {
  return {
    /* <menu className="w-full grid grid-rows-3 grid-cols-1 place-items-center gap-12 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 h-full">
      <Link
        className="bg-gray-100 w-48 text-3xl h-64 rounded-xl grid place-items-center"
        href={`/blog/${1}`}
      >
        1
      </Link>
      <Link
        className="bg-gray-100 w-48 text-3xl h-64 rounded-xl grid place-items-center"
        href={`/blog/${2}`}
      >
        2
      </Link>
      <Link
        className="bg-gray-100 w-48 text-3xl h-64 rounded-xl grid place-items-center md:col-span-2 lg:col-span-1"
        href={`/blog/${3}`}
      >
        3
      </Link>
    </menu> */
  };
}
