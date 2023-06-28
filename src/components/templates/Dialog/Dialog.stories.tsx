import { Meta } from '@storybook/react';
import { Dialog } from './Dialog';

export default {
  title: 'Template/Dialog',
  component: Dialog,
} as Meta<typeof Dialog>;

function Template() {
  return <Dialog />;
}

export const Default = Template.bind({});
