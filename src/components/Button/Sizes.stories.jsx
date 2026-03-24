import Button from './Button';
import { buttonArgTypes } from './Button.argTypes';

export default {
  title: 'Button/Sizes',
  component: Button,
  argTypes: buttonArgTypes,
};

export const ExtraSmall = {
  args: { variant: 'primary', size: 'xs', children: 'Extra Small' },
};

export const Small = {
  args: { variant: 'primary', size: 'sm', children: 'Small' },
};

export const Medium = {
  args: { variant: 'primary', size: 'md', children: 'Default' },
};

export const Large = {
  args: { variant: 'primary', size: 'lg', children: 'Large' },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" size="xs">Extra Small</Button>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Default</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
};
