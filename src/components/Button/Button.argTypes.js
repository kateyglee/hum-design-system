// Shared argTypes for all Button stories
// Imported by each story file to keep controls consistent

export const buttonArgTypes = {
  // — Content —
  children: {
    control: 'text',
    description: 'Button label text',
    table: { category: 'Content' },
  },

  // — Appearance —
  variant: {
    control: 'radio',
    options: ['primary', 'outline', 'ghost', 'danger'],
    description: 'Visual style',
    table: { category: 'Appearance' },
  },
  size: {
    control: 'radio',
    options: ['xs', 'sm', 'md', 'lg'],
    description: 'Button size',
    table: { category: 'Appearance' },
  },
  fullWidth: {
    control: 'boolean',
    description: 'Stretch to fill parent width',
    table: { category: 'Appearance' },
  },

  // — Icon —
  icon: {
    control: 'text',
    description: 'Phosphor icon name (e.g. "plus", "download")',
    table: { category: 'Icon' },
  },
  iconPosition: {
    control: 'radio',
    options: ['left', 'right'],
    description: 'Icon placement relative to label',
    table: { category: 'Icon' },
  },
  iconOnly: {
    control: 'boolean',
    description: 'Show icon only, no label',
    table: { category: 'Icon' },
  },

  // — State —
  disabled: {
    control: 'boolean',
    description: 'Disable interaction',
    table: { category: 'State' },
  },
  loading: {
    control: 'boolean',
    description: 'Show spinner and disable interaction',
    table: { category: 'State' },
  },

  // — HTML —
  type: {
    control: 'radio',
    options: ['button', 'submit', 'reset'],
    description: 'HTML button type attribute',
    table: { category: 'HTML' },
  },
  tooltip: {
    control: 'text',
    description: 'Native title tooltip on hover',
    table: { category: 'HTML' },
  },
};
