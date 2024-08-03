![Banner](/public/github-cover.png)

### 1.0-release

UI kit for Bibleio, including React components and Tailwind configuration with colour styles.

Built with Radix Primitives, and Tailwind CSS. Built using tsup.

See the [Figma file](https://www.figma.com/community/file/1398417551065522372/bibleio-design-kit) for design documentation.

Report issues or suggestions in this GitHub repo or in the [Discord](https://discord.gg/7eVCyQ5GGb).

Includes:

- Button
- Checkbox
- Input
- Radio Group
- Select
- Slider
- Switch
- Text and Colour Styles

To do:

- Documentation at `dev.bibleio.com/docs/design`
- More components (dialogs, notes, badges, etc.)

# Installation

Install the module:

```bash
# pnpm
pnpm add @bibleio/design
# yarn
yarn add @bibleio/design
# npm
npm install @bibleio/design
```

Add Tailwind style preset:

```ts
// tailwind.config.ts
// Snippet of what to add
import { tailwindCore } from "@bibleio/design"; // Add import

const config: Config = {
  presets: [tailwindCore], // Add preset
};
```

Add Tailwind css file in your global css file:

```css
/* Base.css example */

@import url("@bibleio/design/dist/tailwind.css");
```

## Setup fonts

We use Lora for our main font.

**Feel free to get rid of JetBrains Mono imports if you don't plan on using a monospace font.**

Here are guides to setup fonts based on your framework.

### Next.js

Import Google fonts in `layout.tsx`:

```tsx
import { Lora, JetBrains_Mono } from "next/font/google"; // Import fonts

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
```

Set css variables in your main body layout:

```html
<body className="{`${lora.variable}" ${jetBrainsMono.variable}`}></body>
```

In `tailwind.config.ts` add the special Next.js font declarations:

```ts
import { tailwindFontsNext } from "@bibleio/design/dist"; // Add font import

const config: Config = {
  presets: [tailwindCore, tailwindFontsNext], // Add font preset after core theme
};
```

### Astro / Any other framework that supports Fontsource

Install Fontsource fonts:

```bash
# pnpm
pnpm add @fontsource-variable/lora
pnpm add @fontsource-variable/jetbrains-mono
# yarn
yarn add @fontsource-variable/lora
yarn add @fontsource-variable/jetbrains-mono
# npm
npm install @fontsource-variable/lora
npm install @fontsource-variable/jetbrains-mono
```

Import in your main layout (Astro as an example):

```astro
---
// Layout.astro
import "@fontsource-variable/lora";
import "@fontsource-variable/jetbrains-mono";
---
```

No extra Tailwind config is needed for Fontsource.

# Types

The button `variant` prop doesn't seem to have types for some reason. But the avaliable ones are: `primary`, `secondary`, `success`, `warning`, `danger`.

# Contributing / License

Feel free to contribute documentation, components, etc. **Note** - we plan on moving docs to `docs.bibleio.com/docs/design` very soon.

Licensed under `GPL-3.0`.

## Development

This project uses Storybook for developing components and tsup for building.

Start up Storybook with `pnpm storybook`.

Build the output to `dist` using `pnpm build`.
