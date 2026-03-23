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
    icon: { control: 'text' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
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

export const IconLeft = {
  args: { variant: 'primary', icon: 'plus', children: 'Create' },
};

export const IconRight = {
  args: { variant: 'outline', icon: 'arrow-right', iconPosition: 'right', children: 'Next' },
};

export const IconOnlyMd = {
  args: { variant: 'primary', icon: 'plus', iconOnly: true },
};

export const IconOnlySm = {
  args: { variant: 'ghost', icon: 'x', iconOnly: true, size: 'sm' },
};

export const IconOnlyLg = {
  args: { variant: 'outline', icon: 'magnifying-glass', iconOnly: true, size: 'lg' },
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

export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" icon="plus">Create</Button>
      <Button variant="outline" icon="download">Export</Button>
      <Button variant="ghost" icon="gear">Settings</Button>
      <Button variant="danger" icon="trash">Delete</Button>
    </div>
  ),
};

export const IconPositions = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" icon="plus" iconPosition="left">Icon Left</Button>
      <Button variant="primary" icon="arrow-right" iconPosition="right">Icon Right</Button>
    </div>
  ),
};

export const IconOnlyVariants = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" icon="plus" iconOnly />
      <Button variant="outline" icon="magnifying-glass" iconOnly />
      <Button variant="ghost" icon="dots-three-outline" iconOnly />
      <Button variant="ghost" icon="x" iconOnly size="sm" />
    </div>
  ),
};

export const IconOnlyAllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" icon="plus" iconOnly size="sm" />
      <Button variant="primary" icon="plus" iconOnly size="md" />
      <Button variant="primary" icon="plus" iconOnly size="lg" />
    </div>
  ),
};

export const WithIconsAllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="primary" icon="plus" size="sm">Small</Button>
        <Button variant="outline" icon="download" size="sm">Export</Button>
        <Button variant="primary" icon="plus" iconOnly size="sm" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="primary" icon="plus" size="md">Default</Button>
        <Button variant="outline" icon="download" size="md">Export</Button>
        <Button variant="primary" icon="plus" iconOnly size="md" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="primary" icon="plus" size="lg">Large</Button>
        <Button variant="outline" icon="download" size="lg">Export</Button>
        <Button variant="primary" icon="plus" iconOnly size="lg" />
      </div>
    </div>
  ),
};
