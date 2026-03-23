import Button from './Button';
import { buttonArgTypes } from './Button.argTypes';

export default {
  title: 'Button/States',
  component: Button,
  argTypes: buttonArgTypes,
};

export const Disabled = {
  args: { variant: 'primary', disabled: true, children: 'Disabled' },
};

export const Loading = {
  args: { variant: 'primary', loading: true, children: 'Saving…' },
};

export const LoadingOutline = {
  args: { variant: 'outline', loading: true, children: 'Loading…' },
};

export const LoadingGhost = {
  args: { variant: 'ghost', loading: true, children: 'Loading…' },
};

export const LoadingIconOnly = {
  args: { variant: 'primary', icon: 'plus', iconOnly: true, loading: true },
};

export const FullWidth = {
  args: { variant: 'primary', fullWidth: true, children: 'Full Width' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export const FullWidthWithIcon = {
  args: { variant: 'outline', fullWidth: true, icon: 'download', children: 'Export Report' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithTooltip = {
  args: { variant: 'ghost', icon: 'gear', iconOnly: true, tooltip: 'Open settings' },
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="primary">Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" loading>Loading…</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="outline">Default</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="outline" loading>Loading…</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="ghost">Default</Button>
        <Button variant="ghost" disabled>Disabled</Button>
        <Button variant="ghost" loading>Loading…</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="danger">Default</Button>
        <Button variant="danger" disabled>Disabled</Button>
        <Button variant="danger" loading>Loading…</Button>
      </div>
      <div style={{ width: 320 }}>
        <Button variant="primary" fullWidth>Full Width</Button>
      </div>
    </div>
  ),
};
