pub fn string_capitalize_one(string: String) -> String {
  let mut chars = string.chars();
  let first_char = chars.next().unwrap().to_ascii_uppercase();
  let capitalized_string = format!("{}{}", first_char, chars.as_str());

  capitalized_string
}

pub fn string_capitalize_two(string: String) -> String {
  let mut string_capitalized = string.chars();

  match string_capitalized.next() {
    None => String::new(),
    Some(first) => first.to_uppercase().chain(string_capitalized).collect(),
  }
}
