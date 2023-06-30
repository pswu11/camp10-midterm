import type { Meta, StoryObj } from '@storybook/react';
import { GenreIcon } from '../components/GenreIcon';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof GenreIcon> = {
  component: GenreIcon,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof GenreIcon>;

export const Basic: Story = {};
