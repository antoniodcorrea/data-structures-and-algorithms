package priorityQueue

import heap "data-structures-algorithms-problems/src/01_data_structures/06_tree/02_heap/implementations/go"

type MaxPriorityQueue struct {
	items []int
}

func (queue *MaxPriorityQueue) Size() int {
	return len(queue.items)
}

func (queue *MaxPriorityQueue) IsEmpty() bool {
	return len(queue.items) == 0
}

func (queue *MaxPriorityQueue) Front() (int, bool) {
	if queue.IsEmpty() {
		return 0, false
	}

	return queue.items[0], true
}

func (queue *MaxPriorityQueue) Enqueue(value int) {
	heap.InsertMax(&queue.items, value)
}

func (queue *MaxPriorityQueue) Dequeue() (int, bool) {
	value, err := heap.ExtractMax(&queue.items)

	return value, err == nil
}
