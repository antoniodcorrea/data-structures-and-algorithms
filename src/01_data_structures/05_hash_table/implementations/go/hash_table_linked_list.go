/*
  LINKED LIST FOR HASH TABLES
  In hash tables we will store items in our linked lists as key, value tuples.
  To find an item by the key we need a method that receives a matcher function, and will return the item that matches it.
  Thus, we extend the Linked list to add this behavior.
*/

package hash_table

import linkedList "data-structures-algorithms-problems/src/01_data_structures/02_linked_list/implementations/go"

type HashTableLinkedListItem[T comparable] struct {
	Key   string
	Value T
}

type HashTableLinkedList[T comparable] struct {
	LinkedList *linkedList.LinkedList[HashTableLinkedListItem[T]]
}

func (this HashTableLinkedList[T]) Prepend(hashTableLinkedListItem HashTableLinkedListItem[T]) HashTableLinkedList[T] {
	this.LinkedList.Prepend(hashTableLinkedListItem)

	return this
}

func (this HashTableLinkedList[T]) Append(hashTableLinkedListItem HashTableLinkedListItem[T]) HashTableLinkedList[T] {
	this.LinkedList.Append(hashTableLinkedListItem)

	return this
}

func (this HashTableLinkedList[T]) Remove(matcher func(HashTableLinkedListItem[T]) bool) HashTableLinkedList[T] {
	this.LinkedList.Remove(matcher)

	return this
}

func (this HashTableLinkedList[T]) Find(matcher func(HashTableLinkedListItem[T]) bool) bool {
	return this.LinkedList.Find(matcher)
}

func (this HashTableLinkedList[T]) GetItemIf(matcher func(HashTableLinkedListItem[T]) bool) (*HashTableLinkedListItem[T], bool) {
	current := this.LinkedList.Head

	for current != nil {
		if matcher(current.Value) {
			return &current.Value, true
		}

		current = current.Next
	}

	return nil, false
}

func (this HashTableLinkedList[T]) UpdateItemIf(matcher func(HashTableLinkedListItem[T]) bool, value T) bool {
	item, ok := this.GetItemIf(matcher)
	if !ok {
		return false
	}

	item.Value = value

	return true
}
