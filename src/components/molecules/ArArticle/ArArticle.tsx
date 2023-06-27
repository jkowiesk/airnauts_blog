import React from 'react';
import { cookies } from 'next/headers';
import { cn } from 'components/utils/cn';
import { Satisfy } from 'next/font/google';
import { ArArticleProps, CookieValue } from './ArArticle.types';

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
});

export async function ArArticle(props: ArArticleProps) {
  console.log('ArArticle props:', props);
  const cookieStore = cookies();
  const loggedIn = cookieStore.get('loggedIn')?.value as CookieValue;

  const { blog } = (await fetch('https://airnauts-blog.vercel.app/api').then((res) => res.json())) as { blog: string };

  return (
    <p className={cn('bg-white mt-8  py-8 px-4 text-xl', satisfy.className)}>
      {loggedIn === 'true' ? blog : `${blog.slice(0, 500)} ${'-'.repeat(blog.length - 500)}`}
    </p>
  );
}
