The API is the full backend for Bibleio, in the future it will hold accounts, community stuff, and all that.

Right now our focus is the Bible API, which serves the Bible in many translations and languages in the [BibleJSON](https://github.com/bibleio/biblejson) format.

# Developing

Turborepo works with Rust via the `package.json`.

To get started, run `pnpm api install` which will run cargo install in the API dir.

Then run `pnpm api dev` to do cargo run.

We use rustfmt and clippy, which can also be accessed via `fix`, so like `pnpm api fix`.
