![banner](/.github/assets/gh-biblejson.png)

## `v0.0.2-alpha`

BibleJSON is a new universal formatting standard for putting biblical texts into JSON.

> [!WARNING]
> BibleJSON and the converter is very new, in pre-alpha stages. We need your feedback on how the formatting works, and the converter script.
> There are many bugs with the converter script.

Soon we plan to move docs over to `dev.bibleio.com`. For now our main area of making BibleJSON is at our [Notion](https://cat-skate-e91.notion.site/BibleJSON-12aaafe2ea3c80258e0de366333b6c8a?pvs=4).

# `converter`

Right now, you are able to convert [eBible.org](https://ebible.org) Bible `.htm` files into BibleJSON, with our converter script written in Rust. Soon, we plan to add support for other file formats.

"eBible HTML" is just USFM converted into HTML format, so it has the exact same tags as USFM, they are just in the classes.

## Usage

- Get source code from the repo
- Get some HTML content from [eBible.org](https://ebible.org), and put it in a "html" directory at the root. (pick a translation, and download the "Zipped mobile HTML" option!)
- Then run `pnpm biblejson dev -- html/ROM05.htm`

# Format

## USFM → BibleJSON Tags Key

| USFM tag name (div class in eBible HTML) | BibleJSON type name | item type | Note |
| --- | --- | --- | --- |
| wj | red | text | Words of Jesus |
| p, po, cls, pmo, pm, pmc, pmr, nb, lh, lf, litl*, lik#, liv#, tr | text | text |  |
| li#, lim# | listItem | text | |
| th#, thr# | tableColHeading | text |  |
| tc#, tcr# | tableCell | text |  |
| add, bk, sig, qt, sls, tl, it, em | italic | text |  |
| bd, bdit | bold | text |  |
| sc, nd | smallCaps | text | nd is smallCapsBold, but we combined them |
| qd, sup | small | text | like for notes, subtext, etc |
| rq, pr, qr | rightAligned | text |  |
| pc, qc, qs | centerAligned | text |  |
| pi#, mi, pb#, qm | indented | text |  |
| q# | hangingIndented | text |  |
| ms, mt1, mt | headingBig | content |  |
| mr, mt2, s# | heading | content |  |
| d, r, sr, mt3, sp, cd, ca*, qa | headingSmall | content | like a sub header, with `ca`, it’s an alternate chapter number so the text content will be “or chapter `number`" |
| b, sd# | whitespace | content |  |
| v | verse | content | all the content past each span.v turns into a verse object with the formatted text items, which styles are found above |

## Structure

- `details` (**right now details is not implemented, you cannot pass custom data into here**)
    - `bibleAbrv` - the abbreviation of the translation that the file is, ex. “BSB”
    - `bibleName` - the name of the translation, ex “Berean Standard Bible”
    - `bibleCopyright` - the copyright notice of the bible translation
    - `bookAbrv` - the short ID or abbreviation of the book that the file is, ex. “JHN”
    - `bookName` - the name of the book, ex. “John”
    - `chapterNumber` - the chapter number
    - `verseCount` - the amount of verses in that file
    - `langEnglish` - the language of the translation in English
    - `lang` - the language
    - `langDir` - the language direction (left to right, right to left)
- `content` - the actual Bible content, an array
    - content item objects
        - `type` - the type of the item - see conversion key for `content` types
        - `verse` (only type `verse` ) - the verse number
        - `text` - array of the content
            - text item objects
                - `text` - the content string
                - `type` - the style of the item - see conversion key for `text` types
                - `footnoteText` (only for footnotes) - the content of the footnote

## Example

See [EXAMPLE.jsonc](EXAMPLE.jsonc) to see Luke 23 (English Majority Text Version) in BibleJSON formatting.

# Feedback and contributing

Please give feedback on the format, before we decide to deploy it everywhere across Bibleio. We need feedback on developer experience on actually using it within apps, websites, etc.

If you could help make a converter script for another file format, that would be amazing!
