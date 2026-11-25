package priorityQueue

import (
	"reflect"
	"testing"
)

func createMinQueue(values []int) *MinPriorityQueue {
	queue := &MinPriorityQueue{}
	for _, value := range values {
		queue.Enqueue(value)
	}

	return queue
}

func dequeueAllMin(queue *MinPriorityQueue) []int {
	result := []int{}
	for !queue.IsEmpty() {
		value, _ := queue.Dequeue()
		result = append(result, value)
	}

	return result
}

func assertEqualMin(t *testing.T, left any, right any) {
	t.Helper()
	if !reflect.DeepEqual(left, right) {
		t.Errorf("\nleft = %v \nright = %v", left, right)
	}
}

func TestMinCreatesEmptyQueue(t *testing.T) {
	queue := MinPriorityQueue{}

	assertEqualMin(t, queue.IsEmpty(), true)
	assertEqualMin(t, queue.Size(), 0)
}

func TestMinCreatesIndependentQueues(t *testing.T) {
	first := createMinQueue([]int{1})
	second := MinPriorityQueue{}

	assertEqualMin(t, first.Size(), 1)
	assertEqualMin(t, second.Size(), 0)
}

func TestMinEnqueueIncreasesSize(t *testing.T) {
	queue := createMinQueue([]int{3, 1, 2})

	assertEqualMin(t, queue.IsEmpty(), false)
	assertEqualMin(t, queue.Size(), 3)
}

func TestMinEnqueueMovesNewMinimumToFront(t *testing.T) {
	queue := createMinQueue([]int{2, 4, 3, 9})
	queue.Enqueue(1)
	front, _ := queue.Front()

	assertEqualMin(t, front, 1)
}

func TestMinEnqueueKeepsFrontWhenNewValueIsGreater(t *testing.T) {
	queue := createMinQueue([]int{2})
	queue.Enqueue(5)
	front, _ := queue.Front()

	assertEqualMin(t, front, 2)
}

func TestMinFrontOnEmptyQueue(t *testing.T) {
	queue := MinPriorityQueue{}
	_, ok := queue.Front()

	assertEqualMin(t, ok, false)
}

func TestMinFrontReturnsMinimumWithoutRemovingIt(t *testing.T) {
	queue := createMinQueue([]int{5, 3, 4})
	front, ok := queue.Front()

	assertEqualMin(t, ok, true)
	assertEqualMin(t, front, 3)
	assertEqualMin(t, queue.Size(), 3)
}

func TestMinDequeueOnEmptyQueue(t *testing.T) {
	queue := MinPriorityQueue{}
	_, ok := queue.Dequeue()

	assertEqualMin(t, ok, false)
}

func TestMinDequeueRemovesOnlyValue(t *testing.T) {
	queue := createMinQueue([]int{7})
	value, ok := queue.Dequeue()

	assertEqualMin(t, ok, true)
	assertEqualMin(t, value, 7)
	assertEqualMin(t, queue.IsEmpty(), true)
}

func TestMinDequeueReturnsValuesInAscendingOrder(t *testing.T) {
	queue := createMinQueue([]int{8, 3, 6, 1, 9, 2, 7, 5, 4})

	assertEqualMin(t, dequeueAllMin(queue), []int{1, 2, 3, 4, 5, 6, 7, 8, 9})
}

func TestMinDequeueHandlesDuplicatedAndNegativeValues(t *testing.T) {
	queue := createMinQueue([]int{2, -1, 2, 0, -1})

	assertEqualMin(t, dequeueAllMin(queue), []int{-1, -1, 0, 2, 2})
}

func TestMinDequeueKeepsOrderWhenAlternatingWithEnqueue(t *testing.T) {
	queue := createMinQueue([]int{5, 3})
	value, _ := queue.Dequeue()

	assertEqualMin(t, value, 3)
	queue.Enqueue(1)
	queue.Enqueue(4)
	assertEqualMin(t, dequeueAllMin(queue), []int{1, 4, 5})
}
