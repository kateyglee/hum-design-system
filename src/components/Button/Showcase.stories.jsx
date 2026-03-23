import Button from './Button';

export default {
  title: 'Button/Showcase',
  component: Button,
};

const SectionLabel = ({ children }) => (
  <h4 style={{
    fontFamily: '"Geist Mono", monospace',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.20em',
    textTransform: 'uppercase',
    color: '#9898A4',
    margin: 0,
    marginBottom: 12,
  }}>
    {children}
  </h4>
);

export const Overview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Variants */}
      <div>
        <SectionLabel>Variants</SectionLabel>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <SectionLabel>Sizes</SectionLabel>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Default</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <SectionLabel>States</SectionLabel>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading…</Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <SectionLabel>With Icons</SectionLabel>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary" icon="plus">Create</Button>
          <Button variant="outline" icon="download">Export</Button>
          <Button variant="ghost" icon="gear">Settings</Button>
          <Button variant="primary" icon="arrow-right" iconPosition="right">Next</Button>
        </div>
      </div>

      {/* Icon Only */}
      <div>
        <SectionLabel>Icon Only</SectionLabel>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="primary" icon="plus" iconOnly size="sm" />
          <Button variant="primary" icon="plus" iconOnly />
          <Button variant="outline" icon="magnifying-glass" iconOnly />
          <Button variant="ghost" icon="dots-three-outline" iconOnly />
          <Button variant="danger" icon="trash" iconOnly />
          <Button variant="primary" icon="plus" iconOnly loading />
        </div>
      </div>

      {/* Full Width */}
      <div>
        <SectionLabel>Full Width</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 320 }}>
          <Button variant="primary" fullWidth>Submit</Button>
          <Button variant="outline" fullWidth icon="download">Export Report</Button>
        </div>
      </div>
    </div>
  ),
};
