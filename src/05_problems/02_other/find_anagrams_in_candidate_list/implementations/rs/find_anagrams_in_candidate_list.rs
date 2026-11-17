fn sort_word(word: &str) -> String {
  let mut input_word_chars: Vec<char> = word.chars().collect();
  input_word_chars.sort_unstable();

  String::from_iter(input_word_chars)
}

pub fn find_anagrams(input_word: String, input_list: Vec<String>) -> Vec<String> {
  let input_word_lowercased = &input_word.to_lowercase();
  let input_word_lowercased_and_sorted = sort_word(input_word_lowercased);

  let result = input_list.into_iter().filter(|curr| {
    let curr_lowercased = &curr.to_lowercase();
    let curr_lowercased_and_sorted = sort_word(curr_lowercased);

    // Evaluate that both strings are identical, and is not the original one
    curr_lowercased_and_sorted == input_word_lowercased_and_sorted
      && (curr_lowercased != input_word_lowercased)
  });

  result.collect::<Vec<String>>()
}
