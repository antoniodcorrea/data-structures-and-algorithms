#[cfg(test)]
mod tests {
  use super::super::max_difference_between_successive_elements::calculate_list_max_items_difference;

  #[test]
  fn calculate_list_max_items_difference_works() {
    let my_list: Vec<i32> = vec![1, 3, 5, 11];
    let difference: i32 = calculate_list_max_items_difference(my_list);

    assert_eq!(difference, 6);
  }
}
