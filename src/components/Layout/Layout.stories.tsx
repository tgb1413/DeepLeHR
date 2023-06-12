import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';

import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    customCss: {
      header: css`
        border: 1px solid black;
      `,
      content: css`
        border: 1px solid black;
      `,
      footer: css`
        border: 1px solid black;
      `,
    },
  },
};
