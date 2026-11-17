#[cfg(test)]
mod tests {
  use crate::capitalize_first_character_of_string::capitalize_first_character_of_string::string_capitalize_two;
  use super::super::capitalize_first_character_of_string::string_capitalize_one;

  #[test]
  fn string_capitalize_one_works() {
    let original_string = String::from("string");
    let string_capitalized = string_capitalize_one(original_string);

    assert_eq!(string_capitalized, "String");
  }

  #[test]
  fn string_capitalize_two_works() {
    let original_string = String::from("string");
    let string_capitalized = string_capitalize_two(original_string);

    assert_eq!(string_capitalized, "String");
  }
}
