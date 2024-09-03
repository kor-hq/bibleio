use scraper::{Html, Selector};
use serde_json::json;
use std::env;
use std::fs::{self, File};
use std::io::{BufWriter, Write};
use std::process;

fn parse(html: &str) -> Vec<serde_json::Value> {
    let document = Html::parse_document(html);

    let mut json_res = vec![];

    // selectors

    let main_selector = Selector::parse("div.main > *").unwrap();

    // to-do
    // make it so under "p" it gets each span.verse, then all the text contents after that tag, but before the next tag, so inbetween, then map each verse under "contents"
    for elements in document.select(&main_selector) {
        if elements.attr("class").unwrap_or_default() == "s" {
            json_res.push(json!({
                "type": "header",
                "contents": elements.inner_html()
            }));
        } else if elements.attr("class").unwrap_or_default() == "d" {
            json_res.push(json!({
                "type": "subheader",
                "contents": elements.inner_html()
            }));
        } else if elements.attr("class").unwrap_or_default() == "p" {
            json_res.push(json!({
                "type": "paragraph",
                "contents": [elements.inner_html()]
            }));
        } else if elements.attr("class").unwrap_or_default() == "q" {
            json_res.push(json!({
                "type": "quote",
                "contents": [elements.inner_html()]
            }));
        }
    }

    json_res
}

fn main() {
    let input_arg = env::args().nth(1).expect("no path given");

    let input_contents = match fs::read_to_string(&input_arg) {
        Ok(content) => content,
        Err(error) => {
            eprintln!("error reading input file content: {}", error);
            process::exit(1);
        }
    };

    let verses = parse(&input_contents);

    let file = File::create("OUTPUT.json").expect("Failed to create file");
    let mut writer = BufWriter::new(file);
    serde_json::to_writer_pretty(&mut writer, &verses).expect("Failed to write to file");
    writer.flush().expect("Failed to flush writer");
    println!("Written output to OUTPUT.json");
}
