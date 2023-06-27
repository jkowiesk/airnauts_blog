import React from 'react';
import { Metadata } from 'next';
import { ArArticle } from 'components/molecules/ArArticle';
import { ArHomePageProps } from './ArHomePage.types';

export const ArHomePageMetadata: Metadata = {
  title: 'Homepage',
};

export function ArHomePage(props: ArHomePageProps) {
  console.log('ArHomePage props:', props);

  // @ts-expect-error SC
  return <ArArticle />;
}
