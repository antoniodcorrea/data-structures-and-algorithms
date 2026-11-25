package heap

import "errors"

func MaxHeap(array []int) {
	for i := len(array) / 2; i >= 0; i-- {
		MaxHeapify(array, i, len(array))
	}
}

func MaxHeapify(heap []int, i int, heapSize int) {
	largest := i
	left := 2*i + 1
	right := 2*i + 2

	if left < heapSize && heap[left] > heap[largest] {
		largest = left
	}
	if right < heapSize && heap[right] > heap[largest] {
		largest = right
	}
	if largest != i {
		heap[i], heap[largest] = heap[largest], heap[i]

		MaxHeapify(heap, largest, heapSize)
	}
}

func InsertMax(heap *[]int, value int) {
	*heap = append(*heap, value) // Append the new value to the heap
	index := len(*heap) - 1      // Get the index of the last element

	// Bubble up the new value to restore heap property
	for index > 0 && (*heap)[parent(index)] < (*heap)[index] {
		// Swap with parent if the current value is larger
		(*heap)[parent(index)], (*heap)[index] = (*heap)[index], (*heap)[parent(index)]
		index = parent(index) // Move up the heap
	}
}

func ExtractMax(heap *[]int) (int, error) {
	if len(*heap) == 0 {
		return 0, errors.New("Heap is empty")
	}
	maxVal := (*heap)[0]
	(*heap)[0] = (*heap)[len(*heap)-1]
	*heap = (*heap)[:len(*heap)-1]
	MaxHeapify(*heap, 0, len(*heap))

	return maxVal, nil
}
