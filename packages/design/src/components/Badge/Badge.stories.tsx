import type { Meta, StoryObj } from '@storybook/react';

import { Badge, BadgeProps } from './Badge';
import React from 'react';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'blue',
        'purple',
      ],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args: BadgeProps) => <Badge {...args}>Badge</Badge>,
};
Default.args = {
  variant: 'primary',
};
