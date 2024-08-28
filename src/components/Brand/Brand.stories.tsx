import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  Logo as LogoComponent,
  LogoProps,
  Icon as IconComponent,
  IconProps,
} from './Brand';

const meta: Meta<typeof LogoComponent> = {
  component: LogoComponent,
  title: 'Brand',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoComponent>;

export const Logo: Story = {
  render: (args: LogoProps) => <LogoComponent {...args} />,
};
Logo.args = {
  size: 128,
};

export const Icon: Story = {
  render: (args: IconProps) => <IconComponent {...args} />,
};
Icon.args = {
  size: 128,
};
