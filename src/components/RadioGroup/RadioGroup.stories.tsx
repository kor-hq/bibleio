import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'RadioGroup',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem label="KJV" value="kjv" />
      <RadioGroupItem label="ESV" value="esv" />
      <RadioGroupItem label="NIV" value="niv" />
      <RadioGroupItem label="CSB" value="csb" />
      <RadioGroupItem label="Disabled item" value="disabled" disabled />
    </RadioGroup>
  ),
};
Default.args = {
  disabled: false,
};
