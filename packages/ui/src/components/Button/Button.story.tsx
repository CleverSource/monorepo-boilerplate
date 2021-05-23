import * as React from "react";

import { Story } from "@storybook/react";
import { Button } from "./index";

import { toStr } from "../../utils/toStr";

export default {
  title: "Button",
  args: {
    label: "Log in",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const TheButton: Story = ({ label, children, ...props }) => {
  return <Button {...props}>{children || label}</Button>;
};

export const Primary = TheButton.bind({});
Primary.argTypes = {
  label: toStr(),
};
