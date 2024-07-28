import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Typography",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-16 text-light-text dark:text-dark-text">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p className="strong">Body strong</p>
      <p className="paragraph">Body paragraph</p>
      <p>Body</p>
      <p className="sub">Subtext</p>
      <code>Mono</code>
    </div>
  ),
};
