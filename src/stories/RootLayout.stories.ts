import type { Meta, StoryObj } from '@storybook/react';
import { RootLayout } from '../layouts/RootLayout';

const meta: Meta<typeof RootLayout> = {
  component: RootLayout,
};

export default meta;

type Story = StoryObj<typeof RootLayout>;

export const Basic: Story = {}