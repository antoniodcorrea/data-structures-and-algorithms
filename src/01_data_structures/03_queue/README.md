# Queue

Dynamic linear data structure following First-In-First-Out (FIFO) principle: first item added is the first to be removed.

Can be implemented with an array or with a linked list, being the latter more performant.

For sake of simplicity we will implement an array-based queue.

## Pseudocode

```
CREATE_QUEUE ()
  storage = []
```

```
ENQUEUE (value)
  add item to storage

  return QUEUE
```

```
DEQUEUE ()
  remove first item as ITEM from storage

  return ITEM
```

```
LENGTH ()
  return length of storage
```

```
IS_EMPTY ()
  return length of storage == 0
```

```
PEEK ()
  return first item of storage
```

## Explanation

- A queue has five methods:
  - Enqueue: returns queue.
  - Dequeue: returns dequeued item.
  - Is empty: check if queue is empty.
  - Length: get amount of items in queue.
  - Peek: returns first item from queue without dequeuing it

## Characteristics

Linked list-based queues are more performant than array-based queues. The reason is that arrays are stored in memory contiguous locations. So, when dequeuing, all subsequent elements need to be shifted, which is a costly operation —O(n)—. With linked list-based queues this operation will have a time complexity of O(1).

Therefore, for large queues or applications with strict performance needs, a linked list–based queue is usually more suitable.

### Operations

#### Array based

| Operation | Time Complexity |
| --------- | --------------- |
| Enqueue   | O(1)            |
| Dequeue   | O(n)            |
| Is empty  | O(1)            |
| Length    | O(1)            |
| Peek      | O(1)            |

#### Linked-list based

| Operation | Time Complexity |
| --------- | --------------- |
| Enqueue   | O(1)            |
| Dequeue   | O(1)            |
| Is empty  | O(1)            |
| Length    | O(1)            |
| Peek      | O(1)            |
