import Button from './Button';

export default {
  title: 'Primitives/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Primary = {
  args: { variant: 'primary', children: 'Primary' },
};

export const Outline = {
  args: { variant: 'outline', children: 'Outline' },
};

export const Ghost = {
  args: { variant: 'ghost', children: 'Ghost' },
};

export const Danger = {
  args: { variant: 'danger', children: 'Danger' },
};

export const Small = {
  args: { variant: 'primary', size: 'sm', children: 'Small' },
};

export const Large = {
  args: { variant: 'primary', size: 'lg', children: 'Large' },
};

export const Disabled = {
  args: { variant: 'primary', disabled: true, children: 'Disabled' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Default</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
};
