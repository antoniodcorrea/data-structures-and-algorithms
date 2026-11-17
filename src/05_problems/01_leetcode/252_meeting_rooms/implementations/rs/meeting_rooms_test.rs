#[cfg(test)]
mod tests {
  use super::super::meeting_rooms::calculate_no_overlaps;

  #[test]
  fn one() {
    let intervals: crate::meeting_rooms::meeting_rooms::Intervals = vec![(5, 6), (3, 4), (1, 2)];

    let result = calculate_no_overlaps(&intervals);
    assert!(result);
  }

  #[test]
  fn two() {
    let intervals: crate::meeting_rooms::meeting_rooms::Intervals = vec![(0, 30), (5, 10), (15, 20)];

    let result = calculate_no_overlaps(&intervals);
    assert!(!result);
  }

  #[test]
  fn three() {
    let intervals: crate::meeting_rooms::meeting_rooms::Intervals = vec![(7, 10), (2, 4)];

    let result = calculate_no_overlaps(&intervals);
    assert!(result);
  }
}
