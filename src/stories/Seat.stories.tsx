import type { Meta, StoryObj } from '@storybook/react';
import Seat from '../components/Seat';

const meta: Meta<typeof Seat> = {
  title: 'Seat',
  component: Seat,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Seat> & {
  args: { variant: string };
};

export const Basic: Story = {
  args: { variant: 'free' },
};
