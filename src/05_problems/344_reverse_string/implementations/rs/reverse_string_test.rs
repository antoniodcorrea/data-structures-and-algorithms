#[cfg(test)]
mod tests {
  use crate::reverse_string::reverse_string::string_reverse_two;
  use super::super::reverse_string::string_reverse_one;

  #[test]
  fn string_reverse_one_works() {
    let string = String::from("1234");
    let reversed_string = string_reverse_one(string);

    assert_eq!(reversed_string, "4321");
  }

  #[test]
  fn string_reverse_two_works() {
    let string = String::from("1234");
    let reversed_string = string_reverse_two(string);

    assert_eq!(reversed_string, "4321");
  }
}
