import '../src/tokens/light.css';
import '@phosphor-icons/web/regular/style.css';
import '@phosphor-icons/web/fill/style.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Button',
          'Button Group',
          'Header',
          'Navigation',
          'Chat',
          'Indicators',
          'Primitives',
        ],
      },
    },
    backgrounds: {
      default: 'Hum Light',
      values: [
        { name: 'Hum Light', value: '#FAFAFA' },
        { name: 'Hum Dark', value: '#0A0A0C' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
