/** @type { import('@storybook/react').Preview } */
import '../src/index.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

export const decorators = [mswDecorator];
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
