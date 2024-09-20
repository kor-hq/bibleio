import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  Logo as LogoComponent,
  LogoProps,
  IconLogo as IconComponent,
  IconLogoProps,
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
  render: (args: IconLogoProps) => <IconComponent {...args} />,
};
Icon.args = {
  size: 128,
  reverseColor: false,
};
