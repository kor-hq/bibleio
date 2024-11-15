import { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogTrigger,
  DialogProps,
  DialogClose,
} from './Dialog';
import { Button } from '../Button';
import React from 'react';

// Meta

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Dialog',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Dialog>;

// Render AlertDialog

export const Default: Story = (args: DialogProps) => (
  <Dialog {...args}>
    <DialogTrigger>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent className="flex flex-col gap-12">
      <DialogTitle>Dialog</DialogTitle>
      <DialogDescription>Lorem ipsum.</DialogDescription>
      <DialogClose>
        <Button>Close</Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
);
Default.args = {};
