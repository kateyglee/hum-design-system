import Button from './Button';

export default {
  title: 'Button/Showcase',
  component: Button,
};

export const Overview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Variants */}
      <div>
        <h4 style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#9898A4', marginBottom: 12 }}>Variants</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h4 style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#9898A4', marginBottom: 12 }}>Sizes</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Default</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <h4 style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#9898A4', marginBottom: 12 }}>States</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading…</Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h4 style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#9898A4', marginBottom: 12 }}>With Icons</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary" icon="plus">Create</Button>
          <Button variant="outline" icon="download">Export</Button>
          <Button variant="ghost" icon="gear">Settings</Button>
          <Button variant="primary" icon="arrow-right" iconPosition="right">Next</Button>
        </div>
      </div>

      {/* Icon Only */}
      <div>
        <h4 style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, fontWeight: 500, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#9898A4', marginBottom: 12 }}>Icon Only</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary" icon="plus" iconOnly size="sm" />
          <Button variant="primary" icon="plus" iconOnly />
          <Button variant="outline" icon="magnifying-glass" iconOnly />
          <Button variant="ghost" icon="dots-three-outline" iconOnly />
          <Button variant="danger" icon="trash" iconOnly />
          <Button variant="primary" icon="plus" iconOnly loading />
        </div>
      </div>
    </div>
  ),
};
