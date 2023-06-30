import type {Meta, StoryObj } from '@storybook/react';
import { Button } from "../components/Button";

const meta = {
    title: "Button Component",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
      disabled: {
        control: "boolean",
      },
      children: {
        control: "text",
      },
    },
  } satisfies Meta<typeof Button>

const Template: StoryObj<Button> = (args) => <Button {...args} />
export default meta
type Button = StoryObj<typeof meta>

export const buttonPrimaryYellowDefault: Story = {
    args: {
      variant: "buttonPrimaryYellowDefault",
    },
  }
  
  export const buttonPrimaryYellowDisabled: Story = {
    args: {
      variant: "buttonPrimaryYellowDisabled",
    },
  }
  
  export const buttonPrimaryYellowSmall: Story = {
    args: {
      variant: "buttonPrimaryYellowSmall",
    },
  }
  
  export const buttonSecondaryBlackDefault: Story = {
    args: {
      variant: "buttonSecondaryBlackDefault",
    },
  }

  export const buttonSecondaryBlackSmallDefault: Story = {
    args: {
      variant: "buttonSecondaryBlackSmallDefault",
    },
  }