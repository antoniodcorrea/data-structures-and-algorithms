package heapSort

import heap "data-structures-algorithms-problems/src/01_data_structures/06_tree/02_heap/implementations/go"

func HeapSort(array []int) {
	heap.MaxHeap(array)

	for i := len(array) - 1; i >= 1; i-- {
		array[0], array[i] = array[i], array[0]

		heap.MaxHeapify(array, 0, i)
	}
}
