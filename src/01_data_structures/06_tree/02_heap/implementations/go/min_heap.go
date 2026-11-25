package heap

import "errors"

func MinHeap(array []int) {
	for i := len(array) / 2; i >= 0; i-- {
		MinHeapify(array, i, len(array))
	}
}

func MinHeapify(heap []int, i int, heapSize int) {
	smallest := i
	left := 2*i + 1
	right := 2*i + 2

	if left < heapSize && heap[left] < heap[smallest] {
		smallest = left
	}
	if right < heapSize && heap[right] < heap[smallest] {
		smallest = right
	}
	if smallest != i {
		heap[i], heap[smallest] = heap[smallest], heap[i]

		MinHeapify(heap, smallest, heapSize)
	}
}

func InsertMin(heap *[]int, value int) {
	*heap = append(*heap, value) // Append the new value to the heap
	index := len(*heap) - 1      // Get the index of the last element

	// Bubble up the new value to restore heap property
	for index > 0 && (*heap)[index] < (*heap)[parent(index)] {
		// Swap with parent if the current value is smaller
		(*heap)[parent(index)], (*heap)[index] = (*heap)[index], (*heap)[parent(index)]
		index = parent(index) // Move up the heap
	}
}

func ExtractMin(heap *[]int) (int, error) {
	if len(*heap) == 0 {
		return 0, errors.New("Heap is empty")
	}
	minVal := (*heap)[0]
	(*heap)[0] = (*heap)[len(*heap)-1]
	*heap = (*heap)[:len(*heap)-1]
	MinHeapify(*heap, 0, len(*heap))

	return minVal, nil
}
