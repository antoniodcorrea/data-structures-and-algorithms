#[cfg(test)]
mod tests {
  use super::super::sum_of_n_largest_elements::list_sum_largest_n_numbers;

  #[test]
  fn list_sum_largest_n_numbers_one() {
    let list = vec![17, 310, 32_432, 3, 2, 317, 34, 108_379];
    let n = 3;
    let intended_result = 141_128;
    let result = list_sum_largest_n_numbers(list, n);

    assert_eq!(result, intended_result);
  }
}
