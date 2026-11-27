#[cfg(test)]
mod tests {
  use crate::heap::heap::{extract, heap, heapify, insert};

  use super::super::heap::parent;

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
  fn heapifies_first_non_leaf_node() {
    //          3
    //        /  \
    //       5    1←
    //      / \  / swap
    //     4  2 10
    let mut array = vec![3, 5, 1, 4, 2, 10];
    let array_length = array.len();
    heapify(&mut array, 2, array_length);

    assert_eq!(array, [3, 5, 10, 4, 2, 1]);
  }
  #[test]
  fn heapifies_second_non_leaf_node() {
    //          3
    //        /  \
    //       5←  10
    //   ok / \  /
    //     4  2  1
    let mut array = vec![3, 5, 10, 4, 2, 1];
    let array_length = array.len();
    heapify(&mut array, 1, array_length);

    assert_eq!(array, [3, 5, 10, 4, 2, 1]);
  }
  #[test]
  fn heapifies_third_non_leaf_node() {
    //         10←
    //        /  \ swap
    //       5    3
    //      / \  /
    //     4  2 1
    let mut array = vec![3, 5, 10, 4, 2, 1];
    let array_length = array.len();
    heapify(&mut array, 0, array_length);

    assert_eq!(array, [10, 5, 3, 4, 2, 1]);
  }
  #[test]
  fn builds_first_heap_correctly() {
    let mut array = vec![3, 5, 1, 4, 2, 10];

    heap(&mut array);
    //      10
    //     /  \
    //    5    3
    //   / \  /
    //  4  2 1
    assert_eq!(array, [10, 5, 3, 4, 2, 1]);
  }
  #[test]
  fn builds_second_heap_correctly() {
    let mut array = vec![3, 5, 1, 4, 2];

    heap(&mut array);
    //       5
    //     /  \
    //    4    1
    //   / \
    //  3  2
    assert_eq!(array, [5, 4, 1, 3, 2]);
  }
  #[test]
  fn builds_third_heap_correctly() {
    let mut array = vec![0, 2, 4, 6, 8, 1, 3, 5, 7];

    heap(&mut array);
    //          8
    //        /  \
    //       7    4
    //      / \  / \
    //     6  2 1   3
    //    / \
    //   5  0
    assert_eq!(array, [8, 7, 4, 6, 2, 1, 3, 5, 0]);
  }

  #[test]
  fn inserts_into_heap_correctly() {
    let mut array = vec![3, 2, 4, 1];

    heap(&mut array);
    //          4
    //        /  \
    //       2    3
    //      /
    //     1
    assert_eq!(array, [4, 2, 3, 1]);

    insert(&mut array, 5);
    //          5
    //        /  \
    //       4    3
    //      / \
    //     1  2
    assert_eq!(array, [5, 4, 3, 1, 2]);
  }

  #[test]
  fn extracts_max_value_from_heap_correctly() {
    let mut array = vec![1, 2, 3, 4, 5];

    heap(&mut array);
    //          5
    //        /  \
    //       4    3
    //      / \
    //     1  2
    assert_eq!(array, [5, 4, 3, 1, 2]);

    let extracted_value = extract(&mut array);
    //          4
    //        /  \
    //       2    3
    //      /
    //     1
    assert_eq!(extracted_value.unwrap(), 5);
    assert_eq!(array, [4, 2, 3, 1]);
  }
}
