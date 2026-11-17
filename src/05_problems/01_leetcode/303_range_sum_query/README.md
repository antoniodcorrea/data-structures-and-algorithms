# 303 Range Sum Query - Immutable

https://leetcode.com/problems/range-sum-query-immutable/description/?envType=problem-list-v2&envId=prefix-sum

Given an integer array `nums`, handle multiple queries of the following type:

1. Calculate the sum of the elements of `nums` between indices `left` and `right` inclusive where `left <= right`.

Implement the `NumArray` class:

- `NumArray(int[] nums)` Initializes the object with the integer array `nums`.
- `int sumRange(int left, int right)` Returns the sum of the elements of nums between indices `left` and `right`
  inclusive (i.e.: `nums[left] + nums[left + 1] + ... + nums[right]`).

### Example:

    NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
    numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
    numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

### Constraints:

- `1 <= nums.length <= 104`
- `-105 <= nums[i] <= 105`
- `0 <= left <= right < nums.length`
- At most `10⁴` calls will be made to `sumRange`.
