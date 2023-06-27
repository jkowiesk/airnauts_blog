import { Meta } from '@storybook/react';
import { ArArticle } from './ArArticle';

export default {
  title: 'Molecule/ArArticle',
  component: ArArticle,
} as Meta<typeof ArArticle>;

function Template() {
  return <ArArticle />;
}

export const Default = Template.bind({});
