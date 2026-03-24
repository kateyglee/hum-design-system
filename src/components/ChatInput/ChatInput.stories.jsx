import { useState } from 'react';
import ChatInput from './ChatInput';
import Button from '../Button/Button';

export default {
  title: 'Chat/ChatInput',
  component: ChatInput,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 640, margin: '40px auto' }}>
        <Story />
      </div>
    ),
  ],
};

export const Empty = {
  args: {
    placeholder: 'Ask Hum anything about your ad inventory...',
  },
};

export const WithText = {
  args: {
    value: 'Show me all inactive line items from the last 30 days',
    placeholder: 'Ask Hum anything...',
  },
};

export const Generating = {
  args: {
    value: '',
    generating: true,
    placeholder: 'Ask Hum anything...',
  },
};

export const WithPromptChips = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <ChatInput
          value={value}
          onChange={setValue}
          onSend={() => alert('Send: ' + value)}
          placeholder="Ask Hum anything about your ad inventory..."
        />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="outline" size="sm" onClick={() => setValue('List inactive line items')}>
            List inactive line items
          </Button>
          <Button variant="outline" size="sm" onClick={() => setValue('Weekly delivery summary')}>
            Weekly delivery summary
          </Button>
          <Button variant="outline" size="sm" onClick={() => setValue('Archive old creatives')}>
            Archive old creatives
          </Button>
        </div>
      </div>
    );
  },
};

export const Interactive = {
  render: () => {
    const [value, setValue] = useState('');
    const [generating, setGenerating] = useState(false);

    const handleSend = () => {
      setGenerating(true);
      setValue('');
      setTimeout(() => setGenerating(false), 3000);
    };

    return (
      <ChatInput
        value={value}
        onChange={setValue}
        onSend={handleSend}
        onStop={() => setGenerating(false)}
        generating={generating}
        placeholder="Type a message and press Enter..."
      />
    );
  },
};
