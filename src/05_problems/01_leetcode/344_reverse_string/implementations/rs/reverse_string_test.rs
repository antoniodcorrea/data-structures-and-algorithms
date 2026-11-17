#[cfg(test)]
mod tests {
  use super::super::reverse_string::reverse_string;

  #[test]
  fn reverse_string_example_1() {
    let mut s = vec!['h', 'e', 'l', 'l', 'o'];
    reverse_string(&mut s);

    assert_eq!(s, vec!['o', 'l', 'l', 'e', 'h']);
  }

  #[test]
  fn reverse_string_example_2() {
    let mut s = vec!['H', 'a', 'n', 'n', 'a', 'h'];
    reverse_string(&mut s);

    assert_eq!(s, vec!['h', 'a', 'n', 'n', 'a', 'H']);
  }

  #[test]
  fn reverse_string_single_char() {
    let mut s = vec!['a'];
    reverse_string(&mut s);

    assert_eq!(s, vec!['a']);
  }
}
