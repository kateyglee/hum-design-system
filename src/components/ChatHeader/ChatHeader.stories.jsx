import ChatHeader from './ChatHeader';
import Button from '../Button/Button';

export default {
  title: 'Header/ChatHeader',
  component: ChatHeader,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800, border: '1px solid var(--border-lt)', borderRadius: 'var(--radius-lg)' }}>
        <Story />
      </div>
    ),
  ],
};

export const NewChat = {
  args: {
    title: 'New Chat',
  },
};

export const Default = {
  args: {
    title: 'GAM Inactive Line Items',
    onTitleClick: () => alert('Title dropdown'),
  },
};

export const WithActions = {
  render: () => (
    <ChatHeader
      title="GAM Inactive Line Items"
      onTitleClick={() => alert('Title dropdown')}
      actions={
        <Button variant="outline" size="sm" icon="arrows-clockwise">
          Save as runbook
        </Button>
      }
    />
  ),
};
