# 18 4Sum

https://leetcode.com/problems/4sum/

Given an integer array `nums` and an integer `target`, return all unique quadruplets `[a, b, c, d]` such that
`a + b + c + d == target`.

The solution set must not contain duplicate quadruplets. Return the answer in **any order**.

### Example 1:

- Input: `nums = [1, 0, -1, 0, -2, 2]`, `target = 0`
- Output: `[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]`

### Example 2:

- Input: `nums = [2, 2, 2, 2, 2]`, `target = 8`
- Output: `[[2, 2, 2, 2]]`

### Example 3:

- Input: `nums = [0, 0, 0, 0]`, `target = 0`
- Output: `[[0, 0, 0, 0]]`

Constraints:

- `1 <= nums.length <= 200`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
