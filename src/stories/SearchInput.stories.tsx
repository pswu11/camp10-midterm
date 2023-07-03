import { SearchInput } from '../components/SearchInput';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Search: Story = {};
