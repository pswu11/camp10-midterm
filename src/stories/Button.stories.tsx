import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button> & {
  args: { variant: string; size: string };
};

export const Primary: Story = {
  args: { variant: 'primary', size: 'default' },
};
