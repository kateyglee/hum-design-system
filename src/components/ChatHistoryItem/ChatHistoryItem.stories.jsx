import ChatHistoryItem from './ChatHistoryItem';

export default {
  title: 'Navigation/ChatHistoryItem',
  component: ChatHistoryItem,
  argTypes: {
    label: { control: 'text' },
    starred: { control: 'boolean' },
    active: { control: 'boolean' },
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
  args: {
    label: 'Google Ads connector setup',
    onMenuClick: () => alert('Context menu'),
  },
};

export const Active = {
  args: {
    label: 'Q1 campaign analysis',
    active: true,
    onMenuClick: () => alert('Context menu'),
  },
};

export const Starred = {
  args: {
    label: 'Revenue report draft',
    starred: true,
    onMenuClick: () => alert('Context menu'),
  },
};

export const StarredActive = {
  args: {
    label: 'Q1 campaign analysis',
    starred: true,
    active: true,
    onMenuClick: () => alert('Context menu'),
  },
};

export const LongLabel = {
  args: {
    label: 'Detailed analysis of Q1 performance metrics across all campaigns and advertisers with revenue breakdown',
    onMenuClick: () => alert('Context menu'),
  },
};

export const NoContextMenu = {
  args: {
    label: 'Read-only session',
  },
};

export const ChatList = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          padding: '0 10px',
          margin: 0,
          marginBottom: 8,
        }}
      >
        Starred
      </p>
      <ChatHistoryItem
        label="Q1 campaign analysis"
        starred
        active
        onMenuClick={() => {}}
      />
      <ChatHistoryItem
        label="Revenue report draft"
        starred
        onMenuClick={() => {}}
      />
      <div style={{ height: 12 }} />
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          padding: '0 10px',
          margin: 0,
          marginBottom: 8,
        }}
      >
        Recent Chats
      </p>
      <ChatHistoryItem
        label="Google Ads connector setup"
        onMenuClick={() => {}}
      />
      <ChatHistoryItem
        label="Audience segmentation help"
        onMenuClick={() => {}}
      />
      <ChatHistoryItem
        label="Weekly performance review"
        onMenuClick={() => {}}
      />
    </div>
  ),
};
