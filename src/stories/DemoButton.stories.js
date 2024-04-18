import { DemoButton } from "./DemoButton";

export default {
  title: "Example/Demo Button",
  component: DemoButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export const LabeledButton = (args) => <DemoButton {...args} />;
LabeledButton.args = {
  label: 'primary',
};

