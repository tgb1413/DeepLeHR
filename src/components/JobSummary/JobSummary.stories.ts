import type { Meta, StoryObj } from '@storybook/react';

import JobSummary from './JobSummary';

const meta: Meta<typeof JobSummary> = {
  title: 'Components/JobSummary',
  component: JobSummary,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof JobSummary>;

export const Default: Story = {
  args: {
    imgSrc:
      'https://img.29cm.co.kr/next-product/2020/11/23/18a5303591f446e79b806945347e7473_20201123143211.jpg?width=500',
    companyName: 'company name',
    startTime: 'startTime',
    endTime: 'endTime',
    title: 'title',
    bookmark: 0,
    view: 0,
  },
};
