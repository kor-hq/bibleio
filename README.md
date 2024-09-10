![Banner](https://i.imgur.com/rd1kc35.png)

Design version `1.3.0` - Library version `2.0.0`

UI kit for Bibleio, including React components and Tailwind configuration with color styles.

Built with Radix Primitives, other accessible React primitives, and Tailwind CSS.

This library also includes a ThemeProvider which allows you to change between light/dark easily, while still only using 1 Tailwind class for colors, and you're able to change the accent color tint of all the materials. It works by editing the CSS variables in your main stylesheet used by the Tailwind config.

Report issues or suggestions in this GitHub repo or in the [Discord](https://discord.gg/7eVCyQ5GGb).

# Documentation

See [dev.bibleio.com/design/docs](https://dev.bibleio.com/design/docs) for the library documentation (and design docs too in the future!).

See the [Figma file](https://www.figma.com/community/file/1398417551065522372/bibleio-design-kit) for design documentation.

# Changelog

## 2.0.0

Reworked theming system, Tailwind styles, and added accent color system all via ThemeProvider.

All materials and colors are no longer prefixed by a `light-` or a `dark-`. They are all just simply their name, so instead of `bg-light-fg-2`, use `bg-fg-2`. The Tailwind styles now work of off CSS variables, which is what ThemeProvider changes.

# License

All of Bibleio's projects are licensed under the [MIT No Attribution](LICENSE.txt) license. You can copy, translate, modify, and distribute this resource, without restriction, and without needing to ask permission. Why? For the sake of the gospel (Matt 10:8).

Check out why you should do the same by clicking this:

[<img src="https://copy.church/badges/lcc_alt_pde.png" alt="Freely given, no conditions!" width="300"/>](https://copy.church/explain/importance/)
