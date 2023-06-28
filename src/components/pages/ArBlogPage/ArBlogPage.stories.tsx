import { Meta } from '@storybook/react';
import { ArBlogPage } from './ArBlogPage';

export default {
  title: 'Page/ArBlogPage',
  component: ArBlogPage,
} as Meta<typeof ArBlogPage>;

function Template() {
  return <ArBlogPage params={{ index: '1' }} />;
}

export const Default = Template.bind({});
