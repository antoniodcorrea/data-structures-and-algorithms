pub fn linear_searching(string: String) -> String {
  // Get first line
  let first_line = string.split('\n').next().unwrap();
  let first_line_length = first_line.len();

  // Remove first line from input
  let mut string_replaced = string.clone();
  string_replaced.replace_range(0..first_line_length, "");
  let mut output: Vec<&str> = vec![];

  // Create a vector with the rest of strings to compare
  let strings_to_compare = string_replaced
    .split('\n')
    .filter(|a| !a.is_empty())
    .collect::<Vec<&str>>();

  // Compare
  for i in strings_to_compare {
    match first_line.contains(i) {
      true => output.push("True"),
      false => output.push("False"),
    }
  }

  output.join("\n")
}
