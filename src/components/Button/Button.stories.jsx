import Button from './Button';

// ── Playground (top-level interactive story) ────────────────────────

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    icon: { control: 'text' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Playground = {
  args: { variant: 'primary', children: 'Button' },
};
