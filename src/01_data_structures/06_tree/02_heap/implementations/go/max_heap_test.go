package heap

import (
	"reflect"
	"testing"
)

func TestMaxHeapifiesFirstNonLeafNode(t *testing.T) {
	//          3
	//        /  \
	//       5    1←
	//      / \  / swap
	//     4  2 10
	array := []int{3, 5, 1, 4, 2, 10}
	MaxHeapify(array, 2, len(array))

	expected := []int{3, 5, 10, 4, 2, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}

func TestMaxHeapifiesSecondNonLeafNode(t *testing.T) {
	//          3
	//        /  \
	//       5←  10
	//   ok / \  /
	//     4  2  1
	array := []int{3, 5, 10, 4, 2, 1}
	MaxHeapify(array, 1, len(array))

	expected := []int{3, 5, 10, 4, 2, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}
func TestMaxHeapifiesThirdNonLeafNode(t *testing.T) {
	//         10←
	//        /  \ swap
	//       5    3
	//      / \  /
	//     4  2 1
	array := []int{3, 5, 10, 4, 2, 1}
	MaxHeapify(array, 0, len(array))

	expected := []int{10, 5, 3, 4, 2, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}
func TestMaxBuildsFirstHeapCorrectly(t *testing.T) {
	array := []int{3, 5, 1, 4, 2, 10}
	MaxHeap(array)
	//      10
	//     /  \
	//    5    3
	//   / \  /
	//  4  2 1
	expected := []int{10, 5, 3, 4, 2, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}
func TestMaxBuildsSecondHeapCorrectly(t *testing.T) {
	array := []int{3, 5, 1, 4, 2}
	MaxHeap(array)
	//       5
	//     /  \
	//    4    1
	//   / \
	//  3  2
	expected := []int{5, 4, 1, 3, 2}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}
func TestMaxBuildsThirdHeapCorrectly(t *testing.T) {
	array := []int{0, 2, 4, 6, 8, 1, 3, 5, 7}
	MaxHeap(array)
	//          8
	//        /  \
	//       7    4
	//      / \  / \
	//     6  2 1   3
	//    / \
	//   5  0
	expected := []int{8, 7, 4, 6, 2, 1, 3, 5, 0}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}

func TestMaxInsertsIntoHeapCorrectly(t *testing.T) {
	array := []int{3, 2, 4, 1}
	MaxHeap(array)
	//          4
	//        /  \
	//       2    3
	//      /
	//     1
	expected := []int{4, 2, 3, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}

	InsertMax(&array, 5)
	// //          5
	// //        /  \
	// //       4    3
	// //      / \
	// //     1  2
	expectedWithInsert := []int{5, 4, 3, 1, 2}
	if !reflect.DeepEqual(array, expectedWithInsert) {
		t.Errorf("\nleft = %v \nright = %v", array, expectedWithInsert)
	}
}

func TestMaxExtractFromEmptyHeapCorrectly(t *testing.T) {
	heap := []int{}
	expectedExtractedValue := 0
	expectedHeap := []int{}
	extracted_value, err := ExtractMax(&heap)

	if err != nil {
		if !reflect.DeepEqual(extracted_value, expectedExtractedValue) {
			t.Errorf("\nleft = %v \nright = %v", extracted_value, expectedExtractedValue)
		}
		if !reflect.DeepEqual(heap, expectedHeap) {
			t.Errorf("\nleft = %v \nright = %v", heap, expectedHeap)
		}
	}
}

func TestMaxExtractFromHeapCorrectly(t *testing.T) {
	array := []int{1, 2, 3, 4, 5}
	MaxHeap(array)
	//          5
	//        /  \
	//       4    3
	//      / \
	//     1  2
	expected := []int{5, 4, 3, 1, 2}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}

	extracted_value, err := ExtractMax(&array)
	if err != nil {
		t.Errorf("No value to extract: %v", err)
	}
	//          4
	//        /  \
	//       2    3
	//      /
	//     1
	expectedExtractedValueArray := []int{4, 2, 3, 1}
	expectedExtractedValue := 5

	if !reflect.DeepEqual(extracted_value, expectedExtractedValue) {
		t.Errorf("\nleft = %v \nright = %v", extracted_value, expectedExtractedValue)
	}
	if !reflect.DeepEqual(array, expectedExtractedValueArray) {
		t.Errorf("\nleft = %v \nright = %v", array, expectedExtractedValueArray)
	}
}
