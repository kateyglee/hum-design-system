import { useState } from 'react';
import Input from './Input';

export default {
  title: 'Primitives/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    multiline: { control: 'boolean' },
    rows: { control: 'number' },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};

export const Default = {
  args: {
    label: 'Runbook Name',
    placeholder: 'e.g. Weekly delivery summary',
  },
};

export const WithValue = {
  args: {
    label: 'Name',
    value: 'Weekly Delivery Summary',
  },
};

export const Small = {
  args: {
    label: 'Time',
    placeholder: '08:00',
    size: 'sm',
  },
};

export const ErrorState = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const Disabled = {
  args: {
    label: 'Locked Field',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const Multiline = {
  args: {
    label: 'Instructions',
    placeholder: 'e.g. Pull all line items from GAM with zero impressions in the last 30 days...',
    multiline: true,
    rows: 3,
  },
};

export const NoLabel = {
  args: {
    placeholder: 'Search runbooks…',
  },
};

const ControlledTemplate = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      label="Description"
      placeholder="What does this runbook do?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Controlled = {
  render: () => <ControlledTemplate />,
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 360 }}>
      <Input label="Default" placeholder="Placeholder text" />
      <Input label="With Value" value="Filled in" />
      <Input label="Error" value="Bad input" error="This field is required" />
      <Input label="Disabled" value="Read only" disabled />
      <Input label="Small" placeholder="Compact" size="sm" />
      <Input label="Multiline" placeholder="Describe what Hum should do..." multiline rows={3} />
    </div>
  ),
};
