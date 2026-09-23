# Linked list

Dynamic data structure consisting of nodes, where each node contains a value and a pointer to the next node.
Allows efficient insertions and deletions without requiring contiguous memory allocation.

## Pseudocode

```
CREATE_LINKED_LIST (value)
  RETURN {
    value: value,
    next: NULL
  }
```

```
APPEND (head, value)
  current = head;

  WHILE (current.next IS NOT NULL) {
    current = current.next;
  }

  current.next = { value, next: NULL };

  RETURN head;
```

```
PREPEND (head, value)
  RETURN {
    value,
    next: head,
  }
```

```
REMOVE (head, value)
  IF (head.value IS value) {
    RETURN head.next;
  }

  current = head;

  WHILE (current.next IS NOT NULL AND current.next.value IS NOT value) {
    current = current.next;
  }

  IF (current.next IS NOT NULL) {
    current.next = current.next.next;

    RETURN head;
  }

  RETURN head;
```

```
FIND (head, value)
  current = head;

  while (current.next IS NOT NULL) {
    current = current.next;

    IF (current.value IS value) {
      RETURN true;
    }
  }

  RETURN false;
```

## Explanation

- A linked list is a collection of nodes, where each node contains a value and a pointer to the next node.
- The head is the starting node of the list.
- The list can dynamically grow or shrink by inserting or deleting nodes.
- Unlike arrays, linked lists do not require contiguous memory and allow efficient insertion and deletion.

## Characteristics

### Operation Time Complexity

| Operation         | Time Complexity |
| ----------------- | --------------- |
| Insert at Head    | O(1)            |
| Insert at Tail    | O(n)            |
| Delete a Node     | O(n)            |
| Search for a Node | O(n)            |
| Traversal         | O(n)            |
