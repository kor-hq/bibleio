import type { Preview } from "@storybook/react";
import React from "react";
import "@fontsource-variable/lora";
import "@fontsource-variable/jetbrains-mono";
import "../src/tailwind.css";
import BibleioTheme from "./bibleio-theme";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

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
  },
  decorators: [
    (Story) => (
      <div className={`p-32 font-serif`}>
        <Story />
      </div>
    ),
  ],
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
