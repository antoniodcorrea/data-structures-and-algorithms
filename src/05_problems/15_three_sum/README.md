# 16 3Sum Closest

https://leetcode.com/problems/3sum-closest/

Given an integer array `nums` and an integer `target`, find three integers in `nums` such that the sum is closest to
`target`.
Return the sum of the three integers. You may assume that each input would have exactly one solution.

### Example 1:

- Input: `nums = [-1, 2, 1, -4]`, `target = 1`
- Output: `2`

Explanation:

- The sum that is closest to the target is `2` (`-1 + 2 + 1 = 2`).

### Example 2:

- Input: `nums = [0, 0, 0]`, `target = 1`
- Output: `0`

Explanation:

- The only possible sum is `0` (`0 + 0 + 0 = 0`), which is closest to `1`.

### Example 3:

- Input: `nums = [0, 1, 2]`, `target = 0`
- Output: `3`

Explanation:

- The closest sum is `3` (`0 + 1 + 2 = 3`).

Constraints:

- `3 <= nums.length <= 500`
- `-1000 <= nums[i] <= 1000`
- `-10^4 <= target <= 10^4`
