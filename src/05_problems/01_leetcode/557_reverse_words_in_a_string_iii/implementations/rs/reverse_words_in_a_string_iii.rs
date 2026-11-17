pub fn reverse_words(s: String) -> String {
  s.split(' ')
    .map(|word| word.chars().rev().collect())
    .collect::<Vec<String>>()
    .join(" ")
}
