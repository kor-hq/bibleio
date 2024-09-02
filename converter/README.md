# Bibleio API `converter`

This is a simple Rust script that converts eBible.org Bible HTML files into BibleJSON files.

This uses [rust-scraper](https://github.com/rust-scraper/scraper), and [serde-json](https://github.com/serde-rs/json).

To get the [eBible.org](https://ebible.org) HTML files, first go there, and select a translation, and download the `Zipped mobile HTML` option, which will have every single book and chapter HTML file in that translation. Put a select few of them to test inside the `converter/input` folder perferably so they're ignored by git.

Usage:
```bash
cd converter
cargo run input/LUK03.htm
```

Licensed under `MIT-0`. (same as repo workspace)
