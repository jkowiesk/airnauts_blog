import React from 'react';
import { ArCookieBtn } from 'components/atoms/ArCookieBtn';
import Link from 'next/link';
import { ArHeaderProps } from './ArHeader.types';

export function ArHeader(props: ArHeaderProps) {
  console.log('Header props:', props);
  return (
    <nav className="w-full h-16 flex px-8 items-center justify-between bg-purple-800/50 rounded-b-2xl">
      <Link
        href="/"
        className="text-slate-200 text-xl"
      >
        AirArticles
      </Link>
      <ArCookieBtn />
    </nav>
  );
}
