import SideNav from './SideNav';

const defaultNav = [
  { id: 'runbooks', icon: 'arrows-clockwise', label: 'Runbooks' },
  { id: 'chats', icon: 'chat-circle-dots', label: 'Chats' },
  { id: 'library', icon: 'books', label: 'Library' },
];

const defaultChats = [
  { id: 1, label: 'Q1 campaign analysis', starred: true },
  { id: 2, label: 'Revenue report draft', starred: true },
  { id: 3, label: 'Google Ads connector setup', starred: false },
  { id: 4, label: 'Audience segmentation help', starred: false },
  { id: 5, label: 'Weekly performance review', starred: false },
];

export default {
  title: 'Navigation/SideNav',
  component: SideNav,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    open: { control: 'boolean' },
    userName: { control: 'text' },
    userPlan: { control: 'text' },
    unreadCount: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', height: '100vh', background: 'var(--bg)' }}>
        <Story />
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-body)',
            color: 'var(--text-muted)',
            fontSize: 14,
          }}
        >
          Main content area
        </div>
      </div>
    ),
  ],
};

export const Expanded = {
  args: {
    open: true,
    navSections: defaultNav,
    activeSection: 'connectors',
    chatSessions: defaultChats,
    activeChat: 0,
    userName: 'Alex',
    userPlan: 'Free plan',
    unreadCount: 2,
  },
};

export const Collapsed = {
  args: {
    open: false,
    navSections: defaultNav,
    activeSection: 'connectors',
    chatSessions: defaultChats,
    userName: 'Alex',
    userPlan: 'Free plan',
    unreadCount: 2,
  },
};

export const Empty = {
  args: {
    open: true,
    navSections: [],
    chatSessions: [],
    userName: 'New User',
    userPlan: 'Free plan',
    unreadCount: 0,
  },
};
