/*
Given a string, reverse the order of its characters
*/

pub fn string_reverse_one(string: String) -> String {
  string.chars().rev().collect()
}

pub fn string_reverse_two(mut string: String) -> String {
  if string.is_empty() {
    string
  } else {
    let removed_char = string.remove(0);
    let mut string = string_reverse_two(string);
    string.push(removed_char);

    string
  }
}
