#[cfg(test)]
mod tests {
  use time::macros::{date, time};
  use time::PrimitiveDateTime;
  use super::super::moment_after_a_gigasecond::{calculate_date_one, calculate_date_two};

  #[test]
  fn one() {
    let itended_result = PrimitiveDateTime::new(date!(2050 - 09 - 09), time!(11:47:40));
    let primitive_datetime = PrimitiveDateTime::new(date!(2019 - 01 - 01), time!(10:01));
    let calculated_date = calculate_date_one(primitive_datetime);

    assert_eq!(calculated_date, itended_result);
  }

  #[test]
  fn two() {
    let itended_result = PrimitiveDateTime::new(date!(2050 - 09 - 09), time!(11:47:40));
    let primitive_datetime = PrimitiveDateTime::new(date!(2019 - 01 - 01), time!(10:01));
    let calculated_date = calculate_date_two(primitive_datetime);

    assert_eq!(calculated_date, itended_result);
  }
}
