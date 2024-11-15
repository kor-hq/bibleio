import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InfoNote, DangerNote, SuccessNote, WarningNote } from './Note';

const meta: Meta<typeof InfoNote> = {
  component: InfoNote,
  title: 'Notes',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InfoNote>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-24">
      <InfoNote>Note</InfoNote>
      <SuccessNote>Note</SuccessNote>
      <WarningNote>Note</WarningNote>
      <DangerNote>Note</DangerNote>
    </div>
  ),
};
