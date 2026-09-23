# Stack

Dynamic linear data structure following a Last-In-First-Out (LIFO) principle: the last item added is the first to be removed.

Can be implemented with an array or a linked list.
For simplicity, we’ll implement an array-based stack.

## Pseudocode

```
CREATE_STACK ()
  storage = []
```

```
PUSH (value)
  add item to storage

  return STACK
```

```
POP ()
  remove last item as ITEM from storage

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
  return last item of storage
```

## Explanation

- A stack has five methods:
  - Push: adds an item to the top of the stack. Returns the stack.
  - Pop: removes the top item from the stack and returns it.
  - Is empty: checks if the stack is empty.
  - Length: gets the number of items in the stack.
  - Peek: returns the top item without removing it.

## Characteristics

Unlike queues, both adding and removing items from the top of a stack in an array-based implementation are efficient —O(1)— because no shifting is required.

A linked list-based stack behaves similarly, with constant-time operations for both push and pop as well.

### Operations

| Operation | Time Complexity |
| --------- | --------------- |
| Push      | O(1)            |
| Pop       | O(1)            |
| Is empty  | O(1)            |
| Length    | O(1)            |
| Peek      | O(1)            |
