pub fn heap(array: &mut Vec<i32>) {
  let heap_size = array.len();

  for i in (0..heap_size / 2).rev() {
    heapify(array, i, heap_size);
  }
}

pub fn heapify(heap: &mut Vec<i32>, i: usize, heap_size: usize) {
  let mut largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if left < heap_size && heap[left] > heap[largest] {
    largest = left;
  }

  if right < heap_size && heap[right] > heap[largest] {
    largest = right;
  }

  if largest != i {
    heap.swap(i, largest);
    heapify(heap, largest, heap_size);
  }
}

pub fn parent(index: usize) -> usize {
  (index - 1) / 2 // Implicitly rounded down
}

pub fn insert(heap: &mut Vec<i32>, value: i32) {
  heap.push(value);
  let mut index = heap.len() - 1;

  while index > 0 && heap[parent(index)] < heap[index] {
    heap.swap(parent(index), index);
    index = parent(index)
  }
}

pub fn extract(heap: &mut Vec<i32>) -> Option<i32> {
  if heap.len() == 0 {
    return None;
  } else {
    let max_val = heap[0];
    heap[0] = heap[heap.len() - 1];
    heap.pop();
    heapify(heap, 0, heap.len());

    Some(max_val)
  }
}
