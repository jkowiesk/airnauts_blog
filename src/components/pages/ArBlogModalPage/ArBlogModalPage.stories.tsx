import { Meta } from '@storybook/react';
import { ArBlogModalPage } from './ArBlogModalPage';

export default {
  title: 'Page/ArBlogModalPage',
  component: ArBlogModalPage,
} as Meta<typeof ArBlogModalPage>;

function Template() {
  return <ArBlogModalPage params={{ index: '1' }} />;
}

export const Default = Template.bind({});
