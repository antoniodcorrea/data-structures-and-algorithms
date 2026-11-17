pub fn list_sum_largest_n_numbers(mut list: Vec<i32>, n: i32) -> i32 {
  let mut sum: i32 = 0;
  list.sort_unstable();

  for _i in 1..=n {
    let value_to_sum = list.pop().unwrap();
    sum += value_to_sum;
  }

  sum
}
