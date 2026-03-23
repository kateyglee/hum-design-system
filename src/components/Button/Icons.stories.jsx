import Button from './Button';

export default {
  title: 'Button/Icons',
  component: Button,
};

export const IconLeft = {
  args: { variant: 'primary', icon: 'plus', children: 'Create' },
};

export const IconRight = {
  args: { variant: 'outline', icon: 'arrow-right', iconPosition: 'right', children: 'Next' },
};

export const IconPositions = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" icon="plus" iconPosition="left">Icon Left</Button>
      <Button variant="primary" icon="arrow-right" iconPosition="right">Icon Right</Button>
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

export const WithIconsAllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="primary" icon="plus" size="sm">Small</Button>
        <Button variant="outline" icon="download" size="sm">Export</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="primary" icon="plus" size="md">Default</Button>
        <Button variant="outline" icon="download" size="md">Export</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="primary" icon="plus" size="lg">Large</Button>
        <Button variant="outline" icon="download" size="lg">Export</Button>
      </div>
    </div>
  ),
};

export const IconOnlySm = {
  args: { variant: 'ghost', icon: 'x', iconOnly: true, size: 'sm' },
};

export const IconOnlyMd = {
  args: { variant: 'primary', icon: 'plus', iconOnly: true },
};

export const IconOnlyLg = {
  args: { variant: 'outline', icon: 'magnifying-glass', iconOnly: true, size: 'lg' },
};

export const IconOnlyVariants = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" icon="plus" iconOnly />
      <Button variant="outline" icon="magnifying-glass" iconOnly />
      <Button variant="ghost" icon="dots-three-outline" iconOnly />
      <Button variant="danger" icon="trash" iconOnly />
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
