import React from 'react';
import Link from 'next/link';

export function ArHeader() {
  return (
    <nav className="w-full h-16 flex px-8 items-center justify-between bg-purple-800/50 rounded-b-2xl">
      <Link
        href="/"
        className="text-slate-200 text-xl"
      >
        AirArticles
      </Link>
    </nav>
  );
}
