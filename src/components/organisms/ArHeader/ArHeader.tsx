import React from 'react';
import { ArCookieBtn } from 'components/atoms/ArCookieBtn';
import { ArHeaderProps } from './ArHeader.types';

export function ArHeader(props: ArHeaderProps) {
  console.log('Header props:', props);
  return (
    <nav className="w-full h-16 flex px-8 items-center justify-between bg-purple-800/50 rounded-b-2xl">
      <h1 className="text-slate-200 text-xl">AirArticles</h1>
      <ArCookieBtn />
    </nav>
  );
}
