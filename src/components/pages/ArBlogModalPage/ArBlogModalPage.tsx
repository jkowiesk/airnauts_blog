import React from 'react';
import { ArArticle } from 'components/molecules/ArArticle';
import { Dialog } from 'components/templates/Dialog';
import { ArBlogModalPageProps } from './ArBlogModalPage.types';

export const ArBlogModalPageMetadata = {
  title: 'Blog',
};

export function ArBlogModalPage({ params: { index } }: ArBlogModalPageProps) {
  return (
    <Dialog>
      {/* @ts-expect-error SC */}
      <ArArticle index={index} />
    </Dialog>
  );
}
