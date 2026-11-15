#[cfg(test)]
mod test {
  use super::super::longest_palindrome::Solution;

  #[test]
  fn example_1() {
    assert_eq!(Solution::longest_palindrome("abccccdd".to_string()), 7);
  }

  #[test]
  fn example_2() {
    assert_eq!(Solution::longest_palindrome("a".to_string()), 1);
  }

  #[test]
  fn case_sensitive() {
    assert_eq!(Solution::longest_palindrome("Aa".to_string()), 1);
  }

  #[test]
  fn all_even() {
    assert_eq!(Solution::longest_palindrome("bb".to_string()), 2);
  }

  #[test]
  fn several_odd_counts() {
    assert_eq!(Solution::longest_palindrome("aaabbbccc".to_string()), 7);
  }

  #[test]
  fn all_distinct() {
    assert_eq!(Solution::longest_palindrome("abcdef".to_string()), 1);
  }
}
