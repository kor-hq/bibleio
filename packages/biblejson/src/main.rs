use scraper::{ElementRef, Html, Selector};
use serde_json::{json, Value};
use std::env;
use std::fs::{self, File};
use std::io::{BufWriter, Write};
use std::process;

fn main() {
	let input_arg = env::args().nth(1).expect("no path given");

	let input_contents = match fs::read_to_string(&input_arg) {
		Ok(content) => content,
		Err(error) => {
			eprintln!("error reading input file content: {}", error);
			process::exit(1);
		}
	};

	let parsed_json = parse(&input_contents);

	let file = File::create("OUTPUT.json").expect("Failed to create file");
	let mut writer = BufWriter::new(file);
	serde_json::to_writer_pretty(&mut writer, &parsed_json).expect("Failed to write to file");
	writer.flush().expect("Failed to flush writer");
	println!("Wrote output to OUTPUT.json");
}

fn parse(html: &str) -> Value {
	let document = Html::parse_document(html);
	let mut content_sections: Vec<Value> = Vec::new();

	let mut current_verse_content = String::new();
	let mut current_verse_number: Option<i32> = None;
	let mut verse_parts: Vec<Value> = Vec::new();
	let mut verse_type = "verse";

	// Helper function to finalize the current verse
	fn finalize_current_verse(
		current_verse_content: &mut String,
		current_verse_number: &Option<i32>,
		verse_parts: &mut Vec<Value>,
		content_sections: &mut Vec<Value>,
		verse_type: &str,
	) {
		if let Some(verse_number) = current_verse_number {
			if !verse_parts.is_empty() {
				content_sections.push(json!({
						"type": verse_type,
						"verse": verse_number,
						"text": serde_json::to_value(verse_parts.clone()).unwrap()
				}));
			} else {
				content_sections.push(json!({
						"type": verse_type,
						"verse": verse_number,
						"text": { "1": current_verse_content }
				}));
			}
			verse_parts.clear();
		}
		*current_verse_content = String::new();
	}

	// Main loop to process HTML content
	for div in document.select(&Selector::parse("div").unwrap()) {
		let class_name = div.value().attr("class").unwrap_or("");

		// Handle each div element
		match class_name {
			// Headers and stuff
			"s" | "d" | "b" | "r" => {
				if class_name == "s" {
					verse_type = "header";
				} else if class_name == "d" {
					verse_type = "subHeader";
				} else if class_name == "b" {
					verse_type = "whitespace"
				} else if class_name == "r" {
					verse_type = "subHeaderReference"
				}
				finalize_current_verse(
					&mut current_verse_content,
					&current_verse_number,
					&mut verse_parts,
					&mut content_sections,
					verse_type,
				);
				content_sections.push(json!({
						"type": verse_type,
						"text": div.text().collect::<Vec<_>>().concat()
				}));
				current_verse_number = None;
			}
			// Verse content
			"p" | "m" | "q" => {
				if class_name == "q" {
					verse_type = "verseQuote";
				} else {
					verse_type = "verse";
				}

				// Goes through each div of text
				for child in div.children() {
					if let Some(span) = ElementRef::wrap(child) {
						let span_class = span.value().attr("class").unwrap_or("");

						// Detect the start of a new verse
						if span_class == "verse" {
							if current_verse_number.is_some() {
								finalize_current_verse(
									&mut current_verse_content,
									&current_verse_number,
									&mut verse_parts,
									&mut content_sections,
									verse_type,
								);
							}
							current_verse_number = span.value().attr("id").unwrap_or("0")[1..].parse().ok();
						// Formatting stuff
						} else if span_class == "add" {
							if !current_verse_content.is_empty() {
								verse_parts.push(json!(current_verse_content.trim_end().to_string()));
								current_verse_content.clear();
							}
							verse_parts.push(json!({
									"italic": true,
									"content": span.text().collect::<Vec<_>>().concat()
							}));
						} else if span_class == "wj" {
							if !current_verse_content.is_empty() {
								verse_parts.push(json!(current_verse_content.trim_end().to_string()));
								current_verse_content.clear();
							}
							verse_parts.push(json!({
									"red": true,
									"content": span.text().collect::<Vec<_>>().concat()
							}));
						}
					} else if child.value().is_text() {
						current_verse_content.push_str(child.value().as_text().unwrap());
					}

					// Handle remaining text between spans before encountering a new verse
					if current_verse_number.is_some() && !current_verse_content.is_empty() {
						verse_parts.push(json!(current_verse_content));
						current_verse_content.clear();
					}
				}

				// Finalize any remaining text at the end
				if !current_verse_content.is_empty() {
					verse_parts.push(json!(current_verse_content));
					current_verse_content.clear();
				}
			}
			_ => {}
		}
	}

	finalize_current_verse(
		&mut current_verse_content,
		&current_verse_number,
		&mut verse_parts,
		&mut content_sections,
		verse_type,
	);

	json!({
		"details": {
			"bibleAbrv": "temp",
			"bibleName": "temp",
			"bibleCopyright": "temp",
			"bookAbrv": "temp",
			"bookName": "temp",
			"chapterNumber": 0,
			"verseCount": "temp",
			"langEnglish": "temp",
			"lang": "temp",
			"langDir": "temp",
		},
		"content": content_sections
	})
}
