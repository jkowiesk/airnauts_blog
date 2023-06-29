import React from 'react';
import { cn } from 'components/utils/cn';
import { Satisfy } from 'next/font/google';
import { cookies } from 'next/headers';
import { ArArticleProps } from './ArArticle.types';

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
});

export async function ArArticle({ index }: ArArticleProps) {
  const { blog } = (await fetch(`http://localhost:3000/api/${index}`, {
    headers: { Cookie: cookies().toString() },
  }).then((res) => res.json())) as {
    blog: string;
  };

  return <p className={cn('bg-white mt-8 py-8 px-4 text-xl', satisfy.className)}>{blog}</p>;
}
