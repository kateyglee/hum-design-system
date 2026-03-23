import Badge from './Badge';

export default {
  title: 'Primitives/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info', 'pro'],
    },
    children: { control: 'text' },
  },
};

export const Default = {
  args: { variant: 'default', children: '3 Active' },
};

export const Success = {
  args: { variant: 'success', children: 'Success' },
};

export const Error = {
  args: { variant: 'error', children: 'Failed' },
};

export const Warning = {
  args: { variant: 'warning', children: 'Warning' },
};

export const Info = {
  args: { variant: 'info', children: 'Info' },
};

export const Pro = {
  args: { variant: 'pro', children: 'Pro' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="pro">Pro</Badge>
    </div>
  ),
};

export const StatusIndicators = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Badge variant="success">Completed</Badge>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-md)' }}>
          47 line items flagged, report saved
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Badge variant="warning">Warning</Badge>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-md)' }}>
          Completed with warnings: GAM rate limit hit
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Badge variant="error">Failed</Badge>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-md)' }}>
          Analytics API returned 503
        </span>
      </div>
    </div>
  ),
};

export const NavBadge = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 32,
        padding: '0 10px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--accent-dim)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--text-accent)',
      }}
    >
      <span style={{ flex: 1 }}>Connectors</span>
      <Badge variant="default">3</Badge>
    </div>
  ),
};
