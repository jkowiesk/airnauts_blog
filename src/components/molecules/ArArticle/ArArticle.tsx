import React from 'react';
import { cookies } from 'next/headers';
import { ArArticleProps, CookieValue } from './ArArticle.types';

export async function ArArticle(props: ArArticleProps) {
  console.log('ArArticle props:', props);
  const cookieStore = cookies();
  const loggedIn = cookieStore.get('loggedIn')?.value as CookieValue;

  const { blog } = (await fetch('http://localhost:3000/api').then((res) => res.json())) as { blog: string };

  return <p className="bg-white mt-16 rounded-lg p-2">{loggedIn === 'true' ? blog : blog.slice(0, 80)}</p>;
}
