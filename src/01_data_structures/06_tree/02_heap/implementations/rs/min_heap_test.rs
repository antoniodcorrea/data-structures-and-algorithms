#[cfg(test)]
mod tests {
  use crate::heap::min_heap::{extract_min, insert_min, min_heap, min_heapify, parent};

  #[test]
  fn computes_parent_of_second_element() {
    //          8
    //        /  \
    //       7←   4
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5   0
    let parent_index = parent(1);

    assert_eq!(parent_index, 0);
  }

  #[test]
  fn computes_parent_of_third_element() {
    //          8
    //        /  \
    //       7    4←
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5   0
    let parent_index = parent(2);

    assert_eq!(parent_index, 0);
  }
  #[test]
  fn computes_parent_of_fourth_element() {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6← 2 1   3
    //    / \
    //   5   0
    let parent_index = parent(3);

    assert_eq!(parent_index, 1);
  }
  #[test]
  fn computes_parent_of_fifth_element() {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2←1   3
    //    / \
    //   5   0
    let parent_index = parent(4);

    assert_eq!(parent_index, 1);
  }
  #[test]
  fn computes_parent_of_sixth_element() {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1←  3
    //    / \
    //   5   0
    let parent_index = parent(5);

    assert_eq!(parent_index, 2);
  }
  #[test]
  fn computes_parent_of_seventh_element() {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1   3←
    //    / \
    //   5   0
    let parent_index = parent(6);

    assert_eq!(parent_index, 2);
  }
  #[test]
  fn computes_parent_of_eigth_element() {
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5←  0
    let parent_index = parent(7);

    assert_eq!(parent_index, 3);
  }
  #[test]
  fn heapifies_moving_smallest_child_up() {
    //          5←
    //        /  \
    //       1    3
    let mut array = vec![5, 1, 3];
    let array_length = array.len();
    min_heapify(&mut array, 0, array_length);

    assert_eq!(array, [1, 5, 3]);
  }
  #[test]
  fn builds_heap_correctly() {
    let mut array = vec![3, 5, 1, 4, 2, 10];

    min_heap(&mut array);
    //       1
    //     /  \
    //    2    3
    //   / \  /
    //  4  5 10
    assert_eq!(array, [1, 2, 3, 4, 5, 10]);
  }
  #[test]
  fn inserts_into_heap_correctly() {
    let mut array = vec![2, 4, 3, 9];

    insert_min(&mut array, 1);
    //          1
    //        /  \
    //       2    3
    //      / \
    //     9  4
    assert_eq!(array, [1, 2, 3, 9, 4]);
  }
  #[test]
  fn extracts_min_value_from_heap_correctly() {
    let mut array = vec![1, 2, 3, 9, 4];

    let extracted_value = extract_min(&mut array);
    //          2
    //        /  \
    //       4    3
    //      /
    //     9
    assert_eq!(extracted_value.unwrap(), 1);
    assert_eq!(array, [2, 4, 3, 9]);
  }
}
