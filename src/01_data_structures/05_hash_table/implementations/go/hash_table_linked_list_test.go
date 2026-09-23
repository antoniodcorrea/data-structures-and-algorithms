package hash_table

import (
	linkedList "data-structures-algorithms-problems/src/01_data_structures/02_linked_list/implementations/go"
	"reflect"
	"testing"
)

func TestGetItemIfEmptyList(t *testing.T) {
	var hashTableLinkedList = HashTableLinkedList[int]{
		LinkedList: &linkedList.LinkedList[HashTableLinkedListItem[int]]{},
	}
	result, ok := hashTableLinkedList.GetItemIf(func(v HashTableLinkedListItem[int]) bool { return v.Value == 1 })

	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}

	if result != nil {
		t.Errorf("%v != %v", result, nil)
	}
}

func TestGetItemIfFromListWithOneItem(t *testing.T) {
	var hashTableLinkedList = HashTableLinkedList[int]{
		LinkedList: &linkedList.LinkedList[HashTableLinkedListItem[int]]{},
	}
	hashTableLinkedList.Append(HashTableLinkedListItem[int]{Key: "a", Value: 1})

	expectedResult := 1
	result, ok := hashTableLinkedList.GetItemIf(func(v HashTableLinkedListItem[int]) bool { return v.Value == 1 })

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result.Value, expectedResult) {
		t.Errorf("%v != %v", result.Value, expectedResult)
	}
}

func TestGetItemIfFromListWithSeveralItems(t *testing.T) {
	var hashTableLinkedList = HashTableLinkedList[int]{
		LinkedList: &linkedList.LinkedList[HashTableLinkedListItem[int]]{},
	}

	hashTableLinkedList.Append(HashTableLinkedListItem[int]{Key: "a", Value: 1}).Append(HashTableLinkedListItem[int]{Key: "b", Value: 2})

	result1, ok := hashTableLinkedList.GetItemIf(func(v HashTableLinkedListItem[int]) bool { return v.Value == 1 })

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result1.Value, 1) {
		t.Errorf("%v != %v", result1.Value, 1)
	}

	result2, ok := hashTableLinkedList.GetItemIf(func(v HashTableLinkedListItem[int]) bool { return v.Value == 2 })

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result2.Value, 2) {
		t.Errorf("%v != %v", result2.Value, 2)
	}
}

func TestGetItemIfFromListWithComplexItems(t *testing.T) {
	type Item struct {
		name string
		age  int
	}

	var hashTableLinkedList = HashTableLinkedList[Item]{
		LinkedList: &linkedList.LinkedList[HashTableLinkedListItem[Item]]{},
	}

	hashTableLinkedList.Append(HashTableLinkedListItem[Item]{Key: "First", Value: Item{name: "Homero", age: 10}}).Append(HashTableLinkedListItem[Item]{Key: "Second", Value: Item{name: "Ulises", age: 20}})

	firstItem, ok := hashTableLinkedList.GetItemIf(func(v HashTableLinkedListItem[Item]) bool { return v.Value.name == "Homero" })

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(firstItem.Value.age, 10) {
		t.Errorf("%v != %v", firstItem.Value.age, 10)
	}

	secondItem, ok := hashTableLinkedList.GetItemIf(func(v HashTableLinkedListItem[Item]) bool { return v.Value.name == "Ulises" })

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(secondItem.Value.age, 20) {
		t.Errorf("%v != %v", secondItem.Value.age, 20)
	}

	thirdItem, ok := hashTableLinkedList.GetItemIf(func(v HashTableLinkedListItem[Item]) bool { return v.Value.name == "Argos" })

	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}

	if thirdItem != nil {
		t.Errorf("%v != %v", thirdItem, nil)
	}
}
