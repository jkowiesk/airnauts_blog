import { Meta } from '@storybook/react';
import { ArHeader } from './ArHeader';

export default {
  title: 'Organism/ArHeader',
  component: ArHeader,
} as Meta<typeof ArHeader>;

function Template() {
  return <ArHeader />;
}

export const Default = Template.bind({});
