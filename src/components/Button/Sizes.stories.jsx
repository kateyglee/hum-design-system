import Button from './Button';

export default {
  title: 'Button/Sizes',
  component: Button,
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
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Default</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
};
