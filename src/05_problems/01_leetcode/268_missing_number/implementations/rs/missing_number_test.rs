#[cfg(test)]
mod test {
  use super::super::missing_number::Solution;

  #[test]
  fn example_1() {
    assert_eq!(Solution::missing_number(vec![3, 0, 1]), 2);
  }

  #[test]
  fn example_2() {
    assert_eq!(Solution::missing_number(vec![0, 1]), 2);
  }

  #[test]
  fn example_3() {
    assert_eq!(Solution::missing_number(vec![9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
  }

  #[test]
  fn missing_first() {
    assert_eq!(Solution::missing_number(vec![1]), 0);
  }

  #[test]
  fn missing_last() {
    assert_eq!(Solution::missing_number(vec![0]), 1);
  }
}
