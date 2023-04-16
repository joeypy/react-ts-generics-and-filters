// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  // argTypes: {
  //   color: {
  //     control: { type: "select", options: ["grenn", "blue", "red", "yellow"] },
  //     description: "The background color of the button",
  //   },
  //   onClick: { action: "clicked" },
  // },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const GreenBtn: Story = {
  render: () => (
    <Button color="green" onClick={action("clicked")}>
      Button
    </Button>
  ),
};
