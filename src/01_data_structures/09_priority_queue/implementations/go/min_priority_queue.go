package priorityQueue

import heap "data-structures-algorithms-problems/src/01_data_structures/06_tree/02_heap/implementations/go"

type MinPriorityQueue struct {
	items []int
}

func (queue *MinPriorityQueue) Size() int {
	return len(queue.items)
}

func (queue *MinPriorityQueue) IsEmpty() bool {
	return len(queue.items) == 0
}

func (queue *MinPriorityQueue) Front() (int, bool) {
	if queue.IsEmpty() {
		return 0, false
	}

	return queue.items[0], true
}

func (queue *MinPriorityQueue) Enqueue(value int) {
	heap.InsertMin(&queue.items, value)
}

func (queue *MinPriorityQueue) Dequeue() (int, bool) {
	value, err := heap.ExtractMin(&queue.items)

	return value, err == nil
}
