import NavMenuItem from './NavMenuItem';

export default {
  title: 'Navigation/NavMenuItem',
  component: NavMenuItem,
  argTypes: {
    icon: { control: 'text' },
    label: { control: 'text' },
    badge: { control: 'text' },
    active: { control: 'boolean' },
    collapsed: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 240, padding: 10, background: 'var(--surface)' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: { icon: 'chart-bar', label: 'Campaigns' },
};

export const WithBadge = {
  args: { icon: 'plugs-connected', label: 'Connectors', badge: 'BETA' },
};

export const Active = {
  args: { icon: 'plugs-connected', label: 'Connectors', badge: 'BETA', active: true },
};

export const Collapsed = {
  args: { icon: 'chart-bar', label: 'Campaigns', collapsed: true },
  decorators: [
    (Story) => (
      <div style={{ width: 48, padding: '10px 8px', background: 'var(--surface)' }}>
        <Story />
      </div>
    ),
  ],
};

export const CollapsedActive = {
  args: { icon: 'plugs-connected', label: 'Connectors', collapsed: true, active: true },
  decorators: [
    (Story) => (
      <div style={{ width: 48, padding: '10px 8px', background: 'var(--surface)' }}>
        <Story />
      </div>
    ),
  ],
};

export const WorkspaceNav = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <NavMenuItem icon="arrows-clockwise" label="Runbooks" active />
      <NavMenuItem icon="chat-circle-dots" label="Chats" />
      <NavMenuItem icon="books" label="Library" />
    </div>
  ),
};

export const CollapsedNav = {
  decorators: [
    (Story) => (
      <div style={{ width: 48, padding: '10px 8px', background: 'var(--surface)' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <NavMenuItem icon="arrows-clockwise" label="Runbooks" collapsed active />
      <NavMenuItem icon="chat-circle-dots" label="Chats" collapsed />
      <NavMenuItem icon="books" label="Library" collapsed />
    </div>
  ),
};

export const QuickActions = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <NavMenuItem icon="note-pencil" label="New chat" />
      <NavMenuItem icon="magnifying-glass" label="Search" />
    </div>
  ),
};
