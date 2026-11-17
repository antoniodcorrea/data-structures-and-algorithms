#[cfg(test)]

mod tests {
  use super::super::check_numbers_present_in_first_line::linear_searching;

  #[test]
  fn linear_searching_works() {
    let input = "99 12 10 23\n23\n25\n99".to_owned();
    let expected_result = "True\nFalse\nTrue";
    let result = linear_searching(input);

    assert_eq!(result, expected_result);
  }
}
