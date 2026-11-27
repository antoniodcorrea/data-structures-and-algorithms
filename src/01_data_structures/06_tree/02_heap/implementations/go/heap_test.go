package heap

import (
	"reflect"
	"testing"
)

func TestComputesParentOfSecondElement(t *testing.T) {
	//          8
	//        /  \
	//       7←   4
	//      / \  / \
	//     6  2 1   3
	//    / \
	//   5   0
	parentIndex := Parent(1)
	expected := 0

	if !reflect.DeepEqual(parentIndex, expected) {
		t.Errorf("left = %v; right %v", parentIndex, expected)
	}
}
func TestComputesParentOfThirdElement(t *testing.T) {
	//          8
	//        /  \
	//       7    4←
	//      / \  / \
	//     6  2 1   3
	//    / \
	//   5   0
	parentIndex := Parent(2)
	expected := 0

	if !reflect.DeepEqual(parentIndex, expected) {
		t.Errorf("left = %v; right %v", parentIndex, expected)
	}
}

func TestComputesParentOfFourthElement(t *testing.T) {
	//          8
	//        /  \
	//       7    4
	//      / \  / \
	//     6← 2 1   3
	//    / \
	//   5   0
	parentIndex := Parent(3)
	expected := 1

	if !reflect.DeepEqual(parentIndex, expected) {
		t.Errorf("left = %v; right %v", parentIndex, expected)
	}
}
func TestComputesParentOfFifthElement(t *testing.T) {
	//          8
	//        /  \
	//       7    4
	//      / \  / \
	//     6  2←1   3
	//    / \
	//   5   0
	parentIndex := Parent(4)
	expected := 1

	if !reflect.DeepEqual(parentIndex, expected) {
		t.Errorf("left = %v; right %v", parentIndex, expected)
	}
}
func TestComputesParentOfSixthElement(t *testing.T) {
	//          8
	//        /  \
	//       7    4
	//      / \  / \
	//     6  2 1←  3
	//    / \
	//   5   0
	parentIndex := Parent(5)
	expected := 2

	if !reflect.DeepEqual(parentIndex, expected) {
		t.Errorf("left = %v; right %v", parentIndex, expected)
	}
}
func TestComputesParentOfSeventhElement(t *testing.T) {
	//          8
	//        /  \
	//       7    4
	//      / \  / \
	//     6  2 1   3←
	//    / \
	//   5   0
	parentIndex := Parent(6)
	expected := 2

	if !reflect.DeepEqual(parentIndex, expected) {
		t.Errorf("left = %v; right %v", parentIndex, expected)
	}
}

func TestComputesParentOfEigthElement(t *testing.T) {
	//          8
	//        /  \
	//       7    4
	//      / \  / \
	//     6  2 1   3
	//    / \
	//   5←  0
	parentIndex := Parent(7)
	expected := 3

	if !reflect.DeepEqual(parentIndex, expected) {
		t.Errorf("left = %v; right %v", parentIndex, expected)
	}
}

func TestHeapifiesFirstNonLeafNode(t *testing.T) {
	//          3
	//        /  \
	//       5    1←
	//      / \  / swap
	//     4  2 10
	array := []int{3, 5, 1, 4, 2, 10}
	Heapify(array, 2, len(array))

	expected := []int{3, 5, 10, 4, 2, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}

func TestHeapifiesSecondNonLeafNode(t *testing.T) {
	//          3
	//        /  \
	//       5←  10
	//   ok / \  /
	//     4  2  1
	array := []int{3, 5, 10, 4, 2, 1}
	Heapify(array, 1, len(array))

	expected := []int{3, 5, 10, 4, 2, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}
func TestHeapifiesThirdNonLeafNode(t *testing.T) {
	//         10←
	//        /  \ swap
	//       5    3
	//      / \  /
	//     4  2 1
	array := []int{3, 5, 10, 4, 2, 1}
	Heapify(array, 0, len(array))

	expected := []int{10, 5, 3, 4, 2, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}
}
func TestBuildsFirstHeapCorrectly(t *testing.T) {
	array := []int{3, 5, 1, 4, 2, 10}
	Heap(array)
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
func TestBuildsSecondHeapCorrectly(t *testing.T) {
	array := []int{3, 5, 1, 4, 2}
	Heap(array)
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
func TestBuildsThirdHeapCorrectly(t *testing.T) {
	array := []int{0, 2, 4, 6, 8, 1, 3, 5, 7}
	Heap(array)
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

func TestInsertsIntoHeapCorrectly(t *testing.T) {
	array := []int{3, 2, 4, 1}
	Heap(array)
	//          4
	//        /  \
	//       2    3
	//      /
	//     1
	expected := []int{4, 2, 3, 1}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}

	Insert(&array, 5)
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

func TestExtractFromEmptyHeapCorrectly(t *testing.T) {
	heap := []int{}
	expectedExtractedValue := 0
	expectedHeap := []int{}
	extracted_value, err := Extract(&heap)

	if err != nil {
		if !reflect.DeepEqual(extracted_value, expectedExtractedValue) {
			t.Errorf("\nleft = %v \nright = %v", extracted_value, expectedExtractedValue)
		}
		if !reflect.DeepEqual(heap, expectedHeap) {
			t.Errorf("\nleft = %v \nright = %v", heap, expectedHeap)
		}
	}
}

func TestExtractFromHeapCorrectly(t *testing.T) {
	array := []int{1, 2, 3, 4, 5}
	Heap(array)
	//          5
	//        /  \
	//       4    3
	//      / \
	//     1  2
	expected := []int{5, 4, 3, 1, 2}

	if !reflect.DeepEqual(array, expected) {
		t.Errorf("\nleft = %v \nright = %v", array, expected)
	}

	extracted_value, err := Extract(&array)
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
