import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header';
import HeaderFunction from '../components/Header';

const meta: Meta<typeof HeaderFunction> = {
    component: HeaderFunction,
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        }
    },
   };
   
   export default meta;
   
   type Story = StoryObj<typeof HeaderFunction>;
   
   export const Basic: Story = {};