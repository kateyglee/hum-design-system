import Button from './Button';
import { buttonArgTypes } from './Button.argTypes';

export default {
  title: 'Button/Variants',
  component: Button,
  argTypes: buttonArgTypes,
};

export const Primary = {
  args: { variant: 'primary', children: 'Primary' },
};

export const Outline = {
  args: { variant: 'outline', children: 'Outline' },
};

export const Ghost = {
  args: { variant: 'ghost', children: 'Ghost' },
};

export const Danger = {
  args: { variant: 'danger', children: 'Danger' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
