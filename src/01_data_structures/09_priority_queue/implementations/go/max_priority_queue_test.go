package priorityQueue

import (
	"reflect"
	"testing"
)

func createMaxQueue(values []int) *MaxPriorityQueue {
	queue := &MaxPriorityQueue{}
	for _, value := range values {
		queue.Enqueue(value)
	}

	return queue
}

func dequeueAllMax(queue *MaxPriorityQueue) []int {
	result := []int{}
	for !queue.IsEmpty() {
		value, _ := queue.Dequeue()
		result = append(result, value)
	}

	return result
}

func assertEqualMax(t *testing.T, left any, right any) {
	t.Helper()
	if !reflect.DeepEqual(left, right) {
		t.Errorf("\nleft = %v \nright = %v", left, right)
	}
}

func TestMaxCreatesEmptyQueue(t *testing.T) {
	queue := MaxPriorityQueue{}

	assertEqualMax(t, queue.IsEmpty(), true)
	assertEqualMax(t, queue.Size(), 0)
}

func TestMaxCreatesIndependentQueues(t *testing.T) {
	first := createMaxQueue([]int{1})
	second := MaxPriorityQueue{}

	assertEqualMax(t, first.Size(), 1)
	assertEqualMax(t, second.Size(), 0)
}

func TestMaxEnqueueIncreasesSize(t *testing.T) {
	queue := createMaxQueue([]int{3, 1, 2})

	assertEqualMax(t, queue.IsEmpty(), false)
	assertEqualMax(t, queue.Size(), 3)
}

func TestMaxEnqueueMovesNewMaximumToFront(t *testing.T) {
	queue := createMaxQueue([]int{9, 4, 3, 2})
	queue.Enqueue(10)
	front, _ := queue.Front()

	assertEqualMax(t, front, 10)
}

func TestMaxEnqueueKeepsFrontWhenNewValueIsSmaller(t *testing.T) {
	queue := createMaxQueue([]int{5})
	queue.Enqueue(2)
	front, _ := queue.Front()

	assertEqualMax(t, front, 5)
}

func TestMaxFrontOnEmptyQueue(t *testing.T) {
	queue := MaxPriorityQueue{}
	_, ok := queue.Front()

	assertEqualMax(t, ok, false)
}

func TestMaxFrontReturnsMaximumWithoutRemovingIt(t *testing.T) {
	queue := createMaxQueue([]int{3, 5, 4})
	front, ok := queue.Front()

	assertEqualMax(t, ok, true)
	assertEqualMax(t, front, 5)
	assertEqualMax(t, queue.Size(), 3)
}

func TestMaxDequeueOnEmptyQueue(t *testing.T) {
	queue := MaxPriorityQueue{}
	_, ok := queue.Dequeue()

	assertEqualMax(t, ok, false)
}

func TestMaxDequeueRemovesOnlyValue(t *testing.T) {
	queue := createMaxQueue([]int{7})
	value, ok := queue.Dequeue()

	assertEqualMax(t, ok, true)
	assertEqualMax(t, value, 7)
	assertEqualMax(t, queue.IsEmpty(), true)
}

func TestMaxDequeueReturnsValuesInDescendingOrder(t *testing.T) {
	queue := createMaxQueue([]int{8, 3, 6, 1, 9, 2, 7, 5, 4})

	assertEqualMax(t, dequeueAllMax(queue), []int{9, 8, 7, 6, 5, 4, 3, 2, 1})
}

func TestMaxDequeueHandlesDuplicatedAndNegativeValues(t *testing.T) {
	queue := createMaxQueue([]int{2, -1, 2, 0, -1})

	assertEqualMax(t, dequeueAllMax(queue), []int{2, 2, 0, -1, -1})
}

func TestMaxDequeueKeepsOrderWhenAlternatingWithEnqueue(t *testing.T) {
	queue := createMaxQueue([]int{1, 3})
	value, _ := queue.Dequeue()

	assertEqualMax(t, value, 3)
	queue.Enqueue(5)
	queue.Enqueue(2)
	assertEqualMax(t, dequeueAllMax(queue), []int{5, 2, 1})
}
