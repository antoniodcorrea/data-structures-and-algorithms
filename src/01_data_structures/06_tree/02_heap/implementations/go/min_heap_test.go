package heap

import (
	"reflect"
	"testing"
)

func TestMinHeapifiesMovingSmallestChildUp(t *testing.T) {
	//          5←
	//        /  \
	//       1    3
	array := []int{5, 1, 3}
	MinHeapify(array, 0, len(array))
	expected := []int{1, 5, 3}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}

func TestMinBuildsHeapCorrectly(t *testing.T) {
	array := []int{3, 5, 1, 4, 2, 10}
	MinHeap(array)
	//       1
	//     /  \
	//    2    3
	//   / \  /
	//  4  5 10
	expected := []int{1, 2, 3, 4, 5, 10}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}

func TestMinInsertsIntoHeapCorrectly(t *testing.T) {
	array := []int{2, 4, 3, 9}
	InsertMin(&array, 1)
	//          1
	//        /  \
	//       2    3
	//      / \
	//     9  4
	expected := []int{1, 2, 3, 9, 4}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}

func TestMinExtractFromEmptyHeapCorrectly(t *testing.T) {
	heap := []int{}
	_, err := ExtractMin(&heap)

	if err == nil {
		t.Errorf("expected error extracting from empty heap")
	}
}

func TestMinExtractFromHeapCorrectly(t *testing.T) {
	array := []int{1, 2, 3, 9, 4}
	extractedValue, err := ExtractMin(&array)
	//          2
	//        /  \
	//       4    3
	//      /
	//     9
	expectedArray := []int{2, 4, 3, 9}
	expectedValue := 1

	if err != nil {
		t.Errorf("unexpected error: %v", err)
	}
	if !reflect.DeepEqual(extractedValue, expectedValue) {
		t.Errorf("\nleft = %v \nright = %v", extractedValue, expectedValue)
	}
	if !reflect.DeepEqual(array, expectedArray) {
		t.Errorf("\nleft = %v \nright = %v", array, expectedArray)
	}
}
