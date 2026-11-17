#[cfg(test)]
mod test {
  use super::super::reverse_words_in_a_string_iii::reverse_words;

  #[test]
  fn reverse_words_example_1() {
    let result = reverse_words(String::from("Let's take LeetCode contest"));

    assert_eq!(result, "s'teL ekat edoCteeL tsetnoc");
  }

  #[test]
  fn reverse_words_example_2() {
    let result = reverse_words(String::from("Mr Ding"));

    assert_eq!(result, "rM gniD");
  }

  #[test]
  fn reverse_words_single_word() {
    let result = reverse_words(String::from("Remotelo"));

    assert_eq!(result, "oletomeR");
  }
}
