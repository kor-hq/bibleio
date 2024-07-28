import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";
import type { SliderProps } from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Slider",
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "radio",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex p-32 w-[50vw] h-[50vh]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args: SliderProps) => <Slider {...args} />,
};
Default.args = {
  inverted: false,
  orientation: "horizontal",
  disabled: false,
};
