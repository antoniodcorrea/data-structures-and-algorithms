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
	parentIndex := parent(1)
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
	parentIndex := parent(2)
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
	parentIndex := parent(3)
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
	parentIndex := parent(4)
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
	parentIndex := parent(5)
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
	parentIndex := parent(6)
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
	parentIndex := parent(7)
	expected := 3

	if !reflect.DeepEqual(parentIndex, expected) {
		t.Errorf("left = %v; right %v", parentIndex, expected)
	}
}
