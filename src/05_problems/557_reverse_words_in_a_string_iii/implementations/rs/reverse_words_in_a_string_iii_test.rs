#[cfg(test)]
mod test {
  use super::super::reverse_words_in_a_string_iii::reverse_words_in_a_sentence;

  #[test]
  fn reverse_words_in_a_sentence_works() {
    let number = 3;
    let lines =
      String::from("Remotelo is awesome\nCandidates give interview\nbest candidates are selected");
    let expected_output =
      String::from("oletomeR si emosewa\nsetadidnaC evig weivretni\ntseb setadidnac era detceles");
    let result = reverse_words_in_a_sentence(number, lines);

    assert_eq!(result, expected_output);
  }
}
