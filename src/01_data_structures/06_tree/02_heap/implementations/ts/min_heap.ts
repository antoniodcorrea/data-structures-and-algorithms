export const parent = (index: number) => {
  return Math.floor((index - 1) / 2);
};

export const minHeap = (array: Array<number>) => {
  // Iterate from last non-leaf node to root
  const maxNonLeafNode = Math.floor(array.length / 2);

  for (let i = maxNonLeafNode; i >= 0; i--) {
    minHeapify(array, i, array.length);
  }
};

export const minHeapify = (array: Array<number>, i: number, heapSize: number) => {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < heapSize && array[left] < array[smallest]) smallest = left;
  if (right < heapSize && array[right] < array[smallest]) smallest = right;

  if (smallest !== i) {
    [array[i], array[smallest]] = [array[smallest], array[i]];
    minHeapify(array, smallest, heapSize);
  }
};

export const insertMin = (heap: Array<number>, value: number) => {
  heap.push(value);
  let index = heap.length - 1;

  while (index > 0 && heap[index] < heap[parent(index)]) {
    [heap[parent(index)], heap[index]] = [heap[index], heap[parent(index)]];
    index = parent(index);
  }
};

export const extractMin = (heap: Array<number>): number | null => {
  if (!heap.length) {
    return null;
  }

  let minVal = heap[0];
  heap[0] = heap[heap.length - 1];
  heap.pop();

  minHeapify(heap, 0, heap.length);

  return minVal;
};
