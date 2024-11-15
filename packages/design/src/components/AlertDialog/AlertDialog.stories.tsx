import { Meta, StoryObj } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogProps,
  AlertDialogAction,
  AlertDialogCancel,
} from './AlertDialog';
import { Button } from '../Button';
import React from 'react';

// Meta

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: 'Alert Dialog',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

// Render AlertAlertDialog

export const Default: Story = (args: AlertDialogProps) => (
  <AlertDialog {...args}>
    <AlertDialogTrigger>
      <Button>Open Alert Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent className="flex flex-col gap-12">
      <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
      <AlertDialogDescription>
        ARE YOU SURE?!?!?!?!!?!?!!?!??!?!?!?!??!?!?!?!?
      </AlertDialogDescription>
      <div className="flex gap-12">
        <AlertDialogAction>
          <Button variant="danger">Confirm</Button>
        </AlertDialogAction>
        <AlertDialogCancel>
          <Button variant="secondary">Cancel</Button>
        </AlertDialogCancel>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);
Default.args = {};
