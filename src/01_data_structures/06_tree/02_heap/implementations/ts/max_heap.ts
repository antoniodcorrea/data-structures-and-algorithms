export const parent = (index: number) => {
  return Math.floor((index - 1) / 2);
};

export const maxHeap = (array: Array<number>) => {
  // Iterate from last non-leaf node to root
  const maxNonLeafNode = Math.floor(array.length / 2);

  for (let i = maxNonLeafNode; i >= 0; i--) {
    maxHeapify(array, i, array.length);
  }
};

export const maxHeapify = (array: Array<number>, i: number, heapSize: number) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < heapSize && array[left] > array[largest]) largest = left;
  if (right < heapSize && array[right] > array[largest]) largest = right;

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    maxHeapify(array, largest, heapSize);
  }
};

export const insertMax = (heap: Array<number>, value: number) => {
  heap.push(value);
  let index = heap.length - 1;

  while (index > 0 && heap[index] > heap[parent(index)]) {
    [heap[parent(index)], heap[index]] = [heap[index], heap[parent(index)]];
    index = parent(index);
  }
};

export const extractMax = (heap: Array<number>): number | null => {
  if (!heap.length) {
    return null;
  }

  let maxVal = heap[0];
  heap[0] = heap[heap.length - 1];
  heap.pop();

  maxHeapify(heap, 0, heap.length);

  return maxVal;
};
