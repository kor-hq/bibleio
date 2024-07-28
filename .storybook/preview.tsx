import type { Preview } from "@storybook/react";
import "@fontsource-variable/lora";
import "@fontsource-variable/jetbrains-mono";
import "../src/tailwind.css";
import BibleioTheme from "./bibleio-theme";
import {
  withThemeByDataAttribute,
  withThemeByClassName,
} from "@storybook/addon-themes";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: BibleioTheme,
    },
    layout: ["centered"],
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#CCCCCC",
        },
        {
          name: "dark",
          value: "#1B1B1B",
        },
      ],
    },
  },
  decorators: decorators,
};

export default preview;
