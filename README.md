![Banner](.github/assets/gh-org.png)

This is the Bibleio monorepo, all the code that powers Bibleio. Here you can find our apps, websites, and back-end stuff.

# Structure

- [`apps/website`](https://github.com/bibleio/bibleio/tree/main/apps/website) The main public facing website
- [`packages/design`](https://github.com/bibleio/bibleio/tree/main/packages/design) Our design system

See more about each project in their README.

## Developing

We use Turborepo and pnpm for our codebaase. Here's our main commands:
```bash
pnpm site dev # website dev server
pnpm fix # format & lint all files

# can also access other subcommands
pnpm site build
```
We use [Biome](https://biomejs.dev/) for formatting and linting, please use `pnpm fix` when developing, or [setup your editor to use Biome](https://biomejs.dev/guides/editors/first-party-extensions/).

# Status

Right now we are in pre-alpha. We are working on all the vital components to get a Bible web app up and running with our own API and design system. We are also working on [BibleJSON](https://github.com/bibleio/biblejson), a universal formatting standard for scripture, so we can use that in our Bible API.

Once we get back-end functionality working, we will start rewriting the web app, as the current version was written in April 2024, and is very outdated. Then we'll start working on the Mobile and Desktop app with Tauri.

# Contributing

We'd love to have you contribute, currently Bibleio is a 1 person project. We have huge ambitious goals, and having God's kingdom or anyone else help would be such a blessing.

Our community center page is on [Notion](https://cat-skate-e91.notion.site/Bibleio-102aafe2ea3c8158b203e996e06c9aa7), along with all of our updated tasks.

Read more about developer stuff for contributing at [CONTRIBUTING.md](.github/CONTRIBUTING.md).

# License

All of Bibleio's projects are licensed under the [MIT No Attribution](LICENSE.txt) license.

Matthew 10:8 BSB
> "Freely you have received; freely give"

Check out why you should do the same by clicking this:

[<img src="https://copy.church/badges/lcc_alt_pde.png" alt="Freely given, no conditions!" width="300"/>](https://copy.church/explain/importance/)
