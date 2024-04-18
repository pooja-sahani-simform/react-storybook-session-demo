import { fn } from '@storybook/test';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
  decorators: [(story) => <div style={{margin: '3rem'}}>{story()}</div>],
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

//Arg-composition
export const PrimaryLongName = {
  args: {
    ...Primary.args,
    label: 'Primary with a really long name',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
