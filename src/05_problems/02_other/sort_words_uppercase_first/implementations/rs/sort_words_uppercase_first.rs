pub fn sort_strings(string: String) -> String {
  // Split string in words
  let string_vector = string.split(' ').filter(|a| !a.is_empty());
  // Clone for later use
  let cloned_vector = string_vector.clone();

  // Get vector with capitalized words
  let mut words_capitalized = string_vector
    .filter(|a| a.chars().next().unwrap().is_uppercase())
    .collect::<Vec<&str>>();
  // Sort vector by first letter
  words_capitalized.sort_by_key(|a| a.chars().next().unwrap());

  // Get vector with non capitalized words
  let mut words_non_capitalized = cloned_vector
    .filter(|a| !a.chars().next().unwrap().is_uppercase())
    .collect::<Vec<&str>>();
  // Sort vector by first letter
  words_non_capitalized.sort_by_key(|a| a.chars().next().unwrap());

  words_capitalized.append(&mut words_non_capitalized);

  words_capitalized.join(" ")
}
