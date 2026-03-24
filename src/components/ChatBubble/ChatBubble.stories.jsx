import ChatBubble from './ChatBubble';
import AiFeedback from '../AiFeedback/AiFeedback';
import Button from '../Button/Button';

export default {
  title: 'Chat/ChatBubble',
  component: ChatBubble,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 720, margin: '20px auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export const UserMessage = {
  args: {
    role: 'user',
    children: 'Show me all inactive line items from the last 30 days',
  },
};

export const AiMessage = {
  args: {
    role: 'ai',
    children: 'I found 47 inactive line items across 12 orders in your GAM account. Here\'s a breakdown:',
  },
};

export const AiMessageWithActions = {
  render: () => (
    <ChatBubble role="ai">
      <div>
        <p style={{ margin: '0 0 14px' }}>
          Found <strong>47 inactive line items</strong> across 12 orders. I recommend archiving <strong>31 items</strong> with zero recent delivery.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button variant="primary" icon="check-circle" size="xs">Archive 31 items</Button>
          <Button variant="outline" icon="file-text" size="xs">Export to library</Button>
          <Button variant="ghost" icon="arrows-clockwise" size="xs">Save as runbook</Button>
        </div>
      </div>
    </ChatBubble>
  ),
};

export const Conversation = {
  render: () => (
    <>
      <ChatBubble role="user">
        Show me all inactive line items from the last 30 days
      </ChatBubble>
      <ChatBubble role="ai">
        <div>
          <p style={{ margin: '0 0 14px' }}>
            I found 47 inactive line items across 12 orders in your GAM account. Here's a breakdown:
          </p>
          <p style={{ margin: '0 0 14px' }}>
            Found <strong>47 inactive line items</strong> across 12 orders. I recommend archiving <strong>31 items</strong> with zero recent delivery.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
            <Button variant="primary" icon="check-circle" size="xs">Archive 31 items</Button>
            <Button variant="outline" icon="file-text" size="xs">Export to library</Button>
            <Button variant="ghost" icon="arrows-clockwise" size="xs">Save as runbook</Button>
          </div>
          <AiFeedback />
        </div>
      </ChatBubble>
      <ChatBubble role="user">
        Archive the 31 items with zero delivery
      </ChatBubble>
      <ChatBubble role="ai">
        Done! I've archived 31 line items across 8 orders. You can undo this action within the next 24 hours from the Library.
      </ChatBubble>
    </>
  ),
};
