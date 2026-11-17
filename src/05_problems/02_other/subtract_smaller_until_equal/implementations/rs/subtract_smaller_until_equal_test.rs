#[cfg(test)]
mod tests {
  use super::super::subtract_smaller_until_equal::mystery_algorithm;

  #[test]
  fn one() {
    let string_capitalized = mystery_algorithm(1635, 1413);

    assert_eq!(string_capitalized, (3, 3));
  }

  #[test]
  fn two() {
    let string_capitalized = mystery_algorithm(1, 1);

    assert_eq!(string_capitalized, (1, 1));
  }
}
