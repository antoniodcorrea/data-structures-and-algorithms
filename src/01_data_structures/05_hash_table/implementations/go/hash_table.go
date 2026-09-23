package hash_table

import (
	linkedList "data-structures-algorithms-problems/src/01_data_structures/02_linked_list/implementations/go"
)

var DEFAULT_HASH_TABLE_SIZE = 50

type HashTable[T comparable] struct {
	buckets []*HashTableLinkedList[T]
	size    int
}

func NewHashTable[T comparable](size int) HashTable[T] {
	if size == 0 {
		size = DEFAULT_HASH_TABLE_SIZE
	}

	buckets := make([]*HashTableLinkedList[T], size)

	for i := range buckets {
		buckets[i] = &HashTableLinkedList[T]{
			LinkedList: &linkedList.LinkedList[HashTableLinkedListItem[T]]{},
		}
	}

	return HashTable[T]{
		buckets: buckets,
		size:    size,
	}
}

func (hashTable HashTable[T]) hash(key string) int {
	var hash int

	for _, r := range key {
		hash += int(r)
	}

	result := hash % hashTable.size

	return result
}

func (hashTable HashTable[T]) Set(key string, value T) HashTable[T] {
	index := hashTable.hash(key)
	bucket := hashTable.buckets[index]

	if bucket == nil {
		hashTable.buckets[index] = &HashTableLinkedList[T]{
			LinkedList: &linkedList.LinkedList[HashTableLinkedListItem[T]]{},
		}

		bucket = hashTable.buckets[index]
	}

    matcher := func(v HashTableLinkedListItem[T]) bool { return v.Key == key }
    appendedToFoundKey := bucket.UpdateItemIf(matcher, value);

    if(!appendedToFoundKey) {
        bucket.Append(HashTableLinkedListItem[T]{Key: key, Value: value});
    }

	return hashTable
}

func (hashTable HashTable[T]) Get(key string) (T, bool) {
	var zero T
	index := hashTable.hash(key)
	bucket := hashTable.buckets[index]

	if bucket == nil {
		return zero, false
	}

	item, ok := bucket.GetItemIf(func(v HashTableLinkedListItem[T]) bool { return v.Key == key })

	if !ok {
		return zero, false
	}

	return item.Value, true
}

func (hashTable HashTable[T]) Remove(key string) HashTable[T] {
	index := hashTable.hash(key)
	bucket := hashTable.buckets[index]

	if bucket != nil {
		bucket.Remove(func(item HashTableLinkedListItem[T]) bool { return item.Key == key })
	}

	return hashTable
}

func (hashTable HashTable[T]) isEmpty() bool {
	for _, bucket := range hashTable.buckets {
		if bucket.LinkedList.Head != nil {
			return false
		}
	}

	return true
}
