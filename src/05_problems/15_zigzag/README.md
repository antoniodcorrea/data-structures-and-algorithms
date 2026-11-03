# 15 ZigZag

https://community.topcoder.com/stat?c=problem_statement&pm=1259

A sequence of numbers is called a _zig-zag sequence_ if the differences between successive numbers strictly alternate
between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with
fewer than two elements is trivially a zig-zag sequence.

For example, `1,7,4,9,2,5` is a zig-zag sequence because the differences `(6,-3,5,-7,3)` are alternately positive and
negative. In contrast, `1,4,7,2,5` and `1,7,4,5,5` are _not_ zig-zag sequences, the first because its first two
differences are positive and the second because its last difference is zero.

Given a sequence of integers, `sequence`, return the length of the longest subsequence of `sequence` that is a zig-zag
sequence. A subsequence is obtained by deleting some number of elements (possibly zero) from the original sequence,
leaving the remaining elements in their original order.

### Example 1:

- Input: `sequence = [1, 7, 4, 9, 2, 5]`
- Output: `6`

Explanation: the entire sequence is a zig-zag sequence.

### Example 2:

- Input: `sequence = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]`
- Output: `7`

Explanation: there are several subsequences that achieve this length. One is `1, 17, 10, 13, 10, 16, 8`.

### Example 3:

- Input: `sequence = [44]`
- Output: `1`

### Example 4:

- Input: `sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9]`
- Output: `2`

Constraints:

- `1 <= sequence.length <= 50`
- `1 <= sequence[i] <= 1000`
