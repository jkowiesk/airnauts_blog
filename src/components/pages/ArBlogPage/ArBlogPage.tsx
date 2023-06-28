import { ArArticle } from 'components/molecules/ArArticle';
import React from 'react';
import { ArBlogPageProps } from './ArBlogPage.types';

export const ArBlogPageMetadata = {
  title: 'Blog',
};

export function ArBlogPage({ params: { index } }: ArBlogPageProps) {
  return (
    <div className="w-4/5 mx-auto md:w-3/4 lg:w-1/2">
      {/*
       // @ts-expect-error SC */}
      <ArArticle index={index} />
    </div>
  );
}
