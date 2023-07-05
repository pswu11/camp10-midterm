import type { Meta, StoryObj } from '@storybook/react';
import PaginationButton from '../components/PaginationButton';

const meta: Meta<typeof PaginationButton> = {
  title: 'PaginationButton',
  component: PaginationButton,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PaginationButton> & {
  args: { isActive: boolean; children: string };
};

export const Basic: Story = {
  args: { isActive: false, children: 'Label' },
};
