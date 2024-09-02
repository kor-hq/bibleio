![Banner](https://i.imgur.com/9LfDHnC.png)

This is the **alpha** Bibleio API. It plans to be a fully accessible, blazingly fast Bible Static REST API written in Rust, which will one day also include major translations, for free (please pray for this to happen).

This repo is simply just a Cargo Workspace, with the `converter` script and the `api`.

The API **will be** built with [Axum](), and the actual JSON files are served from a database using [Diesel]().

Each [BibleJSON]() file was converted from HTML from [eBible.org](https://ebible.org) to JSON using the `converter` script. (huge thanks to eBible.org!)

# Status

Currently we're working on the `converter` script to convert the eBible.org HTML files into BibleJSON files. It uses `rust-scraper`, except it's just scraping the data from downloaded HTML files.

We won't start working on the API until we have actual BibleJSON files to serve.

# Plans & Ideas

It would be cool if we could get our hands on some Christian devonitonals, books, etc. and serve them here in the public domain. We also plan to serve Audio Bibles soon. It would also be cool for us to make our own authentication server for Bibleio accounts, but we'll probably use another solution.

# License

All of Bibleio's projects are licensed under the [MIT No Attribution](LICENSE.txt) license. You can copy, translate, modify, and distribute this resource, without restriction, and without needing to ask permission. Why? For the sake of the gospel (Matt 10:8).

Please consider publishing all of your Bible resources under the same license. Check out why [here](https://copy.church/explain/importance/).

![license badge - Freely given, no conditions!](https://copy.church/badges/lcc_alt_pde.png)
