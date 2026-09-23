# Merge Sort

Divide-and-conquer sorting algorithm that recursively splits an array into smaller parts, sorts them, and merges them back together.
Its efficiency is consistent across all input sizes.
Ordering is produced in the merging phase.

## Pseudocode

```
MERGE_SORT(A):
  if length of A ≤ 1:
    return A

  left_half = MERGE_SORT([A₁, ..., A(n/2)])
  right_half = MERGE_SORT([A(n/2) + 1, ..., Aₙ];])

  return MERGE(left_half, right_half)

MERGE(left, right):
  sorted = []

  while left is not empty and right is not empty:
    if left[0] ≤ right[0]:
      append left[0] to sorted
      remove left[0] from left
    else:
      append right[0] to sorted
      remove right[0] from right
  append all remaining elements of left to sorted
  append all remaining elements of right to sorted

  return sorted
```

## Explanation

The array is divided into two halves until each sub-array contains at most one element.
Then, the sorted sub-arrays are merged by comparing elements and arranging them in order.

## Time complexity

- Best case (already sorted): `O(n log n)`
- Average case: `O(n log n)`
- Worst case: `O(n log n)`

## Example

### Input:

`[8, 7, 6, 5, 4, 3, 2, 1]`

### Execution Steps:

```
[8, 7, 6, 5, 4, 3, 2, 1]

[8, 7, 6, 5]  [4, 3, 2, 1]

[8, 7]  [6, 5]  [4, 3]  [2, 1]

[8] [7] [6] [5] [4] [3] [2] [1]

[7, 8]  [5, 6]  [3, 4]  [1, 2]

[5, 6, 7, 8]  [1, 2, 3, 4]

[1, 2, 3, 4, 5, 6, 7, 8]
```

### Output:

`[1, 2, 3, 4, 5, 6, 7, 8]`
