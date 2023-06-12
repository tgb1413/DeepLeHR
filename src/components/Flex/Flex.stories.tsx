import type { Meta, StoryObj } from '@storybook/react';

import { FlexContainer } from './Flex';

const meta: Meta<typeof FlexContainer> = {
  title: 'Components/Flex',
  component: FlexContainer,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FlexContainer>;

export const FlexRow: Story = {
  args: {
    direction: 'row',
    children: [
      <span key={1}>1</span>,
      <span key={2}>2</span>,
      <span key={3}>3</span>,
    ],
    style: { width: '100px', height: '100px', backgroundColor: 'yellow' },
  },
};

export const FlexColumn: Story = {
  args: {
    direction: 'column',
    children: [
      <span key={1}>1</span>,
      <span key={2}>2</span>,
      <span key={3}>3</span>,
    ],
    style: { width: '100px', height: '100px', backgroundColor: 'yellow' },
  },
};
