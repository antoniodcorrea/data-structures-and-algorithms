#[cfg(test)]
mod test {
  use super::super::fizzbuzz::{execute_fizzbuzz, print_controller};

  mod print_controller {
    use super::*;

    #[test]
    fn one() {
      let result = print_controller(1);

      assert_eq!(result, "1");
    }

    #[test]
    fn two() {
      let result = print_controller(2);

      assert_eq!(result, "2");
    }

    #[test]
    fn three() {
      let result = print_controller(3);

      assert_eq!(result, "Fizz");
    }

    #[test]
    fn fourth() {
      let result = print_controller(4);

      assert_eq!(result, "4");
    }

    #[test]
    fn fifth() {
      let result = print_controller(5);

      assert_eq!(result, "Buzz");
    }
  }

  mod execute_fizzbuzz {
    use super::*;

    #[test]
    fn execute_fizzbuzz_1() {
      let result = execute_fizzbuzz(1);

      assert_eq!(result, vec![String::from("1")]);
    }

    #[test]
    fn execute_fizzbuzz_3() {
      let result = execute_fizzbuzz(3);

      assert_eq!(result, vec!["1", "2", "Fizz"]);
    }

    #[test]
    fn execute_fizzbuzz_5() {
      let result = execute_fizzbuzz(5);

      assert_eq!(result, vec!["1", "2", "Fizz", "4", "Buzz"]);
    }

    #[test]
    fn execute_fizzbuzz_15() {
      let result = execute_fizzbuzz(15);

      assert_eq!(
        result,
        vec![
          "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14",
          "FizzBuzz"
        ]
      );
    }
  }
}
