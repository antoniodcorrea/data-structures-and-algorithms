#[cfg(test)]
mod test {
  use super::super::sort_words_uppercase_first::sort_strings;

  #[test]
  fn sort_strings_works() {
    let input = String::from("quick brown Fox");
    let expected_output = String::from("Fox brown quick");
    let result = sort_strings(input);

    assert_eq!(result, expected_output);
  }
}
