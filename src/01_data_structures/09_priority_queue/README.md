# Priority Queue

## Description

Abstract data type where the first item to be removed is the one with the highest priority, regardless of the order of
insertion.
There are two types:

- Min priority queue: the smallest value is removed first.
- Max priority queue: the greatest value is removed first.

A priority queue defines which operations are available, not how data is stored. It is typically implemented with
a [heap](../06_tree/02_heap/README.md).

## Pseudocode

```
CREATE_PRIORITY_QUEUE ()
  items = []
```

```
ENQUEUE (value)
  append value to items
  SIFT_UP(last index of items)
```

```
DEQUEUE ()
  if items is empty:
    return None

  SWAP first item with last item
  remove last item from items as MIN
  SIFT_DOWN(0)

  return MIN
```

```
FRONT ()
  if items is empty:
    return None

  return first item of items
```

```
IS_EMPTY ()
  return size of items == 0
```

```
SIZE ()
  return size of items
```

```
SIFT_UP (index)
  parent = (index - 1) // 2

  if index > 0 and items[index] < items[parent]:
    SWAP items[index] with items[parent]
    SIFT_UP(parent)
```

```
SIFT_DOWN (index)
  left = 2 * index + 1
  right = 2 * index + 2
  smallest = index

  if left < size of items and items[left] < items[smallest]:
    smallest = left
  if right < size of items and items[right] < items[smallest]:
    smallest = right

  if smallest != index:
    SWAP items[index] with items[smallest]
    SIFT_DOWN(smallest)
```

## Explanation

- **Enqueue:** adds a value at the end and moves it up until its parent is lesser or equal.
- **Dequeue:** removes and returns the smallest value. The last value takes its place and moves down until its children
  are greater or equal.
- **Front:** returns the smallest value without removing it.
- **Is empty:** checks if the queue is empty.
- **Size:** returns the amount of values in the queue.

## Characteristics

### Operations

| Operation | Time Complexity |
|-----------|-----------------|
| Enqueue   | O(log n)        |
| Dequeue   | O(log n)        |
| Front     | O(1)            |
| Is empty  | O(1)            |
| Size      | O(1)            |

### Space Complexity

- O (n) to store the values.
