# 904. Fruit Into Baskets

https://leetcode.com/problems/fruit-into-baskets/

You are given an integer array `fruits` where `fruits[i]` represents the type of fruit on the `i`-th tree. You have *
*two baskets**, and each basket can only hold **one type** of fruit. Starting from any tree, you must pick **exactly one
fruit from each tree** while moving to the right until you can no longer continue (i.e., you encounter a third type).

Return the **maximum number of fruits** you can pick.

### Example 1:

- Input: `fruits = [1, 2, 1]`
- Output: `3`

Explanation: Pick from trees `[1, 2, 1]` (two types total), total = `3`.

### Example 2:

- Input: `fruits = [0, 1, 2, 2]`
- Output: `3`

Explanation: Start at index 1 and pick `[1, 2, 2]`, total = `3`.

### Example 3:

- Input: `fruits = [1, 2, 3, 2, 2]`
- Output: `4`

Explanation: Start at index 2 and pick `[3, 2, 2]` or start at 1 and pick `[2, 3, 2, 2]`, total = `4`.

Constraints:

- `1 <= fruits.length <= 10^5`
- `0 <= fruits[i] < 10^5`
