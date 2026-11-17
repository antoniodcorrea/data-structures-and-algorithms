#[cfg(test)]
mod tests {
  use super::super::find_anagrams_in_candidate_list::find_anagrams;

  #[test]
  fn find_anagrams_works_a() {
    let input_word = String::from("Hello");
    let input_list = vec![String::from("OllEh"), String::from("Hello")];
    let intended_output = vec![String::from("OllEh")];

    let result = find_anagrams(input_word, input_list);
    assert_eq!(result, intended_output);
  }

  #[test]
  fn find_anagrams_works_b() {
    let input_word = String::from("listen");
    let input_list = vec![
      String::from("listen"),
      String::from("enlists"),
      String::from("google"),
      String::from("inlets"),
      String::from("banana"),
    ];
    let intended_output = ["inlets"];

    let result = find_anagrams(input_word, input_list);
    assert_eq!(result, intended_output);
  }
}
