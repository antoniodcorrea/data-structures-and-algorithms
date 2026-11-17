pub struct Solution;

impl Solution {
  pub fn missing_number(mut nums: Vec<i32>) -> i32 {
    nums.sort();

    for i in 0..nums.len() {
      if nums[i] != i as i32 {
        return i as i32;
      }
    }

    nums.len() as i32
  }
}
