import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
      description: "The visual style variant of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS class names",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "Custom Class Button",
    className: "custom-button",
  },
};

export const LongText: Story = {
  args: {
    children: "This is a button with a very long text to demonstrate wrapping",
  },
};
