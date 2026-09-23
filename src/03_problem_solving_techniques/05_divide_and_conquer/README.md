# Divide and conquer

Recursively breaks down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly.

For example, given an array [2, 4, 6], we want to sum up all its items.

We need to cover these two issues:

- The base case.
- The procedure to break down the problem into smaller steps.

The base case here would be a single item array, which cannot be summed up anymore, and thus should return its value.
The procedure to break down the problem would be a recursive function that breaks down the problem into smaller steps.

## Pseudocode

```
SUM_ARRAY_ITEMS(array):
  IF LENGTH(array) == 1:
    RETURN array[0]

  head ← array[0]
  tail ← array[1 to end]

  RETURN head + SUM_ARRAY_ITEMS(tail)
```
