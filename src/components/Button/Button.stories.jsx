import Button from './Button';
import { buttonArgTypes } from './Button.argTypes';

export default {
  title: 'Button',
  component: Button,
  argTypes: buttonArgTypes,
};

export const Playground = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
};
