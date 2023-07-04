import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BookingDetails from '../components/BookingDetails';



const meta: Meta<typeof BookingDetails> = {
    title: 'BookingDetails',
    component: BookingDetails,
    parameters: {
      viewport: {
        defaultViewport: 'mobile1',
      },
    },
  };

  export default meta;

  type Story = StoryObj<typeof BookingDetails> & {
    args: { variant: string; children:string;  };
  };

  export const Basic: Story = {
    args: { variant: "default", children:"Label" },
    
  };
  export const Active: Story = {
    args: { variant: "active", children:"Label" },
    
  };

  