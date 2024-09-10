import type { Preview } from '@storybook/react';
import React from 'react';
import '@fontsource-variable/lora';
import '@fontsource-variable/lora/wght-italic.css';
import '@fontsource-variable/jetbrains-mono';
import '../src/index.css';
import BibleioTheme from './bibleio-theme';
import {
  withThemeByDataAttribute,
  withThemeByClassName,
} from '@storybook/addon-themes';
import { ThemeProvider } from '../src/ThemeProvider';
import { localThemeStorage } from './localstorage';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  (Story) => (
    <ThemeProvider storage={localThemeStorage}>
      <div className="bg flex h-full w-full items-center justify-center">
        <Story />
      </div>
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    docs: {
      theme: BibleioTheme,
    },
    layout: ['centered'],
  },
  decorators: decorators,
};

export default preview;
