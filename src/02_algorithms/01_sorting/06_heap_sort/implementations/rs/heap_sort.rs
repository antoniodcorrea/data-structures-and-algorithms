use crate::heap::max_heap::{max_heap, max_heapify};

pub fn heap_sort(array: &mut Vec<i32>) {
  max_heap(array);

  for i in (1..array.len()).rev() {
    array.swap(0, i);

    max_heapify(array, 0, i);
  }
}
