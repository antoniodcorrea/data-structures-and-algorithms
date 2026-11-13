# Sliding Window

Technique for processing contiguous ranges —subarrays/substrings— by keeping a "window" that moves across the data.
Instead of recomputing from scratch, you update the window when it slides —add the new item, remove the old one—.
This turns many brute-force `O(n * k)` scans into `O(n)` solutions.

## Pseudocode

### Fixed-size window (size = `k`) — e.g., max sum of any subarray of length `k`

```
SLIDING_WINDOW_FIXED(A, k):
  n = length(A)
  if k > n: return "invalid"
  
  acc_window = accumulate first k elements of A     # initialize accumulator window 
  best = acc_window                                 # initialize best option with initial value

  for right from k to n - 1:
    acc_window += A[right]                          # add entering element
    acc_window -= A[right - k]                      # remove leaving element
    best = UPDATE_FOLLOWING_PROBLEM_REQUIREMENTS

  return best
```

### Variable-size window (grow + shrink until condition holds)

Common for "smallest/longest subarray satisfying X".

```
SLIDING_WINDOW_VARIABLE(A, condition):
  left = 0
  right = 0
  acc_window = 0                                      # state accumulator window
  best = Infinity

  for right from 0 to n - 1:
    add A[left] to acc_window                         # include new right value into accumulator window 

    while state complies with condition:
      best = UPDATE_FOLLOWING_PROBLEM_REQUIREMENTS
      remove A[left] from acc_window                  # remove left value from accumulator window
      left += 1

  return best
```

## Explanation

- Keep two indices, `start` and `end`, marking the current window.
- Fixed-size: move both ends together; update the window by adding one element and removing one.
- Variable-size: expand `end` to include more elements; shrink `start` while the condition is violated (or to optimize
  the answer).
- The key idea: each element is added and removed at most once, so total work is linear.

## Time Complexity

- Time: `O(n)`, each index advances at most `n` times.
- Space:
  - Fixed-size: `O(1)`.
  - Variable-size: depends on what you track (e.g., a hash map for counts): `O(σ)` up to `O(n)`.

## Example

Problem: Max sum of any subarray of length `k = 3`.

Input:
`A = [2, 1, 5, 1, 3, 2]`, `k = 3`

Execution Steps:

```
Initial window (first 3): sum = 2 + 1 + 5 = 8   → best = 8

Slide 1: add A[3]=1, remove A[0]=2 → sum = 8 + 1 - 2 = 7   → best = 8
Slide 2: add A[4]=3, remove A[1]=1 → sum = 7 + 3 - 1 = 9   → best = 9
Slide 3: add A[5]=2, remove A[2]=5 → sum = 9 + 2 - 5 = 6   → best = 9
```

Output: `9` (from subarray `[5, 1, 3]`)

## When to Use

- Problems about contiguous subarrays/substrings.
- "Max/Min/Count/Length of subarray that satisfies condition X.”
- Examples: max sum of size `k`, smallest subarray with sum ≥ `S`, longest substring without repeats, number of
  subarrays with ≤ `K` distinct elements.

## Problems

- [2461_maximum_sum_of_distinct_subarrays_with_length_k](../../05_problems/2461_maximum_sum_of_distinct_subarrays_with_length_k)
- [209_minimum_size_subarray_sum](../../05_problems/209_minimum_size_subarray_sum)
