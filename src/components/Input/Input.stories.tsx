import type { Meta, StoryObj } from "@storybook/react";

import { Input, InputProps } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args: InputProps) => <Input {...args} />,
};
Default.args = {
  placeholder: "Input...",
  disabled: false,
};
