#[allow(unused_imports)]
use time::{
  ext::NumericalDuration,
  macros::{date, time},
  Duration, PrimitiveDateTime,
};

pub fn calculate_date_one(date_time: PrimitiveDateTime) -> PrimitiveDateTime {
  date_time + 1e9.seconds()
}

pub fn calculate_date_two(date_time: PrimitiveDateTime) -> PrimitiveDateTime {
  let gigaseconds = Duration::seconds(1_000_000_000);

  date_time + gigaseconds
}
