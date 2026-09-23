package hash_table

import (
	"reflect"
	"testing"
)

func TestCreatesEmptyStack(t *testing.T) {
	hashTable := NewHashTable[int](50).Set("a", 1)

	hashTable.Set("a", 1)
}

func TestSetItemToHashTable(t *testing.T) {
	hashTable := NewHashTable[int](50).Set("a", 1)
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result, 1) {
		t.Errorf("%v != %v", result, 1)
	}
}

func TestSetItemWithMultibyteKeyToHashTable(t *testing.T) {
	hashTable := NewHashTable[int](50).Set("ñ", 1)
	result, ok := hashTable.Get("ñ")

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result, 1) {
		t.Errorf("%v != %v", result, 1)
	}
}

func TestGetItemFromEmptyHashTable(t *testing.T) {
	hashTable := NewHashTable[int](50)
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}

	if !reflect.DeepEqual(result, 0) {
		t.Errorf("%v != %v", result, 0)
	}
}

func TestGetItemFromHashTable(t *testing.T) {
	hashTable := NewHashTable[int](50).Set("a", 1)
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result, 1) {
		t.Errorf("%v != %v", result, 1)
	}
}

func TestGetItemFromHashTableWithSingleBucket(t *testing.T) {
	hashTable := NewHashTable[int](1).Set("a", 1)
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result, 1) {
		t.Errorf("%v != %v", result, 1)
	}
}

func TestGetItemsFromHashTableWithCollisions(t *testing.T) {
	hashTable := NewHashTable[int](1).Set("a", 1).Set("b", 2)
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result, 1) {
		t.Errorf("%v != %v", result, 1)
	}
}

func TestSetExistingKeyUpdatesValue(t *testing.T) {
	hashTable := NewHashTable[int](50).Set("a", 1).Set("a", 2)
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result, 2) {
		t.Errorf("%v != %v", result, 2)
	}
}

func TestRemovesItemSetTwiceFromHashTable(t *testing.T) {
	hashTable := NewHashTable[int](50).Set("a", 1).Set("a", 2)
	hashTable.Remove("a")
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}

	if !reflect.DeepEqual(result, 0) {
		t.Errorf("%v != %v", result, 0)
	}
}

func TestTriesRemoveFromEmptyHashTable(t *testing.T) {
	hashTable := NewHashTable[int](1)
	hashTable.Remove("a")
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}

	if !reflect.DeepEqual(result, 0) {
		t.Errorf("%v != %v", result, 0)
	}
}

func TestRemovesItemFromHashTable(t *testing.T) {
	hashTable := NewHashTable[int](1)
	hashTable.Set("a", 1)
	firstItem, firstResult := hashTable.Get("a")

	if !reflect.DeepEqual(firstResult, true) {
		t.Errorf("%v != %v", firstResult, true)
	}

	if !reflect.DeepEqual(firstItem, 1) {
		t.Errorf("%v != %v", firstItem, 1)
	}

	hashTable.Remove("a")
	secondItem, secondResult := hashTable.Get("a")

	if !reflect.DeepEqual(secondResult, false) {
		t.Errorf("%v != %v", secondResult, false)
	}

	if !reflect.DeepEqual(secondItem, 0) {
		t.Errorf("%v != %v", secondItem, 1)
	}
}

func TestRemovesItemsFromHashTable(t *testing.T) {
	hashTable := NewHashTable[int](1)
	hashTable.Set("a", 1).Set("b", 2).Set("c", 3)

	firstItem, firstResult := hashTable.Get("a")

	if !reflect.DeepEqual(firstResult, true) {
		t.Errorf("%v != %v", firstResult, true)
	}

	if !reflect.DeepEqual(firstItem, 1) {
		t.Errorf("%v != %v", firstItem, 1)
	}

	secondItem, secondResult := hashTable.Get("b")

	if !reflect.DeepEqual(secondResult, true) {
		t.Errorf("%v != %v", secondResult, true)
	}

	if !reflect.DeepEqual(secondItem, 2) {
		t.Errorf("%v != %v", secondItem, 2)
	}

	thirdItem, thirdResult := hashTable.Get("c")

	if !reflect.DeepEqual(thirdResult, true) {
		t.Errorf("%v != %v", thirdResult, true)
	}

	if !reflect.DeepEqual(thirdItem, 3) {
		t.Errorf("%v != %v", thirdItem, 3)
	}

	hashTable.Remove("a").Remove("b").Remove("c")

	firstItemRemoved, firstResultRemoved := hashTable.Get("a")

	if !reflect.DeepEqual(firstResultRemoved, false) {
		t.Errorf("%v != %v", firstResultRemoved, false)
	}

	if !reflect.DeepEqual(firstItemRemoved, 0) {
		t.Errorf("%v != %v", firstItemRemoved, 0)
	}

	secondItemRemoved, secondResultRemoved := hashTable.Get("b")

	if !reflect.DeepEqual(secondResultRemoved, false) {
		t.Errorf("%v != %v", secondResultRemoved, false)
	}

	if !reflect.DeepEqual(secondItemRemoved, 0) {
		t.Errorf("%v != %v", secondItemRemoved, 0)
	}

	thirdItemRemoved, thirdResultRemoved := hashTable.Get("c")

	if !reflect.DeepEqual(thirdResultRemoved, false) {
		t.Errorf("%v != %v", thirdResultRemoved, false)
	}

	if !reflect.DeepEqual(thirdItemRemoved, 0) {
		t.Errorf("%v != %v", thirdItemRemoved, 0)
	}
}

func TestIsEmptyHashTable(t *testing.T) {
	hashTable := NewHashTable[int](1)
	isEmpty := hashTable.isEmpty()

	if !reflect.DeepEqual(isEmpty, true) {
		t.Errorf("%v != %v", isEmpty, true)
	}

	hashTable.Set("a", 1)
	isEmptyAfterSet := hashTable.isEmpty()

	if !reflect.DeepEqual(isEmptyAfterSet, false) {
		t.Errorf("%v != %v", isEmptyAfterSet, false)
	}
}
