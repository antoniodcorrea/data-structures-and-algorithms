/*
412. Fizz Buzz
Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

Example 1:
  Input: n = 3
  Output: ["1","2","Fizz"]
Example 2:
  Input: n = 5
  Output: ["1","2","Fizz","4","Buzz"]
Example 3:
  Input: n = 15
  Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
Constraints: 1 <= n <= 104

Source: https://leetcode.com/problems/fizz-buzz/description/
*/

pub fn print_controller(index: i32) -> String {
  match (index % 3, index % 5) {
    (0, 0) => String::from("FizzBuzz"),
    (0, _) => String::from("Fizz"),
    (_, 0) => String::from("Buzz"),
    (_, _) => index.to_string(),
  }
}

pub fn execute_fizzbuzz(n: i32) -> Vec<String> {
  (1..=n).map(print_controller).collect()
}
