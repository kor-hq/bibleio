import type { Meta, StoryObj } from '@storybook/react';

import {
  Tabs,
  TabsList,
  TabContent,
  TabItemText,
  TabItemPillButton,
} from './Tabs';
import { TabsProps } from './Tabs';
import React from 'react';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const TextTrigger: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <TabsList>
        <TabItemText value="tab1">Tab 1</TabItemText>
        <TabItemText value="tab2">Tab 2</TabItemText>
      </TabsList>
      <TabContent value="tab1">This is tab 1</TabContent>
      <TabContent value="tab2">This is tab 2</TabContent>
    </Tabs>
  ),
};
TextTrigger.args = { defaultValue: 'tab1' };
export const ButtonTrigger: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <TabsList className="flex h-fit w-full gap-32 bg-light-fg-1 px-64 py-24">
        <TabItemPillButton value="tab1">Tab 1</TabItemPillButton>
        <TabItemPillButton value="tab2">Tab 2</TabItemPillButton>
      </TabsList>
      <TabContent
        className="border border-light-stroke bg-light-fg-1"
        value="tab1"
      >
        This is tab 1
      </TabContent>
      <TabContent value="tab2">This is tab 2</TabContent>
    </Tabs>
  ),
};
ButtonTrigger.args = { defaultValue: 'tab1' };
