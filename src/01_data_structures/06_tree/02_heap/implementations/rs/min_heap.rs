pub fn parent(index: usize) -> usize {
  (index - 1) / 2 // Implicitly rounded down
}

pub fn min_heap(array: &mut Vec<i32>) {
  let heap_size = array.len();

  for i in (0..heap_size / 2).rev() {
    min_heapify(array, i, heap_size);
  }
}

pub fn min_heapify(heap: &mut Vec<i32>, i: usize, heap_size: usize) {
  let mut smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if left < heap_size && heap[left] < heap[smallest] {
    smallest = left;
  }

  if right < heap_size && heap[right] < heap[smallest] {
    smallest = right;
  }

  if smallest != i {
    heap.swap(i, smallest);
    min_heapify(heap, smallest, heap_size);
  }
}

pub fn insert_min(heap: &mut Vec<i32>, value: i32) {
  heap.push(value);
  let mut index = heap.len() - 1;

  while index > 0 && heap[index] < heap[parent(index)] {
    heap.swap(parent(index), index);
    index = parent(index)
  }
}

pub fn extract_min(heap: &mut Vec<i32>) -> Option<i32> {
  if heap.len() == 0 {
    return None;
  } else {
    let min_val = heap[0];
    heap[0] = heap[heap.len() - 1];
    heap.pop();
    min_heapify(heap, 0, heap.len());

    Some(min_val)
  }
}
