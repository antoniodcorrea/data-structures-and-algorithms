package heap

import "errors"

func Heap(array []int) {
	for i := len(array) / 2; i >= 0; i-- {
		Heapify(array, i, len(array))
	}
}

func Heapify(heap []int, i int, heapSize int) {
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

		Heapify(heap, largest, heapSize)
	}
}

func Parent(index int) int {
	return (index - 1) / 2
}

func Insert(heap *[]int, value int) {
	*heap = append(*heap, value) // Append the new value to the heap
	index := len(*heap) - 1      // Get the index of the last element

	// Bubble up the new value to restore heap property
	for index > 0 && (*heap)[Parent(index)] < (*heap)[index] {
		// Swap with parent if the current value is larger
		(*heap)[Parent(index)], (*heap)[index] = (*heap)[index], (*heap)[Parent(index)]
		index = Parent(index) // Move up the heap
	}
}

func Extract(heap *[]int) (int, error) {
	if len(*heap) == 0 {
		return 0, errors.New("Heap is empty")
	}
	maxVal := (*heap)[0]
	(*heap)[0] = (*heap)[len(*heap)-1]
	*heap = (*heap)[:len(*heap)-1]
	Heapify(*heap, 0, len(*heap))

	return maxVal, nil
}
