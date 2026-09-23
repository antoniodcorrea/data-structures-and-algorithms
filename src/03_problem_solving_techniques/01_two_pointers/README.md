# Two Pointers

Technique that uses two pointers to scan a sequence.
Pointers can start at opposite ends and move toward each other, or move in the same direction.
It avoids nested loops, often reducing `O(n²)` to `O(n)`, with `O(1)` extra space.

## Pseudocode

### Opposite-ends (sorted array) — find two numbers that sum to `target`

```
TWO_SUM_SORTED(A, target):
  left = 0
  right = length(A) - 1

  while left < right:
    s = A[left] + A[right]
    if s == target:
      return (left, right)           # or the values (A[left], A[right])
    if s < target:
      left += 1                      # need a bigger sum
    else:
      right -= 1                     # need a smaller sum

  return "not found"
```

### Same-direction — remove duplicates in-place from a sorted array

```
REMOVE_DUPLICATES_SORTED(A):
  n = length(A)
  if n == 0: return 0

  write = 1
  for read from 1 to n-1:
    if A[read] != A[write - 1]:
      A[write] = A[read]
      write += 1

  return write    # length of the array's unique prefix
```

## Explanation

- Opposite-ends works best on sorted data: compare endpoints, move the pointer that helps you get closer to the goal, shrinking the search space each step.
- Same-direction tracks a slow (write) and fast (read) pointer to filter, compress, or partition data in one pass.
- Can also be used to merge two sorted arrays, check palindromes, or skip/compare characters in strings.

## Time Complexity

- Time: `O(n)` (each pointer moves at most `n` times). If you must sort first: `O(n log n)` for sorting + `O(n)` for the scan.
- Space: `O(1)` extra space (in-place), unless problem needs auxiliary structures.

## Example

Problem: Find two numbers in a sorted array that sum to `11`.

Input:
`A = [1, 2, 3, 4, 6, 7, 8, 9]`, `target = 11`

Execution Steps:

```
left=0 (1), right=7 (9): sum=10 < 11  → move left → left=1
left=1 (2), right=7 (9): sum=11 == 11 → found
```

Output:
Indices `(1, 7)` or values `(2, 9)`.

## When to Use

- Arrays/strings where the question involves order or distance between elements.
- Problems like: two-sum on sorted arrays, remove duplicates, merge two sorted lists, check palindrome, move zeros, partition by predicate.

## Problems

- [Container With Most Water](../../04_problems/11_container_most_water/)
